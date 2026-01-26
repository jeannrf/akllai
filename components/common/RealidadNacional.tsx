"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import Image from "next/image";

const randomInRange = (min: number, max: number) =>
  Math.random() * (max - min) + min;

const StatsCard = ({
  imageSrc,
  statText,
  delay,
}: {
  imageSrc: string;
  statText: string;
  delay: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const cardRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  // Typewriter effect
  useEffect(() => {
    if (!isVisible) return;

    const startTypingTimeout = setTimeout(() => {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= statText.length) {
          setTypedText(statText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 40);

      return () => clearInterval(typingInterval);
    }, 800 + delay);

    return () => clearTimeout(startTypingTimeout);
  }, [isVisible, statText, delay]);

  return (
    <div
      ref={cardRef}
      className={`group flex flex-col h-full opacity-0 transition-all duration-700 ${isVisible ? "animate-in slide-in-from-left-10 fade-in duration-700 fill-mode-forwards opacity-100" : ""}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Image Container */}
      <div
        className={`relative h-72 w-full overflow-hidden rounded-t-xl border-t border-x border-white/10 transition-colors duration-300 group-hover:border-red-600/50 ${isVisible ? "opacity-100" : "opacity-0"}`}
        style={{ transitionDelay: `${delay + 500}ms` }}
      >
        <div className="absolute inset-0 z-10 bg-red-600 mix-blend-multiply opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />
        <Image
          src={imageSrc}
          alt="Estadística"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100"
        />
      </div>

      {/* Stat Text Container */}
      <div className="bg-[#111] p-6 rounded-b-xl border border-white/10 flex-grow min-h-[160px] flex items-center transition-colors duration-300 group-hover:border-red-600/50 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.2)]">
        <p className="text-xl font-poppins font-medium text-white/90 leading-relaxed border-l-4 border-[#D91023] pl-4">
          {typedText}
          <span className="animate-pulse inline-block w-2 h-6 bg-[#D91023] align-middle ml-1" />
        </p>
      </div>
    </div>
  );
};

export default function RealidadNacional() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const sparkles = useMemo(() => {
    if (!isClient) return [];
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      top: `${randomInRange(0, 100)}%`,
      left: `${randomInRange(0, 100)}%`,
      size: `${randomInRange(1, 3)}px`,
      delay: `${randomInRange(0, 5)}s`,
      duration: `${randomInRange(3, 8)}s`,
    }));
  }, [isClient]);

  const stats = [
    {
      imageSrc: "/images/que-es-akllai/protesta.jpg",
      text: "S/ 24,000 Millones perdidos en corrupción solo en 2023.",
    },
    {
      imageSrc: "/images/que-es-akllai/elecciones.jpg",
      text: "85% de desaprobación del Congreso de la República.",
    },
    {
      imageSrc: "/images/que-es-akllai/marcha.png",
      text: "30% de ausentismo electoral en las últimas votaciones.",
    },
    {
      imageSrc: "/images/que-es-akllai/candidatos.png",
      text: "7 de cada 10 peruanos no se sienten representados.",
    },
  ];

  return (
    <section
      className="min-h-screen py-24 relative overflow-hidden flex flex-col justify-center"
      style={{
        background:
          "radial-gradient(ellipse at top, #3a0000 0%, #1a0000 40%, #000000 100%)",
      }}
    >
      {/* Sparkles Animation Styles */}
      <style jsx>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.1;
            transform: scale(0.8);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.2);
            box-shadow: 0 0 3px #ffffff;
          }
        }
        .sparkle {
          position: absolute;
          background-color: white;
          border-radius: 50%;
          pointer-events: none;
        }
      `}</style>

      {/* Atmosphere */}
      <div className="absolute inset-0 z-0">
        {/* Floating Particles */}
        {isClient &&
          sparkles.map((sparkle) => (
            <div
              key={sparkle.id}
              className="sparkle"
              style={{
                top: sparkle.top,
                left: sparkle.left,
                width: sparkle.size,
                height: sparkle.size,
                animation: `twinkle ${sparkle.duration} infinite ease-in-out`,
                animationDelay: sparkle.delay,
              }}
            />
          ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-24 space-y-6">
          <p className="text-lg md:text-xl text-zinc-300 font-medium tracking-wide font-poppins">
            Las cifras no mienten: la desinformación elige gobiernos
            equivocados.
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D91023] via-orange-500 to-red-600 drop-shadow-sm">
              RECUPERA EL CONTROL
            </span>
            <br />
            <span className="text-white">DE TU FUTURO, UN DATO A LA VEZ.</span>
          </h2>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              imageSrc={stat.imageSrc}
              statText={stat.text}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
