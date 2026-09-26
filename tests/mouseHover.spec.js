import {test,expect} from '@playwright/test';
test('Mouse Hover test',async({page})=>{
  await page.goto('https://www.amazon.in/');
  await expect(page).toHaveURL('https://www.amazon.in/');
  const options=await page.locator("xpath=//a[@id='nav-link-accountList']");
  const optionCount=await options.count();
  for(let i=0;i<=optionCount;i++)
  {
    const optionText=await options.nth(i).textContent();
    console.log('Option Number '+i+'is :${i}'+optionText);

  }

  await page.locator("xpath=//a[@id='nav-link-accountList']").fill("Sahil Saha");
  await page.locator("xpath=//a[@id='nav-link-accountList']").hover();
  await page.waitForTimeout(2000);
  

   
})