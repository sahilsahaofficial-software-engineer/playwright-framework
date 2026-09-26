import {test,expect} from '@playwright/test';
test('has title',async({page})=>{
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  console.log(await page.viewportSize().width);
  console.log(await page.viewportSize().height);
  await expect(page).toHaveTitle('OrangeHRM');

  const userName=await page.getByPlaceholder('Username');
  await userName.fill('Admin');
  const password=await page.getByPlaceholder('Password');
  await password.fill('admin123');
  await page.waitForLoadState('networkidle');
  await password.screenshot({path:'screenshot_as_proof/password.png'});
  await page.getByRole('button',{name:'Login'}).click();
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  await page.waitForTimeout(5000);
  await page.screenshot({path:'screenshot_as_proof/screenshot.png',fullPage:true});
  await page.getByAltText('profile picture').first().click();
  await page.getByText('Logout').click();
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');const errorMessage=await page.locator("xpath=//p[contains(@class,'alert-content-text')]").textContent();
  console.log(errorMessage);
  await page.locator("xpath=//p[contains(@class,'alert-content-text')]").screenshot({path:'screenshot_as_proof/errorMessage.png'});
  expect(errorMessage.includes("Invalid")).toBeTruthy();

});


test('Another test for DropDown Handling',async({page})=>{
 


});

// How to maximize the browser window in playwright
// await page.setViewportSize({width:1920,height:1080});
