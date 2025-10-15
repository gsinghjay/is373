#!/usr/bin/env python3
"""Test script for Gemini image generation"""

import os
from dotenv import load_dotenv
from google import genai
from PIL import Image
from io import BytesIO

# Load API key
load_dotenv()
api_key = os.getenv("GEMINI_API_KEY")
print(f"API Key loaded: {api_key[:10]}...")

# Initialize client
client = genai.Client(api_key=api_key)
print("✓ Client initialized")

# Try to generate a single test image
prompt = "A simple red circle on a white background"
print(f"\nGenerating test image with prompt: '{prompt}'")

try:
    response = client.models.generate_content(
        model="gemini-2.5-flash-image",
        contents=[prompt]
    )

    print("✓ API call succeeded")
    print(f"Response type: {type(response)}")
    print(f"Has candidates: {hasattr(response, 'candidates')}")

    if hasattr(response, 'candidates') and response.candidates:
        print(f"Number of candidates: {len(response.candidates)}")

        # Extract image
        image_parts = [
            part.inline_data.data
            for part in response.candidates[0].content.parts
            if hasattr(part, 'inline_data') and part.inline_data
        ]

        if image_parts:
            print(f"✓ Found {len(image_parts)} image(s)")
            image = Image.open(BytesIO(image_parts[0]))
            image.save('test_output.png')
            print(f"✓ Saved test image as test_output.png ({image.size})")
        else:
            print("✗ No image data in response")
            print(f"Response structure: {response}")
    else:
        print("✗ No candidates in response")

except Exception as e:
    print(f"✗ Error: {e}")
    import traceback
    traceback.print_exc()
