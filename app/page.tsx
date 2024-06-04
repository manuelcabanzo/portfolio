"use client";

import { useState } from 'react';
import { useRouter } from "next/navigation";
import { Fish, Github, Mail } from "lucide-react";

import ProjectCard from "@/components/ProjectCard";
import FishModal from '@/components/Fish';

const Home = () => {
  const router = useRouter();
  const [isFishModalOpen, setIsFishModalOpen] = useState(false);

  const [cards, setCards] = useState([
    { imageSrc: "Pokemon.webp", 
      title: "Pokemon", 
      description: "A recreation of the Pokemon Emerald game. Surprisingly, the development was easier than expected, with most challenges lying in the design aspect.", 
      technologies: ["JS.webp"], 
      projectLink: "https://pokemon-rust-rho.vercel.app/" },

    { imageSrc: "QueNota.webp", 
      title: "QueNota", 
      description: "QueNota delves into Notion-inspired design and technologies, experimenting with new components to improve my understanding for the development of larger projects.", 
      technologies: ["NextJs.webp", "React.webp", "JS.webp", "Tailwindcss.webp", "Convex.webp", "ShadcnUI.webp"], 
      projectLink: "https://notasss.vercel.app/" },

    { imageSrc: "Others.webp", 
      title: "Others", 
      description: "Projects include an AR Mobile App, a Photo Sticker Mobile App, CPVTON AI, a Marketplace Admin & Store, a 3D Marketplace, Face and Body Detection Apps, and an Encrypter.",
    },

    { imageSrc: "Current.webp", 
      title: "Current", 
      description: "Projects include an AR Mobile App, a Photo Sticker Mobile App, CPVTON integrated into a marketplace, a Marketplace Admin & Store built with 3D assets, Face and Body Detection Apps, and an Encrypter.", 
    }
  ]);

  const onClickMail = () => {
    router.push("mailto:manuelcabanzo23@gmail.com");
  };

  const onClickGit = () => {
    window.open("https://github.com/manuelcabanzo", "_blank");
  };

  const onClickFish = () => {
    setIsFishModalOpen(true);
  };

  const onCloseFishModal = () => {
    setIsFishModalOpen(false);
  };

  return (
    <>
      <div className="w-full h-full flex items-center justify-center bg-blackity">
        <div className="min-w-container flex flex-col relative">
          <div className="flex flex-row">
          <div className="cardContainer bg-pardogray p-6 rounded-3xl border-2 border-gray-400 hover:border-white transition duration-700 ease-in-out w-80 grid grid-cols-2 items-center justify-center">
            {cards.map((card, index) => (
              <div key={index} className="card flex items-center justify-center h-full mt-3 mb-4">
                <ProjectCard
                  imageSrc={card.imageSrc}
                  title={card.title}
                  description={card.description}
                  technologies={card.technologies}
                  projectLink={card.projectLink}
                />
              </div>
            ))}
          </div>

            <div className="flex flex-col ml-5">

            <div className="info bg-pardogray p-5 rounded-3xl text-white border-2 border-gray-400 hover:border-white transition duration-700 ease-in-out w-80 h-right mb-5 flex items-center">
                <img
                  src="/Avatar.webp"
                  alt="User"
                  className="w-24 h-24 rounded-3xl transition-transform duration-700 transform group-hover:rotate-y-180"
                />
                <div className="flex flex-col ml-5">
                  <span className="font-semibold text-xl tracking-tighter">
                    Manuel Cabanzo
                  </span>
                  <div className="flex mt-2 items-center justify-center">
                    <button onClick={onClickMail} className="mr-4 text-white hover:text-buttonafter transition duration-700 ease-in-out">
                      <Mail size={18} />
                    </button>
                    <button onClick={onClickGit} className="mr-4 text-white hover:text-buttonafter transition duration-700 ease-in-out">
                      <Github size={18} />
                    </button>
                    <button onClick={onClickFish} className="text-white hover:text-buttonafter transition duration-700 ease-in-out">
                      <Fish size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {isFishModalOpen && (
                <FishModal onClose={onCloseFishModal} />
              )}
              
              <div className="phrase bg-pardogray p-5 rounded-3xl text-white border-2 border-gray-400 hover:border-white transition duration-700 ease-in-out w-80 h-right">
                <span className="tracking-tighter flex items-center justify-center h-full text-lg">
                  Driven by unwavering ambition, <br />
                  I turn ideas into reality. 
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;