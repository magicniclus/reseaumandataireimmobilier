"use client";

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
      </main>
      <Footer />
    </>
  );
}
