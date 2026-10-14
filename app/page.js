import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EmergencyVacationers from "@/components/EmergencyVacationers";
import Services from "@/components/Services";
import BookingSection from "@/components/BookingSection";
import WhyUs from "@/components/WhyUs";
import Reviews from "@/components/Reviews";
import ContactLocation from "@/components/ContactLocation";
import BottomBar from "@/components/BottomBar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <EmergencyVacationers />
      <Services />
      <BookingSection />
      <WhyUs />
      <Reviews />
      <ContactLocation />
      <BottomBar />
    </main>
  );
}
