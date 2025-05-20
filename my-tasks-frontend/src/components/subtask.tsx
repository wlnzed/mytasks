import { FC } from "react";
import styles from "./subtask.module.css";

interface Props {
  title: string;
  isDone: boolean;
}

const Subtask: FC<Props> = ({ title, isDone }) => (
  <li className={styles.subtask}>
    <h2 className={styles.subtaskTitle}>
      Subtask #1
    </h2>
    <input type="checkbox" />
  </li>
);

export default Subtask;