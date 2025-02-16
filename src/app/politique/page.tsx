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
            Politique de confidentialité
          </h1>
          <h2 className="text-2xl font-bold tracking-tight text-gray-800 sm:text-3xl  mt-16">
            Introduction
          </h2>
          <p className="text-nomral font-normal mt-5">
            Bienvenue sur Reseau-mandataire-immobilier. Nous nous engageons à
            protéger votre vie privée et à respecter les normes de protection
            des données personnelles en vigueur.
          </p>
          <p className="text-nomral font-normal mt-5">
            La présente politique de confidentialité a pour but de vous informer
            de nos pratiques en matière de collecte, d&apos;utilisation, de
            divulgation et de protection des informations que vous nous
            fournissez via notre site web. Veuillez lire attentivement cette
            politique de confidentialité pour comprendre nos pratiques
            concernant vos informations personnelles.
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-gray-800 sm:text-3xl  mt-16">
            Collecte des informations
          </h2>
          <p className="text-nomral font-normal mt-5">
            Reseau-mandataire-immobilier collecte des informations que vous nous
            fournissez lorsque vous remplissez des formulaires sur notre site
            web, par exemple lorsque vous demandez un devis pour une rénovation.
            Les informations collectées peuvent inclure votre nom, adresse
            e-mail, numéro de téléphone, adresse et autres détails relatifs à
            votre projet de rénovation.
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-gray-800 sm:text-3xl  mt-16">
            Utilisation des informations
          </h2>
          <p className="text-nomral font-normal mt-5">
            Reseau-mandataire-immobilier utilise les informations recueillies
            pour vous fournir des devis précis, répondre à vos questions,
            communiquer avec vous au sujet de nos services, et améliorer nos
            offres et services.
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-gray-800 sm:text-3xl  mt-16">
            Partage des informations
          </h2>
          <p className="text-nomral font-normal mt-5">
            Reseau-mandataire-immobilier est une entreprise qui récolte des
            leads pour son propre compte et ne partage, ne vend, ni
            n&apos;échange vos informations personnelles avec des tiers, sauf si
            la loi l&apos;exige, dans le cadre d&apos;une transaction
            d&apos;entreprise, ou si nous avons obtenu votre consentement
            préalable.
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-gray-800 sm:text-3xl  mt-16">
            Sécurité des informations
          </h2>
          <p className="text-nomral font-normal mt-5">
            Reseau-mandataire-immobilier utilise des mesures de sécurité
            appropriées pour protéger contre la perte, l&apos;abus et
            l&apos;altération des données utilisées par notre système.
            Cependant, aucune transmission de données sur Internet n&apos;est
            100% sécurisée, et bien que nous nous efforçons de protéger vos
            informations personnelles, nous ne pouvons garantir leur sécurité
            absolue.
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-gray-800 sm:text-3xl  mt-16">
            Vos droits
          </h2>
          <p className="text-nomral font-normal mt-5">
            Conformément aux lois en vigueur, vous avez le droit d&apos;accéder
            à vos informations personnelles, de les rectifier, de demander leur
            suppression, de vous opposer à leur traitement pour des motifs
            légitimes, et de demander la limitation du traitement.
          </p>
          <p className="text-nomral font-normal mt-5">
            Pour exercer ces droits, ou pour toute question ou préoccupation
            concernant cette politique de confidentialité, veuillez nous
            contacter à contact@Reseau-mandataire-immobilier.fr.
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-gray-800 sm:text-3xl  mt-16">
            Changements à cette politique de confidentialité
          </h2>
          <p className="text-nomral font-normal mt-5">
            Reseau-mandataire-immobilier se réserve le droit de modifier cette
            politique de confidentialité à tout moment. Toutes les modifications
            seront publiées sur cette page, avec la date de la dernière mise à
            jour. Veuillez consulter régulièrement cette politique de
            confidentialité pour être informé de toute modification.
          </p>
          <p className="text-nomral font-normal mt-5">
            Dernière mise à jour : 30/05/2023
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-gray-800 sm:text-3xl  mt-16">
            Consentement
          </h2>
          <p className="text-nomral font-normal mt-5">
            En utilisant notre site web, vous consentez à la collecte, à
            l&apos;utilisation et au partage de vos informations tel que décrit
            dans cette politique de confidentialité. Si vous n&apos;êtes pas
            d&apos;accord avec cette politique, veuillez ne pas utiliser notre
            site web.
          </p>
          <p className="text-nomral font-normal mt-5">
            Pour toute question relative à notre politique de confidentialité,
            n&apos;hésitez pas à nous contacter à
            contact@Reseau-mandataire-immobilier.fr.
          </p>
        </div>
      </main>
      <Footer />
    </>
  ); // 1
};

export default page;
