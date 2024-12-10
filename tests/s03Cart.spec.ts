import {expect, test} from '@playwright/test';
import loginA1 from "../pageObject/login";
import productA1 from "../pageObject/products";
import cartA1 from "../pageObject/cart";
import * as data from "../fixture/test-data/login.json";

test.describe('Product functionality',()=>{

    let login: loginA1;
    let product: productA1;
    let cart: cartA1;
    test.beforeEach(async({page})=>{
        login = new loginA1(page);
        product = new productA1(page);
        cart = new cartA1(page);
        await login.gotoLoginPage();
        await login.loginSect(process.env.STANDARD_USERNAME!,process.env.STANDARD_PASSWORD!);
    })

    test('validate navigating to product page',async({page})=>{
        await page.context().clearCookies(); // Clear cookies
        await page.context().storageState({ path: 'state.json' }); // Reset storage

        await product.getCartIcon.click();
    })  

})