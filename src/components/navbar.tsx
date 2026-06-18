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
                <div className="pt-1">
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
