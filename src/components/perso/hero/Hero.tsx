/* eslint-disable @next/next/no-img-element */

"use client";

import BlurIn from "@/components/magicui/blur-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { database } from "@/firebase/firebase.config";
import { ref, set } from "firebase/database";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    experience: "",
  });

  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Regex validations
    const nameRegex = /^[a-zA-Z\s]{2,}$/;
    const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !nameRegex.test(formData.name) ||
      !phoneRegex.test(formData.phone) ||
      !emailRegex.test(formData.email)
    ) {
      alert("Veuillez remplir tous les champs correctement.");
      return;
    }

    try {
      await set(ref(database, "mandataires/" + Date.now()), formData);
      await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom: formData.name,
          email: formData.email,
          telephone: formData.phone,
          experience: formData.experience,
          date: new Date().toLocaleString(),
        }),
      }).then((response) => {});
      router.push("/merci");
    } catch (error) {
      console.error("Error saving data to Firebase:", error);
    }
  };

  return (
    <section className="w-full relative" id="form">
      <div className="absolute inset-0 -z-5">
        <img
          src="https://images.pexels.com/photos/8815884/pexels-photo-8815884.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="fusé"
          className="w-full h-[70%] opacity-10 object-cover"
        />
      </div>
      <div className=" bg-slate-900 w-full h-[70%] absolute inset-0 -z-10"></div>
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-32 flex flex-col md:flex-row justify-between text-slate-700 z-20">
        <div className="flex flex-col w-full md:w-1/2 pr-4 text-white">
          <div className="text-5xl flex flex-col font-bold leading-[60px] relative">
            <div className="mb-3 md:mb-0">
              <BlurIn
                word=" Quand on est indépendant dans la vie, pourquoi ne pas l'être aussi
              dans son travail ?"
              />
              <BlurIn
                word="Transformez votre vie en devenant mandataire immobilier indépendant avec eXp Realty."
                className="text-lg font-light mt-5"
              />
            </div>
          </div>
        </div>
        <div
          className="flex flex-col items-end w-full md:w-1/2 mt-14 md:mt-0"
          style={{ zIndex: "200" }}
        >
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg p-5 md:p-10 md:py-16 w-full md:w-10/12 shadow-md"
          >
            <h2 className="text-slate-900 text-2xl font-bold">
              Rejoignez nous !
            </h2>
            <Input
              name="name"
              placeholder="Nom*"
              className="mt-4"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              name="phone"
              placeholder="Téléphone*"
              className="mt-5"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <Input
              name="email"
              placeholder="Email*"
              className="mt-5"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <select
              name="experience"
              className="mt-5 w-full border rounded-md p-2"
              value={formData.experience}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Avez-vous une expérience dans l&apos;immobilier ?*
              </option>
              <option value="je debute">Je débute</option>
              <option value="moins d'un an">Moins d&apos;un an</option>
              <option value="entre 2 et 5 ans">Entre 2 et 5 ans</option>
              <option value="plus de 5 ans">Plus de 5 ans</option>
            </select>
            <p className="text-xs mt-5">Les champs avec * sont obligatoires</p>
            <Button
              type="submit"
              className="mt-5 bg-yellow-500 hover:bg-yellow-500/70 w-full"
            >
              <span className="text-xl mr-1">🚀 </span> Rejoignez-nous
              maintenant !
            </Button>
            <p className="text-[10px] mt-5">
              Les données que vous transmettez sont traitées par
              reseau-mandataire-immobilier.fr en qualité de responsable du
              traitement aux fins de traiter votre demande et de vous mettre en
              relation avec un conseiller d’une de ses filiales en fonction de
              votre localisation. Vous disposez d’un droit d’accès, de
              rectification, d’opposition, d’effacement, de limitation et de
              portabilité de vos données. Pour en savoir plus sur le traitement
              de vos données par reseau-mandataire-immobilier.fr et sur vos
              droits, veuillez consulter la politique de confidentialité. Selon
              l&apos;article L.223-2 du Code de la consommation, il est rappelé
              que le consommateur peut user de son droit à s&apos;inscrire
              gratuitement sur la liste d&apos;opposition au démarchage
              téléphonique Bloctel
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
