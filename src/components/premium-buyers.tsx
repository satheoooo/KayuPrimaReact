import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const premiumBuyers = [
  {
    id: 1,
    name: "PT Maju Jaya",
    location: "Surabaya, Jawa Timur",
    woodNeeded: "Jati",
    quantity: "50 m³",
    budget: "Rp 750.000.000",
    avatar: "https://ui-avatars.com/api/?name=PT+Maju+Jaya&background=2F5E2F&color=fff",
    whatsapp: "6281234567890",
  },
  {
    id: 2,
    name: "CV Berkah Furniture",
    location: "Yogyakarta",
    woodNeeded: "Mahoni",
    quantity: "30 m³",
    budget: "Rp 240.000.000",
    avatar: "https://ui-avatars.com/api/?name=CV+Berkah+Furniture&background=2F5E2F&color=fff",
    whatsapp: "6281234567891",
  },
];

function PremiumBuyers() {
  const { isAuthenticated } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showPremiumModal, setShowPremiumModal] = useState(false);

  const isUserPremium = false;

  const handleViewAllClick = () => {
    if (!isAuthenticated) {
      setShowLoginModal(true);
      return;
    }
    if (!isUserPremium) {
      setShowPremiumModal(true);
      return;
    }
  };

  const shouldBlur = !isAuthenticated || !isUserPremium;

  return (
    <>
      <section className="px-[160px] py-[80px] bg-white">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#2F5E2F]/10 mb-4">
            <svg className="w-8 h-8 text-[#2F5E2F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <h2 className="text-[36px] font-bold text-[#2F5E2F] mb-4">
            Pembeli Premium
          </h2>
          <p className="text-[16px] text-[#4A4A4A] max-w-[600px] mx-auto">
            Temukan pembeli terpercaya yang siap membeli kayu Anda.
            Premium member mendapat prioritas tampil di atas.
          </p>
        </div>

        {/* Buyers Container */}
        <div className="relative">
          {/* Premium Buyers Cards - Blurred for non-premium */}
          <div className={`grid grid-cols-2 gap-6 mb-6 ${shouldBlur ? "blur-md pointer-events-none" : ""}`}>
            {premiumBuyers.map((buyer) => (
              <div
                key={buyer.id}
                className="relative bg-gradient-to-br from-[#2F5E2F] to-[#1a3d1a] rounded-2xl p-6 text-white overflow-hidden"
              >
                {/* Crown Icon */}
                <div className="absolute top-4 right-4">
                  <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
                  </svg>
                </div>

                {/* Premium Badge */}
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full mb-4">
                  <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
                  </svg>
                  <span className="text-[12px] font-bold">PREMIUM</span>
                </div>

                {/* Buyer Info */}
                <div className="flex items-start gap-4">
                  <img
                    src={buyer.avatar}
                    alt={buyer.name}
                    className="w-[60px] h-[60px] rounded-full border-2 border-white/30"
                  />
                  <div className="flex-1">
                    <h3 className="text-[18px] font-bold mb-1">{buyer.name}</h3>
                    <div className="flex items-center gap-1 text-[13px] text-white/80 mb-3">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {buyer.location}
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      <div>
                        <p className="text-[11px] text-white/60">Butuh</p>
                        <p className="text-[14px] font-bold">{buyer.woodNeeded}</p>
                      </div>
                      <div>
                        <p className="text-[11px] text-white/60">Jumlah</p>
                        <p className="text-[14px] font-bold">{buyer.quantity}</p>
                      </div>
                      <div>
                        <p className="text-[11px] text-white/60">Budget</p>
                        <p className="text-[14px] font-bold">{buyer.budget}</p>
                      </div>
                    </div>

                    <button className="w-full py-2.5 bg-white text-[#2F5E2F] rounded-xl font-medium hover:bg-gray-100 transition flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      Chat via WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Blur Overlay */}
          {shouldBlur && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 rounded-full bg-[#2F5E2F]/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#2F5E2F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-[20px] font-bold text-[#2F5E2F] mb-2">
                  {!isAuthenticated ? "Login untuk Melihat Pembeli" : "Upgrade ke Premium"}
                </h3>
                <p className="text-[14px] text-gray-500 mb-4">
                  {!isAuthenticated
                    ? "Daftar sekarang dan temukan pembeli kayu terpercaya"
                    : "Dapatkan akses penuh ke kontak pembeli premium"}
                </p>
                <button
                  onClick={handleViewAllClick}
                  className="px-6 py-2.5 bg-[#2F5E2F] text-white rounded-xl font-medium hover:bg-[#244824] transition"
                >
                  {!isAuthenticated ? "Login Sekarang" : "Lihat Paket Premium"}
                </button>
              </div>
            </div>
          )}

          {/* View All Link */}
          <div className={`text-center mt-6 ${shouldBlur ? "blur-md pointer-events-none" : ""}`}>
            <button
              onClick={handleViewAllClick}
              className="inline-flex items-center gap-2 text-[#2F5E2F] font-medium hover:underline transition"
            >
              Lihat Selengkapnya
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-[400px] w-full mx-4">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#2F5E2F]/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#2F5E2F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
              </div>
              <h3 className="text-[20px] font-bold text-[#2F5E2F] mb-2">
                Masuk ke KayuPrima
              </h3>
              <p className="text-[14px] text-gray-500 mb-6">
                Login untuk mengakses daftar pembeli dan mulai berjualan
              </p>
              <a
                href="/login"
                className="block w-full py-3 bg-[#2F5E2F] text-white rounded-xl font-medium hover:bg-[#244824] transition text-center"
              >
                Login / Daftar
              </a>
              <button
                onClick={() => setShowLoginModal(false)}
                className="mt-3 text-[14px] text-gray-400 hover:text-gray-600"
              >
                Nanti aja
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Premium Modal */}
      {showPremiumModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-[400px] w-full mx-4">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
                </svg>
              </div>
              <h3 className="text-[20px] font-bold text-[#2F5E2F] mb-2">
                Upgrade ke Premium
              </h3>
              <p className="text-[14px] text-gray-500 mb-4">
                Dapatkan akses penuh ke kontak pembeli premium
              </p>
              <div className="bg-[#F0F7F0] rounded-xl p-4 mb-6">
                <p className="text-[24px] font-bold text-[#2F5E2F]">Rp 100.000</p>
                <p className="text-[13px] text-gray-500">per bulan</p>
              </div>
              <a
                href="/premium"
                className="block w-full py-3 bg-[#2F5E2F] text-white rounded-xl font-medium hover:bg-[#244824] transition text-center"
              >
                Lihat Paket Premium
              </a>
              <button
                onClick={() => setShowPremiumModal(false)}
                className="mt-3 text-[14px] text-gray-400 hover:text-gray-600"
              >
                Nanti aja
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PremiumBuyers;
