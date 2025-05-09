import {test,expect}  from '@playwright/test';

/**
 *@typedef {import('@playwright/test').page} page
 */

class Newwindow
{

    /**
     * 
     * @param {page} page 
     */


    constructor(page)
    {
        this.page=page;

    }

    async multiwindow()
    {
        await this.page.goto('/');  
        await this.page.locator("(//a[.='Switch Window'])[2]").click();
        const [newPage]=await Promise.all([
        this.page.context().waitForEvent('page'),
        this.page.locator("//*[@id='new-tab-button']").click()

        ]);
        await newPage.waitForLoadState();
        await newPage.locator("//a[.='Enabled and disabled elements' and @class='btn btn-lg']").click();
        return newPage;

    }




}
module.exports={ Newwindow };