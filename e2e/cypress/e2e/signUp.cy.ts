describe("sign up", () => {
  beforeEach(() => cy.visit(Cypress.env("appUrl") + "/sign-up"));

  it("navigates to sign in view on sign in button click", () => {
    const signInButton = cy.findByText("Sign In");
    signInButton.click();
    cy.findByText("TODO: SIGN IN VIEW");
  });

  it("displays error message when empty email is submitted", () => {
    const submitButton = cy.findByText("Submit");

    submitButton.click();

    cy.findByText("Email cannot be empty.");
  });

  it("signs up the new user on submit", () => {
    const emailInput = cy.findByLabelText("Email:");
    const passwordInput = cy.findByLabelText("Password:");
    const passwordConfirmationInput = cy.findByLabelText(
      "Password Confirmation:",
    );
    const submitButton = cy.findByText("Submit");

    emailInput.type("foo");
    passwordInput.type("bar");
    passwordConfirmationInput.type("baz");
    submitButton.click();

    // TODO: test for sign up behavior once implemented
  });
});
