import { HomePage } from "../support/pages/homePage"

const homePage = new HomePage()
describe('Verify click on login and verify ittttt', () => {
  it('Click on Login', () => {
    cy.visit('https://www.demoblaze.com/')
    homePage.verifyHomePageDisplayed()
    homePage.clickLoginThenVerify()
  });
});