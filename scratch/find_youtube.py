import urllib.request
import urllib.parse
import re

queries = [
    'cute golden retriever eating food shorts',
    'cat grooming slicker brush shorts',
    'cute puppy playing rope toy shorts',
    'cute cat sleeping in plush donut bed shorts',
    'cute dog car ride travel window shorts'
]

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
results = {}

for q in queries:
    url = f'https://www.youtube.com/results?search_query={urllib.parse.quote(q)}'
    req = urllib.request.Request(url, headers=headers)
    try:
        html = urllib.request.urlopen(req, timeout=6).read().decode('utf-8', errors='ignore')
        ids = list(dict.fromkeys(re.findall(r'"videoId":"([a-zA-Z0-9_-]{11})"', html)))
        results[q] = ids[:4]
        print(f'{q}: {ids[:4]}')
    except Exception as e:
        print(f'{q} error: {e}')
