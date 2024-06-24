import Avis from "@/components/perso/content/Avis";
import Footer from "@/components/perso/footer/Footer";
import Hero from "@/components/perso/hero/Hero";
import Header from "../components/perso/header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full min-h-screen">
        <Hero />
        <Avis />
      </main>
      <Footer />
    </>
  );
}
