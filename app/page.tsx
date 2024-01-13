"use client";

import { useState } from 'react';
import { useRouter } from "next/navigation";
import { Banana, Github, Mail } from "lucide-react";

import ProjectCard from "@/components/ProjectCard";
import HalfProjectCard from '@/components/HalfProjectCard';
import BananaModal from '@/components/Banana';

const Home = () => {
  const router = useRouter();
  const [isBananaModalOpen, setIsBananaModalOpen] = useState(false);
  const [cards, setCards] = useState([
    { imageSrc: "Pokemon.jpg", 
      title: "Pokemon", 
      description: "A recreation of the Pokemon Emerald game. Surprisingly, the development was easier than expected, with most challenges lying in the design aspect. It was a fun project.", 
      technologies: ['JS.jpeg'], 
      projectLink: "https://pokemon-rust-rho.vercel.app/" },

    { imageSrc: "QueNota.jpg", 
      title: "QueNota", 
      description: "QueNota delves into Notion-inspired design and technologies, experimenting with new components to improve my understanding for the development of larger projects.", 
      technologies: ['NextJs.jpeg', 'React.jpeg', 'JS.jpeg', 'Tailwindcss.jpeg', 'Convex.jpeg', 'ShadcnUI.jpeg'], 
      projectLink: "https://notasss.vercel.app/" },

    { imageSrc: "Portfolio.jpg", 
      title: "Portfolio", 
      description: "Although not an original creation, this portfolio holds a special place as my 'first' project. It brings back fond memories of my early days as a programmer.", 
      technologies: ['ViteJS.jpeg', 'React.jpeg', 'JS.jpeg', 'Tailwindcss.jpeg', 'Threejs.jpeg'], 
      projectLink: "https://3d-theta-orpin.vercel.app/" },
  ]);

  const onClickMail = () => {
    router.push("mailto:manuelcabanzo23@gmail.com");
  };

  const onClickGit = () => {
    window.open("https://github.com/manuelcabanzo", "_blank");
  };

  const onClickBanana = () => {
    setIsBananaModalOpen(true);
  };

  const onCloseBananaModal = () => {
    setIsBananaModalOpen(false);
  };

  return (
    <>
      <div className="w-full h-full flex items-center justify-center bg-white">
        <div className="min-w-container flex flex-col relative">
          <div className="flex flex-row">
          <div
            className="cardContainer bg-pardogray p-6 rounded-3xl text-black w-80 grid grid-cols-2 items-center justify-center"
            
          >
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
              <div className="info bg-pardogray p-5 rounded-3xl text-black w-80 h-32 mb-4 flex items-center">
                <img
                  src="/Avatar.jpg"
                  alt="User"
                  className="w-24 h-24 rounded-3xl"
                />
                <div className="flex flex-col ml-5">
                  <span className="font-semibold text-xl tracking-tighter">
                    Manuel Cabanzo
                  </span>
                  <div className="flex mt-2">
                    <button onClick={onClickMail} className="mr-4 text-gray-400 hover:text-gray-900">
                      <Mail size={18} />
                    </button>
                    <button onClick={onClickGit} className="mr-4 text-gray-400 hover:text-gray-900">
                      <Github size={18} />
                    </button>
                    <button onClick={onClickBanana} className="text-gray-400 hover:text-gray-900">
                      <Banana size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {isBananaModalOpen && (
                <BananaModal onClose={onCloseBananaModal} />
              )}
              
              <div className="phrase bg-pardogray p-5 rounded-3xl text-black w-80 h-32">
                <span className="tracking-tighter flex items-center justify-center h-full">
                  Driven by unwavering ambition, <br />
                  I turn ideas into reality. 
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className='others'>
                  <HalfProjectCard
                    imageSrc="dots.jpg"
                    title="Others"
                    description="A snapshot of my exploration beyond these projects. I thrive on testing, experimenting, and diving into various domains, showcasing my deep passion for development."
                    technologies={['Azure.jpeg', 'MongoDB.jpeg', 'OpenCV.jpg', 'Python.jpeg', 'Threejs.jpeg', 'Blender.jpg']}
                  />
                </div>
                <div className='pending'>
                  <HalfProjectCard
                    imageSrc="inProgress.jpg"
                    title="Pending"
                    description="Currently working on an immersive 3D interior design app. Additionally, I occasionally delve into cybersecurity studies."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;