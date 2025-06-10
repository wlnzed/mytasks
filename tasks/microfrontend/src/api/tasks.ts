const tasksApi = {
  get: () =>
    fetch(import.meta.env.VITE_TASKS_MICROSERVICE_URL + "/tasks", {
      credentials: "include",
    }),
};

export default tasksApi;
