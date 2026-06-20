import { useState, useEffect, useRef } from "react";
import Calculator from "./calculator";
import WoodParticles from "./wood-particles";

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

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
      heroElement.addEventListener("mouseenter", handleMouseEnter);
      heroElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove);
        heroElement.removeEventListener("mouseenter", handleMouseEnter);
        heroElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 lg:px-[160px] py-12 md:py-16 lg:py-[80px] bg-gradient-to-br from-white via-[#F0F7F0] to-white overflow-hidden"
    >
      {/* 3D Wood Particles Background */}
      <WoodParticles />

      {/* Cursor Glow Effect */}
      <div
        className="absolute pointer-events-none transition-opacity duration-300 will-change-transform"
        style={{
          left: 0,
          top: 0,
          width: 300,
          height: 300,
          transform: `translate(${mousePosition.x - 150}px, ${mousePosition.y - 150}px)`,
          background: "radial-gradient(circle, rgba(47, 94, 47, 0.15) 0%, transparent 70%)",
          opacity: isHovering ? 1 : 0,
        }}
      />

      {/* Left Content */}
      <div className="relative z-10 flex flex-col gap-5 md:gap-6 max-w-[600px] text-center lg:text-left">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#F0F7F0] px-4 py-2 rounded-full w-fit mx-auto lg:mx-0">
          <svg className="w-4 h-4 text-[#2F5E2F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          <span className="text-[12px] font-medium text-[#2F5E2F] tracking-wide">Kalkulator Valuasi Kayu #1 di Indonesia</span>
        </div>

        {/* Headline */}
        <h1 className="text-[32px] md:text-[44px] lg:text-[56px] font-bold leading-[1.05] tracking-tight text-[#1a1a1a]">
          Jangan Jual Kayu Anda Sebelum Tahu{" "}
          <span className="text-[#2F5E2F]">Nilai Sebenarnya.</span>
        </h1>

        {/* Subtext */}
        <p className="text-[15px] lg:text-[16px] text-gray-400 leading-[1.7] max-w-[480px] mx-auto lg:mx-0">
          Hitung estimasi nilai wajar pasar untuk pohon Jati, Mahoni,
          Sengon, dan lainnya berdasarkan data harga real-time. Cepat,
          akurat, dan 100% gratis untuk pemilik lahan.
        </p>

        {/* Features */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 md:gap-6 mt-6 md:mt-8">
          {[
            { icon: "M13 10V3L4 14h7v7l9-11h-7z", label: "Kalkulasi Cepat" },
            { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "Data Aman" },
            { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", label: "Tanpa Perantara" },
          ].map((feature, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#F0F7F0] flex items-center justify-center flex-shrink-0">
                <svg className="w-[18px] h-[18px] text-[#2F5E2F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                </svg>
              </div>
              <span className="text-[13px] font-medium text-[#4A4A4A]">{feature.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Content - Calculator */}
      <div className="relative z-10 w-full lg:w-auto mt-8 lg:mt-0">
        <Calculator />
      </div>
    </section>
  );
}

export default Hero;
