import { HomePage } from "../support/pages/homePage"

const homePage = new HomePage()
describe('Home Page Display', () => {
  beforeEach (() => {
     cy.visit('https://www.demoblaze.com/')
  });
  it('User opens the homepage', () => {
    //homePage.goto('https://www.demoblaze.com/')
   
    homePage.verifyHomePageDisplayed()
  });
  it('Categories are listed correctly', () => {
    //homePage.goto('https://www.demoblaze.com/')
    homePage.verifyCategories()
    homePage.verifyProdListDisplayed()
  });
  it('Product cards load on homepage', () => {
    homePage.verifyProdListDisplayed()
  });
});