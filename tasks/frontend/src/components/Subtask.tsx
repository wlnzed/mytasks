import React from "react";
import type { ISubtask } from "../types/ISubtask";
import styles from "./Subtask.module.css";

const Subtask: React.FC<ISubtask> = ({ title, isDone }) => (
  <li className={styles.subtask}>
    <h2 className={styles.subtaskTitle}>{title}</h2>
    <div className={styles.subtaskIsDone}>{isDone ? "done" : "not done"}</div>
  </li>
);

export default Subtask;
