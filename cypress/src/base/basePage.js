/// <reference types="cypress" />
class BasePage {
    constructor(){

    }
  goto(url) {
    cy.visit(url);
  }

  isElementVisible(selector) {
    cy.get(selector).should('be.visible');
  }

  clickElement(selector) {
    cy.get(selector).click();
  }

  enterText(selector, text) {
    cy.get(selector).type(text);
  }
}

export default BasePage;

