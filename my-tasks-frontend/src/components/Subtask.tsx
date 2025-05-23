import React from "react";
import styles from "./Subtask.module.css";

interface Props {
  title: string;
  isDone: boolean;
}

const Subtask: React.FC<Props> = ({ title, isDone }) => (
  <li className={styles.subtask}>
    <h2 className={styles.subtaskTitle}>
      {title}
    </h2>
    <div className={styles.subtaskIsDone}>
      {isDone ? "done" : "not done"}
    </div>
  </li>
);

export default Subtask;
