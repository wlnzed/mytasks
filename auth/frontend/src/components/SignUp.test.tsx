import { expect, test, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import SignUp from "./SignUp";
import signUpApi from "../api/signUp";

test("calls sign up api post with form values on submit", () => {
  const spyPost = vi.fn();
  spyPost.mockResolvedValue(Promise.resolve());
  signUpApi.post = spyPost;

  const username = "foo";
  const password = "bar";
  const passwordConfirmation = "baz";

  render(<SignUp />);

  screen.getByText("Sign Up:");
  const usernameInput = screen.getByLabelText("Username:");
  const passwordInput = screen.getByLabelText("Password:");
  const passwordConfirmationInput = screen.getByLabelText(
    "Password Confirmation:",
  );
  const submitButton = screen.getByText("Submit");

  fireEvent.change(usernameInput, { target: { value: username } });
  fireEvent.change(passwordInput, { target: { value: password } });
  fireEvent.change(passwordConfirmationInput, {
    target: { value: passwordConfirmation },
  });
  fireEvent.click(submitButton);

  expect(signUpApi.post).toHaveBeenCalledWith(
    username,
    password,
    passwordConfirmation,
  );
});

// TODO: test navigation to sign in view
