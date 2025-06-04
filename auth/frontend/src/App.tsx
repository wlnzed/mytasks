import { useState } from "react";
import SignUp from "./components/SignUp";
import styles from "./App.module.css";

const views = {
  signedIn: "SIGNED_IN",
  signUp: "SIGN_UP",
  signIn: "SIGN_IN",
};

const App = () => {
  const [view, setView] = useState(views.signUp);

  const render = () => {
    switch (view) {
      case views.signedIn:
        return <>TODO: SIGNED IN VIEW</>;
      case views.signUp:
        return <SignUp viewSignIn={() => setView(views.signIn)} />;
      case views.signIn:
        return <>TODO: SIGN IN VIEW</>;
    }
  };

  return <div className={styles.app}>{render()}</div>;
};

export default App;
