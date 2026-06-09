import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-[160px] py-[18px] bg-white border-b border-gray-100">

      <Link
        to="/"
        className="text-[22px] font-bold text-[#2F5E2F]"
      >
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

        <Link
          to="/login"
          className="px-4 py-2 rounded-full bg-[#2F5E2F] text-white text-sm hover:bg-[#244824] transition"
        >
          Masuk
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;