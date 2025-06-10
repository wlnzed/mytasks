import { useState } from "react";
import signUpApi from "../api/signUp.ts";
import routes from "../routes.ts";
import styles from "./SignUp.module.css";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const submit = (e: React.MouseEvent) => {
    e.preventDefault();

    signUpApi.post(username, password, passwordConfirmation).catch((err) => {
      console.log("error while signing up: " + err);
    });
  };

  return (
    <form className={styles.signUpForm}>
      <h1 className={styles.formTitle}>Sign Up:</h1>

      <label className={styles.usernameInputLabel} htmlFor="username-input">
        Username:
      </label>
      <input
        id="username-input"
        className={styles.usernameInput}
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label className={styles.passwordInputLabel} htmlFor="password-input">
        Password:
      </label>
      <input
        id="password-input"
        className={styles.passwordInput}
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <label
        className={styles.passwordConfirmationInputLabel}
        htmlFor="password-confirmation-input"
      >
        Password Confirmation:
      </label>
      <input
        id="password-confirmation-input"
        className={styles.passwordConfirmationInput}
        type="text"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
      />

      <button className={styles.submitButton} type="submit" onClick={submit}>
        Submit
      </button>

      <button
        className={styles.signInButton}
        onClick={(e) => {
          e.preventDefault();
          window.location.pathname = routes.signIn;
        }}
      >
        Sign In
      </button>
    </form>
  );
};

export default SignUp;
