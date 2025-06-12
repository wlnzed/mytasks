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

  const username = "foo";
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
