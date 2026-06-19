import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { BuyerProvider } from "./context/BuyerContext";

import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <BuyerProvider>
          <App />
        </BuyerProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
