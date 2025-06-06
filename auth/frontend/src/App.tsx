import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import SignUp from "./components/SignUp";
import routes from "./routes";
import styles from "./App.module.css";

const App = () => {
  useEffect(() => {
    if (
      window.location.pathname !== routes.signIn &&
      window.location.pathname !== routes.signUp
    ) {
      if (Cookies.get("user-email") === undefined) {
        window.location.pathname = routes.signIn;
      } else if (window.location.pathname !== routes.home) {
        // TODO: validate cookie
        window.location.pathname = routes.home;
      }
    }
  }, []);

  return (
    <div className={styles.app}>
      <Router>
        <Routes>
          <Route path={routes.init} element={<>TODO: SPINNER</>} />
          <Route path={routes.home} element={<>TODO: HOME VIEW</>} />
          <Route path={routes.signIn} element={<>TODO: SIGN IN VIEW</>} />
          <Route path={routes.signUp} element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
