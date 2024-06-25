/* eslint-disable @next/next/no-img-element */

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { database } from "@/firebase/firebase.config";
import { CheckCircleIcon, StarIcon } from "@heroicons/react/20/solid";
import { ref, set } from "firebase/database";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    postalCode: "",
    phone: "",
    email: "",
    role: "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Regex validations
    const nameRegex = /^[a-zA-Z\s]{2,}$/;
    const postalCodeRegex = /^\d{5}$/;
    const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !nameRegex.test(formData.name) ||
      !postalCodeRegex.test(formData.postalCode) ||
      !phoneRegex.test(formData.phone) ||
      !emailRegex.test(formData.email) ||
      !formData.role
    ) {
      alert("Veuillez remplir tous les champs correctement.");
      return;
    }

    try {
      await set(ref(database, "submissions/" + Date.now()), formData);
      await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom: formData.name,
          codePostal: formData.postalCode,
          email: formData.email,
          telephone: formData.phone,
          type: formData.role,
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
      <img
        className="w-full h-full object-cover absolute top-0 left-0 -z-10"
        alt="background"
        src="/background.png"
      />
      <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-20 flex flex-col md:flex-row justify-between items-center text-slate-700 z-20">
        <div className="flex flex-col justify-center w-full md:w-1/2 pr-4 text-white">
          <h1 className="text-3xl font-bold">
            Jusqu’à <span className="text-yellow-500">75€ d’aides par m2</span>{" "}
            pour réalisez les travaux d’isolation extérieure de votre maison
          </h1>
          <p className="mt-10">
            Isolation des murs extérieurs, combles, rampants, sous-sol.
          </p>
          <p className="font-bold mt-2">
            Un gain de 30% à 40% sur votre facture de chauffage
          </p>
          <div className="flex items-start mt-7">
            <CheckCircleIcon className="min-w-6 h-6 text-white mt-1 mr-2" />
            <p className="">
              Isolation faite par des{" "}
              <span className="font-bold">artisans RGE</span> qui garantissent
              une parfaite
              <span className="font-bold">isolation thermique</span>.
            </p>
          </div>
          <div className="flex items-start mt-7">
            <CheckCircleIcon className="min-w-6 h-6 text-white mr-2" />
            <p className="">
              <span className="font-bold">+ de 70000</span> rénovation
              énergétique réalisées.
            </p>
          </div>
          <div className="mt-16 flex flex-col md:flex-row items-start">
            <div className="flex">
              <img
                src="/RGE.png"
                className="h-12 w-auto object-cover"
                alt="rge"
              />
              <img
                src="/cee.png"
                className="h-12 w-auto object-cover ml-10"
                alt="cee"
              />
            </div>
            <img
              src="/maprimerenov.png"
              className="h-12 w-auto object-cover md:ml-10 mt-5 md:mt-0"
              alt="maprimerenov"
            />
          </div>
          <div className="flex items-center mt-14">
            <img
              src="/google.png"
              className="h-10 w-auto object-cover"
              alt="google"
            />
            <div className="flex flex-col ml-2">
              <div className="flex items-center">
                <p className="font-bold text-lg">Excellent</p>
                <StarIcon className="h-5 w-auto text-yellow-500 ml-2" />
                <StarIcon className="h-5 w-auto text-yellow-500 ml-0.5" />
                <StarIcon className="h-5 w-auto text-yellow-500 ml-0.5" />
                <StarIcon className="h-5 w-auto text-yellow-500 ml-0.5" />
                <StarIcon className="h-5 w-auto text-yellow-500 ml-0.5" />
              </div>
              <p className="text-sm text-white-70">
                Nos client nous notent 5/5 sur{" "}
                <a
                  href="https://www.google.com/search?uds=ADvngMjcH0KdF7qGWtwTBrP0nt7d9abZqeDXis6xZ8L-5VZgmt0Se0PtkDsvLAUQV9LH1vvAiAVIeG4V3hV_ufxehig5HKhAV6ubTOIwUj3d_gN0gaX6I8TxlAtC-_tEDgvfAPUk3nmc&si=ACC90nwjPmqJHrCEt6ewASzksVFQDX8zco_7MgBaIawvaF4-7q_Bh5gkO-GUGMdV3yHtqrnLMfpdYnvSZC98CKE-J9oMuvzuUe4qJU24cv4qVVZ8QAhqmkgLl408raGjZxV6EeMf_sSO&q=terabois%20Reviews&cs=1&hl=en&sa=X&ved=0CCAQ_4MLahcKEwiIzKOdtfSGAxUAAAAAHQAAAAAQBg&biw=1920&bih=1200&dpr=1.5"
                  className="underline"
                  target="_blank"
                >
                  Google
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end w-full md:w-1/2 mt-12 md:mt-0">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg p-5 md:p-10 w-full md:w-[90%]"
          >
            <h2 className="text-2xl text-slate-700 font-bold">
              Demandez votre devis
            </h2>
            <Input
              name="name"
              placeholder="Nom"
              className="mt-7"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              name="postalCode"
              placeholder="Code Postal"
              className="mt-5"
              value={formData.postalCode}
              onChange={handleChange}
              required
            />
            <Input
              name="phone"
              placeholder="Téléphone"
              className="mt-5"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <Input
              name="email"
              placeholder="Email"
              className="mt-5"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <div className="flex flex-col w-full mt-5">
              <label className="text-sm mb-1">Vous êtes *:</label>
              <Select
                onValueChange={(value) =>
                  setFormData({ ...formData, role: value })
                }
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choisir une valeur" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Propriétaire">Propriétaire</SelectItem>
                  <SelectItem value="Locataire">Locataire</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              type="submit"
              className="mt-5 bg-yellow-500 hover:bg-yellow-500/70 w-full"
            >
              Envoyer
            </Button>
            <p className="text-[6px] mt-5">
              Les informations sont destinées à Maison Terabois. Celles-ci sont
              nécessaires pour nous permettre de vous contacter pour réaliser
              une étude de votre projet de rénovation énergétique et pour vous
              envoyer des informations sur nos offres et produits, si vous y
              avez consenti. Toutes les données du formulaire sont obligatoires.
              Vous pouvez retirer votre consentement à la prospection
              commerciale à tout moment via le lien présent dans l&apos;email.
              Conformément à la réglementation et notamment le RGPD, vous
              bénéficiez d’un droit d’accès, de rectification, à l’effacement, à
              la portabilité, de limitation et d’opposition au traitement des
              donnés vous concernant. Vous pouvez exercer vos droits en
              contactant notre DPO par mail à
              : contact@eco-nouvelleaquitaine.fr. Pour plus d’informations sur
              le traitement de vos données à caractère personnel,  consulter
              notre Politique de confidentialité.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
