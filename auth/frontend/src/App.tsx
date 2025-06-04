import React, { useState } from "react";
import styles from "./App.module.css";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const submit = (e: React.MouseEvent) => {
    e.preventDefault();

    fetch(import.meta.env.VITE_BACKEND_URL + "/sign-up", {
      method: "post",
      body: JSON.stringify({
        username: username,
        password: password,
        passwordConfirmation: passwordConfirmation,
      }),
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <div className={styles.app}>
      <form className={styles.signUpForm}>
        <input
          className={styles.usernameInput}
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className={styles.passwordInput}
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          className={styles.passwordConfirmationInput}
          type="text"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />

        <button className={styles.submitButton} type="submit" onClick={submit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
