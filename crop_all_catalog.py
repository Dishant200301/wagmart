from PIL import Image
import os

os.makedirs('public/catalog/products', exist_ok=True)

# Grid parameters based on 1241x1755 page rendering
col_bounds = [
    (132, 378),
    (383, 629),
    (634, 880),
    (885, 1131)
]

row_bounds = [
    (121, 388),
    (393, 676),
    (681, 964),
    (969, 1252),
    (1257, 1540)
]

for p in range(1, 6):
    page_img_path = f'scratch/page_{p}.png'
    if not os.path.exists(page_img_path):
        continue
    page_img = Image.open(page_img_path)
    
    for r_idx, (y1, y2) in enumerate(row_bounds):
        for c_idx, (x1, x2) in enumerate(col_bounds):
            # Inner crop to avoid grid lines (2px margin)
            box = (x1 + 3, y1 + 3, x2 - 3, y2 - 3)
            cell = page_img.crop(box)
            
            # Save as item_p{p}_r{r+1}_c{c+1}.png
            out_name = f'item_p{p}_r{r_idx+1}_c{c_idx+1}.png'
            out_path = os.path.join('public/catalog/products', out_name)
            cell.save(out_path, 'PNG', optimize=True)

print("Successfully cropped and saved all 100 products from PDF catalog!")
