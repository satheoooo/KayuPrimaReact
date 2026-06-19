import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Logo from "./logo";

function Navbar() {
  const { user, isAuthenticated, isPremium, logout } = useAuth();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handlePembeliPremiumClick = () => {
    if (!isAuthenticated) {
      setShowLoginModal(true);
      return;
    }
    if (isPremium) {
      navigate("/pembeli-premium");
      return;
    }
    setShowPremiumModal(true);
  };

  const handleKalkulatorPremiumClick = () => {
    if (!isAuthenticated) {
      setShowLoginModal(true);
      return;
    }
    if (isPremium) {
      navigate("/premium-calculator");
      return;
    }
    setShowPremiumModal(true);
  };

  return (
    <>
      <nav className="flex justify-between items-center px-4 md:px-8 lg:px-[160px] py-4 bg-white border-b border-gray-100">
        <Link to="/">
          <Logo size="sm" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/catalog"
            className="text-[#4A4A4A] font-medium hover:text-[#2F5E2F] transition"
          >
            Katalog Pohon
          </Link>

          <button
            onClick={handlePembeliPremiumClick}
            className="text-[#4A4A4A] font-medium hover:text-[#2F5E2F] transition"
          >
            Pembeli Premium
          </button>

          <button
            onClick={handleKalkulatorPremiumClick}
            className="text-[#4A4A4A] font-medium hover:text-[#2F5E2F] transition"
          >
            Kalkulator Premium
          </button>

          {isAuthenticated ? (
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-3 px-3 py-1.5 rounded-full hover:bg-gray-50 transition"
              >
                <img
                  src={user?.avatar}
                  alt={user?.name}
                  className="w-9 h-9 rounded-full object-cover border-2 border-[#2F5E2F]"
                />
                <span className="text-[14px] font-medium text-[#4A4A4A]">
                  {user?.name}
                </span>
                {isPremium && (
                  <span className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-700 text-[11px] font-bold px-2 py-0.5 rounded-full">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
                    </svg>
                    PREMIUM
                  </span>
                )}
                <svg
                  className={`w-4 h-4 text-gray-400 transition ${showDropdown ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {showDropdown && (
                <div className="absolute right-0 top-full mt-2 w-[220px] bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-[14px] font-medium text-[#4A4A4A] flex items-center gap-2">
                      {user?.name}
                      {isPremium && (
                        <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
                        </svg>
                      )}
                    </p>
                    <p className="text-[12px] text-gray-500">
                      {user?.email}
                    </p>
                  </div>
                  <div className="pt-1">
                    <Link
                      to="/premium"
                      onClick={() => setShowDropdown(false)}
                      className="flex items-center gap-3 w-full px-4 py-2.5 text-[14px] text-[#4A4A4A] hover:bg-gray-50 transition"
                    >
                      <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
                      </svg>
                      {isPremium ? "Lihat Paket Premium" : "Upgrade Premium"}
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setShowDropdown(false);
                      }}
                      className="flex items-center gap-3 w-full px-4 py-2.5 text-[14px] text-red-500 hover:bg-red-50 transition"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Keluar
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 rounded-full bg-[#2F5E2F] text-white text-sm hover:bg-[#244824] transition"
            >
              Masuk
            </Link>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
        >
          <svg className="w-6 h-6 text-[#4A4A4A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {showMobileMenu ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {showMobileMenu && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 py-4 space-y-3">
          <Link
            to="/catalog"
            onClick={() => setShowMobileMenu(false)}
            className="block py-2 text-[#4A4A4A] font-medium hover:text-[#2F5E2F] transition"
          >
            Katalog Pohon
          </Link>
          <button
            onClick={() => { handlePembeliPremiumClick(); setShowMobileMenu(false); }}
            className="block w-full text-left py-2 text-[#4A4A4A] font-medium hover:text-[#2F5E2F] transition"
          >
            Pembeli Premium
          </button>
          <button
            onClick={() => { handleKalkulatorPremiumClick(); setShowMobileMenu(false); }}
            className="block w-full text-left py-2 text-[#4A4A4A] font-medium hover:text-[#2F5E2F] transition"
          >
            Kalkulator Premium
          </button>
          {isAuthenticated ? (
            <div className="pt-2 border-t border-gray-100 space-y-2">
              <div className="flex items-center gap-3 py-2">
                <img
                  src={user?.avatar}
                  alt={user?.name}
                  className="w-8 h-8 rounded-full object-cover border-2 border-[#2F5E2F]"
                />
                <span className="text-[14px] font-medium text-[#4A4A4A]">{user?.name}</span>
                {isPremium && (
                  <span className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-700 text-[11px] font-bold px-2 py-0.5 rounded-full">
                    PREMIUM
                  </span>
                )}
              </div>
              <Link
                to="/premium"
                onClick={() => setShowMobileMenu(false)}
                className="block py-2 text-[14px] text-[#4A4A4A] hover:text-[#2F5E2F] transition"
              >
                {isPremium ? "Lihat Paket Premium" : "Upgrade Premium"}
              </Link>
              <button
                onClick={() => { logout(); setShowMobileMenu(false); }}
                className="block py-2 text-[14px] text-red-500 hover:text-red-600 transition"
              >
                Keluar
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              onClick={() => setShowMobileMenu(false)}
              className="block text-center py-2 rounded-full bg-[#2F5E2F] text-white text-sm hover:bg-[#244824] transition"
            >
              Masuk
            </Link>
          )}
        </div>
      )}

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
                Login untuk mengakses fitur premium
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

      {/* Premium Modal — untuk yang belum premium */}
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
              <p className="text-[14px] text-gray-500 mb-6">
                Dapatkan akses penuh ke fitur premium KayuPrima
              </p>
              <Link
                to="/premium"
                onClick={() => setShowPremiumModal(false)}
                className="block w-full py-3 bg-[#2F5E2F] text-white rounded-xl font-medium hover:bg-[#244824] transition text-center"
              >
                Lihat Paket Premium
              </Link>
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

export default Navbar;
