import { test, vi, expect } from "vitest";
import tasksApi from "./tasks";

test("makes get request to the tasks endpoint", () => {
  global.fetch = vi.fn();

  tasksApi.get();

  expect(fetch).toHaveBeenCalledWith(
    import.meta.env.VITE_BACKEND_URL + "/tasks",
    { credentials: "include" },
  );
});
