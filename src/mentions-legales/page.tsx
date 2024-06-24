import Footer from "@/components/perso/footer/Footer";
import Header from "@/components/perso/header/Header";

const page = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen flex justify-center items-center flex-col bg-slate-50">
        -{" "}
        <h1 className="text-3xl font-bold text-center">
          - Mentions légales -{" "}
        </h1>
      </main>
      <Footer />
    </>
  ); // 1
};

export default page;
