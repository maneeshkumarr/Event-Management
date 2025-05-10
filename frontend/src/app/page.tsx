"use client";
// app/layout.tsx or _app.tsx
 // ✅
import Header from "../components/Header";
import HeroSection from "../components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
 import Footer from "@/components/Footer";




export default function Home() {
  return (
    <main className="bg-black text-white">
      <Header/>
      <HeroSection />
      <Services/>
      <HowItWorks/>
      <Testimonials/>
      <Pricing/>
      <Footer/>
      
   
    </main>
  );
}
