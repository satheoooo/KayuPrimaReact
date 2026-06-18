const woodPrices = [
  { id: 1, name: "JATI", fullName: "Kayu Jati", price: "20.000.000", change: "+3.5%", isUp: true },
  { id: 2, name: "MAHONI", fullName: "Kayu Mahoni", price: "15.000.000", change: "+2.8%", isUp: true },
  { id: 3, name: "SONOKELING", fullName: "Kayu Sonokeling", price: "17.000.000", change: "+4.2%", isUp: true },
  { id: 4, name: "ULIN", fullName: "Kayu Ulin", price: "22.000.000", change: "+5.1%", isUp: true },
  { id: 5, name: "BANGKIRAI", fullName: "Kayu Bangkirai", price: "12.000.000", change: "+1.9%", isUp: true },
  { id: 6, name: "MERANTI", fullName: "Kayu Meranti", price: "8.000.000", change: "-0.8%", isUp: false },
  { id: 7, name: "SUNGKAI", fullName: "Kayu Sungkai", price: "6.500.000", change: "+1.2%", isUp: true },
  { id: 8, name: "CENDANA", fullName: "Kayu Cendana", price: "35.000.000", change: "+6.8%", isUp: true },
  { id: 9, name: "CENGKEH", fullName: "Kayu Cengkeh", price: "5.200.000", change: "+0.9%", isUp: true },
  { id: 10, name: "MENGGANI", fullName: "Kayu Menggani", price: "7.800.000", change: "-0.3%", isUp: false },
];

const duplicatedPrices = [...woodPrices, ...woodPrices, ...woodPrices];

function PriceTicker() {
  return (
    <section className="bg-[#2F5E2F] py-5 overflow-hidden">
      {/* Ticker Container */}
      <div className="relative">
        {/* Gradient Overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-[100px] bg-gradient-to-r from-[#2F5E2F] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-[100px] bg-gradient-to-l from-[#2F5E2F] to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Ticker */}
        <div className="flex animate-ticker">
          {duplicatedPrices.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 mx-2"
            >
              <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-xl px-5 py-3 min-w-[240px] hover:bg-white/30 transition-colors">
                {/* Ticker Symbol */}
                <div className="min-w-[70px]">
                  <p className="text-[14px] font-bold text-white">
                    {item.name}
                  </p>
                  <p className="text-[11px] text-white/70">
                    {item.fullName}
                  </p>
                </div>

                {/* Price & Change */}
                <div className="flex items-center justify-between mt-2">
                  <p className="text-[14px] font-bold text-white">
                    Rp {item.price}
                  </p>
                  <div className={`flex items-center gap-1 ${item.isUp ? 'text-green-300' : 'text-red-300'}`}>
                    <span className="text-[12px]">
                      {item.isUp ? '▲' : '▼'}
                    </span>
                    <span className="text-[12px] font-bold">
                      {item.change}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PriceTicker;
