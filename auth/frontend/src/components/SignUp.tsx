import { useState } from "react";
import styles from "./SignUp.module.css";

interface Props {
  viewSignIn: () => void;
}

const SignUp: React.FC<Props> = ({ viewSignIn }) => {
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

      <button className={styles.signInButton} onClick={viewSignIn}>
        Sign In
      </button>
    </form>
  );
};

export default SignUp;
