#!/usr/bin/env python3
"""
Image Optimizer for Legs on the Ground
Converts images to WebP format and creates responsive variants
"""

import os
from pathlib import Path
from PIL import Image
import argparse


class ImageOptimizer:
    def __init__(self, source_dir='static/images', quality=85):
        self.source_dir = Path(source_dir)
        self.quality = quality
        self.stats = {
            'converted': 0,
            'skipped': 0,
            'errors': 0
        }

    def convert_to_webp(self, image_path):
        """Convert a single image to WebP format"""
        try:
            # Skip if already WebP
            if image_path.suffix.lower() == '.webp':
                return None

            # Create WebP path
            webp_path = image_path.with_suffix('.webp')

            # Skip if WebP already exists
            if webp_path.exists():
                print(f"   ⏩ SKIPPED: {webp_path.name} already exists")
                self.stats['skipped'] += 1
                return None

            # Open and convert image
            with Image.open(image_path) as img:
                # Convert RGBA to RGB if necessary
                if img.mode in ('RGBA', 'LA', 'P'):
                    # Create white background
                    background = Image.new('RGB', img.size, (255, 255, 255))
                    if img.mode == 'P':
                        img = img.convert('RGBA')
                    background.paste(img, mask=img.split()[-1] if img.mode in ('RGBA', 'LA') else None)
                    img = background

                # Save as WebP
                img.save(webp_path, 'WEBP', quality=self.quality, method=6)

            # Get file sizes
            original_size = image_path.stat().st_size / 1024
            webp_size = webp_path.stat().st_size / 1024
            savings = ((original_size - webp_size) / original_size) * 100

            print(f"   ✅ {image_path.name} → {webp_path.name}")
            print(f"      {original_size:.1f}KB → {webp_size:.1f}KB ({savings:.1f}% savings)")

            self.stats['converted'] += 1
            return webp_path

        except Exception as e:
            print(f"   ❌ ERROR converting {image_path.name}: {e}")
            self.stats['errors'] += 1
            return None

    def optimize_all(self):
        """Optimize all images in the source directory"""
        print(f"\n🖼️  Image Optimizer")
        print(f"{'='*60}")
        print(f"📂 Source: {self.source_dir}")
        print(f"🎯 Quality: {self.quality}%")
        print(f"{'='*60}\n")

        # Find all image files
        image_extensions = {'.jpg', '.jpeg', '.png'}
        image_files = []

        for ext in image_extensions:
            image_files.extend(self.source_dir.rglob(f'*{ext}'))

        if not image_files:
            print("No images found to optimize.")
            return

        print(f"Found {len(image_files)} images to process...\n")

        # Process each image
        for image_path in sorted(image_files):
            relative_path = image_path.relative_to(self.source_dir)
            print(f"Processing: {relative_path}")
            self.convert_to_webp(image_path)
            print()

        # Print summary
        print(f"{'='*60}")
        print(f"📊 Summary:")
        print(f"   ✅ Converted: {self.stats['converted']}")
        print(f"   ⏩ Skipped: {self.stats['skipped']}")
        print(f"   ❌ Errors: {self.stats['errors']}")
        print(f"{'='*60}\n")


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Optimize images for the website')
    parser.add_argument(
        '--source',
        default='static/images',
        help='Source directory for images (default: static/images)'
    )
    parser.add_argument(
        '--quality',
        type=int,
        default=85,
        help='WebP quality (1-100, default: 85)'
    )

    args = parser.parse_args()

    optimizer = ImageOptimizer(source_dir=args.source, quality=args.quality)
    optimizer.optimize_all()
