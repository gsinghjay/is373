# RangeFit Image Generation Guide

Automated AI image generation for your RangeFit website using Google's Gemini 2.5 Flash Image (aka "Nano Banana").

## What This Does

The `generate_images.py` script automatically:
1. Scans your content files (Markdown and YAML) for image requirements
2. Extracts image paths and alt text (which serve as generation prompts)
3. Uses Google's Gemini AI to generate images from those prompts
4. Saves generated images to your `static/images/` directory
5. Reports on what was generated, skipped, or failed

## Prerequisites

### 1. Google AI Studio API Key

You need a Gemini API key with billing enabled:

1. Go to [Google AI Studio](https://aistudio.google.com/apikey)
2. Create a new API key (or use existing)
3. **Enable billing** on your Google Cloud project
   - The free tier has 0 quota for image generation
   - Image generation costs ~$0.039 per image (1290 tokens × $30/1M tokens)
4. Copy your API key

### 2. Python Environment

- Python 3.9 or higher
- Virtual environment (recommended)

## Installation

### Step 1: Install Dependencies

```bash
# Activate your virtual environment
source venv/bin/activate  # On macOS/Linux
# or
venv\Scripts\activate  # On Windows

# Install required packages
pip install google-genai Pillow python-dotenv
```

### Step 2: Configure API Key

Create a `.env` file in your project root:

```bash
# .env
GEMINI_API_KEY="your-api-key-here"
```

**Important:** The `.env` file is already in `.gitignore` - never commit your API key to version control!

## Usage

### Basic Usage

Generate only missing images (won't overwrite existing):

```bash
python generate_images.py
```

### Force Regenerate All Images

Regenerate all images, even if they already exist:

```bash
python generate_images.py --force
```

### Example Output

```
🍌 Gemini 2.5 Flash Image (Nano Banana) initialized successfully.

🔍 Scanning content files for image requirements...
✅ Found 4 unique images to generate.

🎨 Starting image generation process...

Processing: images/hero/rangefit-hero.jpg
   - Prompt: 'Relatable woman in workout clothes smiling while doing a simple exercise at home'
   - Size: 1792x1024
   - Generated image size: (1024, 1024)
   - Resizing from (1024, 1024) to (1792, 1024)
   - SUCCESS: Saved to /path/to/static/images/hero/rangefit-hero.jpg

--- Generation Summary ---
✅ Generated: 4 images
⏩ Skipped: 0 images
--------------------------
```

## How It Works

### 1. Content Scanning

The script scans all files in `content/` for image requirements in this format:

**YAML files:**
```yaml
reasons:
  - title: "Community Support"
    image: "images/about/community.jpg"
    image_alt: "A diverse group of people supporting each other"
```

**Markdown files:**
```markdown
image: "images/hero/main.jpg"
image_alt: "Happy woman exercising at home"
```

### 2. Prompt Extraction

The `image_alt` text becomes the AI generation prompt. Write descriptive alt text like:
- ✅ "Relatable woman in workout clothes smiling while doing a simple exercise at home"
- ❌ "Woman exercising" (too vague)

### 3. Image Generation

- Uses Google's `gemini-2.5-flash-image` model
- Hero images (in `/hero/` folder) are generated at 1792×1024
- All other images are generated at 1024×1024
- Images are saved as PNG format

### 4. Automatic Resizing

If the AI generates a different size than requested, the script automatically resizes to match your specifications.

## After Generation

### Optimize to WebP (Optional)

Convert to WebP for better performance:

```bash
make optimize
```

Or keep as JPG (current setup):

```bash
python build.py
```

### Rebuild Your Site

Copy images to your `docs/` directory:

```bash
python build.py
```

## Advanced Configuration

### Change Image Model

Edit `generate_images.py` line 18:

```python
self.model = "gemini-2.5-flash-image"  # Default
# Or try:
# self.model = "gemini-2.0-flash-exp-image-generation"
```

### Adjust Image Sizes

Edit the `generate_images()` method around line 101:

```python
# Current: Hero=1792x1024, Others=1024x1024
size = (1792, 1024) if 'hero' in str(output_path) else (1024, 1024)

# Change to your preferences:
size = (1920, 1080) if 'hero' in str(output_path) else (800, 600)
```

### Custom Content Directory

```bash
python generate_images.py --source path/to/your/content
```

## Troubleshooting

### "RESOURCE_EXHAUSTED" Error

**Problem:** API quota exceeded

**Solutions:**
1. **Enable billing** - Free tier has 0 quota for image generation
2. **Create new API key** after enabling billing
3. Wait for quota to reset (daily limits)

### "No image data in response"

**Problem:** Model returned text instead of image

**Solutions:**
1. Make prompts more specific and descriptive
2. Avoid prompts that might violate content policies
3. Try a different model (see Advanced Configuration)

### Images Look Wrong

**Solutions:**
1. Improve your `image_alt` prompts with more detail
2. Regenerate with `--force` flag
3. Edit prompts in your content files and regenerate

### Import Error: "cannot import name 'genai'"

**Problem:** Wrong package installed

**Solution:**
```bash
pip uninstall google-generativeai
pip install google-genai
```

## Cost Management

### Pricing (as of 2025)
- **Model:** gemini-2.5-flash-image
- **Cost:** $30 per 1 million output tokens
- **Per Image:** ~1290 tokens = **$0.039 per image**

### Cost Estimation

For this project (4 images):
- **4 images × $0.039 = ~$0.16 total**

### Best Practices
1. Use `--force` sparingly (only regenerate when needed)
2. Test prompts with a single image first
3. Review generated images before regenerating all
4. Set up billing alerts in Google Cloud Console

## File Structure

```
your-project/
├── .env                          # API key (DO NOT COMMIT)
├── generate_images.py            # Image generation script
├── content/                      # Content files with image requirements
│   ├── data/*.yaml              # YAML with image paths
│   └── pages/*.md               # Markdown with image paths
├── static/images/               # Generated images saved here
│   ├── hero/
│   ├── about/
│   └── ...
└── docs/images/                 # Deployed images (after build)
```

## Integration with Build Process

### Manual Workflow

```bash
# 1. Generate images
python generate_images.py

# 2. Build site (copies images to docs/)
python build.py

# 3. View site
python -m http.server 8000 -d docs
```

### Makefile Integration (Future)

Add to your `Makefile`:

```makefile
generate-images:
	python generate_images.py

build-with-images: generate-images build
	@echo "✅ Site built with fresh images"
```

## Support & Resources

- **Gemini API Docs:** https://ai.google.dev/gemini-api/docs/image-generation
- **Pricing:** https://ai.google.dev/pricing
- **Google AI Studio:** https://aistudio.google.com
- **Rate Limits:** https://ai.google.dev/gemini-api/docs/rate-limits

## Tips for Great Results

### Writing Effective Prompts (image_alt)

**Good prompts are:**
- Specific about the scene
- Include mood/emotion
- Describe style (realistic, illustration, etc.)
- Mention key visual elements

**Examples:**

❌ **Bad:** "Person working out"

✅ **Good:** "Relatable woman in her 30s wearing comfortable workout clothes, smiling while doing a simple bodyweight exercise in a bright, cozy living room"

❌ **Bad:** "App interface"

✅ **Good:** "Clean, modern mobile app interface on a phone screen showing a simple energy level graph with teal and green colors, minimal design"

### Content Policy

Avoid prompts that:
- Reference sensitive events or symbols
- Include celebrity names or copyrighted characters
- Contain medical imagery or procedures
- Are overly generic (model may refuse)

## License & Attribution

Generated images are created by Google's Gemini AI. Check Google's terms of service for commercial usage rights and attribution requirements.

---

**Questions?** Review the troubleshooting section or check the Gemini API documentation.
