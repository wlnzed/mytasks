import { useState, useEffect } from "react";
import Task from "./components/Task";
import styles from "./App.module.css";

interface TaskData {
  title: string;
  description: string;
  isDone: boolean;
  subtasks: {
    title: string;
    isDone: boolean;
  }[];
}

function App() {
  const [tasks, setTasks] = useState<TaskData[]>([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND_URL + "/tasks")
      .then((resp) => {
        resp
          .json()
          .then((tasksData) => {
            setTasks(tasksData);
          })
          .catch((err) => {
            console.log("error when parsing tasks:\n", err);
          });
      })
      .catch((err) => {
        console.log("error when fetching tasks:\n" + err);
      });
  }, []);

  return (
    <div className={styles.app}>
      <ul className={styles.tasks}>
        {tasks.map((task, i) => (
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
}

export default App;
