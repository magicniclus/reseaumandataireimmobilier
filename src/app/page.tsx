"use client";

import PresentationImage from "@/components/perso/carousel/PresentationImage";
import Avis from "@/components/perso/content/Avis";
import Beneficies from "@/components/perso/content/Beneficies";
import Engagements from "@/components/perso/content/Engagements";
import Financement from "@/components/perso/content/Financement";
import Footer from "@/components/perso/footer/Footer";
import Hero from "@/components/perso/hero/Hero";
import { useEffect } from "react";
import Header from "../components/perso/header/Header";

export default function Home() {
  useEffect(() => {
    const handleSmoothScroll = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.matches("a[href^='#']")) {
        event.preventDefault();
        const id = target.getAttribute("href")?.slice(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);

    return () => {
      document.removeEventListener("click", handleSmoothScroll);
    };
  }, []);
  return (
    <>
      <Header />
      <main className="w-full min-h-screen">
        <Hero />
        <PresentationImage />
        <Engagements />
        <Financement />
        <Beneficies />
        <Avis />
      </main>
      <Footer />
    </>
  );
}
