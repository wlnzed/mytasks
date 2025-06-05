import type { ISubtask } from "./ISubtask";

export interface ITask {
  title: string;
  description: string;
  isDone: boolean;
  subtasks: ISubtask[];
}
