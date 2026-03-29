

import { test, expect } from '@playwright/test';


test ('Fill in all deatils', async ({ page}) => {

await page.goto('https://demoqa.com/text-box')

await page.locator("input[placeholder='Full Name']").fill('test1')

await page.locator("input[placeholder='name@example.com']").fill('test1@gmail.com')  

await page.locator("textarea[placeholder='Current Address']").fill('123, RaymondStreet, IL')

await page.locator("#permanentAddress").fill('123, RaymondStreet, IL')

await page.locator('#submit').click()

await expect(page.locator("p#currentAddress")).toBeVisible({timeout : 15000})


})