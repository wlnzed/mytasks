const tasksApi = {
  get: () =>
    fetch(import.meta.env.VITE_BACKEND_URL + "/tasks", {
      credentials: "include",
    }),
};

export default tasksApi;
