import { HomePage } from "../support/pages/homePage"
import { ItemDetailPage } from "../support/pages/itemDetailPage"

const detailPage = new ItemDetailPage()
const homePage = new HomePage()
describe('Product Details', () => {
  beforeEach(() => {
        cy.visit('https://www.demoblaze.com/')
  });
  it('View product detail page', () => {
    homePage.clickOn1stItem()
    detailPage.verifyDetailDisplay()
  });
  it('Navigate back from product detail', () => {
    detailPage.clickOnLogo()
    homePage.verifyHomePageDisplayed()
  });
});