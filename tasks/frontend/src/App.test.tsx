import { render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import App from "./App";

test("fetches tasks and renders response data on success", () => {
  const expectedTasks = [
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
  spyFetch.mockResolvedValue({ json: async () => expectedTasks });
  global.fetch = spyFetch;

  render(<App />);

  setTimeout(() => {
    screen.getByText(expectedTasks[0].title);
    screen.getByText(expectedTasks[0].description);
    screen.getByText(expectedTasks[0].subtasks[0].title);
    screen.getByText(expectedTasks[0].subtasks[1].title);
    screen.getByText(expectedTasks[1].title);
    screen.getByText(expectedTasks[1].description);
    expect(screen.getAllByText("done").length).toBe(2);
    expect(screen.getAllByText("not done").length).toBe(2);
  });
});
