import React from "react";
import Subtask from "./Subtask";
import type { ITask } from "../types/ITask";
import styles from "./Task.module.css";

const Task: React.FC<ITask> = ({ title, description, isDone, subtasks }) => (
  <li className={styles.task}>
    <main className={styles.taskMain}>
      <div className={styles.taskMainLeft}>
        <h1 className={styles.taskTitle}>{title}</h1>
        <p className={styles.taskDescription}>{description}</p>
      </div>
      <div className={styles.taskMainRight}>
        <div className={styles.taskIsDone}>{isDone ? "done" : "not done"}</div>
      </div>
    </main>
    <footer className={styles.taskFooter}>
      {subtasks.length > 0 && (
        <ul className={styles.subtasks}>
          {subtasks.map((subtask) => (
            <Subtask
              key={subtask.id}
              id={subtask.id}
              title={subtask.title}
              isDone={subtask.isDone}
            />
          ))}
        </ul>
      )}
    </footer>
  </li>
);

export default Task;
