import BasePage from "../../src/base/basePage";

export class CartPage extends BasePage {
    constructor() {
        super();
        this.colTitleItem = '#tbodyid > tr td'
        this.allPrice = '//*[contains(@class, "table-responsive")]//td[3]'
       
    }
    verifyItemAdded(){
        cy.get(this.colTitleItem).contains(Cypress.env('nameProd')).should('be.visible')
    }
    deleteItemAdded(){
        cy.get(this.colTitleItem).contains("Delete").should('be.visible').click()
    }
    showText(){
        cy.xpath(this.allPrice).should('be.visible').then(($elements) => {
        const priceArray = $elements.map((index, el) => parseFloat(Cypress.$(el).text().trim())).get();

        const totalSum = priceArray.reduce((acc, num) => acc + num, 0);
        
        Cypress.env("allPrice", priceArray); // Lưu mảng giá trị
        cy.log('Mảng giá:', priceArray);
        cy.log('Tổng giá:', totalSum); // Kết quả đúng sẽ là 1150
});

      
    }
    
}