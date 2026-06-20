import { useState } from "react";

const woodTypes = [
  { id: "jati", name: "Kayu Jati", pricePerM3: 20000000 },
  { id: "mahoni", name: "Kayu Mahoni", pricePerM3: 15000000 },
  { id: "meranti", name: "Kayu Meranti", pricePerM3: 8000000 },
  { id: "sungkai", name: "Kayu Sungkai", pricePerM3: 6500000 },
  { id: "sonokeling", name: "Kayu Sonokeling", pricePerM3: 17000000 },
  { id: "ulin", name: "Kayu Ulin", pricePerM3: 22000000 },
  { id: "bangkirai", name: "Kayu Bangkirai", pricePerM3: 12000000 },
];

function Calculator() {
  const [woodType, setWoodType] = useState("jati");
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);

  const selectedWood = woodTypes.find((w) => w.id === woodType);
  // Volume in m³ (diameter cm x height cm x 100cm / 1,000,000)
  const volumePerTreeM3 = (width * height * 100) / 1000000;
  const totalPrice = volumePerTreeM3 * (selectedWood?.pricePerM3 || 0) * quantity;
  const pricePerMeter = selectedWood?.pricePerM3 || 0;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white rounded-2xl shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)] p-5 md:p-7 w-full lg:w-[450px] border border-gray-100/60">
      <div className="flex items-center gap-3 mb-1">
        <div className="w-10 h-10 rounded-xl bg-[#F0F7F0] flex items-center justify-center">
          <svg className="w-6 h-6 text-[#2F5E2F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <h3 className="text-[22px] font-bold text-[#1a1a1a]">Kalkulator Pohon</h3>
          <p className="text-[13px] text-gray-400">Estimasi harga jual pohon Anda</p>
        </div>
      </div>

      {/* Wood Type Select */}
      <div className="mb-5 mt-6">
        <label className="block text-[13px] font-medium text-[#4A4A4A] mb-2">
          Jenis Kayu
        </label>
        <select
          value={woodType}
          onChange={(e) => setWoodType(e.target.value)}
          className="w-full px-4 pr-10 py-3 rounded-xl border border-gray-200 text-[15px] text-[#1a1a1a] focus:outline-none focus:border-[#2F5E2F] focus:ring-2 focus:ring-[#2F5E2F]/10 transition-all duration-200 bg-gray-50/50 hover:bg-gray-50 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_12px_center] bg-[length:18px]"
        >
          {woodTypes.map((wood) => (
            <option key={wood.id} value={wood.id}>
              {wood.name}
            </option>
          ))}
        </select>
      </div>

      {/* Width & Height */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
        <div>
          <label className="block text-[13px] font-medium text-[#4A4A4A] mb-2">
            Diameter (cm)
          </label>
          <input
            type="number"
            min="0"
            value={width || ""}
            onChange={(e) => setWidth(Number(e.target.value))}
            placeholder="30"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[15px] text-[#1a1a1a] placeholder:text-gray-300 focus:outline-none focus:border-[#2F5E2F] focus:ring-2 focus:ring-[#2F5E2F]/10 transition-all duration-200 bg-gray-50/50 hover:bg-gray-50"
          />
        </div>
        <div>
          <label className="block text-[13px] font-medium text-[#4A4A4A] mb-2">
            Tinggi (cm)
          </label>
          <input
            type="number"
            min="0"
            value={height || ""}
            onChange={(e) => setHeight(Number(e.target.value))}
            placeholder="500"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[15px] text-[#1a1a1a] placeholder:text-gray-300 focus:outline-none focus:border-[#2F5E2F] focus:ring-2 focus:ring-[#2F5E2F]/10 transition-all duration-200 bg-gray-50/50 hover:bg-gray-50"
          />
        </div>
      </div>

      {/* Quantity */}
      <div className="mb-6">
        <label className="block text-[13px] font-medium text-[#4A4A4A] mb-2">
          Jumlah Pohon
        </label>
        <input
          type="number"
          min="1"
          value={quantity || ""}
          onChange={(e) => setQuantity(Number(e.target.value) || 1)}
          placeholder="10"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[15px] text-[#1a1a1a] placeholder:text-gray-300 focus:outline-none focus:border-[#2F5E2F] focus:ring-2 focus:ring-[#2F5E2F]/10 transition-all duration-200 bg-gray-50/50 hover:bg-gray-50"
        />
      </div>

      {/* Result */}
      <div className="bg-[#F0F7F0] rounded-xl p-5">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[13px] text-gray-500">Volume per pohon</span>
          <span className="text-[13px] font-medium text-[#4A4A4A]">
            {width && height ? `${volumePerTreeM3.toFixed(4)} m³` : "-"}
          </span>
        </div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-[13px] text-gray-500">Harga per m³</span>
          <span className="text-[13px] font-medium text-[#4A4A4A]">
            {formatPrice(pricePerMeter)}
          </span>
        </div>
        <div className="border-t border-[#2F5E2F]/15 pt-3">
          <div className="flex justify-between items-center">
            <span className="text-[15px] font-bold text-[#2F5E2F]">Estimasi Harga Jual</span>
            <span className="text-[20px] font-bold text-[#2F5E2F] tabular-nums">
              {width && height && quantity ? formatPrice(totalPrice) : formatPrice(0)}
            </span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <button className="w-full mt-5 py-3 rounded-xl bg-[#2F5E2F] text-white text-[14px] font-medium hover:bg-[#244824] active:scale-[0.98] transition-all duration-150 flex items-center justify-center gap-2 shadow-sm hover:shadow-md">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        Cari Pembeli Sekarang
      </button>
    </div>
  );
}

export default Calculator;
