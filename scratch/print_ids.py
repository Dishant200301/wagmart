from playwright.sync_api import sync_playwright

chrome_path = r'C:\Program Files\Google\Chrome\Application\chrome.exe'

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=chrome_path, headless=True)
    page = browser.new_page()
    page.goto('http://localhost:5174')
    page.wait_for_timeout(1500)

    # Check for console errors
    ids = page.evaluate('Array.from(document.querySelectorAll("[id]")).map(el => el.id)')
    print('Rendered IDs:', ids)
    browser.close()
