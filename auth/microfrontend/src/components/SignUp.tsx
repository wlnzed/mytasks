import { useState } from "react";
import validator from "validator";
import signUpApi from "../api/signUp.ts";
import routes from "../routes.ts";
import styles from "./SignUp.module.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const submit = (e: React.MouseEvent) => {
    e.preventDefault();

    if (validator.isEmpty(email)) {
      setEmailError("Email cannot be empty.");
    } else if (!validator.isEmail(email)) {
      setEmailError("Invalid email format.");
    }

    if (validator.isEmpty(password)) {
      setPasswordError("Password cannot be empty.");
    } else if (!validator.isLength(password, { min: 8 })) {
      setPasswordError("Password must be at least 8 characters long.");
    } else if (validator.isUppercase(password)) {
      setPasswordError("Password must contain a lowercase letter.");
    }

    if (emailError === "" && passwordError === "") {
      signUpApi.post(email, password, passwordConfirmation).catch((err) => {
        console.log("error while signing up: " + err);
      });
    }
  };

  return (
    <form className={styles.signUpForm}>
      <h1 className={styles.formTitle}>Sign Up:</h1>

      <label className={styles.emailInputLabel} htmlFor="email-input">
        Email:
      </label>
      <div className={styles.emailInputContainer}>
        <input
          id="email-input"
          className={styles.emailInput}
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError !== "" && (
          <span className={styles.errorMessage}>{emailError}</span>
        )}
      </div>

      <label className={styles.passwordInputLabel} htmlFor="password-input">
        Password:
      </label>
      <div className={styles.emailInputContainer}>
        <input
          id="password-input"
          className={styles.passwordInput}
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError !== "" && (
          <span className={styles.errorMessage}>{passwordError}</span>
        )}
      </div>

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
