const signUpApi = {
  post: (username: string, password: string, passwordConfirmation: string) =>
    fetch(import.meta.env.VITE_AUTH_MICROSERVICE_URL + "/sign-up", {
      method: "post",
      body: JSON.stringify({ username, password, passwordConfirmation }),
      headers: { "Content-Type": "application/json" },
    }),
};

export default signUpApi;
