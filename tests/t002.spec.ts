import {test,expect} from '@playwright/test'
import exp from 'constants';
test.describe('validate sauce login functionality',()=>{
    let baseurl = `https://www.saucedemo.com/`;
    let username = `input[name="user-name"]`;
    let password = `input[id="password"]`;
    let login = `input[class="submit-button btn_action"]`;
    test('validate with valid username and valid password',async({page})=>{
        await page.goto(baseurl);
        await page.locator(username).fill('standard_user');
        await page.locator(password).fill('secret_sauce');
        await page.locator(login).click();
        await expect(page.locator(`div[class="app_logo"]`)).toBeVisible();
    });
    test('validate with valid username and invalid password',async({page})=>{
        await page.goto(baseurl);
        await page.locator(username).fill('standard_user');
        await page.locator(password).fill('standard_user');
        await page.locator(login).click();
        await expect(page.getByRole('heading',{name: ' password do not match'})).toBeVisible();
    });
    test('validate with invalid username and valid password',async({page})=>{
        await page.goto(baseurl);
        await page.locator(username).fill('user');
        await page.locator(password).fill('secret_sauce');
        await page.locator(login).click();
        await expect(page.getByRole('heading',{name: ' password do not match'})).toBeVisible();
    });
    test('validate with invalid username and invalid password',async({page})=>{
        await page.goto(baseurl);
        await page.locator(username).fill('user');
        await page.locator(password).fill('standard_user');
        await page.locator(login).click();
        await expect(page.getByRole('heading',{name: ' password do not match'})).toBeVisible();
    });
    test('validate with valid username and empty password',async({page})=>{
        await page.goto(baseurl);
        await page.locator(username).fill('standard_user');
        await page.locator(login).click();
        await expect(page.getByRole('heading',{name: ' password is required'})).toBeVisible();
    });
    test('validate with empty username and valid password',async({page})=>{
        await page.goto(baseurl);
        await page.locator(password).fill('secret_sauce');
        await page.locator(login).click();
        await expect(page.getByRole('heading',{name: 'username is required'})).toBeVisible();
    });
})

test.describe('validating sauce login2',()=>{
    let baseurl = `https://www.saucedemo.com/`;
    let username = `input[name="user-name"]`;
    let password = `input[id="password"]`;
    let login = `input[class="submit-button btn_action"]`;

    test.beforeEach(async({page})=>{
        await page.goto(baseurl);
    })
    test('validate with valid username and valid password',async({page})=>{
        await page.locator(username).fill('standard_user');
        await page.locator(password).fill('secret_sauce');
        await page.locator(login).click();
        await expect(page.locator(`div[class="app_logo"]`)).toBeVisible();
    });
    test('validate with valid username and invalid password',async({page})=>{
        await page.locator(username).fill('standard_user');
        await page.locator(password).fill('standard_user');
        await page.locator(login).click();
        await expect(page.getByRole('heading',{name: ' password do not match'})).toBeVisible();
    });
    test('validate with invalid username and valid password',async({page})=>{
        await page.locator(username).fill('user');
        await page.locator(password).fill('secret_sauce');
        await page.locator(login).click();
        await expect(page.getByRole('heading',{name: ' password do not match'})).toBeVisible();
    });
    test('validate with invalid username and invalid password',async({page})=>{
        await page.locator(username).fill('user');
        await page.locator(password).fill('standard_user');
        await page.locator(login).click();
        await expect(page.getByRole('heading',{name: ' password do not match'})).toBeVisible();
    });
    test('validate with valid username and empty password',async({page})=>{
        await page.locator(username).fill('standard_user');
        await page.locator(login).click();
        await expect(page.getByRole('heading',{name: ' password is required'})).toBeVisible();
    });
    test('validate with empty username and valid password',async({page})=>{
        await page.locator(password).fill('secret_sauce');
        await page.locator(login).click();
        await expect(page.getByRole('heading',{name: 'username is required'})).toBeVisible();
    });
})