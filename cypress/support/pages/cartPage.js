import BasePage from "../../src/base/basePage";

export class CartPage extends BasePage {
    constructor() {
        super();
        this.colTitleItem = '#tbodyid > tr td'
        this.allPrice = '//*[contains(@class, "table-responsive")]//td[3]'
        this.totalPrice = '*[id="totalp"]'
       
    }
    verifyItemAdded(){
        cy.get(this.colTitleItem).contains(Cypress.env('nameProd')).should('be.visible')
    }
    deleteItemAdded(){
        //cy.wait(3000)
        cy.get(this.colTitleItem).contains("Delete").should('be.visible').click()
        cy.xpath(this.allPrice).should('not.exist')
    }
    compareTotal(){
        cy.wait(3000)
        //cy.xpath(this.allPrice).last().should('be.visible')
        cy.xpath(this.allPrice).should('be.visible').then(($elements) => {
        const priceArray = $elements.map((index, el) => parseFloat(Cypress.$(el).text().trim())).get();
        //$elements.map((index, el) => {...}).get();
        //$elements.map(...) áp dụng hàm callback cho từng phần tử trong $elements.
        //index là chỉ số của phần tử trong mảng, el là phần tử DOM hiện tại.
        //.get() chuyển đổi đối tượng jQuery thành một mảng JavaScript thuần.

        //Cypress.$(el) chuyển đổi phần tử DOM sang đối tượng jQuery.
        //.text() lấy nội dung văn bản của phần tử.
        //.trim() loại bỏ khoảng trắng thừa ở đầu và cuối.
        const totalSum = priceArray.reduce((acc, num) => acc + num, 0);
        
        Cypress.env("allPrice", priceArray); // Lưu mảng giá trị
        cy.log('Mảng giá:', priceArray);
        cy.log('Tổng giá:', totalSum);
        cy.get(this.totalPrice).invoke("text").then((totalPrice)=>{
            const total = parseFloat(totalPrice.trim())
            expect(total).equal(totalSum)
        })
        //assert.equal(this.totalPrice,totalSum) 
        }); 
    }
    
}