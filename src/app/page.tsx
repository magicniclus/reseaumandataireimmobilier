"use client";

import CTA from "@/components/perso/content/CTA";
import Debut from "@/components/perso/content/Debut";
import FAQ from "@/components/perso/content/FAQ";
import Featurs from "@/components/perso/content/Features";
import LeftImageContainer from "@/components/perso/content/LeftImageContainer";
import Offre from "@/components/perso/content/Offre";
import Outils from "@/components/perso/content/Outils";
import Stats from "@/components/perso/content/Stats";
import Video from "@/components/perso/content/Video";
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
        <Offre />
        <h2 className="text-5xl font-bold tracking-tight text-slate-900 text-center leading-[3rem] mt-14 max-w-7xl mx-auto">
          Devenir{" "}
          <span className="relative inline-block">
            <span className=" absolute -inset-0 w-[100%] h-full "></span>
            <span className="relative ">conseiller immobilier </span>{" "}
          </span>{" "}
          indépendant eXp c’est :
        </h2>
        <LeftImageContainer />
        <Video />
        <Debut />
        <Outils />
        <Featurs />
        <Stats />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
