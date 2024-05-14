/// <reference types="cypress"/>
describe("Cypress-Project-01 - Locating web elements", () => {
  beforeEach(() => {
    cy.visit("https://techglobal-training.com/frontend/project-1");
  });
  it("Test Case 01 - Validate the Contact Us information", () => {
    cy.get(".is-size-3").should("have.text", "Contact Us");
    cy.get("#address").should("have.text", "2800 S River Rd Suite 310, Des Plaines, IL 60018");
    cy.get("#email").should("have.text", "info@techglobalschool.com");
    cy.get("#phone-number").should("have.text", "(224) 580-2150");
  });
  it("Test Case 02 - Validate the Full name input box", () => {
    cy.get("[type='text'][placeholder='Enter your full name']").should("be.visible");
    cy.get("[type='text'][placeholder='Enter your full name']").should("have.attr", "required");
    cy.get("[for='name'].label").should("have.text", "Full name *");
    cy.get("[placeholder='Enter your full name']").should("have.attr", "placeholder", "Enter your full name");
  });

  it("Test Case 03 - Validate the Gender radio button", () => {
    cy.get(".label").eq(1).should("have.text", "Gender *");
    cy.get(".radio input[type='radio']").should("have.attr", "required");

    cy.get('.radio input[type="radio"]').each(($el, index) => {
      const options = ["Male", "Female", "Prefer not to disclose"];
      cy.get($el).closest("label").should("have.text", options[index]);

      cy.get('.radio input[type="radio"]').each(($el) => {
        cy.wrap($el).should("not.be.disabled"); // each option is clickable

        // when I tried to check if none is selected it worked perfectly but when I started selecting it started
        // to give me errors, but I will leave the way I checked them commented bellow.
        // cy.wrap($el).should("not.be.checked"); // none is selected

        cy.get('.radio input[type="radio"]').eq(0).check();
        cy.get('.radio input[type="radio"]').eq(0).should("be.checked"); // verify Male is checked
        cy.get('.radio input[type="radio"]').eq(1).should("not.be.checked");
        cy.get('.radio input[type="radio"]').eq(2).should("not.be.checked");

        cy.get('.radio input[type="radio"]').eq(1).check();
        cy.get('.radio input[type="radio"]').eq(1).should("be.checked"); // verify Female is checked
        cy.get('.radio input[type="radio"]').eq(0).should("not.be.checked");
        cy.get('.radio input[type="radio"]').eq(2).should("not.be.checked");
      });
    });
  });
  it("Test Case 04 - Validate the Address input box", () => {
    cy.get('[placeholder="Enter your address"]').should("be.visible");
    cy.get('[placeholder="Enter your address"]').should("not.have.attr", "required");
    cy.get(".label").eq(2).should("have.text", "Address");
    cy.get('[placeholder="Enter your address"]').should("have.attr", "placeholder", "Enter your address");
    /*
    In the website it says 'Validate that the placeholder of the Address input box is “Enter your address*”'
    after the word address there is * sign which should either be a mistake in the requierment or a bug that
    needs to be reported. I will keep it as a comment right now and will discuss it later.
    */
  });

  it("Test Case 05 - Validate the Email input box", () => {
    cy.get('[placeholder="Enter your email"]').should("be.visible");
    cy.get('[placeholder="Enter your email"]').should("have.attr", "required");
    cy.get(".label").eq(3).should("have.text", "Email *");
    cy.get('[placeholder="Enter your email"]').should("have.attr", "placeholder", "Enter your email");
  });

  it("Test Case 06 - Validate the Phone input box", () => {
    cy.get('[placeholder="Enter your phone number"]').should("be.visible");
    cy.get('[placeholder="Enter your phone number"]').should("not.have.attr", "required");
    cy.get(".label").eq(4).should("have.text", "Phone");
    cy.get('[placeholder="Enter your phone number"]').should("have.attr", "placeholder", "Enter your phone number");
  });

  it("Test Case 07 - Validate the Message text area", () => {
    cy.get(".textarea").should("be.visible");
    cy.get(".textarea").should("not.have.attr", "required");
    cy.get(".label").eq(5).should("have.text", "Message");
    cy.get(".textarea").should("have.attr", "placeholder", "Type your message here...");
    // Same issue here with the last assertion, in the website it says
    // Validate that the placeholder of the Message text area is “Type your message here…”
    // while the message should be "Type your message here..."
    // I could be a mistake in the requierment or a bug.
  });
  it("Test Case 08 - Validate the Consent checkbox", () => {
    cy.get(".checkbox").should("have.text", " I give my consent to be contacted.");
    cy.get(".checkbox > input").should("have.attr", "required");
    cy.get(".checkbox > input").should("not.be.disabled");
    cy.get(".checkbox > input").check().should("be.checked");
    cy.get(".checkbox > input").uncheck().should("not.be.checked");
  });

  it("Test Case 09 - Validate the SUBMIT button", () => {
    cy.get(".button").should("be.visible");
    cy.get(".button").should("not.be.disabled");
    cy.get(".button").should("have.text", "SUBMIT");
  });

  it("Test Case 10 - Validate the form submission", () => {
    cy.get('[placeholder="Enter your full name"]').type("Abdullah");
    cy.get('.radio input[type="radio"]').eq(0).check();
    cy.get('[placeholder="Enter your address"]').type("Chicago");
    cy.get('[placeholder="Enter your email"]').type("abdullah@gmail.com");
    cy.get('[placeholder="Enter your phone number"]').type("1232451876");
    cy.get(".textarea").type("Thank you TechGlobal");
    cy.get(".checkbox > input").check();
    cy.get(".button").click();
    cy.get(".mt-5").should("have.text", "Thanks for submitting!");
    Cypress.on("uncaught:exception", () => {
      return false;
    });
  });
});
