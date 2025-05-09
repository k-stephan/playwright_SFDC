const{test,expect}=require('@playwright/test');
const { LoginPage } = require('../pages/mars.js');
import username from '../test-data/data.json';

test.skip('Valid URL test',async ({page})=>
    {
        const loginPage=new LoginPage(page);
        await loginPage.clickAutocomplete();
        await loginPage.clickCheckbox();


    });

test('Data Drivem URL test',async ({page})=>
    {
            const loginPage=new LoginPage(page);
            for (const user of username)
            {
                 await loginPage.DataDriven(user.username);
            }
    
    
    });
