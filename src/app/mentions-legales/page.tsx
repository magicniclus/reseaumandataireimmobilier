import Footer from "@/components/perso/footer/Footer";
import Header from "@/components/perso/header/Header";

const page = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen flex justify-center items-center flex-col bg-slate-50">
        -{" "}
        <div className="mx-auto max-w-5xl  px-6 lg:px-8 pb-10">
          <h1 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl  mt-16">
            Mentions Légales de Eco Nouvelle Aquitaine
          </h1>
          <h2 className="text-2xl font-bold tracking-tight text-gray-800 sm:text-3xl  mt-16">
            Informations Générales
          </h2>
          <p className="text-nomral font-normal mt-5">
            Le présent site web, accessible à l&apos;adresse www.terabois.fr,
            est la propriété de TeraBois, une entreprise spécialisée dans la
            rénovation de l&apos;habitat basée à Bordeaux.
          </p>
          <p className="text-nomral font-normal mt-5">
            TeraBois est une SASU dont le siège social est situé à 36 avenue
            Francois Mitterrand 33270 Floirac, inscrite au registre du commerce
            et des sociétés de Bordeaux sous le numéro 848 564 464 00016.
          </p>
          <p className="text-nomral font-normal mt-5">
            Téléphone : 06 49 23 13 80 <br />
            Email : contact@terabois.fr
          </p>
          <p className="text-nomral font-normal mt-5">
            Directeur de la publication : Mr Castera{" "}
            <a className="underline" href="https://www.adsventure-agency.com/">
              Agence Adsventure
            </a>
          </p>
          <p className="text-nomral font-normal mt-5">
            Le site est hébergé par OVH, dont le siège social est situé à 2 rue
            Kellermann - 59100 Roubaix - France.
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-gray-800 sm:text-3xl  mt-16">
            Propriété Intellectuelle
          </h2>
          <p className="text-nomral font-normal mt-5">
            Tous les éléments du site web de TeraBois, y compris les textes,
            graphiques, logos, images, photographies, vidéos, sons, sont la
            propriété exclusive de TeraBois, sauf indication contraire. Ces
            éléments sont protégés par les lois françaises et les textes
            internationaux relatifs au respect des droits d&apos;auteur et de la
            propriété intellectuelle.
          </p>
          <p className="text-nomral font-normal mt-5">
            La reproduction et l&apos;utilisation de ces éléments ne sont
            autorisées qu&apos;à des fins d&apos;information pour un usage
            personnel et privé. Toute autre utilisation est expressément
            interdite sans l&apos;autorisation préalable écrite de TeraBois.
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-gray-800 sm:text-3xl  mt-16">
            Limitation de responsabilité
          </h2>
          <p className="text-nomral font-normal mt-5">
            TeraBois s&apos;efforce d&apos;assurer au mieux de ses possibilités
            l&apos;exactitude et la mise à jour des informations diffusées sur
            son site. Toutefois, TeraBois ne peut garantir l&apos;exactitude, la
            précision ou l&apos;exhaustivité des informations disponibles sur ce
            site.
          </p>
          <p className="text-nomral font-normal mt-5">
            TeraBois n&apos;est pas responsable des éventuelles erreurs,
            d&apos;une absence de disponibilité des informations, ainsi que de
            la présence de virus sur son site. En aucun cas, TeraBois ne peut
            être tenu responsable des dommages directs ou indirects résultant de
            l&apos;utilisation de son site web.
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-gray-800 sm:text-3xl  mt-16">
            Modification des mentions légales
          </h2>
          <p className="text-nomral font-normal mt-5">
            TeraBois se réserve le droit de modifier les présentes mentions
            légales à tout moment. L&apos;utilisateur est donc invité à les
            consulter régulièrement.
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-gray-800 sm:text-3xl  mt-16">
            Droit applicable
          </h2>
          <p className="text-nomral font-normal mt-5">
            Les présentes mentions légales sont régies par le droit français. En
            cas de litige et à défaut d&apos;accord amiable, le litige sera
            porté devant les tribunaux français conformément aux règles de
            compétence en vigueur.
          </p>
          <p className="text-nomral font-normal mt-5">
            Date de dernière mise à jour : 23/05/2023
          </p>
        </div>
      </main>
      <Footer />
    </>
  ); // 1
};

export default page;
