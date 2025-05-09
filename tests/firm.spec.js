import{test,expect} from '@playwright/test'

test.describe.serial('Shared session tests', () => {
    /** @type {import('@playwright/test').Page} */

  let page;

test.beforeAll(async ({browser})=>{

  const context=await browser.newContext();
  page=await context.newPage();

  await page.goto('https://formy-project.herokuapp.com/');



})


test('Form page login',async ()=>
  {
    await expect(page).toHaveTitle('Formy');


  })

  test('AutoComplete',async ()=>
    { 
      await page.locator("//*[..='Autocomplete']").click();
      await page.pause();
      await expect(page.locator("(//*[.='Autocomplete'])[1]")).toHaveText('Autocomplete');
      await page.locator("//*[@id='autocomplete']").fill('New York');
      await page.goBack();
      
    });

    test('Chedk Box',async()=>
      {

        await page.locator("//*[..='Checkbox']").click();
        await page.locator("//*[@id='checkbox-2']").check();
        await page.screenshot({ path: 'Screenshots/example.png', fullPage: true });
        await page.goBack();

      });


      test('Drop down',async()=>
        {
  
          await page.locator("//*[..='Dropdown']").click();
          await page.locator("//*[@id='dropdownMenuButton']").click();
          const options=await page.locator('.dropdown-menu').nth(1).allTextContents();
          console.log(options); // ['Option 1', 'Option 2', 'Option 3']
          await page.screenshot({ path: 'Screenshots/dropdown.png', fullPage: true });
          await page.goBack();
  
        });

        test('Modal',async()=>
          {
    
            await page.locator("//*[..='Modal']").click();
            await page.locator("//*[@id='modal-button']").click();

            const okButton = page.locator('.modal #close-button');
            await okButton.waitFor({ state: 'visible' });
            await page.screenshot({ path: 'Screenshots/popup1.png', fullPage: true });

            await okButton.click();

            await page.screenshot({ path: 'Screenshots/popup2.png', fullPage: true });
            //await page.pause();

            await page.goBack();
            expect(page.locator("//h1[.='Welcome to Formy']")).toHaveText("Welcome to Formy",{ timeout: 1000 });
          
          });


  });