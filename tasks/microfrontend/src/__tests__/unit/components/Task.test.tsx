import { afterEach, test } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Task from "../../../components/Task";

afterEach(cleanup);

test("renders task data (not done)", () => {
  const title = "Task #1";
  const description = "Do something";
  const isDone = false;

  render(
    <Task
      id=""
      title={title}
      description={description}
      isDone={isDone}
      subtasks={[]}
    />,
  );

  screen.getByText(title);
  screen.getByText(description);
  screen.getByText("not done");
});

test("renders task data (done)", () => {
  const title = "Task #2";
  const description = "Do something else";
  const isDone = true;

  render(
    <Task
      id=""
      title={title}
      description={description}
      isDone={isDone}
      subtasks={[]}
    />,
  );

  screen.getByText(title);
  screen.getByText(description);
  screen.getByText("done");
});
