const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "Penjual Kayu",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    review: "Thanks to KayuPrima, saya bisa jual pohon jati dengan harga yang sesuai. Sekarang sudah dapat 3 pembeli premium yang serius!",
    type: "seller" as const,
  },
  {
    id: 2,
    name: "PT Maju Jaya",
    role: "Pembeli Premium",
    image: "https://ui-avatars.com/api/?name=PT+Maju+Jaya&background=2F5E2F&color=fff&size=100",
    rating: 5,
    review: "Sebagai pembeli, KayuPrima sangat membantu menemukan supplier kayu jati berkualitas. Proses negosiasi mudah dan transparan.",
    type: "buyer" as const,
  },
  {
    id: 3,
    name: "Siti Rahayu",
    role: "Pengrajin Furnitur",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    review: "Kalkulator harganya sangat akurat! Saya bisa tahu berapa harga wajar sebelum nego dengan supplier. Sangat recommended!",
    type: "buyer" as const,
  },
];

function Testimonials() {
  return (
    <section className="px-[160px] py-[80px] bg-white">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#2F5E2F]/10 mb-4">
          <svg className="w-8 h-8 text-[#2F5E2F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
        <h2 className="text-[36px] font-bold text-[#2F5E2F] mb-4">
          Apa Kata Mereka?
        </h2>
        <p className="text-[16px] text-[#4A4A4A] max-w-[600px] mx-auto">
          Kepuasan pengguna KayuPrima adalah prioritas kami
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-3 gap-8">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className={`rounded-2xl p-8 flex flex-col ${
              item.type === "seller"
                ? "bg-[#2F5E2F] text-white"
                : "bg-[#F9F9F9]"
            }`}
          >
            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(item.rating)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${item.type === "seller" ? "text-yellow-300" : "text-yellow-400"} fill-current`}
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>

            {/* Review Text */}
            <p className={`text-[15px] leading-relaxed mb-6 flex-1 ${
              item.type === "seller" ? "text-white/90" : "text-[#4A4A4A]"
            }`}>
              &ldquo;{item.review}&rdquo;
            </p>

            {/* User Info */}
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-[50px] h-[50px] rounded-full object-cover"
              />
              <div>
                <h4 className={`text-[16px] font-bold ${
                  item.type === "seller" ? "text-white" : "text-[#2F5E2F]"
                }`}>
                  {item.name}
                </h4>
                <p className={`text-[14px] ${
                  item.type === "seller" ? "text-white/70" : "text-[#4A4A4A]"
                }`}>
                  {item.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
