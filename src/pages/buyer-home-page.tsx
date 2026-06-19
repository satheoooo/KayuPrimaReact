import { useState } from "react";
import { Link } from "react-router-dom";
import { useBuyer } from "../context/BuyerContext";
import Navbar from "../components/navbar";

const woodTypes = [
  { id: "jati", name: "Kayu Jati" },
  { id: "mahoni", name: "Kayu Mahoni" },
  { id: "meranti", name: "Kayu Meranti" },
  { id: "sungkai", name: "Kayu Sungkai" },
  { id: "sonokeling", name: "Kayu Sonokeling" },
  { id: "ulin", name: "Kayu Ulin" },
  { id: "bangkirai", name: "Kayu Bangkirai" },
];

function BuyerHomePage() {
  const { buyerProfile, isBuyerAuthenticated, saveProfile } = useBuyer();
  const [companyName, setCompanyName] = useState(buyerProfile?.companyName || "");
  const [location, setLocation] = useState(buyerProfile?.location || "");
  const [woodNeeded, setWoodNeeded] = useState<string[]>(buyerProfile?.woodNeeded || []);
  const [quantity, setQuantity] = useState(buyerProfile?.quantity || "");
  const [budget, setBudget] = useState(buyerProfile?.budget || "");
  const [whatsapp, setWhatsapp] = useState(buyerProfile?.whatsapp || "");
  const [description, setDescription] = useState(buyerProfile?.description || "");
  const [isSaved, setIsSaved] = useState(false);

  // Gate: belum login
  if (!isBuyerAuthenticated) {
    return (
      <div className="min-h-screen bg-[#F9F9F9]">
        <Navbar />
        <div className="flex items-center justify-center py-[120px]">
          <div className="text-center bg-white rounded-2xl p-10 shadow-lg max-w-[420px]">
            <div className="w-16 h-16 rounded-full bg-[#2F5E2F]/10 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[#2F5E2F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h2 className="text-[24px] font-bold text-[#2F5E2F] mb-3">
              Login Diperlukan
            </h2>
            <p className="text-[15px] text-gray-500 mb-6">
              Masuk terlebih dahulu untuk mengisi profil pembeli
            </p>
            <Link
              to="/buyer/login"
              className="block w-full py-3 bg-[#2F5E2F] text-white rounded-xl font-medium hover:bg-[#244824] transition text-center"
            >
              Login sebagai Pembeli
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const toggleWood = (id: string) => {
    setWoodNeeded((prev) =>
      prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]
    );
  };

  const handleSave = () => {
    // Format WhatsApp: add "62" prefix if starts with "8"
    const formattedWhatsapp = whatsapp.startsWith("8") ? `62${whatsapp}` : whatsapp;

    saveProfile({
      companyName,
      email: buyerProfile?.email || "",
      location,
      woodNeeded,
      quantity,
      budget: budget ? `Rp ${budget}` : "",
      whatsapp: formattedWhatsapp,
      description,
    });
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <Navbar />

      {/* Header */}
      <section className="bg-[#2F5E2F] py-8 md:py-10 px-5 md:px-10 lg:px-[160px]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <h1 className="text-[22px] md:text-[26px] font-bold text-white mb-1">
              Beranda Pembeli
            </h1>
            <p className="text-[13px] md:text-[14px] text-white/80">
              Atur kebutuhan kayu Anda agar penjual dapat menemukan Anda
            </p>
          </div>
          <Link
            to="/buyer/premium"
            className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-yellow-900 rounded-xl text-[13px] font-medium hover:bg-yellow-300 transition"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
            </svg>
            {buyerProfile?.isPremium ? "Premium Aktif" : "Upgrade Premium"}
          </Link>
        </div>
      </section>

      {/* Form */}
      <section className="px-5 md:px-10 lg:px-[160px] py-6 md:py-8">
        <div className="max-w-[600px] mx-auto">
          {/* Success Message */}
          {isSaved && (
            <div className="mb-5 p-3.5 bg-green-50 border border-green-200 rounded-xl text-[13px] text-green-700 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Profil berhasil disimpan!
            </div>
          )}

          {/* Company Info */}
          <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm mb-5">
            <h3 className="text-[16px] font-bold text-[#2F5E2F] mb-4">Informasi Perusahaan</h3>

            <div className="mb-3.5">
              <label className="block text-[13px] font-medium text-[#4A4A4A] mb-1.5">
                Nama Perusahaan / Orang *
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="PT Contoh Jaya"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-[13px] text-[#4A4A4A] focus:outline-none focus:border-[#2F5E2F] transition bg-gray-50"
              />
            </div>

            <div className="mb-3.5">
              <label className="block text-[13px] font-medium text-[#4A4A4A] mb-1.5">
                Lokasi *
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Surabaya, Jawa Timur"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-[13px] text-[#4A4A4A] focus:outline-none focus:border-[#2F5E2F] transition bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-[13px] font-medium text-[#4A4A4A] mb-1.5">
                Nomor WhatsApp *
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[13px] text-gray-400 pointer-events-none">
                  +62
                </span>
                <input
                  type="tel"
                  value={whatsapp}
                  onChange={(e) => {
                    const val = e.target.value.replace(/[^0-9]/g, "");
                    setWhatsapp(val);
                  }}
                  placeholder="81234567890"
                  className="w-full pl-12 pr-3.5 py-2.5 rounded-xl border border-gray-200 text-[13px] text-[#4A4A4A] focus:outline-none focus:border-[#2F5E2F] transition bg-gray-50"
                />
              </div>
            </div>
          </div>

          {/* Wood Requirements */}
          <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm mb-5">
            <h3 className="text-[16px] font-bold text-[#2F5E2F] mb-4">Kebutuhan Kayu</h3>

            <div className="mb-4">
              <label className="block text-[13px] font-medium text-[#4A4A4A] mb-2">
                Jenis Kayu yang Dibutuhkan *
              </label>
              <div className="flex flex-wrap gap-2">
                {woodTypes.map((wood) => (
                  <button
                    key={wood.id}
                    onClick={() => toggleWood(wood.id)}
                    className={`px-3 py-1.5 rounded-lg text-[12px] font-medium transition ${
                      woodNeeded.includes(wood.id)
                        ? "bg-[#2F5E2F] text-white"
                        : "bg-gray-100 text-[#4A4A4A] hover:bg-gray-200"
                    }`}
                  >
                    {wood.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-4">
              <div>
                <label className="block text-[13px] font-medium text-[#4A4A4A] mb-1.5">
                  Jumlah yang Dibutuhkan
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={quantity}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9]/g, "");
                      setQuantity(val ? `${val} m³` : "");
                    }}
                    placeholder="50 m³"
                    className="w-full px-3.5 py-2.5 pr-8 rounded-xl border border-gray-200 text-[13px] text-[#4A4A4A] focus:outline-none focus:border-[#2F5E2F] transition bg-gray-50"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[12px] text-gray-400 pointer-events-none">
                    m³
                  </span>
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-medium text-[#4A4A4A] mb-1.5">
                  Budget
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[13px] text-gray-400 pointer-events-none">
                    Rp
                  </span>
                  <input
                    type="text"
                    value={budget}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9]/g, "");
                      if (val) {
                        const formatted = new Intl.NumberFormat("id-ID").format(parseInt(val));
                        setBudget(formatted);
                      } else {
                        setBudget("");
                      }
                    }}
                    placeholder="750.000.000"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-gray-200 text-[13px] text-[#4A4A4A] focus:outline-none focus:border-[#2F5E2F] transition bg-gray-50"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[13px] font-medium text-[#4A4A4A] mb-1.5">
                Deskripsi Kebutuhan
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Ceritakan detail kebutuhan kayu Anda, misalnya untuk furnitur, konstruksi, dll."
                rows={3}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-[13px] text-[#4A4A4A] focus:outline-none focus:border-[#2F5E2F] transition bg-gray-50 resize-none"
              />
            </div>
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            className="w-full py-2.5 rounded-xl bg-[#2F5E2F] text-white text-[13px] font-medium hover:bg-[#244824] transition"
          >
            Simpan Profil
          </button>
        </div>
      </section>
    </div>
  );
}

export default BuyerHomePage;
