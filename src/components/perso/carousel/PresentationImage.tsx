/* eslint-disable @next/next/no-img-element */
"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const PresentationImage = () => {
  const images = [
    "https://via.placeholder.com/500",
    "https://via.placeholder.com/500",
    "https://via.placeholder.com/500",
    "https://via.placeholder.com/500",
    "https://via.placeholder.com/500",
    "https://via.placeholder.com/500",
  ];
  const plugin = useRef<any>(Autoplay({ delay: 3000 }));

  return (
    <section className="w-full py-24">
      <div className="max-w-5xl w-full px-4 md:px-6 mx-auto">
        <h2 className="text-2xl text-slate-700 font-bold mx-auto text-center">
          Votre rénovation énergetique en toute simplicité
        </h2>
        <div className="w-[80%] max-w-[250px] h-2 rounded-full bg-yellow-500 mt-7 mx-auto" />
        <div className=" flex flex-col md:flex-row justify-between items-center mt-12">
          <div className="w-full md:w-6/12 md:pr-6">
            <ul className="list-inside text-xl">
              <li className="mt-3 flex">
                <div className="h-7 w-7 min-w-[28px] mr-2 bg-slate-700 text-white flex justify-center items-center rounded-full mb-2">
                  1
                </div>
                <p>
                  <span className="font-bold text-yellow-500">
                    Je soumets ma demande
                  </span>{" "}
                  et je serai contacté par un conseiller pour discuter de mon
                  projet.
                </p>
              </li>
              <li className="mt-5 flex">
                <div className="h-7 w-7 min-w-[28px] mr-2 bg-slate-700 text-white flex justify-center items-center rounded-full mb-2">
                  2
                </div>
                <p>
                  <span className="font-bold text-yellow-500">
                    Mon conseiller prépare une étude
                  </span>{" "}
                  adaptée aux spécificités de mon logement.
                </p>
              </li>
              <li className="mt-5 flex">
                <div className="h-7 w-7 min-w-[28px] mr-2 bg-slate-700 text-white flex justify-center items-center rounded-full mb-2">
                  3
                </div>
                <p>
                  <span className="font-bold text-yellow-500">
                    Les aides financières sont directement appliquées
                  </span>{" "}
                  sur le devis.
                </p>
              </li>
              <li className="mt-5 flex">
                <div className="h-7 w-7 min-w-[28px] mr-2 bg-slate-700 text-white flex justify-center items-center rounded-full mb-2">
                  4
                </div>
                <p>
                  <span className="font-bold text-yellow-500">
                    Un technicien d&apos;ECO-Nouvelle-Aquitaine
                  </span>{" "}
                  supervise la réalisation des travaux.
                </p>
              </li>
            </ul>
          </div>
          <Carousel
            plugins={[plugin.current]}
            onMouseEnter={() => {
              console.log("Mouse entered, stopping autoplay");
              plugin.current.stop();
            }}
            onMouseLeave={() => {
              console.log("Mouse left, restarting autoplay");
              plugin.current.reset();
            }}
            className="w-full md:w-6/12"
          >
            <CarouselContent className="w-full">
              {images.map((_, index) => (
                <CarouselItem key={index} className="w-full">
                  <img
                    src={images[index]}
                    alt="image carousel"
                    className="w-[500px] h-[300px] object-cover rounded-lg mx-auto"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious />
          <CarouselNext /> */}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PresentationImage;
