import { CartPage } from "../support/pages/cartPage"
import { HomePage } from "../support/pages/homePage"
import { ItemDetailPage } from "../support/pages/itemDetailPage"

const detailPage = new ItemDetailPage()
const homePage = new HomePage()
const cartPage = new CartPage()
describe('Shopping Cart', () => {
  beforeEach(() => {
        cy.visit('https://www.demoblaze.com/')
  });
  it('Add a product to the cart', () => {
    homePage.clickOn1stItem()
    detailPage.clickAddCart()
    detailPage.verifyPopupAddedSuccess()
  });
  it('View cart with added items', () => {
    homePage.clickOn1stItem()
    detailPage.clickAddCart()
    detailPage.verifyPopupAddedSuccess()
    detailPage.clickCartNavBar()
    cartPage.verifyItemAdded()
  });
  it('Remove a product from the cart', () => {
    homePage.clickOn1stItem()
    detailPage.clickAddCart()
    detailPage.verifyPopupAddedSuccess()
    detailPage.clickCartNavBar()
    cartPage.verifyItemAdded()
    cartPage.deleteItemAdded()
  });
  it('Cart total calculation', () => {
    homePage.clickOn1stItem()
    detailPage.clickAddCartTwice()
    //detailPage.verifyPopupAddedSuccess()
    detailPage.clickCartNavBar()
    cartPage.compareTotal()
  });

});