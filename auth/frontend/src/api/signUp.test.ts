import { expect, test, vi } from "vitest";
import signUpApi from "./signUp";

test("makes post request with user details to the sign up endpoint", () => {
  const username = "someuser";
  const password = "p@ssword";
  const passwordConfirmation = "p@asswordConfirmation";
  const expectedBody =
    `{"username":"${username}","password":"${password}"` +
    `,"passwordConfirmation":"${passwordConfirmation}"}`;
  global.fetch = vi.fn();

  signUpApi.post(username, password, passwordConfirmation);

  expect(fetch).toHaveBeenCalledWith(
    import.meta.env.VITE_BACKEND_URL + "/sign-up",
    {
      method: "post",
      body: expectedBody,
      headers: { "Content-Type": "application/json" },
    },
  );
});
