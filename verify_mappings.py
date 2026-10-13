import os
from PIL import Image

# Let's inspect the files in public/catalog/products for our 12 products:
mappings = [
    ("prod-auto-feeder", "Automatic Pet Feeder & Water Dispenser", "item_p4_r2_c4.png"),
    ("prod-grooming-glove", "Pet Grooming Glove", "item_p1_r1_c3.png"),
    ("prod-potty-spray", "Pet Potty Training Spray", "item_p4_r1_c1.png"),
    ("prod-cat-toy-set", "Interactive Cat Toy / Smart Ball", "item_p4_r3_c1.png"),
    ("prod-nail-clipper", "Pet Nail Clipper Set", "item_p2_r3_c4.png"),
    ("prod-seat-cover", "Waterproof Pet Car Seat Cover", "item_p1_r3_c3.png"),
    ("prod-flying-disc", "Durable Rubber Flying Ring Disc", "item_p4_r3_c4.png"),
    ("prod-slow-feeder", "Silicone Slow Feeder Puzzle Mat", "item_p4_r1_c3.png"),
    ("prod-steam-brush", "Steaming Pet Grooming Brush", "item_p2_r3_c3.png"),
    ("prod-climbing-leash", "Heavy-Duty Braided Rope Leash", "item_p1_r1_c1.png"),
    ("prod-flea-collar", "Long-Lasting Flea & Tick Collar", "item_p3_r4_c2.png"),
    ("prod-travel-bottle", "Portable Pet Travel Water Bottle", "item_p4_r5_c3.png"),
]

for pid, name, img in mappings:
    p = os.path.join("public/catalog/products", img)
    if os.path.exists(p):
        im = Image.open(p)
        print(f"{pid}: {img} exists, size={im.size}")
    else:
        print(f"MISSING: {img}")
