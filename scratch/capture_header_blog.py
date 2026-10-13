import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1440, 'height': 900})
        await page.goto('http://localhost:4173/#blog', wait_until='networkidle')
        await page.wait_for_timeout(1000)
        
        # Take full viewport screenshot with sticky header and blog section
        await page.screenshot(path='scratch/header_and_blog_view.png')
        
        # Inspect first card bounding box and last card bounding box
        cards = page.locator('#blog article')
        card_0_box = await cards.nth(0).bounding_box()
        card_3_box = await cards.nth(3).bounding_box()
        print('Card 0 box:', card_0_box)
        print('Card 3 box:', card_3_box)
        
        # Also inspect nav link 'about' and 'contact us' bounding boxes
        nav_about = page.locator('nav a:has-text("about")')
        nav_about_box = await nav_about.bounding_box()
        cart_btn = page.locator('button[aria-label="View shopping cart"]')
        cart_box = await cart_btn.bounding_box()
        print('Nav About box:', nav_about_box)
        print('Cart btn box:', cart_box)
        
        await browser.close()
        print('Screenshot captured successfully!')

asyncio.run(run())
