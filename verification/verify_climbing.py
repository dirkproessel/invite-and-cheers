from playwright.sync_api import Page, expect, sync_playwright
import time

def verify_climbing_app(page: Page):
    # Test 1: Query Param
    print("Testing Query Param...")
    page.goto("http://localhost:3000/#/?guest=Jules")
    # Wait for the content to load
    expect(page.get_by_text("ACHTUNG")).to_be_visible()
    expect(page.get_by_text("Hey Jules!")).to_be_visible()

    # Take screenshot of Query Param case
    page.screenshot(path="verification/verification_query.png")
    print("Screenshot verification_query.png taken.")

    # Test 2: Path Param
    print("Testing Path Param...")
    page.goto("http://localhost:3000/#/Oscar")
    expect(page.get_by_text("Hey Oscar!")).to_be_visible()

    # Take screenshot of Path Param case
    page.screenshot(path="verification/verification_path.png")
    print("Screenshot verification_path.png taken.")

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
