const{test,expect}=require('@playwright/test');
const { Newwindow } = require('../pages/Newwindow.js');

test('multiwindow access', async ({page})=>
{
    const newwindow= new Newwindow (page);
    const newPage = await newwindow.multiwindow(); // ✅ store returned newPage
    await expect(newPage.locator("(//*[text()='Formy'])[2]")).toHaveText('Formy');


});