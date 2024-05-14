![Image](https://www.cypress.io/cypress_logo_social.png)

## Date: 5/14/2024

### By: Abdullah Albayati

### Testing Front end project-01

#### Validating 10 test cases for each section of the page.

#### Creator Linkedin page

[Abdullah Albayati](https://www.linkedin.com/in/albayati-abdullah/)

---

#### This project was creatated and executed with the use of JaveScript, Node.js, Cypress and CSS selectors.

---

### _Getting Started_

- In all test cases we are required to visit this page [project-1](https://www.techglobal-training.com/frontend/project-1)
- So I used `beforeEach` from Mocha framework with `cy.visit()` to handel visiting this website before each test case.
- I used `cy.get(#ID).should('have.text', 'expected text')` to validate most tasks (like contact us, email, address, phone ...etc ) as it will grab the element by it's (ID, Class, or value) and it will preform an assertion to check if this element has this expected text.
- I used `cy.get(#ID).should('be.visible')` to check and validate certain tags are displayed (like input boxes, radio buttons, Submit button) after getting the element it will assert if this element is visible.
- I used `cy.get(#ID).should('have.attr', 'required')` this will get the element and check if it's a required field, it's very usefull in forms where some inputs are reuired \*.
- I used

      cy.get('#ID').each(($el, index) => {
      const options = ["Male", "Female", "Prefer not to disclose"];
      cy.get($el).closest("label").should("have.text", options[index]); });

  a call back with element and index to validate each of my options are exactly as mentioed in options.

- I used `cy.get(#ID).should("not.be.disabled")` to check if a button is clickable.

- I used `cy.get(#ID).type('expected input') `to type anything in the input fields.

- To handel uncaught:exception which is an error comming form an event listner, I used
  ```JavaScript
  Cypress.on("uncaught:exception", () => {
    return false;
  });
  ```

### _Screenshots_

![Image](https://i.ibb.co/hfPM6ND/Screenshot-2024-05-14-at-12-44-35-PM.png)
