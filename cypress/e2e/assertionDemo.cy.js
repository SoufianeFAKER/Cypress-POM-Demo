
describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
    cy.contains("get").click();

    cy.get("#query-btn")
      .should("contain", "Button")
      .and('have.class', "query-btn")
    //   .should("have.class", "query-btn")
      .should('be.visible')
      .should('be.enabled')
      .invoke('attr', 'id').should('equal', 'query-btn')

    expect(true).to.be.true
    
    assert.equal(4, 4, 'NOT EQUAL Message')
    assert.strictEqual(4, 4, 'NOT EQUAL Message')
  });
});
