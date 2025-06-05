import BasePage from "../../src/base/basePage";
require('cypress-xpath');



export class HomePage extends BasePage {
    url = 'https://www.demoblaze.com/'
    constructor() {
        super();
        this.logo = 'a[id="nava"]'
        this.loginBtn = '*[id="login2"]'
        this.catSection = '*[id="cat"]'
        this.itemsC = '*[id="itemc"]'
        this.popLogin = '[id="logInModalLabel"]'
        this.closeBtnDialog = '#logInModal  button[class="close"]'
        this.cardImg = '*[class="card-img-top img-fluid"]'
        this.cardTitle = '*[class="card-title"]'
        this.cardText = '*[class="card-text"]'
        this.firstItem = '#tbodyid > div:nth-child(1) > div > div > h4 > a'
        
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
        //cy.wait(2000)
        cy.get(this.closeBtnDialog).should('be.visible').wait(500).click()
    }
    verifyProdListDisplayed(){
        cy.get(this.cardImg).should("have.length.at.least",5)
        cy.get(this.cardTitle).should("have.length.at.least",5)
        cy.get(this.cardText).should("have.length.at.least",5)
    }
    clickOn1stItem(){
        cy.get(this.firstItem).invoke("text").then((name)=>{
            Cypress.env('nameProd',name)
        })
        cy.get(this.firstItem).click()
       
    }

}