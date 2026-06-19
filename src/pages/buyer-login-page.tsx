import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useBuyer } from "../context/BuyerContext";
import Logo from "../components/logo";

function BuyerLoginPage() {
  const navigate = useNavigate();
  const { loginBuyer } = useBuyer();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Email dan password harus diisi");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      loginBuyer(email, email.split("@")[0]);
      setIsLoading(false);
      navigate("/buyer/profile");
    }, 1000);
  };

  const handleGoogleLogin = () => {
    setIsLoading(true);

    setTimeout(() => {
      loginBuyer("buyer@gmail.com", "PT Pembeli Sukses");
      setIsLoading(false);
      navigate("/buyer/profile");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] flex flex-col lg:flex-row">
      {/* Left Side - Form */}
      <div className="w-full lg:w-[500px] bg-white flex flex-col justify-center px-6 md:px-12 py-10 lg:py-0 overflow-y-auto">
        {/* Logo */}
        <Link to="/" className="mb-8">
          <Logo size="md" />
        </Link>

        {/* Buyer Badge */}
        <div className="inline-flex items-center gap-2 bg-[#F0F7F0] px-4 py-2 rounded-full w-fit mb-6">
          <svg className="w-4 h-4 text-[#2F5E2F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <span className="text-[13px] font-medium text-[#2F5E2F]">Akun Pembeli</span>
        </div>

        {/* Header */}
        <h1 className="text-[28px] md:text-[32px] font-bold text-[#2F5E2F] mb-2">
          Masuk sebagai Pembeli
        </h1>
        <p className="text-[15px] text-[#4A4A4A] mb-8">
          Belum punya akun?{" "}
          <Link to="/buyer/register" className="text-[#2F5E2F] font-medium hover:underline">
            Daftar sekarang
          </Link>
        </p>

        {/* Google Login Button */}
        <button
          onClick={handleGoogleLogin}
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-gray-200 rounded-xl text-[15px] font-medium text-[#4A4A4A] hover:bg-gray-50 hover:border-gray-300 transition disabled:opacity-50 disabled:cursor-not-allowed mb-6"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          {isLoading ? "Memproses..." : "Masuk dengan Google"}
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-[13px] text-gray-400">atau</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Email Form */}
        <form onSubmit={handleLogin}>
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-[14px] text-red-600">
              {error}
            </div>
          )}

          <div className="mb-4">
            <label className="block text-[14px] font-medium text-[#4A4A4A] mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nama@perusahaan.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[15px] text-[#4A4A4A] focus:outline-none focus:border-[#2F5E2F] transition bg-gray-50"
            />
          </div>

          <div className="mb-6">
            <label className="block text-[14px] font-medium text-[#4A4A4A] mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[15px] text-[#4A4A4A] focus:outline-none focus:border-[#2F5E2F] transition bg-gray-50"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-xl bg-[#2F5E2F] text-white text-[15px] font-medium hover:bg-[#244824] transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Memproses..." : "Masuk"}
          </button>
        </form>

        {/* Switch to Seller */}
        <div className="mt-8 p-4 bg-gray-50 rounded-xl text-center">
          <p className="text-[13px] text-gray-500">
            Ingin menjual kayu?{" "}
            <Link to="/login" className="text-[#2F5E2F] font-medium hover:underline">
              Login sebagai Penjual
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:block flex-1 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1200&h=900&fit=crop"
          alt="Kayu Premium"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2F5E2F]/80 to-transparent"></div>
        <div className="absolute top-1/2 left-16 -translate-y-1/2 max-w-[400px]">
          <h2 className="text-[28px] lg:text-[36px] font-bold text-white mb-4 leading-tight">
            Cari Kayu Berkualitas untuk Bisnis Anda
          </h2>
          <p className="text-[16px] text-white/90 leading-relaxed">
            Temukan supplier kayu terpercaya dengan harga terbaik langsung dari pemilik lahan.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BuyerLoginPage;
