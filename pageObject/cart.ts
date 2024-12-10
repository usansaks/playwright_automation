import { expect,Page } from "@playwright/test";
import * as selectors from "../utilities/selectos.json"

export default class cartA1{
    constructor(public page: Page) { }

    get getValidatePage(){
        return this.page.locator(selectors.navigatePage.validatePage);
    }

    async carrtt(){
        await expect(this.page.locator(selectors.productsPage.productPrice)).toHaveText("$15.99");
    }

    get getCartQuantity(){
        return this.page.locator(selectors.cartPage.cartQuantity);
    }

    get getRemoveButton(){
        return this.page.locator(selectors.cartPage.removeButton);
    }

    async getCheckoutPage(){
        await this.page.locator(selectors.cartPage.checkoutButton).click();
    }
}