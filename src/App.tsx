import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/home-page";
import LoginPage from "./pages/login-page";
import RegisterPage from "./pages/register-page";
import ForgotPasswordPage from "./pages/forgot-password-page";
import CatalogPage from "./pages/catalog-page";
import PremiumPage from "./pages/premium-page";
import BuyersPage from "./pages/buyers-page";
import PremiumCalculatorPage from "./pages/premium-calculator-page";
import BuyerLoginPage from "./pages/buyer-login-page";
import BuyerRegisterPage from "./pages/buyer-register-page";
import BuyerHomePage from "./pages/buyer-home-page";
import BuyerPremiumPage from "./pages/buyer-premium-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/premium" element={<PremiumPage />} />
      <Route path="/pembeli-premium" element={<BuyersPage />} />
      <Route path="/premium-calculator" element={<PremiumCalculatorPage />} />
      {/* Buyer Routes */}
      <Route path="/buyer/login" element={<BuyerLoginPage />} />
      <Route path="/buyer/register" element={<BuyerRegisterPage />} />
      <Route path="/buyer/profile" element={<BuyerHomePage />} />
      <Route path="/buyer/premium" element={<BuyerPremiumPage />} />
    </Routes>
  );
}

export default App;
