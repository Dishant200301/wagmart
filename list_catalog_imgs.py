import os
from PIL import Image

for i in range(1, 84):
    fname = f'catalog_img_{i:02d}.jpg' if i < 10 else f'catalog_img_{i}.jpg'
    # check both formats
    p1 = os.path.join('public/catalog', f'catalog_img_{i:02d}.jpg')
    p2 = os.path.join('public/catalog', f'catalog_img_{i}.jpg')
    p = p1 if os.path.exists(p1) else (p2 if os.path.exists(p2) else None)
    if p:
        im = Image.open(p)
        print(f"{os.path.basename(p)}: size={im.size}")
