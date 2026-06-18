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

// Duplicate for infinite scroll effect
const duplicatedBrands = [...brands, ...brands];

function BrandLogos() {
  return (
    <section className="py-[60px] bg-[#F9F9F9] overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-10 px-[160px]">
        <h2 className="text-[28px] font-bold text-[#2F5E2F] mb-2">
          Dipercaya Oleh
        </h2>
        <p className="text-[14px] text-[#4A4A4A]">
          Bermitra dengan perusahaan terkemuka di Indonesia
        </p>
      </div>

      {/* Infinite Scroll Carousel */}
      <div className="relative">
        {/* Gradient Overlay Left */}
        <div className="absolute left-0 top-0 bottom-0 w-[150px] bg-gradient-to-r from-[#F9F9F9] to-transparent z-10 pointer-events-none"></div>

        {/* Gradient Overlay Right */}
        <div className="absolute right-0 top-0 bottom-0 w-[150px] bg-gradient-to-l from-[#F9F9F9] to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Container */}
        <div className="flex animate-scroll">
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`${brand.id}-${index}`}
              className="flex-shrink-0 mx-4"
            >
              <div className="flex items-center gap-3 px-6 py-4 bg-white rounded-xl border border-gray-100 hover:border-[#2F5E2F]/30 hover:shadow-md transition-all duration-300 group min-w-[220px]">
                {/* Logo Image */}
                <div className="w-[50px] h-[50px] rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center flex-shrink-0">
                  <img
                    src={`https://logo.clearbit.com/${brand.domain}`}
                    alt={brand.name}
                    className="w-[40px] h-[40px] object-contain"
                    onError={(e) => {
                      // Fallback to initials if logo not found
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<span class="text-[16px] font-bold text-[#2F5E2F]">${brand.name.split(' ').map(w => w[0]).join('').slice(0, 3)}</span>`;
                        parent.className = "w-[50px] h-[50px] rounded-lg bg-[#2F5E2F]/10 flex items-center justify-center flex-shrink-0";
                      }
                    }}
                  />
                </div>
                {/* Company Name */}
                <div className="max-w-[140px]">
                  <p className="text-[13px] font-medium text-[#4A4A4A] group-hover:text-[#2F5E2F] transition leading-tight">
                    {brand.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Banner */}
      <div className="mt-10 mx-[160px] bg-white rounded-2xl p-6 flex items-center justify-between border border-gray-100">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#2F5E2F]/10 flex items-center justify-center">
            <svg className="w-6 h-6 text-[#2F5E2F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <h4 className="text-[15px] font-bold text-[#2F5E2F]">Tersertifikasi SVLK</h4>
            <p className="text-[13px] text-[#4A4A4A]">Sistem Verifikasi Legalitas Kayu - Jaminan kayu legal & berkelanjutan</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-center">
            <p className="text-[24px] font-bold text-[#2F5E2F]">500+</p>
            <p className="text-[12px] text-[#4A4A4A]">Mitra Bisnis</p>
          </div>
          <div className="w-px h-10 bg-gray-200"></div>
          <div className="text-center">
            <p className="text-[24px] font-bold text-[#2F5E2F]">15+</p>
            <p className="text-[12px] text-[#4A4A4A]">Tahun Pengalaman</p>
          </div>
          <div className="w-px h-10 bg-gray-200"></div>
          <div className="text-center">
            <p className="text-[24px] font-bold text-[#2F5E2F]">98%</p>
            <p className="text-[12px] text-[#4A4A4A]">Kepuasan Pelanggan</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandLogos;
