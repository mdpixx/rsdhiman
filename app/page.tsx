import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Industries from "@/components/Industries";
import Process from "@/components/Process";
import Commitment from "@/components/Commitment";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Services />
        <WhyChooseUs />
        <Industries />
        <Process />
        <Commitment />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
