import {test,expect} from '@playwright/test';
import fs from 'fs';
import path from 'path';
import XLSX from 'xlsx';

//read the data from the excel file
// const workbook = XLSX.readFile(path.resolve(__dirname, 'data.xlsx'));
// const sheetName = workbook.SheetNames[0];
// const worksheet = workbook.Sheets[sheetName];
// const data = XLSX.utils.sheet_to_json(worksheet);
const excelPath='testdata/data.xlsx';
const workbook=XLSX.readFile(path.resolve(__dirname, excelPath));
const sheetName=workbook.SheetNames[0];
const worksheet=workbook.Sheets[sheetName];
const loginData=XLSX.utils.sheet_to_json(worksheet);
console.log(loginData);


for(const {email,password,validity} of loginData)
{
  test.describe("Login Data driven Test from JSON file",()=>
  {
    test(`login test of ${email} and ${password}`, async({page})=>{
      await page.goto("https://demowebshop.tricentis.com/login");
      // fill the input element
      await page.locator('#Email').fill(email);
      await page.locator('#Password').fill(password);
      await page.locator('input[value="Log in"]').click();
      if(validity.toLowerCase()==='valid')
      {
        //Assert logout link is visible
        await expect(await page.locator('a[href="/logout"]')).toBeVisible({timeout:5000});
      }
      else{
        await expect(await page.locator('.valid-summary-errors')).toBeVisible({timeout:5000});
        await expect(page).toHaveURL('https://demowebshop.tricentis.com/login');
      }
    })
  })
}

