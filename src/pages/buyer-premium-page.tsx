import { useState } from "react";
import { Link } from "react-router-dom";
import { useBuyer } from "../context/BuyerContext";
import Navbar from "../components/navbar";

const benefits = [
  "Profil di paling atas daftar pembeli",
  "Badge PREMIUM mencolok",
  "Highlight warna emas di kartu profil",
  "Lebih mudah ditemukan penjual",
  "Prioritas tampil di halaman utama",
];

function BuyerPremiumPage() {
  const { isBuyerAuthenticated, isBuyerPremium, upgradeToBuyerPremium } = useBuyer();
  const [showSuccess, setShowSuccess] = useState(false);

  // Sudah premium
  if (isBuyerPremium && !showSuccess) {
    return (
      <div className="min-h-screen bg-[#F9F9F9]">
        <Navbar />
        <div className="flex items-center justify-center py-[120px] px-4">
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
              Profil Anda sekarang tampil di paling atas dan lebih mencolok
            </p>
            <div className="flex flex-col gap-3">
              <Link
                to="/buyer/profile"
                className="block w-full py-3 bg-[#2F5E2F] text-white rounded-xl font-medium hover:bg-[#244824] transition text-center"
              >
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Success page
  if (showSuccess) {
    return (
      <div className="min-h-screen bg-[#F9F9F9]">
        <Navbar />
        <div className="flex items-center justify-center py-[120px] px-4">
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
              Profil Anda sekarang tampil di paling atas dan lebih mencolok
            </p>
            <div className="flex flex-col gap-3">
              <Link
                to="/buyer/profile"
                className="block w-full py-3 bg-[#2F5E2F] text-white rounded-xl font-medium hover:bg-[#244824] transition text-center"
              >
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Belum premium → tampilkan paket
  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <Navbar />

      {/* Header */}
      <section className="bg-[#2F5E2F] py-12 md:py-16 px-4 md:px-8 lg:px-[160px]">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
            </svg>
            <span className="text-[14px] font-medium text-white">Buyer Premium</span>
          </div>
          <h1 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold text-white mb-4">
            Premium untuk Pembeli
          </h1>
          <p className="text-[16px] text-white/80 max-w-[500px] mx-auto">
            Tingkatkan visibilitas profil Anda agar lebih mudah ditemukan oleh penjual kayu
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-4 md:px-8 lg:px-[160px] py-10 md:py-12 lg:py-[60px]">
        <div className="flex flex-col md:flex-row justify-center gap-6 max-w-[800px] mx-auto">
          {/* Free Plan */}
          <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <div className="text-center mb-6">
              <span className="text-[32px]">🆓</span>
              <h2 className="text-[24px] font-bold text-[#4A4A4A] mt-2">Free</h2>
              <p className="text-[14px] text-gray-500 mt-1">Profil tampil di daftar</p>
            </div>
            <ul className="flex flex-col gap-3 mb-8">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[14px] text-[#4A4A4A]">Profil tampil di daftar pembeli</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[14px] text-[#4A4A4A]">Dihubungi penjual via WhatsApp</span>
              </li>
              <li className="flex items-start gap-3 opacity-40">
                <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-[14px] text-gray-500 line-through">Badge PREMIUM</span>
              </li>
              <li className="flex items-start gap-3 opacity-40">
                <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-[14px] text-gray-500 line-through">Ditaruh di paling atas</span>
              </li>
            </ul>
            <div className="text-center">
              <span className="text-[28px] font-bold text-[#4A4A4A]">Gratis</span>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="flex-1 bg-white rounded-2xl shadow-lg border-2 border-[#2F5E2F] p-8 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-[12px] font-bold">
              ⭐ RECOMMENDED
            </div>
            <div className="text-center mb-6">
              <span className="text-[32px]">👑</span>
              <h2 className="text-[24px] font-bold text-[#2F5E2F] mt-2">Premium</h2>
              <p className="text-[14px] text-gray-500 mt-1">Lebih mencolok & di atas</p>
            </div>
            <ul className="flex flex-col gap-3 mb-8">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#2F5E2F] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[14px] text-[#4A4A4A] font-medium">Semua fitur Free</span>
              </li>
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#2F5E2F] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[14px] text-[#4A4A4A]">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="text-center mb-6">
              <span className="text-[28px] font-bold text-[#2F5E2F]">Rp 99.000</span>
              <span className="text-[14px] text-gray-500">/bulan</span>
            </div>
            <button
              onClick={() => {
                if (!isBuyerAuthenticated) {
                  window.location.href = "/buyer/login";
                  return;
                }
                upgradeToBuyerPremium();
                setShowSuccess(true);
              }}
              className="w-full py-3.5 rounded-xl bg-[#2F5E2F] text-white text-[16px] font-medium hover:bg-[#244824] transition"
            >
              {!isBuyerAuthenticated ? "Login untuk Daftar" : "Upgrade ke Premium"}
            </button>
          </div>
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

export default BuyerPremiumPage;
