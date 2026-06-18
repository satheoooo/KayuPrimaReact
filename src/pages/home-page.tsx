import Navbar from "../components/navbar";
import Hero from "../components/hero";
import PriceTicker from "../components/price-carousel";
import FeaturedProducts from "../components/featured-products";
import Testimonials from "../components/testimonials";
import BrandLogos from "../components/brand-logos";
import Footer from "../components/footer";

function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PriceTicker />
      <FeaturedProducts />
      <Testimonials />
      <BrandLogos />
      <Footer />
    </div>
  );
}

export default HomePage;
