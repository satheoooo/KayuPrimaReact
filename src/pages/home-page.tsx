import Navbar from "../components/navbar";
import Hero from "../components/hero";
import PriceTicker from "../components/price-carousel";
import TreeCatalog from "../components/tree-catalog";
import PremiumBuyers from "../components/premium-buyers";
import Testimonials from "../components/testimonials";
import BrandLogos from "../components/brand-logos";
import Footer from "../components/footer";

function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PriceTicker />
      <PremiumBuyers />
      <TreeCatalog />
      <Testimonials />
      <BrandLogos />
      <Footer />
    </div>
  );
}

export default HomePage;
