import {expect, test} from '@playwright/test';
import loginA1 from "../pageObject/login";
import productA1 from "../pageObject/products";
import cartA1 from "../pageObject/cart";
import * as selectors from "../utilities/selectos.json";

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

    test('validate navigating to product page',async({})=>{
        await expect(await product.getValidatePage).toHaveText("Products");
        // await expect(await product.getValidatePage).toBe("Products");
    })
    
    test('validate the add to cart functionality',async({page})=>{
        await expect(await product.getValidatePage).toHaveText("Products");
        // await product.getSddcart("Sauce Labs Bolt T-Shirt");
        // await product.getValidatePage();
        // await page.locator('[data-test="item-1-title-link"]').click();
        await page.locator(selectors.productsPage.productName, { hasText: 'Sauce Labs Bolt T-Shirt' }).click();
        // expect(await product.getSddcart).toBe("Sauce Labs Bolt T-Shirt");
        // await productTitle.click();
        // await page.locator(product.getAddtoCart)
        await page.waitForTimeout(2000);

        // await expect(page.locator(`div[class="app_logo]`)).toHaveText("Swag Labs");
        // await product.getAddtoCart;
    })

    test('validate cart functionality',async({page})=>{
        // await page.locator("a[class='shopping_cart_link']").click();
        await page.locator('button', { hasText: 'Add to cart' }).nth(0).click();
        await page.locator('button', { hasText: 'Add to cart' }).nth(1).click();
        await product.getCartIcon();
        await page.locator('button', { hasText: 'Remove' }).nth(1).click();
        await page.waitForTimeout(2000);
        await cart.getCheckoutPage();
    })

    test('validate logout functionality',async({page})=>{
        await product.getToggle();
        await product.getLogOut();
        await expect(page.locator(selectors.loginPage.loginButton)).toHaveText("Login");
    })
})