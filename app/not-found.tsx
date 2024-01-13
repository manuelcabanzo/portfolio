"use client";

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

const getRandomPastelColor = () => {
  const pastelColors = [
    '#FFD1DC', '#FFECB3', '#B2FFB6', '#B3E0FF', '#FFC3A0', '#D8B5FF',
    '#FFC0CB', '#FFD700', '#98FB98', '#87CEEB', '#FFA07A', '#DDA0DD',
    '#00CED1', '#F08080', '#FF6347', '#48D1CC', '#9370DB', '#20B2AA'
  ];
  const randomIndex = Math.floor(Math.random() * pastelColors.length);
  return pastelColors[randomIndex];
};

const NotFound = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  const changeColor = () => {
    const textElement = textRef.current;

    if (textElement) {
      gsap.to(textElement, {
        duration: 2,
        color: getRandomPastelColor(),
        ease: 'power1.in',
        onComplete: changeColor,
      });
    }
  };

  useEffect(() => {
    changeColor();
  }, []);

  return (
    <Link href='/' className='h-screen w-screen flex items-center justify-center bg-black overflow-hidden cursor-default'>
        <div ref={containerRef} className='flex flex-col text-9xl font-semibold tracking-tighter'>
          <div className='flex items-center'>
            <span ref={textRef}>404</span>
          </div>
        </div>
    </Link>
  );
};

export default NotFound;

