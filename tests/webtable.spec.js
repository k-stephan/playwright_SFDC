const { test, expect } = require("playwright/test")
import fetch from 'node-fetch'; // Ensure node-fetch is installed


test.skip('',async ({page})=>
{
    //await page.goto("https://www.google.com/");
    //await page.waitForTimeout(3000);
    //await page.locator("//*[@name='q']").fill("w3schools webtable");
   // await page.waitForTimeout(3000);
   // await page.getByRole('button', { name: 'Stay signed out' }).click();
   await page.goto('https://www.w3schools.com/html/html_tables.asp', {
        timeout: 5000, // 60 seconds
         waitUntil: 'domcontentloaded' // or 'load'
    });
      await page.waitForSelector("//*[@id='customers']");
    //await page.keyboard.press('Enter');
    //await page.locator("//h3[.='HTML Tables']").click();
    const rows=await page.locator("//*[@id='customers']//tr").all();
    const expected="Francisco Chang";
    for(const row of rows)
    {
        const cols=await row.locator('td').allTextContents();
        if(cols.length>0)
        {
            console.log(`Company: ${cols[0]}, Contact: ${cols[1]}, Country: ${cols[2]}`);
            const actual=cols[1];
            if (actual==expected)
            {
                expect(actual).toBe(expected);
                break;

            }

        }

    }    

});

test('Links Concept',async({page})=>
{
    await page.goto("https://www.w3schools.com/js/default.asp",
    {   timeout:5000,
        waitUntil:"domcontentloaded"

    });
    const links=await page.locator("a[target='_blank']").all();
    console.log('Href Links Count:'+links);
    const counts=await page.locator("a[target='_blank']").count();
    console.log("Count of Links:"+counts);


    for(const link of links)
        {
            const href=await link.getAttribute('href');
            console.log(href);

            const response=await fetch(href);
            if(response.status>400)
            {
                console.log("URL Invalid");

            }

            else
            {
                console.log("Valid URL");

            }
            


        }


});


test.only('Desired Menu Selection',async({page})=>{

    await page.goto("https://www.w3schools.com/html/default.asp",
        { timeout:5000,
            waitUntil:'domcontentloaded'
        });

    const menus=await page.locator("div#subtopnav a ").all();
    for(const menu of menus)
    {
        const title=await menu.getAttribute("title");
         console.log(title);

    }



});
