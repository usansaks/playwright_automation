import {expect,test} from "@playwright/test";
import loginA1  from "../pageObject/login";
import * as data from "../fixture/test-data/login.json"

test.describe('validating sauce login2',()=>{
    // let baseurl = `https://www.saucedemo.com/`;
    
    // test.beforeEach(async({page})=>{
    //     await page.goto(baseurl);
    // })
    // test.afterEach(async({page})=>{
    //     await page.goto(baseurl);
    // })
    // test.beforeAll(async({page})=>{
    //     await page.goto(baseurl);
    // })
    // test.afterAll(async({page})=>{
    //     await page.goto(baseurl);
    // })
    test('validate with valid username and valid password',async({page})=>{
        const login = new loginA1(page);
        await login.gotoLoginPage();
        await login.login(data.correctData.username,data.errorData.password);
    });
    test('validate with valid username and invalid password',async({page})=>{
    });
    test('validate with invalid username and valid password',async({page})=>{
    });
    test('validate with invalid username and invalid password',async({page})=>{
    });
});