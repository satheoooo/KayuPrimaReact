import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Calculator from "./calculator";

function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
      heroElement.addEventListener("mouseenter", () => setIsHovering(true));
      heroElement.addEventListener("mouseleave", () => setIsHovering(false));
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove);
        heroElement.removeEventListener("mouseenter", () => setIsHovering(true));
        heroElement.removeEventListener("mouseleave", () => setIsHovering(false));
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex items-center justify-between px-[160px] py-[80px] bg-white overflow-hidden"
    >
      {/* Cursor Glow Effect */}
      <div
        className="absolute pointer-events-none transition-opacity duration-300"
        style={{
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          width: 300,
          height: 300,
          background: "radial-gradient(circle, rgba(47, 94, 47, 0.15) 0%, transparent 70%)",
          opacity: isHovering ? 1 : 0,
        }}
      />

      {/* Left Content */}
      <div className="relative z-10 flex flex-col gap-6 max-w-[600px]">
        <h1 className="text-[48px] font-bold leading-tight text-[#2F5E2F]">
          Kayu Premium untuk Proyek Impian Anda
        </h1>
        <p className="text-[18px] text-[#4A4A4A] leading-relaxed">
          KayuPrima menyediakan kayu berkualitas tinggi untuk kebutuhan konstruksi,
          furnitur, dan dekorasi. Dengan pengalaman bertahun-tahun, kami menjamin
          mutu dan kepuasan pelanggan.
        </p>
        <div className="flex gap-4 mt-4">
          <Link
            to="/catalog"
            className="px-6 py-3 rounded-full bg-[#2F5E2F] text-white font-medium hover:bg-[#244824] transition text-center"
          >
            Lihat Katalog
          </Link>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border-2 border-[#2F5E2F] text-[#2F5E2F] font-medium hover:bg-[#2F5E2F] hover:text-white transition text-center"
          >
            Hubungi Kami
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="flex items-center gap-6 mt-6 pt-6 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#F0F7F0] flex items-center justify-center">
              <svg className="w-5 h-5 text-[#2F5E2F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-[14px] font-bold text-[#2F5E2F]">100%</p>
              <p className="text-[12px] text-[#4A4A4A]">Legal & Bersertifikat</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#F0F7F0] flex items-center justify-center">
              <svg className="w-5 h-5 text-[#2F5E2F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-[14px] font-bold text-[#2F5E2F]">24/7</p>
              <p className="text-[12px] text-[#4A4A4A]">Layanan Konsultasi</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#F0F7F0] flex items-center justify-center">
              <svg className="w-5 h-5 text-[#2F5E2F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <div>
              <p className="text-[14px] font-bold text-[#2F5E2F]">Free</p>
              <p className="text-[12px] text-[#4A4A4A]">Pengiriman Area Tertentu</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Content - Calculator */}
      <div className="relative z-20">
        <Calculator />
      </div>
    </section>
  );
}

export default Hero;
