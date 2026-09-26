import {test,expect} from '@playwright/test';
test("Dropdown Test",async({page})=>{
   await page.goto("https://freelance-learn-automation.vercel.app/signup");
  await expect(page).toHaveURL('https://freelance-learn-automation.vercel.app/signup');
  const name=await page.getByPlaceholder('Name');
  await name.fill('Sahil Saha');
  const Email=await page.getByPlaceholder('Email');
  await Email.fill('sahil.saha@example.com');
  const password=await page.getByPlaceholder('Password');
  await password.fill('sahil@123');
  const interestCheckbox=await page.locator("xpath=//label[text()='MCP']");
  await interestCheckbox.check();
  // const genderRadioButton=await page.locator('#gender1');
  // await genderRadioButton.check();
  
  await page.locator("#state").selectOption({value:'West Bengal'});
  await page.waitForTimeout(2000);
  await page.waitForLoadState('networkidle');
  await page.screenshot({path:'screenshot_as_proof/dropdownHandling.png',fullPage:true});
  await page.locator("#hobbies").selectOption({value:'Swimming'});
  await page.waitForLoadState('networkidle');
  const dropDownValues=await page.locator('#state').textContent();
  console.log(dropDownValues);
  await page.waitForTimeout(2000);
  await expect(dropDownValues.includes("West Bengal")).toBeTruthy();

  await page.screenshot({path:'screenshot_as_proof/dropdownHandling.png',fullPage:true});
  const signUpButton=await page.getByRole('button',{name:'Sign Up'});
  await signUpButton.click();
  await expect(page).toHaveURL('https://freelance-learn-automation.vercel.app/login');
  

  const state=await page.$('#state');
  const allOptions=await state.$$('option');
  for(const option of allOptions){
    const optionValue=await option.getAttribute('value');
    const optionText=await option.textContent();
    console.log(`Option Value: ${optionValue}, Option Text: ${optionText}`);
  }
});
