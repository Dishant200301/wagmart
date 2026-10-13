import fitz
import os

os.makedirs('scratch', exist_ok=True)
doc = fitz.open('downloaded_assets/Wagmart Product Catalog.pdf')

for page_num in range(len(doc)):
    page = doc[page_num]
    pix = page.get_pixmap(dpi=150)
    out_path = f'scratch/page_{page_num+1}.png'
    pix.save(out_path)
    print(f"Saved {out_path} ({pix.width}x{pix.height})")
