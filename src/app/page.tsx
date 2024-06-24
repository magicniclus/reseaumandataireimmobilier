import Hero from "@/components/perso/hero/Hero";
import Header from "../components/perso/header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full">
        <Hero />
      </main>
    </>
  );
}
