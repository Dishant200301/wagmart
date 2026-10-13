import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 1440, "height": 850})
        await page.goto("http://localhost:4173/", wait_until="networkidle")
        await page.wait_for_timeout(500)
        
        # Click a wishlist button on best sellers
        wishlist_btn = page.locator("#shop button[aria-label^=Wishlist]").first
        await wishlist_btn.click()
        await page.wait_for_timeout(300)
        
        # Check if any toast exists in DOM
        toasts = page.locator(".fixed.bottom-5")
        count = await toasts.count()
        print("Toast element count:", count)
        assert count == 0, "Expected zero toast elements"
        
        await browser.close()
        print("Verified: Zero toast notifications on the website!")

asyncio.run(run())
