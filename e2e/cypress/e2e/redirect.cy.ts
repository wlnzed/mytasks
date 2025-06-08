describe("redirects to sign in if no user email cookie", () => {
  const baseUrl = Cypress.env("appUrl");

  it("from root", () => {
    cy.visit(baseUrl);
    cy.findByText("TODO: SIGN IN VIEW");
  });

  it("from home", () => {
    cy.visit(baseUrl + "/home");
    cy.findByText("TODO: SIGN IN VIEW");
  });

  it("from unknown", () => {
    cy.visit(baseUrl + "/askdjfalsd");
    cy.findByText("TODO: SIGN IN VIEW");
  });
});
