import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/navbar";

const buyers = [
  {
    id: 1,
    name: "PT Maju Jaya",
    location: "Surabaya, Jawa Timur",
    woodNeeded: "Jati",
    quantity: "50 m³",
    budget: "Rp 750.000.000",
    avatar: "https://ui-avatars.com/api/?name=PT+Maju+Jaya&background=2F5E2F&color=fff",
    whatsapp: "6281234567890",
    isPremium: true,
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
    isPremium: true,
  },
  {
    id: 3,
    name: "PT Sinar Kayu",
    location: "Bandung, Jawa Barat",
    woodNeeded: "Sonokeling",
    quantity: "20 m³",
    budget: "Rp 340.000.000",
    avatar: "https://ui-avatars.com/api/?name=PT+Sinar+Kayu&background=2F5E2F&color=fff",
    whatsapp: "6281234567892",
    isPremium: true,
  },
  {
    id: 4,
    name: "Budi Santoso",
    location: "Solo, Jawa Tengah",
    woodNeeded: "Jati",
    quantity: "10 m³",
    budget: "Rp 150.000.000",
    avatar: "https://ui-avatars.com/api/?name=Budi+Santoso&background=6B7280&color=fff",
    whatsapp: "6281234567893",
    isPremium: false,
  },
  {
    id: 5,
    name: "Rina Wijaya",
    location: "Malang, Jawa Timur",
    woodNeeded: "Meranti",
    quantity: "15 m³",
    budget: "Rp 80.000.000",
    avatar: "https://ui-avatars.com/api/?name=Rina+Wijaya&background=6B7280&color=fff",
    whatsapp: "6281234567894",
    isPremium: false,
  },
  {
    id: 6,
    name: "Toko Mebel Jati",
    location: "Kudus, Jawa Tengah",
    woodNeeded: "Jati, Mahoni",
    quantity: "25 m³",
    budget: "Rp 400.000.000",
    avatar: "https://ui-avatars.com/api/?name=Toko+Mebel+Jati&background=6B7280&color=fff",
    whatsapp: "6281234567895",
    isPremium: false,
  },
];

function BuyersPage() {
  const { isPremium } = useAuth();

  // Belum premium → arahkan ke premium plan
  if (!isPremium) {
    return (
      <div className="min-h-screen bg-[#F9F9F9]">
        <Navbar />
        <div className="flex items-center justify-center py-[120px]">
          <div className="text-center bg-white rounded-2xl p-10 shadow-lg max-w-[420px]">
            <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
              </svg>
            </div>
            <h2 className="text-[24px] font-bold text-[#2F5E2F] mb-2">
              Premium Diperlukan
            </h2>
            <p className="text-[15px] text-gray-500 mb-6">
              Upgrade ke premium untuk melihat daftar calon pembeli
            </p>
            <Link
              to="/premium"
              className="block w-full py-3 bg-[#2F5E2F] text-white rounded-xl font-medium hover:bg-[#244824] transition text-center"
            >
              Lihat Paket Premium
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <Navbar />

      {/* Header */}
      <section className="bg-[#2F5E2F] py-12 px-[160px]">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[32px] font-bold text-white mb-2">
              Calon Pembeli
            </h1>
            <p className="text-[15px] text-white/80">
              Hubungi pembeli yang cocok dengan kayu yang kamu miliki
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-center">
              <p className="text-[24px] font-bold text-white">{buyers.length}</p>
              <p className="text-[12px] text-white/70">Total Pembeli</p>
            </div>
            <div className="w-px h-10 bg-white/30"></div>
            <div className="text-center">
              <p className="text-[24px] font-bold text-yellow-300">{buyers.filter((b) => b.isPremium).length}</p>
              <p className="text-[12px] text-white/70">Premium</p>
            </div>
          </div>
        </div>
      </section>

      {/* Buyers Grid */}
      <section className="px-[160px] py-[40px]">
        <div className="grid grid-cols-2 gap-6">
          {buyers.map((buyer) => (
            <div
              key={buyer.id}
              className={`rounded-2xl p-6 overflow-hidden ${
                buyer.isPremium
                  ? "bg-gradient-to-br from-[#2F5E2F] to-[#1a3d1a] text-white"
                  : "bg-white border border-gray-200 text-[#1a1a1a]"
              }`}
            >
              {buyer.isPremium && (
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
                    </svg>
                    <span className="text-[11px] font-bold">PREMIUM</span>
                  </div>
                  <svg className="w-7 h-7 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
                  </svg>
                </div>
              )}

              <div className="flex items-start gap-4">
                <img
                  src={buyer.avatar}
                  alt={buyer.name}
                  className={`w-[56px] h-[56px] rounded-full ${
                    buyer.isPremium ? "border-2 border-white/30" : "border-2 border-gray-200"
                  }`}
                />
                <div className="flex-1">
                  <h3 className={`text-[17px] font-bold mb-1 ${buyer.isPremium ? "text-white" : "text-[#2F5E2F]"}`}>
                    {buyer.name}
                  </h3>
                  <div className={`flex items-center gap-1 text-[13px] mb-3 ${buyer.isPremium ? "text-white/70" : "text-gray-500"}`}>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {buyer.location}
                  </div>

                  <div className={`flex items-center gap-5 mb-4 ${buyer.isPremium ? "text-white" : "text-[#4A4A4A]"}`}>
                    <div>
                      <p className={`text-[11px] ${buyer.isPremium ? "text-white/50" : "text-gray-400"}`}>Butuh</p>
                      <p className="text-[14px] font-bold">{buyer.woodNeeded}</p>
                    </div>
                    <div>
                      <p className={`text-[11px] ${buyer.isPremium ? "text-white/50" : "text-gray-400"}`}>Jumlah</p>
                      <p className="text-[14px] font-bold">{buyer.quantity}</p>
                    </div>
                    <div>
                      <p className={`text-[11px] ${buyer.isPremium ? "text-white/50" : "text-gray-400"}`}>Budget</p>
                      <p className="text-[14px] font-bold">{buyer.budget}</p>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/${buyer.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-2.5 rounded-xl font-medium flex items-center justify-center gap-2 transition ${
                      buyer.isPremium
                        ? "bg-white text-[#2F5E2F] hover:bg-gray-100"
                        : "bg-[#2F5E2F] text-white hover:bg-[#244824]"
                    }`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Chat via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default BuyersPage;
