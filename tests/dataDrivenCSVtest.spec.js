import {test,expect} from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

const csvPath='testdata/data.csv';
const csvData=fs.readFileSync(csvPath,'utf-8');
const records=parse(csvData,{columns:true,skip_empty_lines:true});

for(const data of records)
  {
    test.describe("Login Data driven Test from CSV file",()=>
    {
      test(`login test of "${data.email}" and "${data.password}"`, async({page})=>{
        await page.goto("https://demowebshop.tricentis.com/login");
        // fill the input element
        await page.locator('#Email').fill(data.email);
        await page.locator('#Password').fill(data.password);
        await page.locator('input[value="Log in"]').click();
        if(data.validity.toLowerCase()==='valid')
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