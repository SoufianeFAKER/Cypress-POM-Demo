/// <reference types="cypress"/>

it("Google Search", () => {
  cy.visit("https://google.com");
  cy.get("#APjFqb").type("Step By Step{Enter}");
  //cy.get(".FPdoLc > center > .gNO89b").click()
});
