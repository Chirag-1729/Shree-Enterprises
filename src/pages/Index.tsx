
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Products } from "@/components/Products";
import { Contact } from "@/components/Contact";
import { MapSection } from "@/components/MapSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-roboto">
      <Header />
      <Hero />
      <About />
      <Services />
      <Products />
      <Contact />
      <MapSection />
      <Footer />
    </div>
  );
};

export default Index;
