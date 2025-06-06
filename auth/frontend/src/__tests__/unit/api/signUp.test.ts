import { expect, test, vi } from "vitest";
import signUpApi from "../../../api/signUp";

test("makes post request with user details to the sign up endpoint", async () => {
  const username = "someuser";
  const password = "p@ssword";
  const passwordConfirmation = "p@asswordConfirmation";
  const expectedBody =
    `{"username":"${username}","password":"${password}"` +
    `,"passwordConfirmation":"${passwordConfirmation}"}`;
  global.fetch = vi.fn();

  await signUpApi.post(username, password, passwordConfirmation);

  expect(fetch).toHaveBeenCalledWith(
    import.meta.env.VITE_BACKEND_URL + "/sign-up",
    {
      method: "post",
      body: expectedBody,
      headers: { "Content-Type": "application/json" },
    },
  );
});

test("returns response as-is from the fetch call", async () => {
  const expectedResponse = "some response";
  const spyFetch = vi.fn();
  spyFetch.mockResolvedValue(Promise.resolve(expectedResponse));
  global.fetch = spyFetch;

  const actualResponse = await signUpApi.post("", "", "");

  expect(actualResponse).toEqual(expectedResponse);
});
