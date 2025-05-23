import React from "react";
import Subtask from "./Subtask";
import styles from "./Task.module.css";

interface Props {
  title: string,
  description: string,
  isDone: boolean,
  subtasks: {
    title: string,
    isDone: boolean,
  }[],
}

const Task: React.FC<Props> = ({ title, description, isDone, subtasks }) => (
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
