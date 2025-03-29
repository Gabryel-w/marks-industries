
import About from "@/components/about";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import Contact from "@/components/contact";
import Gallery from "@/components/gallery";
import Projects from "@/components/projects";
import Hero from "@/components/hero";
import Services from "@/components/services";

export default function Home() {
  return (
   <>
    <Header />
    <Hero />
    <About />
    <Services />
    <Projects />
    <Gallery />
    <Contact />
    <Footer />
   </>
  );
}
