import AboutSection from "@/components/about";
import Header from "@/components/header";
import HeroCarousel from "@/components/heroCarousel";
import Footer from "@/components/Footer";
import Products from "@/components/products";
import Contact from "@/components/contact";

export default function Home() {
  return (
   <>
    <Header />
    <HeroCarousel />
    <AboutSection />
    <Products />
    <Contact />
    <Footer />
   </>
  );
}
