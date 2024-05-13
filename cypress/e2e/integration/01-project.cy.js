/// <reference types="cypress"/>
describe("Cypress-Project-01 - Locating web elements", () => {
  beforeEach(() => {
    cy.visit("https://techglobal-training.com/frontend/project-1");
  });
  it("Test Case 01 - Validate the Contact Us information", () => {
    cy.get(".is-size-3").should("have.text", "Contact Us");
    cy.get("#address").should("have.text", "2800 S River Rd Suite 310, Des Plaines, IL 60018");
  });
});
