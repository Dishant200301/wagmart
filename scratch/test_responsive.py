import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        
        # 1. Mobile (390px)
        page_mobile = await browser.new_page(viewport={'width': 390, 'height': 844})
        await page_mobile.goto('http://localhost:4173/#blog', wait_until='networkidle')
        await page_mobile.locator('#blog').scroll_into_view_if_needed()
        await page_mobile.wait_for_timeout(500)
        await page_mobile.screenshot(path='scratch/responsive_mobile_390.png')
        
        # 2. Tablet (768px)
        page_tablet = await browser.new_page(viewport={'width': 768, 'height': 1024})
        await page_tablet.goto('http://localhost:4173/#blog', wait_until='networkidle')
        await page_tablet.locator('#blog').scroll_into_view_if_needed()
        await page_tablet.wait_for_timeout(500)
        await page_tablet.screenshot(path='scratch/responsive_tablet_768.png')
        
        # 3. Test clicking a blog card to verify modal opens
        first_card = page_tablet.locator('#blog article').first
        await first_card.click()
        await page_tablet.wait_for_timeout(500)
        modal = page_tablet.locator('[role="dialog"]')
        is_visible = await modal.is_visible()
        print('Modal visible after clicking card:', is_visible)
        await page_tablet.screenshot(path='scratch/modal_open_test.png')
        
        await browser.close()
        print('All tests completed successfully!')

asyncio.run(run())
