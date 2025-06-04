import BasePage from "../../src/base/basePage";


export class HomePage extends BasePage {
    url = 'https://www.demoblaze.com/'
    constructor() {
        super();
        this.logo = 'a[id="nava"]'
        this.loginBtn = '*[id="login2"]'
        this.catSection = '*[id="cat"]'
        this.itemsC = '*[id="itemc"]'
        this.popLogin = '[id="logInModalLabel"]'
        this.cardImg = '*[class="card-img-top img-fluid"]'
        
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
        cy.get(this.itemsC).contains('Phones').should('be.visible')
        cy.get(this.itemsC).contains('Laptops').should('be.visible')
        cy.get(this.itemsC).contains('Monitors').should('be.visible')

    }
    clickLoginThenVerify(){
        this.clickElement(this.loginBtn)
        cy.get(this.popLogin).should("be.visible")
    }
    verifyProdListDisplayed(){
        cy.get(this.cardImg).should("have.length.at.least",5)
    }
}