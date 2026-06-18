import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="flex justify-between items-center px-[160px] py-[18px] bg-white border-b border-gray-100">
      <Link to="/" className="text-[22px] font-bold text-[#2F5E2F]">
        KayuPrima
      </Link>

      <div className="flex items-center gap-8">
        <Link
          to="/catalog"
          className="text-[#4A4A4A] font-medium hover:text-[#2F5E2F] transition"
        >
          Katalog Pohon
        </Link>

        <a
          href="#premium"
          className="text-[#4A4A4A] font-medium hover:text-[#2F5E2F] transition"
        >
          Pembeli Premium
        </a>

        {isAuthenticated ? (
          /* Profile Dropdown */
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
              <svg
                className={`w-4 h-4 text-gray-400 transition ${showDropdown ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {showDropdown && (
              <div className="absolute right-0 top-full mt-2 w-[220px] bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                <div className="px-4 py-3 border-b border-gray-100">
                  <p className="text-[14px] font-medium text-[#4A4A4A]">
                    {user?.name}
                  </p>
                  <p className="text-[12px] text-gray-500">
                    {user?.email}
                  </p>
                </div>
                <Link
                  to="/profile"
                  onClick={() => setShowDropdown(false)}
                  className="flex items-center gap-3 px-4 py-2.5 text-[14px] text-[#4A4A4A] hover:bg-gray-50 transition"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Profil Saya
                </Link>
                <Link
                  to="/orders"
                  onClick={() => setShowDropdown(false)}
                  className="flex items-center gap-3 px-4 py-2.5 text-[14px] text-[#4A4A4A] hover:bg-gray-50 transition"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Pesanan Saya
                </Link>
                <Link
                  to="/cart"
                  onClick={() => setShowDropdown(false)}
                  className="flex items-center gap-3 px-4 py-2.5 text-[14px] text-[#4A4A4A] hover:bg-gray-50 transition"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Keranjang
                </Link>
                <div className="border-t border-gray-100 mt-1 pt-1">
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
          /* Login Button */
          <Link
            to="/login"
            className="px-4 py-2 rounded-full bg-[#2F5E2F] text-white text-sm hover:bg-[#244824] transition"
          >
            Masuk
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
