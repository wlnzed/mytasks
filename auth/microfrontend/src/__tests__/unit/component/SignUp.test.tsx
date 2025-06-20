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

test("displays error message when empty email is submitted", () => {
  render(<SignUp />);

  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);

  screen.getByText("Email cannot be empty.");
});

test("displays error when invalid email is submitted", () => {
  render(<SignUp />);

  const emailInput = screen.getByLabelText("Email:");
  const passwordInput = screen.getByLabelText("Password:");
  const passwordConfirmationInput = screen.getByLabelText(
    "Password Confirmation:",
  );

  fireEvent.change(emailInput, { target: { value: "foo" } });
  fireEvent.change(passwordInput, { target: { value: "Qw3rtyu!" } });
  fireEvent.change(passwordConfirmationInput, {
    target: { value: "Qw3rtyu!" },
  });

  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);

  screen.getByText("Invalid email format.");
});

test("displays error message when empty password is submitted", () => {
  render(<SignUp />);

  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);

  screen.getByText("Password cannot be empty.");
});

test("displays error when a shorter than 8 characters password is submitted", () => {
  render(<SignUp />);

  const emailInput = screen.getByLabelText("Email:");
  const passwordInput = screen.getByLabelText("Password:");
  const passwordConfirmationInput = screen.getByLabelText(
    "Password Confirmation:",
  );

  fireEvent.change(emailInput, { target: { value: "foo@bar.baz" } });
  fireEvent.change(passwordInput, { target: { value: "Qw3rty!" } });
  fireEvent.change(passwordConfirmationInput, {
    target: { value: "Qw3rtyu!" },
  });

  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);

  screen.getByText("Password must be at least 8 characters long.");
});

test("displays error message when password doesn't contain a lowercase letter", () => {
  render(<SignUp />);

  const emailInput = screen.getByLabelText("Email:");
  const passwordInput = screen.getByLabelText("Password:");
  const passwordConfirmationInput = screen.getByLabelText(
    "Password Confirmation:",
  );

  fireEvent.change(emailInput, { target: { value: "foo@bar.baz" } });
  fireEvent.change(passwordInput, { target: { value: "QW3RTYU!" } });
  fireEvent.change(passwordConfirmationInput, {
    target: { value: "Qw3rtyu!" },
  });

  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);

  screen.getByText("Password must contain a lowercase letter.");
});

test("displays error message when password doesn't contain an uppercase letter", () => {
  render(<SignUp />);

  const emailInput = screen.getByLabelText("Email:");
  const passwordInput = screen.getByLabelText("Password:");
  const passwordConfirmationInput = screen.getByLabelText(
    "Password Confirmation:",
  );

  fireEvent.change(emailInput, { target: { value: "foo@bar.baz" } });
  fireEvent.change(passwordInput, { target: { value: "qw3rtyu!" } });
  fireEvent.change(passwordConfirmationInput, {
    target: { value: "Qw3rtyu!" },
  });

  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);

  screen.getByText("Password must contain an uppercase letter.");
});

test("displays error message when password doesn't contain a number", () => {
  render(<SignUp />);

  const emailInput = screen.getByLabelText("Email:");
  const passwordInput = screen.getByLabelText("Password:");
  const passwordConfirmationInput = screen.getByLabelText(
    "Password Confirmation:",
  );

  fireEvent.change(emailInput, { target: { value: "foo@bar.baz" } });
  fireEvent.change(passwordInput, { target: { value: "Qwertyu!" } });
  fireEvent.change(passwordConfirmationInput, {
    target: { value: "Qw3rtyu!" },
  });

  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);

  screen.getByText("Password must contain a number.");
});

test("displays error message when password doesn't contain a symbol", () => {
  render(<SignUp />);

  const emailInput = screen.getByLabelText("Email:");
  const passwordInput = screen.getByLabelText("Password:");
  const passwordConfirmationInput = screen.getByLabelText(
    "Password Confirmation:",
  );

  fireEvent.change(emailInput, { target: { value: "foo@bar.baz" } });
  fireEvent.change(passwordInput, { target: { value: "Qw3rtyui" } });
  fireEvent.change(passwordConfirmationInput, {
    target: { value: "Qw3rtyu!" },
  });

  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);

  screen.getByText("Password must contain a symbol.");
});
