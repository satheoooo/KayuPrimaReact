import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useBuyer } from "../context/BuyerContext";
import Logo from "./logo";

function Navbar() {
  const { user, isAuthenticated, isPremium, logout } = useAuth();
  const { buyerProfile, isBuyerAuthenticated, logoutBuyer } = useBuyer();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const isBuyer = isBuyerAuthenticated && buyerProfile;

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
      <nav className="flex items-center justify-between px-5 md:px-10 lg:px-[160px] py-3 bg-white border-b border-gray-100/80">
        {/* Logo */}
        <Link to={isBuyer ? "/buyer/profile" : "/"} className="flex-shrink-0">
          <Logo size="sm" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {isBuyer ? (
            /* Buyer nav */
            <Link
              to="/catalog"
              className="text-[13px] font-medium text-[#4A4A4A] hover:text-[#2F5E2F] transition-colors duration-150"
            >
              Katalog Pohon
            </Link>
          ) : (
            /* Seller nav */
            <>
              <Link
                to="/catalog"
                className="text-[13px] font-medium text-[#4A4A4A] hover:text-[#2F5E2F] transition-colors duration-150"
              >
                Katalog Pohon
              </Link>
              <button
                onClick={handlePembeliPremiumClick}
                className="text-[13px] font-medium text-[#4A4A4A] hover:text-[#2F5E2F] transition-colors duration-150"
              >
                Pembeli Premium
              </button>
              <button
                onClick={handleKalkulatorPremiumClick}
                className="text-[13px] font-medium text-[#4A4A4A] hover:text-[#2F5E2F] transition-colors duration-150"
              >
                Kalkulator Premium
              </button>
            </>
          )}
        </div>

        {/* Desktop right side */}
        <div className="hidden md:flex items-center gap-3">
          {isBuyer ? (
            /* Buyer profile */
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-2.5 pl-2 pr-3 py-1.5 rounded-full hover:bg-gray-50 transition"
              >
                <img
                  src={buyerProfile?.avatar}
                  alt={buyerProfile?.companyName}
                  className="w-8 h-8 rounded-full object-cover border-2 border-[#2F5E2F]"
                />
                <span className="text-[13px] font-medium text-[#4A4A4A] max-w-[120px] truncate">
                  {buyerProfile?.companyName}
                </span>
                {buyerProfile?.isPremium && (
                  <span className="inline-flex items-center gap-0.5 bg-yellow-100 text-yellow-700 text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    PREMIUM
                  </span>
                )}
                <svg
                  className={`w-3.5 h-3.5 text-gray-400 transition ${showDropdown ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {showDropdown && (
                <div className="absolute right-0 top-full mt-2 w-[200px] bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.12)] border border-gray-100/80 py-1.5 z-50 origin-top-right animate-[fadeInScale_0.2s_var(--ease-out)]">
                  <div className="px-3.5 py-2.5 border-b border-gray-100">
                    <p className="text-[13px] font-medium text-[#1a1a1a] truncate">
                      {buyerProfile?.companyName}
                    </p>
                    <p className="text-[11px] text-gray-400 truncate">
                      {buyerProfile?.email}
                    </p>
                  </div>
                  <div className="py-1">
                    <Link
                      to="/buyer/profile"
                      onClick={() => setShowDropdown(false)}
                      className="flex items-center gap-2.5 w-full px-3.5 py-2 text-[13px] text-[#4A4A4A] hover:bg-[#F0F7F0] hover:text-[#2F5E2F] transition-colors duration-150"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Beranda Pembeli
                    </Link>
                    <Link
                      to="/buyer/premium"
                      onClick={() => setShowDropdown(false)}
                      className="flex items-center gap-2.5 w-full px-3.5 py-2 text-[13px] text-[#4A4A4A] hover:bg-[#F0F7F0] hover:text-[#2F5E2F] transition-colors duration-150"
                    >
                      <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
                      </svg>
                      {buyerProfile?.isPremium ? "Paket Premium" : "Upgrade Premium"}
                    </Link>
                    <div className="mx-3 my-1 border-t border-gray-100" />
                    <button
                      onClick={() => { logoutBuyer(); setShowDropdown(false); }}
                      className="flex items-center gap-2.5 w-full px-3.5 py-2 text-[13px] text-red-500 hover:bg-red-50 transition-colors duration-150"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Keluar
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : isAuthenticated ? (
            /* Seller profile */
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-2.5 pl-2 pr-3 py-1.5 rounded-full hover:bg-gray-50 transition"
              >
                <img
                  src={user?.avatar}
                  alt={user?.name}
                  className="w-8 h-8 rounded-full object-cover border-2 border-[#2F5E2F]"
                />
                <span className="text-[13px] font-medium text-[#4A4A4A] max-w-[120px] truncate">
                  {user?.name}
                </span>
                {isPremium && (
                  <span className="inline-flex items-center gap-0.5 bg-yellow-100 text-yellow-700 text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    PREMIUM
                  </span>
                )}
                <svg
                  className={`w-3.5 h-3.5 text-gray-400 transition ${showDropdown ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {showDropdown && (
                <div className="absolute right-0 top-full mt-2 w-[200px] bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.12)] border border-gray-100/80 py-1.5 z-50 origin-top-right animate-[fadeInScale_0.2s_var(--ease-out)]">
                  <div className="px-3.5 py-2.5 border-b border-gray-100">
                    <p className="text-[13px] font-medium text-[#1a1a1a] truncate">
                      {user?.name}
                    </p>
                    <p className="text-[11px] text-gray-400 truncate">
                      {user?.email}
                    </p>
                  </div>
                  <div className="py-1">
                    <Link
                      to="/premium"
                      onClick={() => setShowDropdown(false)}
                      className="flex items-center gap-2.5 w-full px-3.5 py-2 text-[13px] text-[#4A4A4A] hover:bg-[#F0F7F0] hover:text-[#2F5E2F] transition-colors duration-150"
                    >
                      <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
                      </svg>
                      {isPremium ? "Paket Premium" : "Upgrade Premium"}
                    </Link>
                    <div className="mx-3 my-1 border-t border-gray-100" />
                    <button
                      onClick={() => { logout(); setShowDropdown(false); }}
                      className="flex items-center gap-2.5 w-full px-3.5 py-2 text-[13px] text-red-500 hover:bg-red-50 transition-colors duration-150"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Keluar
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Not logged in */
            <>
              <Link
                to="/register"
                className="text-[13px] font-medium text-[#4A4A4A] hover:text-[#2F5E2F] transition-colors duration-150 px-2"
              >
                Daftar
              </Link>
              <Link
                to="/login"
                className="text-[13px] font-medium text-[#4A4A4A] hover:text-[#2F5E2F] transition-colors duration-150 px-2"
              >
                Masuk
              </Link>
              <Link
                to="/buyer/login"
                className="px-4 py-2 rounded-xl bg-[#2F5E2F] text-white text-[13px] font-medium hover:bg-[#244824] active:scale-[0.98] transition-all duration-150"
              >
                Masuk sebagai Pembeli
              </Link>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="md:hidden p-2 -mr-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors duration-150"
        >
          <svg className="w-5 h-5 text-[#4A4A4A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {showMobileMenu ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {showMobileMenu && (
        <div className="md:hidden bg-white border-b border-gray-100/80 px-5 py-4 space-y-1 animate-[slideDown_0.25s_var(--ease-out)]">
          {isBuyer ? (
            /* Buyer mobile */
            <>
              <Link
                to="/catalog"
                onClick={() => setShowMobileMenu(false)}
                className="block py-2.5 text-[13px] font-medium text-[#4A4A4A] hover:text-[#2F5E2F] transition-colors duration-150"
              >
                Katalog Pohon
              </Link>
              <div className="pt-3 mt-3 border-t border-gray-100 space-y-1">
                <div className="flex items-center gap-2.5 py-2">
                  <img
                    src={buyerProfile?.avatar}
                    alt={buyerProfile?.companyName}
                    className="w-7 h-7 rounded-full object-cover border-2 border-[#2F5E2F]"
                  />
                  <span className="text-[13px] font-medium text-[#1a1a1a] truncate">
                    {buyerProfile?.companyName}
                  </span>
                  {buyerProfile?.isPremium && (
                    <span className="inline-flex items-center bg-yellow-100 text-yellow-700 text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                      PREMIUM
                    </span>
                  )}
                </div>
                <Link
                  to="/buyer/profile"
                  onClick={() => setShowMobileMenu(false)}
                  className="block py-2.5 text-[13px] text-[#4A4A4A] hover:text-[#2F5E2F] transition-colors duration-150"
                >
                  Profil Saya
                </Link>
                <button
                  onClick={() => { logoutBuyer(); setShowMobileMenu(false); }}
                  className="block py-2.5 text-[13px] text-red-500 hover:text-red-600 transition-colors duration-150"
                >
                  Keluar
                </button>
              </div>
            </>
          ) : (
            /* Seller mobile */
            <>
              <Link
                to="/catalog"
                onClick={() => setShowMobileMenu(false)}
                className="block py-2.5 text-[13px] font-medium text-[#4A4A4A] hover:text-[#2F5E2F] transition-colors duration-150"
              >
                Katalog Pohon
              </Link>
              <button
                onClick={() => { handlePembeliPremiumClick(); setShowMobileMenu(false); }}
                className="block w-full text-left py-2.5 text-[13px] font-medium text-[#4A4A4A] hover:text-[#2F5E2F] transition-colors duration-150"
              >
                Pembeli Premium
              </button>
              <button
                onClick={() => { handleKalkulatorPremiumClick(); setShowMobileMenu(false); }}
                className="block w-full text-left py-2.5 text-[13px] font-medium text-[#4A4A4A] hover:text-[#2F5E2F] transition-colors duration-150"
              >
                Kalkulator Premium
              </button>
              {isAuthenticated ? (
                <div className="pt-3 mt-3 border-t border-gray-100 space-y-1">
                  <div className="flex items-center gap-2.5 py-2">
                    <img
                      src={user?.avatar}
                      alt={user?.name}
                      className="w-7 h-7 rounded-full object-cover border-2 border-[#2F5E2F]"
                    />
                    <span className="text-[13px] font-medium text-[#1a1a1a] truncate">
                      {user?.name}
                    </span>
                    {isPremium && (
                      <span className="inline-flex items-center bg-yellow-100 text-yellow-700 text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                        PREMIUM
                      </span>
                    )}
                  </div>
                  <Link
                    to="/premium"
                    onClick={() => setShowMobileMenu(false)}
                    className="block py-2.5 text-[13px] text-[#4A4A4A] hover:text-[#2F5E2F] transition-colors duration-150"
                  >
                    {isPremium ? "Paket Premium" : "Upgrade Premium"}
                  </Link>
                  <button
                    onClick={() => { logout(); setShowMobileMenu(false); }}
                    className="block py-2.5 text-[13px] text-red-500 hover:text-red-600 transition-colors duration-150"
                  >
                    Keluar
                  </button>
                </div>
              ) : (
                <div className="pt-3 mt-3 border-t border-gray-100 space-y-1">
                  <Link
                    to="/register"
                    onClick={() => setShowMobileMenu(false)}
                    className="block py-2.5 text-[13px] text-[#4A4A4A] hover:text-[#2F5E2F] transition-colors duration-150"
                  >
                    Daftar
                  </Link>
                  <Link
                    to="/login"
                    onClick={() => setShowMobileMenu(false)}
                    className="block py-2.5 text-[13px] text-[#4A4A4A] hover:text-[#2F5E2F] transition-colors duration-150"
                  >
                    Masuk
                  </Link>
                  <Link
                    to="/buyer/login"
                    onClick={() => setShowMobileMenu(false)}
                    className="block text-center py-2.5 mt-2 rounded-xl bg-[#2F5E2F] text-white text-[13px] font-medium hover:bg-[#244824] active:scale-[0.98] transition-all duration-150"
                  >
                    Masuk sebagai Pembeli
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      )}

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 animate-[fadeIn_0.2s_var(--ease-out)]">
          <div className="bg-white rounded-2xl p-7 max-w-[380px] w-full mx-4 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] animate-[slideUp_0.3s_var(--ease-spring)]">
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-[#2F5E2F]/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-[#2F5E2F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
              </div>
              <h3 className="text-[18px] font-bold text-[#1a1a1a] mb-1.5">
                Masuk ke KayuPrima
              </h3>
              <p className="text-[13px] text-gray-400 mb-5">
                Login untuk mengakses fitur premium
              </p>
              <a
                href="/login"
                className="block w-full py-2.5 bg-[#2F5E2F] text-white rounded-xl text-[13px] font-medium hover:bg-[#244824] active:scale-[0.98] transition-all duration-150 text-center"
              >
                Login / Daftar
              </a>
              <button
                onClick={() => setShowLoginModal(false)}
                className="mt-3 text-[13px] text-gray-400 hover:text-gray-600 transition-colors duration-150"
              >
                Nanti aja
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Premium Modal */}
      {showPremiumModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 animate-[fadeIn_0.2s_var(--ease-out)]">
          <div className="bg-white rounded-2xl p-7 max-w-[380px] w-full mx-4 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] animate-[slideUp_0.3s_var(--ease-spring)]">
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
                </svg>
              </div>
              <h3 className="text-[18px] font-bold text-[#1a1a1a] mb-1.5">
                Upgrade ke Premium
              </h3>
              <p className="text-[13px] text-gray-400 mb-5">
                Dapatkan akses penuh ke fitur premium KayuPrima
              </p>
              <Link
                to="/premium"
                onClick={() => setShowPremiumModal(false)}
                className="block w-full py-2.5 bg-[#2F5E2F] text-white rounded-xl text-[13px] font-medium hover:bg-[#244824] active:scale-[0.98] transition-all duration-150 text-center"
              >
                Lihat Paket Premium
              </Link>
              <button
                onClick={() => setShowPremiumModal(false)}
                className="mt-3 text-[13px] text-gray-400 hover:text-gray-600 transition-colors duration-150"
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
