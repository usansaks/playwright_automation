import {expect,test} from "@playwright/test";
import loginA1  from "../pageObject/login";
import * as data from "../fixture/test-data/login.json"

let login: loginA1;
test.describe('validating sauce login',()=>{
    // test.afterEach(async({page})=>{
    // })
    // test.beforeAll(async({page})=>{
    // })
    // test.afterAll(async({page})=>{
    // })
    let login: loginA1;

    test.beforeEach(async({page})=>{
        login = new loginA1(page);
        await login.gotoLoginPage();
    })

    test('validate with valid username and valid password',async({page})=>{
        await login.loginSect(process.env.STANDARD_USERNAME!,process.env.STANDARD_PASSWORD!);
        await expect(page.locator(`div[class="app_logo"]`)).toBeVisible();
    });

    test('validate with valid username and invalid password',async({page})=>{
        await login.loginSect(process.env.STANDARD_USERNAME!,data.errorData.password);
        await expect(await login.getErrorMessage).toContainText("do not match");
    });

    test('validate with invalid username and valid password',async({page})=>{
        await login.loginSect(data.errorData.username,process.env.STANDARD_PASSWORD!);
        await expect(await login.getErrorMessage).toContainText("do not match");
    });

    test('validate with invalid username and invalid password',async({page})=>{
        await login.loginSect(data.errorData.username,data.errorData.password);
        await expect(await login.getErrorMessage).toContainText("do not match");
    });
    test('validate without username and  password',async({page})=>{
        await login.loginSect("","");
        await expect(await login.getErrorMessage).toContainText("required");
    });
});
