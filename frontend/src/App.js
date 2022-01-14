import axios from "axios";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PrivateRoute from "./middleware/PrivateRoute";
import LoginPage from "./components/LoginPage/LoginPage";
import NewUserPage from "./components/NewUserPage";
import ConversationsPage from "./components/ConversationsPage/ConversationsPage";

function App() {
  // IF IN DEVELOPMENT, WE WANT TO COMMUNICATE WITH SEPARATE BACKEND API SERVER, SO THE BASE URL CHANGES.
  axios.defaults.baseURL = process.env.REACT_APP_API_URL || "";

  return (
    <Router>
      <Routes>
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/signup" exact element={<NewUserPage />} />
        <Route
          path="/convos"
          exact
          element={<PrivateRoute element={<ConversationsPage />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
