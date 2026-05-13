"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Products from "@/components/Products";
import Utilities from "@/components/Utilities";
import Presentation from "@/components/Presentation";
import LeadMagnet from "@/components/LeadMagnet";
import Footer from "@/components/Footer";
import AosInit from "@/components/AosInit";

export default function Home() {
  return (
    <main>
      <AosInit />
      <Header />
      <Hero />
      <Overview />
      <Products />
      <Utilities />
      <Presentation />
      <LeadMagnet />
      <Footer />
    </main>
  );
}
