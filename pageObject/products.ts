import {expect,test,Page} from "@playwright/test";
import * as selectors from "../utilities/selectos.json";
import * as data from "../fixture/test-data/request.json";

export default class productA1 {
    public productList: string;
    public addCart: string;

    constructor(public page: Page) {
        this.productList = selectors.productsPage.productName;
        this.addCart = selectors.productsPage.addtoCart;
     }

    get getValidatePage(){
        return this.page.locator(selectors.navigatePage.validatePage);
    }

    // async AddtoCart(productName: string){
    //     const productsList = await this.page.$$(this.productList);
    //     for(const product of productsList){
    //         if(productName === (await product.textContent())?.trim()){
    //             await product.click();
    //             break;
    //         }
    //     }
    // }

    get getSddcart(){
        return this.page.locator(selectors.productsPage.productName).textContent();
    }


    get getProductName(){
        return this.page.locator(selectors.productsPage.productName);
    }

    get getProductPrice(){
        return this.page.locator(selectors.productsPage.productPrice);
    }

    get getAddtoCart(){
        return this.page.locator(selectors.productsPage.addtoCart).click();
    }

    get getBacktoProduct(){
        return this.page.locator(selectors.productsPage.backtoProduct).click();
    }

    async getCartIcon(){
        return this.page.locator(selectors.productsPage.cartIcon).click();
    }

    async getToggle(){
        return this.page.locator(selectors.productsPage.toggleBtn).click();
    }

    async getLogOut(){
        return this.page.locator(selectors.productsPage.logOut).click();
    }
}