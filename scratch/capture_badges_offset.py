from playwright.sync_api import sync_playwright

chrome_path = r'C:\Program Files\Google\Chrome\Application\chrome.exe'

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=chrome_path, headless=True)
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    page.goto('http://localhost:5174')
    page.wait_for_timeout(1500)

    # 5. Reviews with top offset
    page.evaluate("window.scrollTo(0, document.getElementById('reviews').offsetTop - 90)")
    page.wait_for_timeout(400)
    page.screenshot(path='scratch/badge_reviews_clean.png')

    # 6. Blog with top offset
    page.evaluate("window.scrollTo(0, document.getElementById('blog').offsetTop - 90)")
    page.wait_for_timeout(400)
    page.screenshot(path='scratch/badge_blog_clean.png')

    browser.close()
    print('Clean reviews and blog screenshots captured')
