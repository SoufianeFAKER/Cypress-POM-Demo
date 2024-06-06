before(() => {
  cy.fixture("example.json").as("test_data");
});

it("Read Files using Fixture", () => {
  cy.fixture("example.json").then((data) => {
    cy.log(data.name);
    cy.log(data.email);
  });

  //cy.log(this.test_data.name); ///*** ERROR */

  cy.get("@test_data").then((details) => {
    cy.log(details.name);
    cy.log(details.email);

    cy.fixture("example.json").its("email").should("eq", "hello@cypress.io");
  });
});

it("Read file using readFile()", () => {
  cy.readFile("./cypress/fixtures/example.json").then((myData) => {
    cy.log(myData.body);
  });

  cy.readFile("./cypress/fixtures/example.json")
    .its("email")
    .should("eq", "hello@cypress.io");
});

it("Write file Demo", () => {
  cy.writeFile("sample.txt", "Hello, I am Soufiane\n");
  cy.writeFile("sample.txt", "I am learning Cypress", { flag: "a+" });
  cy.writeFile("sample.txt", "Hello, I am Ines\n");
});
