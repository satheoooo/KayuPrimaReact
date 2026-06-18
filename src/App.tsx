import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/home-page";
import LoginPage from "./pages/login-page";
import RegisterPage from "./pages/register-page";
import ForgotPasswordPage from "./pages/forgot-password-page";
import CatalogPage from "./pages/catalog-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/catalog" element={<CatalogPage />} />
    </Routes>
  );
}

export default App;
