import {test,expect} from '@playwright/test';

const searchItems =['laptop','Gift Cards','smartphone','monitor'];


// using loop statement for-each loop
// for(let item of searchItems){

// test(`Login test  with parameters for ${item}`,async({page})=>{
//   await page.goto('https://demowebshop.tricentis.com');
//   await page.locator('#small-searchterms').fill(item);
//   await page.locator("input[value='Search']").click();
//   await expect.soft(page.locator('h2 a').nth(0)).toContainText(item,{ignoreCase:true});

// });
// }

test.describe('Total Parameterized tests',async()=>{
  searchItems.forEach((item)=>
{
  test(`Login test  with parameters for ${item}`,async({page})=>{
  await page.goto('https://demowebshop.tricentis.com');
  await page.locator('#small-searchterms').fill(item);
  await page.locator("input[value='Search']").click();
  await expect.soft(page.locator('h2 a').nth(0)).toContainText(item,{ignoreCase:true});

});
});
// using for each function



});

