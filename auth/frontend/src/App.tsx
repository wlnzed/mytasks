import { useEffect } from "react";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Cookies from "js-cookie";

const App = () => {
  useEffect(() => {
    if (
      window.location.pathname !== "/sign-in" &&
      window.location.pathname !== "/sign-up"
    ) {
      if (Cookies.get("user-email") === undefined) {
        window.location.pathname = "/sign-in";
      } else if (window.location.pathname !== "/home") {
        window.location.pathname = "/home";
      }
    }
  }, []);

  return (
    <div className={styles.app}>
      <Router>
        <Routes>
          <Route path="/" element={<>TODO: SPINNER</>} />
          <Route path="/home" element={<>TODO: SIGNED IN VIEW</>} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<>TODO: SIGN IN VIEW</>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
