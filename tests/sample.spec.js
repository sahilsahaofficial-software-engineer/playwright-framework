import {test,expect} from '@playwright/test';
test('My First Test',async({page})=>{
await page.goto('https://www.google.com/');
await expect(page).toHaveURL('https://www.google.com/');
await expect(page).toHaveTitle('Google');


});
test('My Second Test',async({page})=>{
await page.goto('https://www.google.com/');
await expect(page).toHaveURL('https://www.google.com/');
await expect(page).toHaveTitle('Google');
const url=await page.url();
const title=await page.title();
console.log(url);
console.log(title);
if(url==='https://www.google.com/' && title==='Google'){
  console.log("We are at the right place");
}
else{
  console.log("We are at the wrong place");
}

});
test('My Third Test',async({page})=>{
await page.goto('https://www.google.com/');
await expect(page).toHaveURL('https://www.google.com/');
await expect(page).toHaveTitle('Google');
});

test.only('FOcus on this testcase', async({page})=>{
  await page.goto("https://www.google.com/");
  await expect(page).toHaveURL('https://www.google.com/');
  await expect(page).toHaveTitle('Google');
});
test.skip("Kindly skip the testcase and we will check later", async({page})=>{
//skip the testcase

});