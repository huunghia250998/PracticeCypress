import BasePage from "../../src/base/basePage";

export class ItemDetailPage extends BasePage {
    constructor() {
        super();
        this.name = 'h2[class="name"]'
        this.price = 'h3[class="price-container"]'
        this.description = '*[class="description description-tabs"]'
        this.btnAddCart = 'a[class="btn btn-success btn-lg"]'
        this.logo = 'a[id="nava"]'
        this.cartBtn = '*[id="cartur"]'
        
    }
    verifyDetailDisplay(){
        cy.get(this.name).should('be.visible')
        cy.get(this.price).should('be.visible')
        cy.get(this.description).should('be.visible')
        cy.get(this.btnAddCart).should('be.visible')
    }
    clickOnLogo(){
        cy.get(this.logo).click()
    }
    clickAddCart(){
        cy.get(this.btnAddCart).click()
        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('Product added')
        })
    }
    clickAddCartTwice(){
        cy.get(this.btnAddCart).click()
        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('Product added')
        })
        cy.wait(1000)
        cy.get(this.btnAddCart).click()
        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('Product added')
        })
    }
    verifyPopupAddedSuccess(){
        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('Product added')
        })
    }
    clickCartNavBar(){
        cy.get(this.cartBtn).click()
    }
    
}