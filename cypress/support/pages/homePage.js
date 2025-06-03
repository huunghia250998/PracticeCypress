import BasePage from "../../src/base/basePage";


export class HomePage extends BasePage {
    url = 'https://www.demoblaze.com/'
    constructor() {
        super();
        this.logo = 'a[id="nava"]'
        this.loginBtn = '*[id="login2"]'
        this.catSection = '*[id="cat"]'
        
    }
    openWeb(){
        this.goto(this.url)
    }
    verifyHomePageDisplayed(){
        this.isElementVisible(this.logo)
        this.isElementVisible(this.loginBtn)
        this.isElementVisible(this.catSection)
    }
    verifyCategories(){
        cy.get(this.catSection).invoke('text').should('eq',"CATEGORIES")
    }
}