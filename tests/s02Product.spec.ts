import {expect, test} from '@playwright/test';
import loginA1 from "../pageObject/login";
import productA1 from "../pageObject/products";
import cartA1 from "../pageObject/cart";
import checkA1 from "../pageObject/checkout";
import * as selectors from "../utilities/selectos.json";
import * as data from "../fixture/test-data/request.json";

test.describe('Product functionality',()=>{

    let login: loginA1;
    let product: productA1;
    let cart: cartA1;
    let check: checkA1;
    test.beforeEach(async({page})=>{
        login = new loginA1(page);
        product = new productA1(page);
        cart = new cartA1(page);
        check = new checkA1(page);
        await login.gotoLoginPage();
        await login.loginSect(process.env.STANDARD_USERNAME!,process.env.STANDARD_PASSWORD!);
    })

    test('validate navigating to product page',async({})=>{
        await expect(await product.getValidatePage).toHaveText("Products");
        // await expect(await product.getValidatePage).toBe("Products");
    })
    
    test('validate the add to cart functionality',async({page})=>{
        await expect(await product.getValidatePage).toHaveText("Products");                                     //navigation check

        await page.locator(selectors.productsPage.productName, { hasText: data.product['item 3'] }).click();
        await product.getAddtoCart;
        await product.getBacktoProduct;

        await page.locator(selectors.productsPage.productName, { hasText: data.product['item 5'] }).click();
        await product.getAddtoCart;
        await product.getBacktoProduct;

        await product.getCartIcon();
        // await page.locator(selectors.cartPage.removeButton.replace('{name}',data.product['item 5'])).click();
        
        // await cart.getCheckoutPage();
        await page.locator('button', { hasText: 'Remove' }).nth(1).click();

        await page.locator('button', { hasText: 'Checkout' }).click();

        await check.yourInformation(data.user.Firstname,data.user.Lastname,data.user.Zip);

        await expect(await check.validate()).toContainText("Thank you for your order!");

        // await product.getSddcart("Sauce Labs Bolt T-Shirt");
        // await product.getValidatePage();
        // await page.locator('[data-test="item-1-title-link"]').click();
        
        // expect(await product.getSddcart).toBe("Sauce Labs Bolt T-Shirt");
        // await productTitle.click();
        
        // await page.waitForTimeout(2000);

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