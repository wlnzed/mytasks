import { afterEach, expect, test, vi } from "vitest";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import App from "../../App";

afterEach(cleanup);

test("renders TODO: SPINNER on init route", async () => {
  Object.defineProperty(window, "location", {
    value: { origin: "https://localhost:1234", pathname: "/" },
  });

  render(<App />);

  screen.getByText("TODO: SPINNER");
});

test("renders TODO: HOME VIEW on home route", async () => {
  Object.defineProperty(window, "location", {
    value: { origin: "https://localhost:1234", pathname: "/home" },
  });

  render(<App />);

  screen.getByText("TODO: HOME VIEW");
});

test("renders TODO: SIGN IN VIEW on sign in route", async () => {
  Object.defineProperty(window, "location", {
    value: { origin: "https://localhost:1234", pathname: "/sign-in" },
  });

  render(<App />);

  screen.getByText("TODO: SIGN IN VIEW");
});

test("sign up view posts sign up request with form content on submit", () => {
  Object.defineProperty(window, "location", {
    value: { origin: "https://localhost:1234", pathname: "/sign-up" },
  });

  const spyFetch = vi.fn();
  spyFetch.mockResolvedValue(Promise.resolve());
  global.fetch = spyFetch;

  const email = "foo";
  const password = "bar";
  const passwordConfirmation = "baz";

  render(<App />);

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

  expect(fetch).toHaveBeenCalledWith(
    import.meta.env.VITE_AUTH_MICROSERVICE_URL + "/sign-up",
    {
      method: "post",
      body:
        `{"email":"${email}","password":"${password}"` +
        `,"passwordConfirmation":"${passwordConfirmation}"}`,
      headers: { "Content-Type": "application/json" },
    },
  );
});

test("sign up view logs error message on post error", async () => {
  Object.defineProperty(window, "location", {
    value: { origin: "https://localhost:1234", pathname: "/sign-up" },
  });
  console.log = vi.fn();
  const errorMessage = "fetch error";
  const spyFetch = vi.fn();
  spyFetch.mockRejectedValue(errorMessage);
  global.fetch = spyFetch;

  render(<App />);
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

test("sign up view navigates to sign in path on sign in button click", async () => {
  Object.defineProperty(window, "location", {
    value: { origin: "https://localhost:1234", pathname: "/sign-up" },
  });

  render(<App />);

  const signInButton = screen.getByText("Sign In");
  fireEvent.click(signInButton);

  await waitFor(() => expect(window.location.pathname).toBe("/sign-in"));
});

test("sign up view displays error when empty email is submitted", () => {
  Object.defineProperty(window, "location", {
    value: { origin: "https://localhost:1234", pathname: "/sign-up" },
  });

  render(<App />);

  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);

  screen.getByText("Email cannot be empty.");
});

test("sign up view displays error when invalid email is submitted", () => {
  Object.defineProperty(window, "location", {
    value: { origin: "https://localhost:1234", pathname: "/sign-up" },
  });

  render(<App />);

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

test("sign up view displays error when empty password is submitted", () => {
  Object.defineProperty(window, "location", {
    value: { origin: "https://localhost:1234", pathname: "/sign-up" },
  });

  render(<App />);

  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);

  screen.getByText("Password cannot be empty.");
});

test("sign up view displays error when a shorter than 8 characters password is submitted", () => {
  Object.defineProperty(window, "location", {
    value: { origin: "https://localhost:1234", pathname: "/sign-up" },
  });

  render(<App />);

  const emailInput = screen.getByLabelText("Email:");
  const passwordInput = screen.getByLabelText("Password:");
  const passwordConfirmationInput = screen.getByLabelText(
    "Password Confirmation:",
  );

  fireEvent.change(emailInput, { target: { value: "foo" } });
  fireEvent.change(passwordInput, { target: { value: "Qw3rty!" } });
  fireEvent.change(passwordConfirmationInput, {
    target: { value: "Qw3rtyu!" },
  });

  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);

  screen.getByText("Password must be at least 8 characters long.");
});

test("sign up view displays error message when password doesn't contain a lowercase letter", () => {
  Object.defineProperty(window, "location", {
    value: { origin: "https://localhost:1234", pathname: "/sign-up" },
  });

  render(<App />);

  const emailInput = screen.getByLabelText("Email:");
  const passwordInput = screen.getByLabelText("Password:");
  const passwordConfirmationInput = screen.getByLabelText(
    "Password Confirmation:",
  );

  fireEvent.change(emailInput, { target: { value: "foo" } });
  fireEvent.change(passwordInput, { target: { value: "QW3RTYU!" } });
  fireEvent.change(passwordConfirmationInput, {
    target: { value: "Qw3rtyu!" },
  });

  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);

  screen.getByText("Password must contain a lowercase letter.");
});

test("sign up view displays error message when password doesn't contain an uppercase letter", () => {
  Object.defineProperty(window, "location", {
    value: { origin: "https://localhost:1234", pathname: "/sign-up" },
  });

  render(<App />);

  const emailInput = screen.getByLabelText("Email:");
  const passwordInput = screen.getByLabelText("Password:");
  const passwordConfirmationInput = screen.getByLabelText(
    "Password Confirmation:",
  );

  fireEvent.change(emailInput, { target: { value: "foo" } });
  fireEvent.change(passwordInput, { target: { value: "qw3rtyu!" } });
  fireEvent.change(passwordConfirmationInput, {
    target: { value: "Qw3rtyu!" },
  });

  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);

  screen.getByText("Password must contain an uppercase letter.");
});

test("sign up view displays error message when password doesn't contain a number", () => {
  Object.defineProperty(window, "location", {
    value: { origin: "https://localhost:1234", pathname: "/sign-up" },
  });

  render(<App />);

  const emailInput = screen.getByLabelText("Email:");
  const passwordInput = screen.getByLabelText("Password:");
  const passwordConfirmationInput = screen.getByLabelText(
    "Password Confirmation:",
  );

  fireEvent.change(emailInput, { target: { value: "foo" } });
  fireEvent.change(passwordInput, { target: { value: "Qwertyu!" } });
  fireEvent.change(passwordConfirmationInput, {
    target: { value: "Qw3rtyu!" },
  });

  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);

  screen.getByText("Password must contain a number.");
});

test("sign up view displays error message when password doesn't contain a symbol", () => {
  Object.defineProperty(window, "location", {
    value: { origin: "https://localhost:1234", pathname: "/sign-up" },
  });

  render(<App />);

  const emailInput = screen.getByLabelText("Email:");
  const passwordInput = screen.getByLabelText("Password:");
  const passwordConfirmationInput = screen.getByLabelText(
    "Password Confirmation:",
  );

  fireEvent.change(emailInput, { target: { value: "foo" } });
  fireEvent.change(passwordInput, { target: { value: "Qw3rtyui" } });
  fireEvent.change(passwordConfirmationInput, {
    target: { value: "Qw3rtyu!" },
  });

  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);

  screen.getByText("Password must contain a symbol.");
});
