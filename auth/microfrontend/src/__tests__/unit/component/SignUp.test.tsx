import { afterEach, expect, test, vi } from "vitest";
import {
  render,
  screen,
  fireEvent,
  cleanup,
  waitFor,
} from "@testing-library/react";
import SignUp from "../../../components/SignUp";
import signUpApi from "../../../api/signUp";

afterEach(cleanup);

test("calls sign up api post with form values on submit", () => {
  const spyPost = vi.fn();
  spyPost.mockResolvedValue(Promise.resolve());
  signUpApi.post = spyPost;

  const email = "foo";
  const password = "bar";
  const passwordConfirmation = "baz";

  render(<SignUp />);

  screen.getByText("Sign Up:");
  const emailInput = screen.getByLabelText("Email:");
  const passwordInput = screen.getByLabelText("Password:");
  const passwordConfirmationInput = screen.getByLabelText(
    "Password Confirmation:",
  );
  const submitButton = screen.getByText("Submit");

  fireEvent.change(emailInput, { target: { value: email } });
  fireEvent.change(passwordInput, { target: { value: password } });
  fireEvent.change(passwordConfirmationInput, {
    target: { value: passwordConfirmation },
  });
  fireEvent.click(submitButton);

  expect(signUpApi.post).toHaveBeenCalledWith(
    email,
    password,
    passwordConfirmation,
  );
});

test("logs error message on post error", async () => {
  console.log = vi.fn();
  const errorMessage = "post error";
  const spyPost = vi.fn();
  spyPost.mockRejectedValue(errorMessage);
  signUpApi.post = spyPost;

  render(<SignUp />);
  const emailInput = screen.getByLabelText("Email:");
  fireEvent.change(emailInput, { target: { value: "foo@bar.baz" } });

  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);

  await waitFor(() =>
    expect(console.log).toHaveBeenCalledWith(
      "error while signing up: " + errorMessage,
    ),
  );
});

test("navigates to sign in path on sign in button click", async () => {
  Object.defineProperty(window, "location", { value: { pathname: "/" } });

  render(<SignUp />);

  const signInButton = screen.getByText("Sign In");
  fireEvent.click(signInButton);

  await waitFor(() => expect(window.location.pathname).toBe("/sign-in"));
});

test("displays error message when empty email is submitted", async () => {
  render(<SignUp />);

  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);

  screen.getByText("Email cannot be empty.");
});
