import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./Components/AuthContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
