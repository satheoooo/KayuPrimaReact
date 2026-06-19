import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/navbar";

const woodTypes = [
  { id: "jati", name: "Kayu Jati", pricePerM3: 20000000 },
  { id: "mahoni", name: "Kayu Mahoni", pricePerM3: 15000000 },
  { id: "meranti", name: "Kayu Meranti", pricePerM3: 8000000 },
  { id: "sungkai", name: "Kayu Sungkai", pricePerM3: 6500000 },
  { id: "sonokeling", name: "Kayu Sonokeling", pricePerM3: 17000000 },
  { id: "ulin", name: "Kayu Ulin", pricePerM3: 22000000 },
  { id: "bangkirai", name: "Kayu Bangkirai", pricePerM3: 12000000 },
];

// Data tren harga (6 bulan terakhir, dalam jutaan per m³)
const priceHistory = [
  { month: "Jan", jati: 18.5, mahoni: 13.5, meranti: 7.5, sungkai: 5.8, sonokeling: 15.5, ulin: 20.0, bangkirai: 10.5 },
  { month: "Feb", jati: 19.0, mahoni: 14.0, meranti: 7.8, sungkai: 6.0, sonokeling: 16.0, ulin: 20.5, bangkirai: 11.0 },
  { month: "Mar", jati: 19.2, mahoni: 14.2, meranti: 7.6, sungkai: 6.1, sonokeling: 16.2, ulin: 21.0, bangkirai: 11.2 },
  { month: "Apr", jati: 19.5, mahoni: 14.5, meranti: 7.9, sungkai: 6.2, sonokeling: 16.5, ulin: 21.5, bangkirai: 11.5 },
  { month: "Mei", jati: 19.8, mahoni: 14.8, meranti: 8.0, sungkai: 6.3, sonokeling: 16.8, ulin: 21.8, bangkirai: 11.8 },
  { month: "Jun", jati: 20.0, mahoni: 15.0, meranti: 8.0, sungkai: 6.5, sonokeling: 17.0, ulin: 22.0, bangkirai: 12.0 },
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

function PremiumCalculatorPage() {
  const { isAuthenticated } = useAuth();

  // Kalkulator state
  const [woodType, setWoodType] = useState("jati");
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);

  // Perbandingan state
  const [compareWood1, setCompareWood1] = useState("jati");
  const [compareWood2, setCompareWood2] = useState("mahoni");

  // Grafik state
  const [selectedChartWood, setSelectedChartWood] = useState("jati");

  const selectedWood = woodTypes.find((w) => w.id === woodType);
  const volumePerTreeM3 = (width * height * 100) / 1000000;
  const totalPrice = volumePerTreeM3 * (selectedWood?.pricePerM3 || 0) * quantity;

  const compareWood1Data = woodTypes.find((w) => w.id === compareWood1);
  const compareWood2Data = woodTypes.find((w) => w.id === compareWood2);

  // Login check
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#F9F9F9]">
        <Navbar />
        <div className="flex items-center justify-center py-[120px]">
          <div className="text-center bg-white rounded-2xl p-10 shadow-lg max-w-[420px]">
            <div className="w-16 h-16 rounded-full bg-[#2F5E2F]/10 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[#2F5E2F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-[24px] font-bold text-[#2F5E2F] mb-3">
              Login Diperlukan
            </h2>
            <p className="text-[15px] text-gray-500 mb-6">
              Masuk terlebih dahulu untuk mengakses Kalkulator Premium
            </p>
            <Link
              to="/login"
              className="block w-full py-3 bg-[#2F5E2F] text-white rounded-xl font-medium hover:bg-[#244824] transition text-center"
            >
              Login Sekarang
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
      <section className="bg-[#2F5E2F] py-10 md:py-12 px-4 md:px-8 lg:px-[160px]">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h1 className="text-[22px] md:text-[26px] lg:text-[28px] font-bold text-white">Kalkulator Premium</h1>
            <p className="text-[14px] text-white/80">Perbandingan harga, grafik tren, dan export</p>
          </div>
        </div>
      </section>

      <div className="px-4 md:px-8 lg:px-[160px] py-8 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Kalkulator */}
          <div className="flex flex-col gap-8">
            {/* Kalkulator Dasar */}
            <div className="bg-white rounded-2xl p-7 shadow-sm">
              <h3 className="text-[20px] font-bold text-[#2F5E2F] mb-5">Kalkulator Harga</h3>

              {/* Wood Type */}
              <div className="mb-5">
                <label className="block text-[14px] font-medium text-[#4A4A4A] mb-2">Jenis Kayu</label>
                <select
                  value={woodType}
                  onChange={(e) => setWoodType(e.target.value)}
                  className="w-full px-4 pr-10 py-3 rounded-xl border border-gray-200 text-[15px] text-[#4A4A4A] focus:outline-none focus:border-[#2F5E2F] transition bg-gray-50 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_12px_center] bg-[length:18px]"
                >
                  {woodTypes.map((wood) => (
                    <option key={wood.id} value={wood.id}>{wood.name}</option>
                  ))}
                </select>
              </div>

              {/* Diameter & Height */}
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div>
                  <label className="block text-[14px] font-medium text-[#4A4A4A] mb-2">Diameter (cm)</label>
                  <input
                    type="number"
                    min="0"
                    value={width || ""}
                    onChange={(e) => setWidth(Number(e.target.value))}
                    placeholder="30"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[15px] text-[#4A4A4A] focus:outline-none focus:border-[#2F5E2F] transition bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-[14px] font-medium text-[#4A4A4A] mb-2">Tinggi (cm)</label>
                  <input
                    type="number"
                    min="0"
                    value={height || ""}
                    onChange={(e) => setHeight(Number(e.target.value))}
                    placeholder="500"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[15px] text-[#4A4A4A] focus:outline-none focus:border-[#2F5E2F] transition bg-gray-50"
                  />
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <label className="block text-[14px] font-medium text-[#4A4A4A] mb-2">Jumlah Pohon</label>
                <input
                  type="number"
                  min="1"
                  value={quantity || ""}
                  onChange={(e) => setQuantity(Number(e.target.value) || 1)}
                  placeholder="10"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[15px] text-[#4A4A4A] focus:outline-none focus:border-[#2F5E2F] transition bg-gray-50"
                />
              </div>

              {/* Result */}
              <div className="bg-[#F0F7F0] rounded-xl p-5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[14px] text-[#4A4A4A]">Volume per pohon</span>
                  <span className="text-[14px] font-medium text-[#4A4A4A]">
                    {width && height ? `${volumePerTreeM3.toFixed(4)} m³` : "-"}
                  </span>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[14px] text-[#4A4A4A]">Harga per m³</span>
                  <span className="text-[14px] font-medium text-[#4A4A4A]">
                    {formatPrice(selectedWood?.pricePerM3 || 0)}
                  </span>
                </div>
                <div className="border-t border-[#2F5E2F]/20 pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[16px] font-bold text-[#2F5E2F]">Estimasi Harga Jual</span>
                    <span className="text-[20px] font-bold text-[#2F5E2F]">
                      {width && height && quantity ? formatPrice(totalPrice) : formatPrice(0)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Perbandingan Harga */}
            <div className="bg-white rounded-2xl p-7 shadow-sm">
              <h3 className="text-[20px] font-bold text-[#2F5E2F] mb-5">Perbandingan Harga</h3>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-[14px] font-medium text-[#4A4A4A] mb-2">Kayu Pertama</label>
                  <select
                    value={compareWood1}
                    onChange={(e) => setCompareWood1(e.target.value)}
                    className="w-full px-4 pr-10 py-3 rounded-xl border border-gray-200 text-[15px] text-[#4A4A4A] focus:outline-none focus:border-[#2F5E2F] transition bg-gray-50 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_12px_center] bg-[length:18px]"
                  >
                    {woodTypes.map((wood) => (
                      <option key={wood.id} value={wood.id}>{wood.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[14px] font-medium text-[#4A4A4A] mb-2">Kayu Kedua</label>
                  <select
                    value={compareWood2}
                    onChange={(e) => setCompareWood2(e.target.value)}
                    className="w-full px-4 pr-10 py-3 rounded-xl border border-gray-200 text-[15px] text-[#4A4A4A] focus:outline-none focus:border-[#2F5E2F] transition bg-gray-50 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_12px_center] bg-[length:18px]"
                  >
                    {woodTypes.map((wood) => (
                      <option key={wood.id} value={wood.id}>{wood.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Comparison Bars */}
              <div className="flex flex-col gap-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-[14px] font-medium text-[#4A4A4A]">{compareWood1Data?.name}</span>
                    <span className="text-[14px] font-bold text-[#2F5E2F]">{formatPrice(compareWood1Data?.pricePerM3 || 0)}</span>
                  </div>
                  <div className="w-full h-6 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#2F5E2F] rounded-full transition-all duration-500"
                      style={{ width: `${((compareWood1Data?.pricePerM3 || 0) / 22000000) * 100}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-[14px] font-medium text-[#4A4A4A]">{compareWood2Data?.name}</span>
                    <span className="text-[14px] font-bold text-[#2F5E2F]">{formatPrice(compareWood2Data?.pricePerM3 || 0)}</span>
                  </div>
                  <div className="w-full h-6 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-500 rounded-full transition-all duration-500"
                      style={{ width: `${((compareWood2Data?.pricePerM3 || 0) / 22000000) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Price Difference */}
              <div className="mt-5 p-4 bg-gray-50 rounded-xl text-center">
                <p className="text-[13px] text-gray-500 mb-1">Selisih Harga per m³</p>
                <p className="text-[20px] font-bold text-[#2F5E2F]">
                  {formatPrice(Math.abs((compareWood1Data?.pricePerM3 || 0) - (compareWood2Data?.pricePerM3 || 0)))}
                </p>
                <p className="text-[13px] text-gray-400 mt-1">
                  {compareWood1Data?.name} {((compareWood1Data?.pricePerM3 || 0) > (compareWood2Data?.pricePerM3 || 0)) ? "lebih mahal" : "lebih murah"} dari {compareWood2Data?.name}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8">
            {/* Grafik Tren Harga */}
            <div className="bg-white rounded-2xl p-7 shadow-sm">
              <h3 className="text-[20px] font-bold text-[#2F5E2F] mb-5">Grafik Tren Harga (6 Bulan)</h3>

              {/* Wood selector */}
              <div className="mb-6">
                <label className="block text-[14px] font-medium text-[#4A4A4A] mb-2">Pilih Jenis Kayu</label>
                <div className="flex flex-wrap gap-2">
                  {woodTypes.map((w) => (
                    <button
                      key={w.id}
                      onClick={() => setSelectedChartWood(w.id)}
                      className={`px-3 py-1.5 rounded-lg text-[12px] font-medium transition ${
                        selectedChartWood === w.id
                          ? "bg-[#2F5E2F] text-white"
                          : "bg-gray-100 text-[#4A4A4A] hover:bg-gray-200"
                      }`}
                    >
                      {w.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bar Chart */}
              <div className="flex items-end gap-2 sm:gap-3 h-[220px] px-2">
                {priceHistory.map((entry, i) => {
                  const price = entry[selectedChartWood as keyof typeof entry] as number;
                  const maxPrice = Math.max(...priceHistory.map((h) => h[selectedChartWood as keyof typeof h] as number));
                  const barHeight = (price / (maxPrice * 1.1)) * 100;
                  return (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <span className="text-[12px] font-bold text-[#2F5E2F]">{price}jt</span>
                      <div className="w-full relative" style={{ height: "160px" }}>
                        <div
                          className="absolute bottom-0 w-full bg-[#2F5E2F] rounded-t-lg transition-all duration-500 hover:bg-[#244824]"
                          style={{ height: `${barHeight}%` }}
                        />
                      </div>
                      <span className="text-[13px] font-medium text-gray-500">{entry.month}</span>
                    </div>
                  );
                })}
              </div>

              {/* Trend indicator */}
              <div className="mt-5 p-4 bg-[#F0F7F0] rounded-xl flex items-center gap-3">
                <svg className="w-6 h-6 text-[#2F5E2F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <div>
                  <p className="text-[14px] font-bold text-[#2F5E2F]">
                    Tren Naik +{(((priceHistory[5][selectedChartWood as keyof typeof priceHistory[0]] as number) - (priceHistory[0][selectedChartWood as keyof typeof priceHistory[0]] as number)) / (priceHistory[0][selectedChartWood as keyof typeof priceHistory[0]] as number) * 100).toFixed(1)}%
                  </p>
                  <p className="text-[13px] text-gray-500">dalam 6 bulan terakhir</p>
                </div>
              </div>
            </div>

            {/* Export Section */}
            <div className="bg-white rounded-2xl p-7 shadow-sm">
              <h3 className="text-[20px] font-bold text-[#2F5E2F] mb-5">Export Hasil Kalkulasi</h3>

              <div className="bg-gray-50 rounded-xl p-5 mb-5" id="export-content">
                {/* Header for print */}
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-200">
                  <div className="w-10 h-10 rounded-xl bg-[#2F5E2F] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-[#2F5E2F]">KayuPrima</h4>
                    <p className="text-[12px] text-gray-500">Ringkasan Kalkulasi Harga Kayu</p>
                  </div>
                </div>

                <div className="space-y-3 text-[14px]">
                  <div className="flex justify-between py-1">
                    <span className="text-gray-500">Jenis Kayu</span>
                    <span className="font-medium text-[#4A4A4A]">{selectedWood?.name || "-"}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-500">Diameter</span>
                    <span className="font-medium text-[#4A4A4A]">{width ? `${width} cm` : "-"}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-500">Tinggi</span>
                    <span className="font-medium text-[#4A4A4A]">{height ? `${height} cm` : "-"}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-500">Jumlah Pohon</span>
                    <span className="font-medium text-[#4A4A4A]">{quantity}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-500">Volume per Pohon</span>
                    <span className="font-medium text-[#4A4A4A]">{width && height ? `${volumePerTreeM3.toFixed(4)} m³` : "-"}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-500">Harga per m³</span>
                    <span className="font-medium text-[#4A4A4A]">{formatPrice(selectedWood?.pricePerM3 || 0)}</span>
                  </div>
                  <div className="border-t-2 border-[#2F5E2F] pt-3 mt-3 flex justify-between">
                    <span className="font-bold text-[#2F5E2F] text-[15px]">Total Estimasi Harga Jual</span>
                    <span className="font-bold text-[#2F5E2F] text-[17px]">
                      {width && height && quantity ? formatPrice(totalPrice) : formatPrice(0)}
                    </span>
                  </div>
                </div>

                {/* Footer for print */}
                <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                  <p className="text-[11px] text-gray-400">
                    Dihitung pada {new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })} • KayuPrima Premium Calculator
                  </p>
                </div>
              </div>

              <button
                onClick={() => window.print()}
                className="w-full py-3 rounded-xl border-2 border-[#2F5E2F] text-[#2F5E2F] font-medium hover:bg-[#2F5E2F] hover:text-white transition flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                Cetak / Export PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PremiumCalculatorPage;
