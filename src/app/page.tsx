import PresentationImage from "@/components/perso/carousel/PresentationImage";
import Avis from "@/components/perso/content/Avis";
import Engagements from "@/components/perso/content/Engagements";
import Footer from "@/components/perso/footer/Footer";
import Hero from "@/components/perso/hero/Hero";
import Header from "../components/perso/header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full min-h-screen">
        <Hero />
        <PresentationImage />
        <Engagements />
        <Avis />
      </main>
      <Footer />
    </>
  );
}
