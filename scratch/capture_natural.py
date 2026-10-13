from playwright.sync_api import sync_playwright

chrome_path = r'C:\Program Files\Google\Chrome\Application\chrome.exe'

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=chrome_path, headless=True)
    page = browser.new_page(viewport={'width': 1440, 'height': 960})
    page.goto('http://localhost:5174')
    page.wait_for_timeout(1000)

    # Instant scroll to #blog
    page.evaluate("document.getElementById('blog').scrollIntoView({ behavior: 'instant', block: 'start' })")
    page.wait_for_timeout(600)

    page.screenshot(path='scratch/blog_in_view_1440.png')
    print('Natural view with header at top captured')

    browser.close()
