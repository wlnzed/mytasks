import { useState, useEffect } from "react";
import Task from "./components/Task";
import styles from "./App.module.css";

const App = () => {
  const [tasks, setTasks] = useState<
    {
      title: string;
      description: string;
      isDone: boolean;
      subtasks: { title: string; isDone: boolean }[];
    }[]
  >([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND_URL + "/tasks", {
      credentials: "include",
    })
      .then((resp) => {
        resp
          .json()
          .then((tasksData) => {
            setTasks(tasksData);
          })
          .catch((err) => {
            console.log("error while parsing tasks: ", err);
          });
      })
      .catch((err) => {
        console.log("error while fetching tasks: " + err);
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
};

export default App;
