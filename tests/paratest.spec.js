import {test,expect} from '@playwright/test';
const loginTestData=[
  ["laura.taylor1234@gmail.com","test123","valid"],
  ["invalid@gmail.com","test321","invalid"],
  ["validuser@gmail.com","testxyz","invalid"],
  [" "," ","invalid"],
];
for( const [email,password,validity] of loginTestData)
{
  test.describe()
}
