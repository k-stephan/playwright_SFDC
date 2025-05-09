import { test, expect } from '@playwright/test';

/**
 * @typedef {import('@playwright/test').Page} Page
 */

class LoginPage
{
    /**
   * @param {Page} page
     * 
     */

    constructor(page)
    {
        this.page=page;
        
    }

  
    async clickAutocomplete()
    {
        //await this.page.goto('https://formy-project.herokuapp.com/');
        await this.page.goto('/');
        await this.page.locator("//*[..='Autocomplete']").click();
        await expect(this.page.locator("(//*[.='Autocomplete'])[1]")).toHaveText('Autocomplete');
        await this.page.locator("//*[@id='autocomplete']").fill('New York');
    }
    async clickCheckbox()
    {
        //await this.page.goto('https://formy-project.herokuapp.com/');
        await this.page.goto('/');
        await this.page.locator("//*[..='Checkbox']").click();
        await this.page.locator("//*[@id='checkbox-2']").check();
        await this.page.screenshot({ path: 'Screenshots/example.png', fullPage: true });
        
    }

    async DataDriven(username)
    {
        await this.page.goto('/form');
        await this.page.locator("//*[@id='first-name']").fill(username);
        await this.page.locator("//*[@role='button']").click();
        await expect(this.page.locator("//*[contains(text(),'successfully submitted')]")).toContainText('successfully submitted');


    }

}

module.exports = { LoginPage };