
import re
import urllib.request
import urllib.error
import ssl
import sys

# Bypass SSL verification for simple checking
ssl._create_default_https_context = ssl._create_unverified_context

def check_images(file_path):
    print(f"Checking images in {file_path}...")
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to find dishes
    dish_pattern = re.compile(r"\{.*?id:\s*'([^']+)'.*?photo:\s*'([^']*)'.*?categoryId:\s*'([^']+)'.*?\}")
    category_pattern = re.compile(r"\{.*?id:\s*'([^']+)'.*?cover:\s*'([^']*)'.*?\}")

    dishes = dish_pattern.findall(content)
    categories = category_pattern.findall(content)
    
    print(f"Found {len(dishes)} dishes and {len(categories)} categories.")
    
    broken_links = []
    missing_photos = []

    report_lines = []

    # Check Categories
    print("Checking Categories...")
    for cat_id, cover_url in categories:
        if not cover_url:
            msg = f"[MISSING] Category '{cat_id}' has no cover image."
            print(msg)
            missing_photos.append(msg)
            continue
            
        try:
            req = urllib.request.Request(cover_url, method='HEAD')
            urllib.request.urlopen(req, timeout=5)
        except Exception as e:
            msg = f"[BROKEN] Category '{cat_id}': {cover_url} ({e})"
            print(msg)
            broken_links.append(msg)

    # Check Dishes
    print("Checking Dishes...")
    for dish_id, photo_url, category_id in dishes:
        if category_id == 'soft-drinks':
            continue
            
        if not photo_url:
            msg = f"[MISSING] Dish '{dish_id}' (Category: {category_id}) has no photo."
            print(msg)
            missing_photos.append(msg)
            continue
            
        try:
            req = urllib.request.Request(photo_url, method='HEAD')
            urllib.request.urlopen(req, timeout=5)
        except Exception as e:
            try:
                req = urllib.request.Request(photo_url, method='GET')
                urllib.request.urlopen(req, timeout=5)
            except Exception as e2:
                msg = f"[BROKEN] Dish '{dish_id}' (Category: {category_id}): {photo_url} ({e2})"
                print(msg)
                broken_links.append(msg)

    with open("image_audit_report.txt", "w", encoding="utf-8") as f:
        f.write("IMAGE AUDIT REPORT\n")
        f.write("===================\n")
        if not broken_links and not missing_photos:
            f.write("All images are valid!\n")
        else:
            if broken_links:
                f.write(f"\nFOUND {len(broken_links)} BROKEN LINKS:\n")
                for link in broken_links:
                    f.write(link + "\n")
            if missing_photos:
                f.write(f"\nFOUND {len(missing_photos)} MISSING PHOTOS:\n")
                for photo in missing_photos:
                    f.write(photo + "\n")
            
if __name__ == "__main__":
    check_images(r"C:\_Dev\Phuket_Bot\webapp\src\api\dishes.ts")
