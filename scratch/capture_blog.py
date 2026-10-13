from playwright.sync_api import sync_playwright

chrome_path = r'C:\Program Files\Google\Chrome\Application\chrome.exe'

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=chrome_path, headless=True)

    # 1. Desktop 1440 - Blog Section
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    page.goto('http://localhost:5174')
    page.wait_for_timeout(1500)
    page.locator('#blog').scroll_into_view_if_needed()
    page.wait_for_timeout(600)
    page.locator('#blog').screenshot(path='scratch/blog_desktop_1440.png')
    print('Blog desktop 1440 captured')

    # 2. Card click -> Modal open
    page.locator('#blog article').first.click()
    page.wait_for_timeout(600)
    page.screenshot(path='scratch/blog_modal_opened.png')
    print('Blog modal captured')

    # Close modal
    page.keyboard.press('Escape')
    page.wait_for_timeout(400)

    # 3. Tablet 768 - Blog Section
    page.set_viewport_size({'width': 768, 'height': 1024})
    page.locator('#blog').scroll_into_view_if_needed()
    page.wait_for_timeout(400)
    page.locator('#blog').screenshot(path='scratch/blog_tablet_768.png')
    print('Blog tablet 768 captured')

    # 4. Mobile 390 - Blog Section
    page.set_viewport_size({'width': 390, 'height': 844})
    page.locator('#blog').scroll_into_view_if_needed()
    page.wait_for_timeout(400)
    page.locator('#blog').screenshot(path='scratch/blog_mobile_390.png')
    print('Blog mobile 390 captured')

    browser.close()
    print('All blog screenshots captured successfully!')
