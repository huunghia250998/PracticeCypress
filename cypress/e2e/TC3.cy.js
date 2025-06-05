import { HomePage } from "../support/pages/homePage"

const homePage = new HomePage()
describe('Verify product list loads	', () => {
  it('Verify product list loads	', () => {
    cy.visit('https://www.demoblaze.com/')
    homePage.verifyHomePageDisplayed()
    homePage.clickLoginThenVerify()
    homePage.verifyCategories()
    homePage.verifyProdListDisplayed()
  });
});