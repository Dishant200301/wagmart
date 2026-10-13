from playwright.sync_api import sync_playwright

chrome_path = r'C:\Program Files\Google\Chrome\Application\chrome.exe'

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=chrome_path, headless=True)

    # Desktop 1440
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    page.goto('http://localhost:5174')
    page.wait_for_timeout(1500)
    page.locator('#contact').screenshot(path='scratch/clean_desktop_1440.png')
    print('Desktop 1440 captured')

    # Laptop 1024
    page.set_viewport_size({'width': 1024, 'height': 800})
    page.wait_for_timeout(400)
    page.locator('#contact').screenshot(path='scratch/clean_laptop_1024.png')
    print('Laptop 1024 captured')

    # Tablet 768
    page.set_viewport_size({'width': 768, 'height': 900})
    page.wait_for_timeout(400)
    page.locator('#contact').screenshot(path='scratch/clean_tablet_768.png')
    print('Tablet 768 captured')

    # Mobile 390
    page.set_viewport_size({'width': 390, 'height': 844})
    page.wait_for_timeout(400)
    page.locator('#contact').screenshot(path='scratch/clean_mobile_390.png')
    print('Mobile 390 captured')

    browser.close()
    print('All clean screenshots captured successfully!')
