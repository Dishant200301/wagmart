import fitz

doc = fitz.open('downloaded_assets/Wagmart Product Catalog.pdf')
print("Total pages in PDF:", len(doc))

for page_num in range(len(doc)):
    page = doc[page_num]
    text = page.get_text()
    print(f"\n================ PAGE {page_num+1} ================")
    print(text.strip()[:600])
    
    # Check text blocks
    blocks = page.get_text("blocks")
    print(f"Total blocks on page {page_num+1}: {len(blocks)}")
    for b in blocks[:15]:
        b_text = b[4].strip().replace('\n', ' ')
        if b_text and 'WAGMART' not in b_text and 'Contact' not in b_text:
            print(f"  bbox=({int(b[0])},{int(b[1])}) : {b_text}")
