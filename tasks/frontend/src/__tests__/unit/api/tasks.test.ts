import { test, vi, expect } from "vitest";
import tasksApi from "../../../api/tasks";

test("makes get request with credentials to the tasks endpoint", () => {
  global.fetch = vi.fn();

  tasksApi.get();

  expect(fetch).toHaveBeenCalledWith(
    import.meta.env.VITE_BACKEND_URL + "/tasks",
    { credentials: "include" },
  );
});

test("returns response as-is from the fetch call", async () => {
  const expectedResponse = "some response";
  const spyFetch = vi.fn();
  spyFetch.mockResolvedValue(Promise.resolve(expectedResponse));
  global.fetch = spyFetch;

  const actualResponse = await tasksApi.get();

  expect(actualResponse).toEqual(expectedResponse);
});
