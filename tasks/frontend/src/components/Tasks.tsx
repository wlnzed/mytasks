import { useEffect, useState } from "react";
import Task from "./Task";
import tasksApi from "../api/tasks";
import type { ITask } from "../types/ITask";
import styles from "./Tasks.module.css";

const Tasks = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    tasksApi
      .get()
      .then((resp) => {
        resp
          .json()
          .then(setTasks)
          .catch((err) => console.log("error while parsing tasks: ", err));
      })
      .catch((err) => console.log("error while fetching tasks: " + err));
  }, []);

  return (
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
  );
};

export default Tasks;
