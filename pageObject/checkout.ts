import {expect,test,Page} from "@playwright/test";
import * as selectors from "../utilities/selectos.json";
import * as data from "../fixture/test-data/request.json";

export default class checkA1{
    constructor(public page: Page) { }

    async yourInformation(firstname: string, lastname:string, Zip){
        await this.page.locator(selectors.checkoutPage.userFirstname).fill(firstname);
        await this.page.locator(selectors.checkoutPage.userLastname).fill(lastname);
        await this.page.locator(selectors.checkoutPage.userZip).fill(Zip);
        await this.page.locator(selectors.checkoutPage.continueButton).click();
        await this.page.locator(selectors.checkoutPage.finishButton).click();
    }

    async validate(){
        return this.page.locator("[data-test='complete-header']");
    }
}