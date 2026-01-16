from playwright.sync_api import Page, expect, sync_playwright
import time

def verify_climbing_app(page: Page):
    # Test 1: Query Param
    print("Testing Query Param...")
    page.goto("http://localhost:3000/#/?guest=Jules")
    # Wait for the content to load
    expect(page.get_by_text("ACHTUNG")).to_be_visible()

    # Scroll down to show progress bar
    page.evaluate("window.scrollTo(0, document.body.scrollHeight / 2)")
    time.sleep(1) # Wait for scroll event and render

    # Take screenshot of Query Param case
    page.screenshot(path="verification/verification_query.png")
    print("Screenshot verification_query.png taken.")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_climbing_app(page)
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()
