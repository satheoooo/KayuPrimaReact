import { useState } from "react";

const woodTypes = [
  { id: "jati", name: "Kayu Jati", pricePerCm3: 15000 },
  { id: "mahoni", name: "Kayu Mahoni", pricePerCm3: 8000 },
  { id: "meranti", name: "Kayu Meranti", pricePerCm3: 5000 },
  { id: "sungkai", name: "Kayu Sungkai", pricePerCm3: 7000 },
  { id: "sonokeling", name: "Kayu Sonokeling", pricePerCm3: 12000 },
  { id: "ulin", name: "Kayu Ulin", pricePerCm3: 18000 },
];

function Calculator() {
  const [woodType, setWoodType] = useState("jati");
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);

  const selectedWood = woodTypes.find((w) => w.id === woodType);
  const volume = width * height * 100;
  const totalPrice = volume * (selectedWood?.pricePerCm3 || 0) * quantity;
  const pricePerMeter = (selectedWood?.pricePerCm3 || 0) * 1000000;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-7 w-[450px]">
      <h3 className="text-[22px] font-bold text-[#2F5E2F] mb-1">
        🧮 Kalkulator Harga Kayu
      </h3>
      <p className="text-[14px] text-[#4A4A4A] mb-6">
        Estimasi harga kebutuhan kayu Anda
      </p>

      {/* Wood Type Select */}
      <div className="mb-5">
        <label className="block text-[14px] font-medium text-[#4A4A4A] mb-2">
          Jenis Kayu
        </label>
        <select
          value={woodType}
          onChange={(e) => setWoodType(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[15px] text-[#4A4A4A] focus:outline-none focus:border-[#2F5E2F] transition bg-gray-50"
        >
          {woodTypes.map((wood) => (
            <option key={wood.id} value={wood.id}>
              {wood.name} - {formatPrice(wood.pricePerCm3 * 1000000)}/m³
            </option>
          ))}
        </select>
      </div>

      {/* Width & Height */}
      <div className="grid grid-cols-2 gap-4 mb-5">
        <div>
          <label className="block text-[14px] font-medium text-[#4A4A4A] mb-2">
            Lebar (cm)
          </label>
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
          <label className="block text-[14px] font-medium text-[#4A4A4A] mb-2">
            Tinggi (cm)
          </label>
          <input
            type="number"
            min="0"
            value={height || ""}
            onChange={(e) => setHeight(Number(e.target.value))}
            placeholder="50"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[15px] text-[#4A4A4A] focus:outline-none focus:border-[#2F5E2F] transition bg-gray-50"
          />
        </div>
      </div>

      {/* Quantity */}
      <div className="mb-6">
        <label className="block text-[14px] font-medium text-[#4A4A4A] mb-2">
          Kuantitas (pcs)
        </label>
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
          <span className="text-[14px] text-[#4A4A4A]">Volume total</span>
          <span className="text-[14px] font-medium text-[#4A4A4A]">
            {width && height ? `${(width * height * 100).toLocaleString("id-ID")} cm³` : "-"}
          </span>
        </div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-[14px] text-[#4A4A4A]">Harga per m³</span>
          <span className="text-[14px] font-medium text-[#4A4A4A]">
            {formatPrice(pricePerMeter)}
          </span>
        </div>
        <div className="border-t border-[#2F5E2F]/20 pt-3">
          <div className="flex justify-between items-center">
            <span className="text-[16px] font-bold text-[#2F5E2F]">Estimasi Total</span>
            <span className="text-[20px] font-bold text-[#2F5E2F]">
              {width && height && quantity ? formatPrice(totalPrice) : formatPrice(0)}
            </span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <button className="w-full mt-5 py-3 rounded-xl bg-[#2F5E2F] text-white text-[15px] font-medium hover:bg-[#244824] transition">
        Minta Penawaran Harga
      </button>
    </div>
  );
}

export default Calculator;
