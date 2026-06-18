import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/navbar";

const packages = [
  {
    id: "premium",
    name: "Premium",
    badge: "⭐",
    benefits: [
      "Lihat semua calon pembeli",
      "Chat via WhatsApp langsung",
      "Kalkulator harga perbandingan",
      "Grafik tren harga kayu",
      "Export hasil kalkulasi",
    ],
  },
];

function PremiumPage() {
  const { isAuthenticated, isPremium, upgradeToPremium } = useAuth();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleDaftar = () => {
    upgradeToPremium();
    setShowSuccess(true);
  };

  // Sudah premium → tampilkan status
  if (isPremium && !showSuccess) {
    return (
      <div className="min-h-screen bg-[#F9F9F9]">
        <Navbar />
        <div className="flex items-center justify-center py-[120px]">
          <div className="text-center bg-white rounded-2xl p-10 shadow-lg max-w-[420px]">
            <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
              </svg>
            </div>
            <h2 className="text-[24px] font-bold text-[#2F5E2F] mb-2">
              Kamu Sudah Premium! ✨
            </h2>
            <p className="text-[15px] text-gray-500 mb-6">
              Nikmati semua akses fitur premium KayuPrima
            </p>
            <div className="flex flex-col gap-3">
              <Link
                to="/pembeli-premium"
                className="block w-full py-3 bg-[#2F5E2F] text-white rounded-xl font-medium hover:bg-[#244824] transition text-center"
              >
                Lihat Calon Pembeli
              </Link>
              <Link
                to="/premium-calculator"
                className="block w-full py-3 border-2 border-[#2F5E2F] text-[#2F5E2F] rounded-xl font-medium hover:bg-[#2F5E2F] hover:text-white transition text-center"
              >
                Buka Kalkulator Premium
              </Link>
              <Link
                to="/"
                className="block w-full py-3 text-gray-400 text-[14px] font-medium hover:text-gray-600 transition text-center"
              >
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Success page setelah daftar
  if (showSuccess) {
    return (
      <div className="min-h-screen bg-[#F9F9F9]">
        <Navbar />
        <div className="flex items-center justify-center py-[120px]">
          <div className="text-center bg-white rounded-2xl p-10 shadow-lg max-w-[420px]">
            <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
              </svg>
            </div>
            <h2 className="text-[24px] font-bold text-[#2F5E2F] mb-2">
              Selamat! Kamu Premium! 🎉
            </h2>
            <p className="text-[15px] text-gray-500 mb-6">
              Sekarang kamu bisa akses semua fitur premium KayuPrima
            </p>
            <div className="flex flex-col gap-3">
              <Link
                to="/"
                className="block w-full py-3 bg-[#2F5E2F] text-white rounded-xl font-medium hover:bg-[#244824] transition text-center"
              >
                Kembali ke Beranda
              </Link>
              <Link
                to="/pembeli-premium"
                className="block w-full py-3 border-2 border-[#2F5E2F] text-[#2F5E2F] rounded-xl font-medium hover:bg-[#2F5E2F] hover:text-white transition text-center"
              >
                Cek Pembeli Premium
              </Link>
              <Link
                to="/premium-calculator"
                className="block w-full py-3 border-2 border-[#2F5E2F] text-[#2F5E2F] rounded-xl font-medium hover:bg-[#2F5E2F] hover:text-white transition text-center"
              >
                Cek Kalkulator Premium
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Belum premium → tampilkan paket/plan
  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <Navbar />

      {/* Header */}
      <section className="bg-[#2F5E2F] py-16 px-[160px]">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
            </svg>
            <span className="text-[14px] font-medium text-white">Premium Membership</span>
          </div>
          <h1 className="text-[42px] font-bold text-white mb-4">
            Pilih Paket Premium
          </h1>
          <p className="text-[16px] text-white/80 max-w-[500px] mx-auto">
            Akses daftar calon pembeli dan hubungi mereka langsung via WhatsApp
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="px-[160px] py-[60px]">
        <div className="flex justify-center">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl shadow-lg border-2 border-[#2F5E2F] p-8 max-w-[420px] w-full"
            >
              <div className="text-center mb-6">
                <span className="text-[40px]">{pkg.badge}</span>
                <h2 className="text-[28px] font-bold text-[#2F5E2F] mt-2">
                  {pkg.name}
                </h2>
              </div>

              <div className="mb-8">
                <p className="text-[14px] font-medium text-gray-500 mb-4">Yang kamu dapatkan:</p>
                <ul className="flex flex-col gap-3">
                  {pkg.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#2F5E2F] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[15px] text-[#4A4A4A]">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={handleDaftar}
                disabled={!isAuthenticated}
                className="w-full py-3.5 rounded-xl bg-[#2F5E2F] text-white text-[16px] font-medium hover:bg-[#244824] transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {!isAuthenticated ? "Login untuk Daftar" : "Daftar Sekarang"}
              </button>

              {!isAuthenticated && (
                <p className="text-[13px] text-gray-400 text-center mt-4">
                  Masuk terlebih dahulu untuk mendaftar
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/"
            className="text-[14px] text-[#2F5E2F] font-medium hover:underline inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Kembali ke Beranda
          </Link>
        </div>
      </section>
    </div>
  );
}

export default PremiumPage;
