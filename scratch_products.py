with open('src/data/products.ts', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = re.findall(r"id:\s*'([^']+)',\s*name:\s*'([^']+)'(?:(?!image:).)*?category:\s*'([^']+)'(?:(?!image:).)*?image:\s*'([^']+)'", text, re.DOTALL)
print(f"Total parsed: {len(matches)}")
for i, m in enumerate(matches):
    print(f"{i+1}: {m[0]} | {m[1]} | {m[2]} | {m[3]}")
