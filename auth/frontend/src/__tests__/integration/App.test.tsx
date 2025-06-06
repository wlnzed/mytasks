import { afterEach, expect, test } from "vitest";
import App from "../../App";
import { cleanup, render } from "@testing-library/react";

afterEach(cleanup);

test("navigates to sign in when no user email cookie", () => {
  Object.defineProperty(window, "location", {
    value: { origin: "https://localhost:1234", pathname: "/" },
  });

  render(<App />);

  expect(window.location.pathname).toBe("/sign-in");
});
