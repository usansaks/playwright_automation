import {test, expect} from '@playwright/test';

test.describe('Login form',()=>{
    test('validate navigating to OpenCart page and click to search icon', async ({page})=>{
        await page.goto("https://en.wikipedia.org/wiki/OpenCart");
        await expect(page).toHaveTitle("OpenCart - Wikipedia");
        await page.locator(`//button[normalize-space()='Search']`).click();
    });
    test('user enters valid username and valid password', async ({page})=>{
        await page.goto(`https://opensource-demo.orangehrmlive.com/web/index.php`);
        await expect(page).toHaveTitle("OrangeHRM");
        await page.locator(`input[name="username"]`).fill('Admin');
        await page.locator(`input[name="username"]`).fill('admin123');
        await page.getByRole('button',{name: /login/i}).click();
    });
    test('user enters valid username and invalid password', async ({page})=>{
        await page.goto("https://en.wikipedia.org/wiki/OpenCart");
    
        await expect(page).toHaveTitle("OpenCart - Wikipedia");
    });
    test('user enters invalid username and valid password', async ({page})=>{
        await page.goto("https://en.wikipedia.org/wiki/OpenCart");
    
        await expect(page).toHaveTitle("OpenCart - Wikipedia");
    });
})

test.describe('OpenCart Login details',()=>{
    test('validate login with valid username and valid password',async({page})=>{
        await page.goto(`https://demo.nopcommerce.com/login?returnUrl=%2F`);
        await page.getByLabel('Email').fill('jerin@jr.com');
        await page.getByLabel('Password').fill('jerin12345');
        await page.getByRole('button' ,{name: /log in/i}).click();
    });
    test('validate login with invalid username and valid password',async({page})=>{
        await page.goto(`https://admin-demo.nopcommerce.com/`);
        await page.getByLabel('Email').fill('ad@yourstore.com');
        await page.getByLabel('Password').fill('admin');
        await page.getByRole('button' ,{name: /log in/i}).click();
    });
})