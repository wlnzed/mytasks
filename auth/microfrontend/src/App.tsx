import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import SignUp from "./components/SignUp";
import routes from "./routes";
import styles from "./App.module.css";

const App = () => {
  useEffect(() => {
    if (Cookies.get("user-email") === undefined) {
      if (
        window.location.pathname !== routes.signIn &&
        window.location.pathname !== routes.signUp
      ) {
        window.location.pathname = routes.signIn;
      }
    } else {
      // TODO: validate cookie
      if (window.location.pathname !== routes.home) {
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
