import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./components/LoginPage/LoginPage";
import NewUserPage from "./components/NewUserPage";
import ConversationsPage from "./components/ConversationsPage/ConversationsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/signup" exact element={<NewUserPage />} />
        <Route path="/convos" exact element={<ConversationsPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
