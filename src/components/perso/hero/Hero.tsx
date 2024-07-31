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
      await set(ref(database, "submissions/" + Date.now()), formData);
      await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom: formData.name,
          email: formData.email,
          telephone: formData.phone,
          date: new Date().toLocaleString(),
        }),
      }).then((response) => {});
      router.push("/merci");
    } catch (error) {
      console.error("Error saving data to Firebase:", error);
    }
  };

  return (
    <section className="w-full relative bg-slate-900" id="form">
      <div className="absolute inset-0 -z-5">
        <img
          src="https://images.pexels.com/photos/6297086/pexels-photo-6297086.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="fusé"
          className="w-full h-full opacity-10 object-cover"
        />
      </div>
      {/* <img
        className="w-full h-full object-cover absolute top-0 left-0 -z-10"
        alt="background"
        src="/background.png"
      /> */}
      <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-20 md:py-36 flex flex-col md:flex-row justify-between items-center text-slate-700 z-20">
        {/* <BackgroundBeams /> */}
        <div className="flex flex-col justify-center w-full md:w-1/2 pr-4 text-white">
          <div className="text-5xl flex flex-col font-bold leading-[60px] relative">
            {/* <div className="-z-5 p-1 rounded-full bg-slate-100 shadow-md w-max absolute right-10 top-28 w-36 h-36 hidden md:block">
              <img
                src="https://plus.unsplash.com/premium_photo-1679856789368-c6fd143693b5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXN0YXRlJTIwYWdlbnR8ZW58MHx8MHx8fDA%3D"
                alt="maison au bord du lac"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="-z-5 p-1 rounded-full bg-slate-100 shadow-md w-max absolute left-2 -bottom-24 w-24 h-24 hidden md:block">
              <img
                src="https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Remise de clé"
                className="w-full h-full rounded-full object-cover"
              />
            </div> */}
            {/* <div className="-z-5 p-1 w-max absolute left-20 -top-16 w-24 h-24 hidden md:block">
              <img
                src="/fuse.png"
                alt="fusé"
                className="w-full h-full object-cover"
              />
            </div> */}
            <div className="mb-3 md:mb-0">
              <BlurIn word="Rejoignez la" />
            </div>
            <span className="text-blue-700 font-extrabold">
              <BlurIn word="Meilleur équipe" />
            </span>{" "}
            <div className="my-3 md:my-0">
              <BlurIn word="Au sein du" />
            </div>
            <span className="text-blue-700 font-extrabold">
              <BlurIn word="Meilleur reseau" />
            </span>
          </div>
        </div>
        <div
          className="flex flex-col items-end w-full md:w-1/2 mt-14 md:mt-0"
          style={{ zIndex: "200" }}
        >
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg p-5 md:p-10 md:py-16 w-full md:w-10/12"
          >
            <Input
              name="name"
              placeholder="Nom"
              className=""
              value={formData.name}
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
            <Button
              type="submit"
              className="mt-5 bg-yellow-500 hover:bg-yellow-500/70 w-full"
            >
              Nous rejoindre
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
