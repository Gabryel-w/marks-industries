import AboutSection from "@/components/about";
import Header from "@/components/header";
import HeroCarousel from "@/components/heroCarousel";
import Footer from "@/components/Footer";
import Contact from "@/components/contact";
import Gallery from "@/components/gallery";
import CompanyTimeline from "@/components/companyTimeline";

export default function Home() {
  return (
   <>
    <Header />
    <HeroCarousel />
    <AboutSection />
    <CompanyTimeline />
    <Gallery />
    <Contact />
    <Footer />
   </>
  );
}
