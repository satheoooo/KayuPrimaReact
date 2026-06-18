const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "Kontraktor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    review: "Kayu dari KayuPrima sangat berkualitas. Sudah 3 tahun saya langganan dan tidak pernah kecewa. Kualitas konsisten dan pengiriman selalu tepat waktu."
  },
  {
    id: 2,
    name: "Siti Rahayu",
    role: "Pengrajin Furnitur",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    review: "Sebagai pengrajin furnitur, saya butuh kayu dengan serat yang bagus. KayuPrima selalu menyediakan kayu dengan mutu terbaik. Sangat recommended!"
  },
  {
    id: 3,
    name: "Ahmad Hidayat",
    role: "Arsitek",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    review: "Pelayanan profesional dan konsultasi yang membantu. KayuPrima paham kebutuhan proyek arsitektur. Hasilnya selalu memuaskan."
  }
];

function Testimonials() {
  return (
    <section className="px-[160px] py-[80px] bg-white">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-[36px] font-bold text-[#2F5E2F] mb-4">
          Apa Kata Mereka?
        </h2>
        <p className="text-[16px] text-[#4A4A4A] max-w-[600px] mx-auto">
          Kepuasan pelanggan adalah prioritas kami
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-3 gap-8">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-[#F9F9F9] rounded-2xl p-8 flex flex-col"
          >
            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(item.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>

            {/* Review Text */}
            <p className="text-[15px] text-[#4A4A4A] leading-relaxed mb-6 flex-1">
              "{item.review}"
            </p>

            {/* User Info */}
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-[50px] h-[50px] rounded-full object-cover"
              />
              <div>
                <h4 className="text-[16px] font-bold text-[#2F5E2F]">
                  {item.name}
                </h4>
                <p className="text-[14px] text-[#4A4A4A]">
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
