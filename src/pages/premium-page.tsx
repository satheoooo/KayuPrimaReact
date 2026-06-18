import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

const packages = [
  {
    id: "premium",
    name: "Premium",
    badge: "⭐",
    benefits: [
      "Lihat daftar calon pembeli premium",
      "Kalkulator harga perbandingan",
      "Grafik tren harga kayu",
      "Export hasil kalkulasi",
    ],
  },
];

function PremiumPage() {
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
            Dapatkan akses eksklusif untuk terhubung langsung dengan pembeli kayu terpercaya
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
              {/* Badge */}
              <div className="text-center mb-6">
                <span className="text-[40px]">{pkg.badge}</span>
                <h2 className="text-[28px] font-bold text-[#2F5E2F] mt-2">
                  {pkg.name}
                </h2>
              </div>

              {/* Benefits */}
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

              {/* CTA */}
              <button className="w-full py-3.5 rounded-xl bg-[#2F5E2F] text-white text-[16px] font-medium hover:bg-[#244824] transition">
                Daftar Sekarang
              </button>

              <p className="text-[13px] text-gray-400 text-center mt-4">
                Pembayaran akan tersedia segera
              </p>
            </div>
          ))}
        </div>

        {/* Back Link */}
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
