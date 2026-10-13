import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1440, 'height': 850})
        await page.goto('http://localhost:4173/#blog', wait_until='networkidle')
        await page.locator('#blog').scroll_into_view_if_needed()
        await page.wait_for_timeout(500)
        
        # Click the first blog card
        card_0 = page.locator('#blog article').first
        await card_0.click()
        await page.wait_for_timeout(500)
        
        # Verify no modal dialog is open
        dialogs = page.locator('[role="dialog"]')
        count = await dialogs.count()
        print('Active dialogs after card click:', count)
        assert count == 0, 'Expected no modal dialog to be open!'
        
        await browser.close()
        print('Verified successfully: Clicking blog card does NOT open details modal!')

asyncio.run(run())
