import { useEffect, useState } from "react";
import Task from "./components/Task";
import tasksApi from "./api/tasks";
import type { ITask } from "./types/ITask";
import styles from "./App.module.css";

const App = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    tasksApi
      .get()
      .then((res) => {
        res
          .json()
          .then(setTasks)
          .catch((err) => console.log("error while parsing tasks: ", err));
      })
      .catch((err) => console.log("error while fetching tasks: " + err));
  }, []);

  return (
    <ul className={styles.tasks}>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          isDone={task.isDone}
          subtasks={task.subtasks}
        />
      ))}
    </ul>
  );
};

export default App;
