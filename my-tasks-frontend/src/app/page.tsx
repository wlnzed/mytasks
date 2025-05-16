import Image from "next/image";
import styles from "./page.module.css";

// TODO: replace checkboxes with SVGs for done/undone

export default function Home() {
  return (
    <div className={styles.page}>
      <ul className={styles.tasks}>
        <li className={styles.task}>
          <h1 className={styles.taskTitle}>
            Task #1
          </h1>
          <p className={styles.taskDescription}>
            The first task
          </p>
          <input type="checkbox" />
        </li>
        <li className={styles.task}>
          <h1 className={styles.taskTitle}>
            Task #2
          </h1>
          <p className={styles.taskDescription}>
            The second task
          </p>
          <input type="checkbox" />
          <ul className={styles.subtasks}>
            <li className={styles.subtask}>
              <h2 className={styles.subtaskTitle}>
                Subtask #1
              </h2>
              <input type="checkbox"/>
            </li>
            <li className={styles.subtask}>
              <h2 className={styles.subtaskTitle}>
                Subtask #2
              </h2>
              <input type="checkbox"/>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
