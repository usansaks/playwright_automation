import {Page} from "@playwright/test";
import * as selectors from "../utilities/selectos.json";

export default class loginA1{
    public page: Page;
    public passWord: string;
    public userName: string;
    public loginButton: string;

    constructor(page: Page){
        this.page = page;
        this.userName = selectors.loginPage.usernameInput;
        this.passWord = selectors.loginPage.passwordInput;
        this.loginButton = selectors.loginPage.loginButton;
    }

    async gotoLoginPage(){
        await this.page.goto(`https://www.saucedemo.com/`);
    }

    async login(username: string, password: string){
        await this.page.locator(this.userName).fill(username);
        await this.page.locator(this.passWord).fill(password);
        await this.page.locator(this.loginButton).click();
    }
}