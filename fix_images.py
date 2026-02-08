
import re

# List of valid URLs from Unsplash harvest
NEW_URLS = [
  "https://images.unsplash.com/photo-1756551399655-207569477340?fm=jpg&q=60&w=3000&ixid=M3wxMjA3fDB8MXx0b3BpY3x8eGpQUjRobGtCR0F8fHx8fDJ8fDE3NzA1MjI5MTd8&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1758979690131-11e2aa0b142b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1758380742009-163a0deee80e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1758221055840-be5dfa05699d?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1758221054864-8c8737821bfd?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1757752463419-4f0788b2b544?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1757519740947-eef07a74c4ab?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1757450296755-f875c2dc80bf?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1756551399655-207569477340?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1756260853158-a63f71b4bff6?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1756523854214-9191eb30eb1e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1756260897470-f5b9f4af80c7?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1756292024340-a7ca44eb8e5d?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1756395080881-a6e83b582509?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1756395194652-96bc660d0a50?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1756334830608-32905156d724?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1756383254040-d19dbc1d4cb1?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1756260897483-7cfc313b7534?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1756300217545-b9860909057b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1755605983542-a525a0975a25?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1755004609214-c252674df1ca?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1754992599453-01e809722aa1?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1754836717974-d43bd9c798ae?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1754559109273-23aee0d85471?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1754047166273-a3cc44c1cf50?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1754047167199-7867304392c6?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1752764181807-a05e8fc3c767?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1753991532697-9053a0a200ea?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1754242203534-b5c19d2272fe?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1754325233917-d9bfd5441e61?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1754325264731-16180f674fa6?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1754008411196-890c4cf83dc9?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1753722295237-ab0c231eef95?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1753722157947-8a50f04a9309?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1753795350160-6ade01b1d657?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1753623716198-e07dddefcd1a?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1753623712508-0359fa78ffee?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1753644552542-6010baf263a6?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1753644551456-ce4e9a95dd98?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1750665645109-6b2b84bf5abd?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1753148325600-fb9970489b9c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1753148325598-cf24166a1f37?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1752865751508-aa2a76f45c23?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1752253509987-f92fd1cf4a78?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1750665645100-fa2c08eace8e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1751563721808-3b81940b88f7?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1751688294012-a0825f600283?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1751369934560-580c550f5694?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1749243276324-fa70d203a85b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1751298467221-bb1b0d298101?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1751308759385-4d4db2d2ce40?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1750665645103-04819e2bf2f3?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1751168673172-6bd41d1abcd8?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1751033390130-cdc5a6082089?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1750316096690-be3da4ccb338?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1750437709423-4b7e3e49c21b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1750601499168-304f923e39d4?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1748772040383-d317a641fa92?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1750096117912-269e94f16a13?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1749243277265-e2d1703d821e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1749243277337-3f955d06cc64?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1749497707556-e327c84556a9?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1749137997054-d556a40051aa?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1749145584776-32db00047168?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1747932947443-5270519b13f0?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1749243274780-1f3ef5488ee7?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1749252070359-cc85c0ce01a9?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1744690098635-5d18f684d371?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1747694946205-958563849629?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1747807112168-9ad28f773507?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0"
]

def replace_broken_links(file_path):
    print(f"Replacing broken links in {file_path}...")
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    new_content = content
    
    # Read broken links from report
    broken_items = []
    with open('image_audit_report.txt', 'r', encoding='utf-8') as f:
        for line in f:
            # Matches: [BROKEN] Dish 'id' ...: url (...)
            match = re.search(r"\[BROKEN\] (?:Dish|Category) '([^']+)'", line)
            if match:
                broken_items.append(match.group(1))

    print(f"Found {len(broken_items)} broken items in report.")
    
    if len(broken_items) > len(NEW_URLS):
        print(f"WARNING: Not enough new URLs! Need {len(broken_items)}, have {len(NEW_URLS)}")
        
    for i, item_id in enumerate(broken_items):
        if i >= len(NEW_URLS):
            break
            
        new_url = NEW_URLS[i]
        
        # Regex to find the photo/cover for this item
        # We search specifically for the line with this ID to replace its photo
        
        # Pattern for dishes: { id: 'item_id', ... photo: 'OLD_URL' ... }
        # Only replace if photo: '...' matches a url or string
        
        # We need to be careful not to replace other things.
        # We'll construct a regex that targets the specific ID line.
        
        # We replace the photo val.
        # Searching for "{ id: 'item_id', ... photo: '...'" is hard with regex dotall across line.
        # But we know each dish is on one line.
        
        # Pattern: exact ID match
        # r"({\s*id:\s*'" + re.escape(item_id) + r"'.*?photo:\s*')([^']*)(')"
        
        pattern = r"({.*?id:\s*'" + re.escape(item_id) + r"'.*?photo:\s*')([^']*)(')"
        # Also cover: cover: '...'
        pattern_cover = r"({.*?id:\s*'" + re.escape(item_id) + r"'.*?cover:\s*')([^']*)(')"
        
        if re.search(pattern, new_content):
             new_content = re.sub(pattern, r"\1" + new_url + r"\3", new_content)
             print(f"Updated photo for {item_id}")
        elif re.search(pattern_cover, new_content):
             new_content = re.sub(pattern_cover, r"\1" + new_url + r"\3", new_content)
             print(f"Updated cover for {item_id}")
        else:
            print(f"Could not find entry for {item_id} in {file_path}")

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
        
if __name__ == "__main__":
    replace_broken_links(r"C:\_Dev\Phuket_Bot\webapp\src\api\dishes.ts")
    replace_broken_links(r"C:\_Dev\Phuket_Bot\server\src\db\schema.ts")

