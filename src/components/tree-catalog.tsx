const trees = [
  {
    id: 1,
    name: "Jati",
    latin: "Tectona grandis",
    image: "https://images.unsplash.com/photo-1542621334-a254cf47733d?w=400&h=300&fit=crop",
    price: "Rp 20.000.000",
    unit: "/m³",
    description: "Kayu premium tahan air & rayap, cocok untuk furnitur mewah dan konstruksi.",
    characteristics: ["Tahan lama", "Anti rayap", "Serat indah"],
    usage: ["Furnitur", "Konstruksi", "Dekorasi"],
  },
  {
    id: 2,
    name: "Mahoni",
    latin: "Swietenia macrophylla",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop",
    price: "Rp 15.000.000",
    unit: "/m³",
    description: "Kayu serbaguna dengan serat indah, mudah diukir dan diolah.",
    characteristics: ["Mudah diukir", "Serat halus", "Warna kemerahan"],
    usage: ["Furnitur", "Ukiran", "Interior"],
  },
  {
    id: 3,
    name: "Meranti",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&h=300&fit=crop",
    latin: "Shorea spp.",
    price: "Rp 8.000.000",
    unit: "/m³",
    description: "Kayu ekonomis serbaguna, cocok untuk konstruksi ringan dan furnitur.",
    characteristics: ["Ekonomis", "Ringan", "Mudah diolah"],
    usage: ["Konstruksi", "Furnitur", "Papan"],
  },
  {
    id: 4,
    name: "Sungkai",
    latin: "Peronema canescens",
    image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=400&h=300&fit=crop",
    price: "Rp 6.500.000",
    unit: "/m³",
    description: "Alternatif populer dengan serat unik, cocok untuk furnitur kelas menengah.",
    characteristics: ["Serat unik", "Keras", "Tahan lama"],
    usage: ["Furnitur", "Lantai", "Dekorasi"],
  },
  {
    id: 5,
    name: "Sonokeling",
    latin: "Dalbergia latifolia",
    image: "https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?w=400&h=300&fit=crop",
    price: "Rp 17.000.000",
    unit: "/m³",
    description: "Kayu premium warna gelap elegan, sangat keras dan tahan lama.",
    characteristics: ["Warna gelap", "Sangat keras", "Eksklusif"],
    usage: ["Furnitur mewah", "Lantai", "Instrument musik"],
  },
  {
    id: 6,
    name: "Ulin",
    latin: "Eusideroxylon zwageri",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop",
    price: "Rp 22.000.000",
    unit: "/m³",
    description: "Kayu terkeras di Indonesia, ideal untuk konstruksi berat dan pilar.",
    characteristics: ["Paling keras", "Tahan cuaca", "Anti lapuk"],
    usage: ["Konstruksi berat", "Dek", "Pilar"],
  },
  {
    id: 7,
    name: "Bangkirai",
    latin: "Shorea balangeran",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&h=300&fit=crop",
    price: "Rp 12.000.000",
    unit: "/m³",
    description: "Kayu keras tahan cuaca, populer untuk decking dan lantai outdoor.",
    characteristics: ["Tahan cuaca", "Keras", "Anti jamur"],
    usage: ["Decking", "Lantai outdoor", "Konstruksi"],
  },
];

import { Link } from "react-router-dom";

function TreeCatalog() {
  // Tampilkan 3 card pertama saja di homepage
  const displayedTrees = trees.slice(0, 3);

  return (
    <section className="px-[160px] py-[80px] bg-[#F9F9F9]">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#2F5E2F]/10 mb-4">
          <svg className="w-8 h-8 text-[#2F5E2F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </div>
        <h2 className="text-[36px] font-bold text-[#2F5E2F] mb-4">
          Katalog Pohon
        </h2>
        <p className="text-[16px] text-[#4A4A4A] max-w-[600px] mx-auto">
          Kenali jenis kayu yang bisa Anda jual. Ketahui karakteristik, kegunaan,
          dan harga pasar terkini.
        </p>
      </div>

      {/* Trees Grid */}
      <div className="grid grid-cols-3 gap-6">
        {displayedTrees.map((tree) => (
          <div
            key={tree.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition group"
          >
            {/* Image */}
            <div className="h-[200px] overflow-hidden relative">
              <img
                src={tree.image}
                alt={tree.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-[13px] font-bold text-[#2F5E2F]">
                  {tree.price}{tree.unit}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="mb-3">
                <h3 className="text-[18px] font-bold text-[#2F5E2F]">
                  Kayu {tree.name}
                </h3>
                <p className="text-[12px] text-gray-400 italic">
                  {tree.latin}
                </p>
              </div>

              <p className="text-[14px] text-[#4A4A4A] mb-4 line-clamp-2">
                {tree.description}
              </p>

              {/* Characteristics */}
              <div className="mb-4">
                <p className="text-[12px] font-medium text-gray-500 mb-2">Karakteristik:</p>
                <div className="flex flex-wrap gap-2">
                  {tree.characteristics.map((char, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2 py-1 bg-[#F0F7F0] text-[#2F5E2F] rounded-full"
                    >
                      {char}
                    </span>
                  ))}
                </div>
              </div>

              {/* Usage */}
              <div className="mb-4">
                <p className="text-[12px] font-medium text-gray-500 mb-2">Kegunaan:</p>
                <div className="flex flex-wrap gap-2">
                  {tree.usage.map((use, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                    >
                      {use}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <button className="w-full py-2.5 rounded-xl border-2 border-[#2F5E2F] text-[#2F5E2F] text-[14px] font-medium hover:bg-[#2F5E2F] hover:text-white transition flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Lihat Detail
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View All */}
      <div className="text-center mt-10">
        <Link
          to="/catalog"
          className="text-[#2F5E2F] font-medium hover:underline inline-flex items-center gap-2"
        >
          Lihat Selengkapnya
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

export default TreeCatalog;
