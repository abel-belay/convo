import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import UserContext from "./store/userContext";
import PrivateRoute from "./middleware/PrivateRoute";
import LoginPage from "./components/LoginPage/LoginPage";
import NewUserPage from "./components/NewUserPage";
import ConversationsPage from "./components/ConversationsPage/ConversationsPage";

function App() {
  // IF IN DEVELOPMENT, WE WANT TO COMMUNICATE WITH SEPARATE BACKEND API SERVER, SO THE BASE URL CHANGES.
  axios.defaults.baseURL = process.env.REACT_APP_API_URL || "";
  axios.defaults.withCredentials = true;

  const userContext = useContext(UserContext);
  const [checkedLoginStatus, setCheckedLoginStatus] = useState(false);

  // ATTEMPT TO LOGIN AND SET
  useEffect(() => {
    const attemptLogin = async () => {
      try {
        const res = await axios.post("/api/users/login", {});
        userContext.setUser(res.data.user);
      } catch (e) {
        console.log("ERROR");
      }
      setCheckedLoginStatus(true);
    };
    attemptLogin();
  }, []);

  if (checkedLoginStatus) {
    return (
      <Router>
        <Routes>
          <Route
            path="/login"
            exact
            element={
              userContext.user ? <Navigate to="/convos" /> : <LoginPage />
            }
          />
          <Route path="/signup" exact element={<NewUserPage />} />
          <Route
            path="/convos"
            exact
            element={<PrivateRoute element={<ConversationsPage />} />}
          />
          <Route path="*" element={<Navigate to="/convos" />} />
        </Routes>
      </Router>
    );
  } else {
    return <p>Loading...</p>;
  }
}

export default App;
