from playwright.sync_api import sync_playwright

chrome_path = r'C:\Program Files\Google\Chrome\Application\chrome.exe'

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=chrome_path, headless=True)
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    page.goto('http://localhost:5174')
    page.wait_for_timeout(1500)

    # 1. Categories
    page.locator('#categories').scroll_into_view_if_needed()
    page.wait_for_timeout(400)
    page.screenshot(path='scratch/badge_categories.png')

    # 2. Best Sellers
    page.locator('#shop').scroll_into_view_if_needed()
    page.wait_for_timeout(400)
    page.screenshot(path='scratch/badge_shop.png')

    # 3. Why Choose / About
    page.locator('#about').scroll_into_view_if_needed()
    page.wait_for_timeout(400)
    page.screenshot(path='scratch/badge_about.png')

    # 4. Pet Reels
    page.locator('#stories').scroll_into_view_if_needed()
    page.wait_for_timeout(400)
    page.screenshot(path='scratch/badge_reels.png')

    # 5. Reviews
    page.locator('#reviews').scroll_into_view_if_needed()
    page.wait_for_timeout(400)
    page.screenshot(path='scratch/badge_reviews.png')

    # 6. Blog
    page.locator('#blog').scroll_into_view_if_needed()
    page.wait_for_timeout(400)
    page.screenshot(path='scratch/badge_blog.png')

    # 7. FAQs
    page.locator('#faq').scroll_into_view_if_needed()
    page.wait_for_timeout(400)
    page.screenshot(path='scratch/badge_faq.png')

    browser.close()
    print('All badge screenshots captured successfully!')
