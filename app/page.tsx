"use client";

import { useRouter } from "next/navigation";
import { Github, Mail } from "lucide-react";
import Image from 'next/image';

const Home = () => {
  const router = useRouter();
  
  const onClickMail = () => {
    router.push("mailto:manuelcabanzo23@gmail.com");
  };

  const onClickGit = () => {
    window.open("https://github.com/manuelcabanzo", "_blank");
  };

  return (
    <div className="min-h-screen w-full bg-black">
      <main className="h-screen flex items-center justify-center px-4">
        <div className="flex flex-col items-center space-y-5">
          {/* Profile Card */}
          <div className="bg-pardogray rounded-3xl p-5 border-2 border-gray-400 hover:border-white transition-all duration-700 ease-in-out w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <div className="flex items-center">
              <div className="relative w-24 h-24 flex-shrink-0">
                <Image
                  src="/Avatar.webp"
                  alt="Profile picture"
                  fill
                  className="rounded-3xl object-cover transition-transform duration-700"
                />
              </div>
              <div className="flex flex-col ml-5">
                <h1 className="text-white font-semibold text-xl tracking-tighter">
                  Manuel Cabanzo
                </h1>
                <div className="flex mt-2 items-center justify-center">
                  <button 
                    onClick={onClickMail}
                    className="mr-4 text-white hover:text-buttonafter transition duration-700 ease-in-out"
                    aria-label="Email"
                  >
                    <Mail size={18} />
                  </button>
                  <button 
                    onClick={onClickGit}
                    className="text-white hover:text-buttonafter transition duration-700 ease-in-out"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tagline Card */}
          <div className="bg-pardogray rounded-3xl p-5 border-2 border-gray-400 hover:border-white transition-all duration-700 ease-in-out w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <p className="text-white text-center text-lg tracking-tighter leading-relaxed">
              Driven by unwavering ambition,<br />
              I turn ideas into reality.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;