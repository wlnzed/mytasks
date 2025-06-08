describe("sign up", () => {
  it("navigate to sign in", () => {
    cy.visit(Cypress.env("appUrl") + "/sign-up");

    const signInButton = cy.findByText("Sign In");

    signInButton.click();

    cy.findByText("TODO: SIGN IN VIEW");
  });
});
