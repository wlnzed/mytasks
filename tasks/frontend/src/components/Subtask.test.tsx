import { afterEach, test } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import Subtask from "./Subtask";

afterEach(cleanup);

test("renders subtasks data (not done)", () => {
  const title = "subtask #1";
  const isDone = false;

  render(<Subtask id="" title={title} isDone={isDone} />);

  screen.getByText(title);
  screen.getByText("not done");
});

test("renders subtasks data (done)", () => {
  const title = "subtask #2";
  const isDone = true;

  render(<Subtask id="" title={title} isDone={isDone} />);

  screen.getByText(title);
  screen.getByText("done");
});
