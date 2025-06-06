import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, expect, test, vi } from "vitest";
import App from "./App";

afterEach(cleanup);

test("fetches tasks and renders response data on success", async () => {
  const tasks = [
    {
      id: "f89568ed-6b94-447c-8a7a-76837d6eae94",
      title: "Task #1",
      description: "Do something",
      isDone: false,
      subtasks: [
        {
          id: "d0b1589c-70f8-44d5-8020-e8800d0349fc",
          title: "Subtask #1",
          isDone: true,
        },
        {
          id: "5618c192-4a39-48d5-a1ef-09b8d51a673b",
          title: "Subtask #2",
          isDone: false,
        },
      ],
    },
    {
      id: "7ae82a61-1590-4d12-8f09-0c190a922d1e",
      title: "Task #2",
      description: "Do something else",
      isDone: true,
      subtasks: [],
    },
  ];
  const spyFetch = vi.fn();
  spyFetch.mockResolvedValue({ json: async () => tasks });
  global.fetch = spyFetch;

  render(<App />);

  await waitFor(() => {
    screen.getByText(tasks[0].title);
    screen.getByText(tasks[0].description);
    screen.getByText(tasks[0].subtasks[0].title);
    screen.getByText(tasks[0].subtasks[1].title);
    screen.getByText(tasks[1].title);
    screen.getByText(tasks[1].description);

    expect(screen.getAllByText("done").length).toBe(2);
    expect(screen.getAllByText("not done").length).toBe(2);
  });
});

test("logs error on fetch error", async () => {
  const errorMessage = "fetch error";
  const spyFetch = vi.fn();
  spyFetch.mockRejectedValue(errorMessage);
  global.fetch = spyFetch;
  const spyLog = vi.fn();
  console.log = spyLog;

  render(<App />);

  await waitFor(() => {
    expect(console.log).toHaveBeenCalledWith(
      "error while fetching tasks: " + errorMessage,
    );
  });
});

test("logs error on parse error", async () => {
  const errorMessage = "parse error";
  const spyJson = vi.fn();
  spyJson.mockRejectedValue(errorMessage);
  const spyFetch = vi.fn();
  spyFetch.mockResolvedValue({ json: spyJson });
  global.fetch = spyFetch;
  const spyLog = vi.fn();
  console.log = spyLog;

  render(<App />);

  await waitFor(() => {
    expect(console.log).toHaveBeenCalledWith(
      "error while parsing tasks: " + errorMessage,
    );
  });
});
