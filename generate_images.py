import os
import re
import yaml
import argparse
from pathlib import Path
from dotenv import load_dotenv
from io import BytesIO
from PIL import Image
from google import genai


class ImageGenerator:
    def __init__(self, force_overwrite=False):
        self.project_root = Path(__file__).parent
        self.content_dir = self.project_root / 'content'
        self.output_dir = self.project_root / 'static/images'
        self.force = force_overwrite
        self.model = "gemini-2.5-flash-image"

        # Load API key from .env file
        load_dotenv()
        self.api_key = os.getenv("GEMINI_API_KEY")
        if not self.api_key:
            print("❌ ERROR: GEMINI_API_KEY not found in .env file.")
            print("Please create a .env file with your API key.")
            exit(1)

        # Initialize Gemini client
        os.environ["GEMINI_API_KEY"] = self.api_key
        self.client = genai.Client(api_key=self.api_key)
        print("🍌 Gemini 2.5 Flash Image (Nano Banana) initialized successfully.")

        self.image_requirements = {}

    def find_image_requirements(self):
        """Scan content files for image paths and alt text."""
        print("\n🔍 Scanning content files for image requirements...")

        # Regex to find image paths and alt text (handles inline comments)
        image_pattern = re.compile(r"image:\s*[\"']?(images/[^\"'#\n]+)[\"']?.*\n.*image_alt:\s*[\"']?([^\"'\n]+)[\"']?", re.DOTALL)

        # Scan Markdown files
        for md_file in self.content_dir.glob('**/*.md'):
            content = md_file.read_text()
            matches = image_pattern.finditer(content)
            for match in matches:
                path, alt_text = match.groups()
                self.image_requirements[path.strip()] = alt_text.strip()

        # Scan YAML files
        for yaml_file in self.content_dir.glob('**/*.yaml'):
            content = yaml.safe_load(yaml_file.read_text())
            self._parse_yaml_for_images(content)

        print(f"✅ Found {len(self.image_requirements)} unique images to generate.")

    def _parse_yaml_for_images(self, data):
        """Recursively search dictionaries and lists for image paths."""
        if isinstance(data, dict):
            if 'image' in data and 'image_alt' in data:
                path = data['image']
                if path.startswith('images/'):
                    self.image_requirements[path] = data['image_alt']
            for value in data.values():
                self._parse_yaml_for_images(value)
        elif isinstance(data, list):
            for item in data:
                self._parse_yaml_for_images(item)

    def generate_images(self):
        """Generate all required images."""
        if not self.image_requirements:
            print("No image requirements found. Run find_image_requirements() first.")
            return

        print("\n🎨 Starting image generation process...")

        generated_count = 0
        skipped_count = 0

        for rel_path_str, prompt in self.image_requirements.items():
            output_path = self.output_dir / Path(rel_path_str.replace('images/', ''))

            print(f"\nProcessing: {rel_path_str}")

            if output_path.exists() and not self.force:
                print("   - SKIPPED: Image already exists. Use --force to overwrite.")
                skipped_count += 1
                continue

            if not prompt:
                print("   - SKIPPED: No prompt found (image_alt is empty).")
                skipped_count += 1
                continue

            # Ensure the parent directory exists
            output_path.parent.mkdir(parents=True, exist_ok=True)

            print(f"   - Prompt: '{prompt}'")

            # Determine size (Hero images are usually wider)
            size = (1792, 1024) if 'hero' in str(output_path) else (1024, 1024)
            size_str = f"{size[0]}x{size[1]}"
            print(f"   - Size: {size_str}")

            try:
                # Generate the image using Gemini 2.5 Flash Image
                # Using exact syntax from official documentation
                response = self.client.models.generate_content(
                    model=self.model,
                    contents=[prompt]  # Contents should be a list
                )

                # Extract the generated image from response
                # Check if response has candidates
                if not response.candidates:
                    print(f"   - ERROR: No candidates in response")
                    continue

                # Extract image data from response
                image_parts = [
                    part.inline_data.data
                    for part in response.candidates[0].content.parts
                    if hasattr(part, 'inline_data') and part.inline_data
                ]

                if not image_parts:
                    print(f"   - ERROR: No image data in response")
                    # Print response for debugging
                    print(f"   - Response: {response}")
                    continue

                # Convert bytes to PIL Image
                image_data = Image.open(BytesIO(image_parts[0]))
                print(f"   - Generated image size: {image_data.size}")

                # Resize if needed to match requested size
                if image_data.size != size:
                    print(f"   - Resizing from {image_data.size} to {size}")
                    image_data = image_data.resize(size, Image.Resampling.LANCZOS)

                # Save the image
                image_data.save(output_path, "PNG")
                print(f"   - SUCCESS: Saved to {output_path}")
                generated_count += 1

            except Exception as e:
                error_msg = str(e)
                if "RESOURCE_EXHAUSTED" in error_msg or "quota" in error_msg.lower():
                    print(f"   - ERROR: API quota exceeded. This model may require a paid plan.")
                    print(f"   - Visit https://ai.google.dev/pricing to check pricing")
                else:
                    print(f"   - ERROR: Failed to generate image. {e}")
                    import traceback
                    traceback.print_exc()

        print("\n--- Generation Summary ---")
        print(f"✅ Generated: {generated_count} images")
        print(f"⏩ Skipped: {skipped_count} images")
        print("--------------------------")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Generate images for the RangeFit website.")
    parser.add_argument(
        '--force',
        action='store_true',
        help='Force overwrite of existing images.'
    )
    args = parser.parse_args()

    generator = ImageGenerator(force_overwrite=args.force)
    generator.find_image_requirements()
    generator.generate_images()
