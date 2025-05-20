import { FC } from "react";
import styles from "./page.module.css";
import Task from "../components/task";

const placeholderTasks = [
  {
    title: "Task #1",
    description: "The first task",
    isDone: true,
    subtasks: [],
  },
  {
    title: "Task #2",
    description: "the second task",
    isDone: false,
    subtasks: [                                                                  
      { title: "Subtask #1", isDone: true },
      { title: "Subtask #2", isDone: false }
    ],
  },
];

const Home : FC = () => (
  <div className={styles.page}>
    <ul className={styles.tasks}>
      {placeholderTasks.map((task, i) => (
        <Task 
          key={i}
          title={task.title} 
          description={task.description} 
          isDone={task.isDone} 
          subtasks={task.subtasks} 
        />
      ))}
    </ul>
  </div>
);

export default Home;