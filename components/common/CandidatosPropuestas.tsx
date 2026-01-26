"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const CandidateCard = ({
  index,
  activeIndex,
  total,
  imageSrc,
}: {
  index: number;
  activeIndex: number;
  total: number;
  imageSrc: string;
}) => {
  // Calculate position relative to active index for cyclic stacking
  let offset = (index - activeIndex + total) % total;

  // Logic for visual stack (0 = Front, 1 = Behind 1, 2 = Behind 2)
  const isActive = offset === 0;
  const isNext = offset === 1;
  const isNextNext = offset === 2;
  // Allow for a 3rd visible card behind if needed, or stick to 3 visible
  const isThird = offset === 3;

  let zIndex = 0;
  let scale = 0.9;
  let opacity = 0;
  let translateX = "0px";

  if (isActive) {
    zIndex = 30;
    scale = 1;
    opacity = 1;
    translateX = "0px";
  } else if (isNext) {
    zIndex = 20;
    scale = 0.95;
    opacity = 0.7;
    translateX = "25px";
  } else if (isNextNext) {
    zIndex = 10;
    scale = 0.9;
    opacity = 0.4;
    translateX = "50px";
  } else if (isThird) {
    zIndex = 5;
    scale = 0.85;
    opacity = 0.2;
    translateX = "75px";
  } else {
    // Hidden / cycling cards
    zIndex = 0;
    scale = 0.8;
    opacity = 0;
    translateX = "0px";
  }

  return (
    <div
      className="absolute top-0 left-0 w-64 h-80 rounded-[2rem] shadow-2xl transition-all duration-700 ease-in-out flex flex-col overflow-hidden bg-[#1a0000]"
      style={{
        zIndex,
        opacity,
        transform: `translateX(${translateX}) scale(${scale})`,
      }}
    >
      <Image
        src={imageSrc}
        alt={`Candidato ${index + 1}`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      {/* Optional inner border/sheen to make it look premium */}
      <div className="absolute inset-0 rounded-[2rem] border border-white/10 pointer-events-none" />
    </div>
  );
};

// Static images can be defined outside
const candidateImages = [
  "/images/candidatos/image_4.png",
  "/images/candidatos/image_5.png",
  "/images/candidatos/image_6.png",
  "/images/candidatos/image_7.png",
];

const totalCards = candidateImages.length;

export default function CandidatosPropuestas() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % totalCards);
    }, 3000);

    return () => clearInterval(interval);
  }, []); // Empty dependency array as totalCards is constant

  return (
    <section className="min-h-screen bg-[#050505] relative overflow-hidden flex items-center py-20">
      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat mix-blend-overlay"></div>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Stacked Cards Carousel */}
        <div className="relative h-96 flex items-center justify-center md:justify-end pr-8">
          {/* Width of card + stacking space */}
          <div className="relative w-64 h-80">
            {candidateImages.map((src, i) => (
              <CandidateCard
                key={i}
                index={i}
                activeIndex={activeIndex}
                total={totalCards}
                imageSrc={src}
              />
            ))}
          </div>
        </div>

        {/* Right Column: Information Text (Unchanged) */}
        <div className="flex flex-col space-y-8 text-center md:text-left z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D91023] to-orange-400">
              ¿Propuestas? <br />
              ¿Perfiles? <br />
              Solo en Akllai.
            </span>
          </h2>

          <p className="text-lg md:text-xl text-zinc-300 font-poppins font-light leading-relaxed max-w-lg mx-auto md:mx-0">
            Podrás encontrar los perfiles, trayectoria política y propuestas de
            tus candidatos. No más incertidumbre, información real y
            transparente para ti.
          </p>

          <div className="pt-4">
            <button className="px-8 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-colors duration-300">
              Explorar Candidatos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
