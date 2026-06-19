import { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Email harus diisi");
      return;
    }

    setIsLoading(true);

    // Simulasi API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] flex flex-col lg:flex-row">
      {/* Left Side - Form */}
      <div className="w-full lg:w-[500px] bg-white flex flex-col justify-center px-6 md:px-12 py-10 lg:py-0">
        {/* Logo */}
        <Link to="/" className="text-[28px] font-bold text-[#2F5E2F] mb-10">
          KayuPrima
        </Link>

        {isSuccess ? (
          /* Success State */
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-[#F0F7F0] flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-[#2F5E2F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-[28px] font-bold text-[#2F5E2F] mb-3">
              Email Terkirim!
            </h1>
            <p className="text-[15px] text-[#4A4A4A] mb-6">
              Kami telah mengirim link reset password ke{" "}
              <span className="font-medium text-[#2F5E2F]">{email}</span>
            </p>
            <p className="text-[14px] text-gray-500 mb-8">
              Silakan cek email Anda dan ikuti instruksi untuk mereset password.
              Jika tidak ada email, cek folder spam.
            </p>
            <Link
              to="/login"
              className="block w-full py-3 rounded-xl bg-[#2F5E2F] text-white text-[15px] font-medium hover:bg-[#244824] transition text-center"
            >
              Kembali ke Login
            </Link>
          </div>
        ) : (
          /* Form State */
          <>
            {/* Header */}
            <h1 className="text-[32px] font-bold text-[#2F5E2F] mb-2">
              Lupa Password?
            </h1>
            <p className="text-[15px] text-[#4A4A4A] mb-8">
              Tenang, kami akan bantu Anda mereset password.{" "}
              <Link to="/login" className="text-[#2F5E2F] font-medium hover:underline">
                Kembali ke login
              </Link>
            </p>

            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-[#F0F7F0] flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#2F5E2F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-[14px] text-red-600">
                  {error}
                </div>
              )}

              <div className="mb-6">
                <label className="block text-[14px] font-medium text-[#4A4A4A] mb-2">
                  Email yang terdaftar
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nama@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[15px] text-[#4A4A4A] focus:outline-none focus:border-[#2F5E2F] transition bg-gray-50"
                />
                <p className="text-[13px] text-gray-500 mt-2">
                  Masukkan email yang Anda gunakan saat mendaftar. Kami akan mengirim link untuk mereset password.
                </p>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 rounded-xl bg-[#2F5E2F] text-white text-[15px] font-medium hover:bg-[#244824] transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  "Memproses..."
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Kirim Link Reset
                  </>
                )}
              </button>
            </form>

            {/* Help */}
            <div className="mt-8 p-4 bg-gray-50 rounded-xl">
              <p className="text-[13px] text-gray-500 text-center">
                Butuh bantuan?{" "}
                <a href="#" className="text-[#2F5E2F] font-medium hover:underline">
                  Hubungi Support
                </a>
              </p>
            </div>
          </>
        )}
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:flex flex-1 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1200&h=900&fit=crop"
          alt="Kayu Premium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2F5E2F]/80 to-transparent"></div>
        <div className="absolute top-1/2 left-16 -translate-y-1/2 max-w-[400px]">
          <h2 className="text-[28px] lg:text-[36px] font-bold text-white mb-4 leading-tight">
            Keamanan Akun Anda
          </h2>
          <p className="text-[16px] text-white/90 leading-relaxed">
            Kami menjaga keamanan akun Anda. Reset password hanya bisa
            dilakukan melalui email yang terdaftar.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
