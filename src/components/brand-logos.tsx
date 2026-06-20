const brands = [
  { id: 1, name: "PT Jati Luhur Agung", domain: "jatiluhuragung.co.id" },
  { id: 2, name: "PT Rimba Makmur Utama", domain: "rimbamakmur.co.id" },
  { id: 3, name: "PT Dian Alam Lestari", domain: "dianalamlestari.co.id" },
  { id: 4, name: "PT Bukit Asam", domain: "bukitasam.co.id" },
  { id: 5, name: "PT Indah Kiat Pulp & Paper", domain: "indahkiat.co.id" },
  { id: 6, name: "CV Karya Pratama Furniture", domain: "karyapratama.co.id" },
  { id: 7, name: "PT Inhutani I", domain: "inhutani1.co.id" },
  { id: 8, name: "PT Perhutani", domain: "perhutani.co.id" },
];

const duplicatedBrands = [...brands, ...brands];

function BrandLogos() {
  return (
    <section className="py-16 bg-[#F9F9F9] overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-10 px-4 md:px-8 lg:px-[160px]">
        <h2 className="text-[24px] font-bold text-[#1a1a1a] mb-2">
          Dipercaya Oleh
        </h2>
        <p className="text-[13px] text-gray-400">
          Bermitra dengan perusahaan terkemuka di Indonesia
        </p>
      </div>

      {/* Infinite Scroll Carousel */}
      <div className="relative">
        {/* Gradient Overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-[120px] bg-gradient-to-r from-[#F9F9F9] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-[120px] bg-gradient-to-l from-[#F9F9F9] to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Container */}
        <div className="flex animate-scroll">
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`${brand.id}-${index}`}
              className="flex-shrink-0 mx-2"
            >
              <div className="flex items-center gap-3 px-5 py-3.5 bg-white rounded-xl border border-gray-100/80 hover:border-[#2F5E2F]/20 hover:shadow-sm transition-all duration-200 group min-w-[200px]">
                <div className="w-10 h-10 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center flex-shrink-0">
                  <img
                    src={`https://logo.clearbit.com/${brand.domain}`}
                    alt={brand.name}
                    className="w-8 h-8 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<span class="text-[13px] font-bold text-[#2F5E2F]">${brand.name.split(' ').map(w => w[0]).join('').slice(0, 3)}</span>`;
                        parent.className = "w-10 h-10 rounded-lg bg-[#F0F7F0] flex items-center justify-center flex-shrink-0";
                      }
                    }}
                  />
                </div>
                <div className="max-w-[130px]">
                  <p className="text-[12px] font-medium text-[#4A4A4A] group-hover:text-[#2F5E2F] transition-colors duration-150 leading-tight truncate">
                    {brand.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Banner */}
      <div className="mt-10 mx-4 md:mx-8 lg:mx-[160px] bg-white rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 border border-gray-100/60 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-full bg-[#F0F7F0] flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-[#2F5E2F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <h4 className="text-[14px] font-bold text-[#1a1a1a]">Tersertifikasi SVLK</h4>
            <p className="text-[12px] text-gray-400">Sistem Verifikasi Legalitas Kayu - Jaminan kayu legal & berkelanjutan</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          {[
            { value: "500+", label: "Mitra Bisnis" },
            { value: "15+", label: "Tahun Pengalaman" },
            { value: "98%", label: "Kepuasan Pelanggan" },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-6">
              {i > 0 && <div className="w-px h-8 bg-gray-200"></div>}
              <div className="text-center">
                <p className="text-[22px] font-bold text-[#2F5E2F] tabular-nums">{stat.value}</p>
                <p className="text-[11px] text-gray-400">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandLogos;
