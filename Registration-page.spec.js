import { test, expect } from '@playwright/test';

test('login page', async ({ page }) => {
  // Open the Website
  await page.goto('https://accstorefront.czzt37btqp-extraunit1-s1-public.model-t.cc.commerce.ondemand.com/en-sa');

  // Wait for the "Hi there!" text to be visible
  const hiThereText = await page.locator('//span[normalize-space()="Hi there!"]');
  await expect(hiThereText).toBeVisible();
  
  // Click on the navigation link
  await page.click("div.c_nav-main-bar-link span.c_nav-main-bar-link-prefix");

  // Click on "Log in or join eXtra"
  await page.click("//label[normalize-space()='Log in or join eXtra']");

  // Click on the register button
  await page.click("//a[@class='c_button c_button--wide c_button--primary']");

  // Fill the registration form
  await page.fill("input[id='register.firstName']", 'Najebaa');
  await page.fill("input[id='register.lastName']", 'Alhashim');
  // await page.click('#select2-registergender-container');
  // await page.click("//li[normalize-space()='Select your gender']");
  // Select the desired option from the dropdown
  // await page.click('//li[contains(text(), "Male")]');

  //   // Ensure there are 2 options in the gender dropdown
  //   const genderOptions = await page.locator('#select2-registergender-container option');
  //   await expect(genderOptions).toHaveCount(2);

  await page.fill("input[id='register.mobileNumber']", '558717449');
  await page.fill("input[id='register.email']", 'najebahashimalhashim11111111234444@g.com');
  await page.fill('#register_password', 'test1234');
  await page.fill("input[id='register.checkPwd']", 'test1234');

  // Click on the register button
  await page.getByRole('button', { name: 'Register' }).click();

  // Optional: Wait for some confirmation or success element to be visible
  // await page.waitForSelector('confirmation-selector', { state: 'visible' });
  await page.waitForTimeout(5000);

  // Make sure that the user name will be showing in the header of the homepage after success rejistration
  await expect(await page.locator("(//div[@class='c_nav-main-bar-link-details'])[3]")).toContainText('Najebaa!')

  console.log('......Done for testing the registration page......');
});
