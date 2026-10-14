import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Reviews from "@/components/Reviews";
import ContactLocation from "@/components/ContactLocation";
import BottomBar from "@/components/BottomBar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Reviews />
      <ContactLocation />
      <BottomBar />
    </main>
  );
}
