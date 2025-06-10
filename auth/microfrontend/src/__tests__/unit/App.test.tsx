import { afterEach, expect, test } from "vitest";
import { cleanup, render } from "@testing-library/react";
import Cookies from "js-cookie";
import App from "../../App";

afterEach(cleanup);

test("navigates to sign in when no user email cookie", async () => {
  const expectedPath = "/sign-in";
  Object.defineProperty(window, "location", {
    value: { origin: "https://localhost:1234", pathname: "/" },
  });

  render(<App />);

  expect(window.location.pathname).toBe(expectedPath);
});

test("navigates to home when user email cookie is present", async () => {
  ["/", "/sign-in", "/sign-up"].forEach((route) => {
    const expectedPath = "/home";
    Object.defineProperty(window, "location", {
      value: { origin: "https://localhost:1234", pathname: route },
    });
    Cookies.set("user-email", "user@email.com");

    render(<App />);

    expect(window.location.pathname).toBe(expectedPath);
  });
});
