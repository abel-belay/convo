import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { UserContextProvider } from "./store/userContext";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { SelectedConversationContextProvider } from "./store/selectedConversationContext";
import { ShowConversationContextProvider } from "./store/showConversationContext";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <ShowConversationContextProvider>
        <SelectedConversationContextProvider>
          <App />
        </SelectedConversationContextProvider>
      </ShowConversationContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();
