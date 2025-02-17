"use client";

import { useState } from 'react';
import { useRouter } from "next/navigation";
import { Fish, Github, Mail, File } from "lucide-react";

import ProjectCard from "@/components/ProjectCard";
import FishModal from '@/components/Fish';
import Image from 'next/image';

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
      technologies: ["NextJs.webp", "React.webp", "JS.webp", "Tailwindcss.webp", "ShadcnUI.webp", "clerk.webp"], 
      projectLink: "https://notasss.vercel.app/" },

    { imageSrc: "Others.webp", 
      title: "Others", 
      description: "AR Mobile App, Photo Sticker Mobile App, 3D Third Person Shooter game, Git made in rust, IDE for mobile development made in rust, Encrypter, Ecommerce Admin and Front pages, CPVTON integrated into a marketplace with some 3D assets.",
    },

    { imageSrc: "Current.webp", 
      title: "Current", 
      description: "🦀", 
    }
  ]);

  const onClickMail = () => {
    router.push("mailto:manuelcabanzo23@gmail.com");
  };
  
  const onClickFile = () => {
    const CVPdfUrl = '/MANUEL_CABANZO.pdf';
    window.open(CVPdfUrl, '_blank');
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
                <Image
                  src="/Avatar.webp"
                  alt="User"
                  width={100}
                  height={100}
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
                    <button onClick={onClickFish} className="mr-4 text-white hover:text-buttonafter transition duration-700 ease-in-out">
                      <Fish size={18} />
                    </button>
                    <button onClick={onClickFile} className="text-white hover:text-buttonafter transition duration-700 ease-in-out">
                      <File size={18} />
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
