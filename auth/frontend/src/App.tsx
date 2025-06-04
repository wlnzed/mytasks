import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";

const App = () => {
  // window.location.pathname = "/sign-in";

  return (
    <div className={styles.app}>
      <Router>
        <Routes>
          <Route path="/" element={<>TODO: SIGNED IN VIEW</>} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<>TODO: SIGN IN VIEW</>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
