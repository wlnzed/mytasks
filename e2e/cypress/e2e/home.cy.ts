describe("home", () => {
  it("renders tasks for user", () => {
    cy.setCookie("user-email", Cypress.env("testUserEmail"));
    cy.visit(Cypress.env("appUrl"));

    cy.findByText("Task #1");
    cy.findByText("Do something");
    cy.findByText("Do the first part");
    cy.findByText("Do the second part");
    cy.findByText("Task #2");
    cy.findByText("Do something else");
    cy.findAllByText("done").should("have.lengthOf", 2);
    cy.findAllByText("not done").should("have.lengthOf", 2);
  });
});
