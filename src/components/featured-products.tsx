import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Kayu Jati",
    price: "Rp 4.500.000/m³",
    image: "https://5.imimg.com/data5/ANDROID/Default/2024/11/468971609/VO/WU/FG/75109416/prod-20241128-202711884131769996795458-jpg-1000x1000.jpg",
    description: "Kayu jati berkualitas tinggi, tahan lama dan anti rayap"
  },
  {
    id: 2,
    name: "Kayu Mahoni",
    price: "Rp 3.800.000/m³",
    image: "https://bibitbunga.com/wp-content/uploads/2017/02/cara-budidaya-pohon-mahoni-510x394.jpg",
    description: "Kayu mahoni dengan serat indah, cocok untuk furnitur"
  },
  {
    id: 3,
    name: "Kayu Sono",
    price: "Rp 3.200.000/m³",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&h=300&fit=crop",
    description: "Kayu sono kering dan kokoh, ideal untuk konstruksi"
  },
  {
    id: 4,
    name: "Kayu Meranti",
    price: "Rp 2.800.000/m³",
    image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=400&h=300&fit=crop",
    description: "Kayu meranti ekonomis, serbaguna untuk berbagai kebutuhan"
  }
];

function FeaturedProducts() {
  return (
    <section className="px-[160px] py-[80px] bg-[#F9F9F9]">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-[36px] font-bold text-[#2F5E2F] mb-4">
          Produk Unggulan Kami
        </h2>
        <p className="text-[16px] text-[#4A4A4A] max-w-[600px] mx-auto">
          Pilihan kayu terbaik untuk proyek Anda, diolah dengan standar kualitas tinggi
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <div className="h-[200px] overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-5">
              <h3 className="text-[18px] font-bold text-[#2F5E2F] mb-2">
                {product.name}
              </h3>
              <p className="text-[14px] text-[#4A4A4A] mb-3 line-clamp-2">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-[16px] font-bold text-[#2F5E2F]">
                  {product.price}
                </span>
                <Link
                  to={`/catalog/${product.id}`}
                  className="px-4 py-2 rounded-full bg-[#2F5E2F] text-white text-[14px] hover:bg-[#244824] transition"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-10">
        <Link
          to="/catalog"
          className="px-8 py-3 rounded-full border-2 border-[#2F5E2F] text-[#2F5E2F] font-medium hover:bg-[#2F5E2F] hover:text-white transition inline-block"
        >
          Lihat Semua Produk
        </Link>
      </div>
    </section>
  );
}

export default FeaturedProducts;
