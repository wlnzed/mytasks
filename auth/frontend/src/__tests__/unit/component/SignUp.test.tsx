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

test("logs error message on post error", async () => {
  console.log = vi.fn();
  const errorMessage = "post error";
  const spyPost = vi.fn();
  spyPost.mockRejectedValue(errorMessage);
  signUpApi.post = spyPost;

  render(<SignUp />);

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

// TODO: test navigation to sign in view
