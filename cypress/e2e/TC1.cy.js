import { HomePage } from "../support/pages/homePage"

const homePage = new HomePage()
describe('Verify home page is display with full nav bar info', () => {
  it('Verify navbar', () => {
    //homePage.goto('https://www.demoblaze.com/')
    cy.visit('https://www.demoblaze.com/')
    homePage.verifyHomePageDisplayed()
    homePage.verifyCategories()
  });
});