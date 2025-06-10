import type { ISubtask } from "./ISubtask";

export interface ITask {
  id: string;
  title: string;
  description: string;
  isDone: boolean;
  subtasks: ISubtask[];
}
