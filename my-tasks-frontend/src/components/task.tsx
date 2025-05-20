import { FC } from "react";
import Subtask from "./subtask";
import styles from "./task.module.css";

interface Props {
  title: string,
  description: string,
  isDone: boolean,
  subtasks: {
    title: string,
    isDone: boolean,
  }[],
}

const Task: FC<Props> = ({ title, description, isDone, subtasks }) => (
  <li className={styles.task}>
    <h1 className={styles.taskTitle}>
      {title}
    </h1>
    <p className={styles.taskDescription}>
      {description}
    </p>
    <div className={styles.isDone}>
      {/* TODO: replace with SVGs */}
      {isDone ? "done" : "not done"}
    </div>
    <ul className={styles.subtasks}>
      {subtasks.map((subtask, i) => (
        <Subtask key={i} title={subtask.title} isDone={subtask.isDone} />
      ))}
    </ul>
  </li>
);

export default Task;