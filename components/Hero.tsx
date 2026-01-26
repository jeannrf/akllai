'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    const [text, setText] = useState('');
    const fullText = "La plataforma interactiva que necesitas para saber todo acerca de tus candidatos a la presidencia.";
    const typingSpeed = 30;

    useEffect(() => {
        let index = 0;
        let timer: ReturnType<typeof setInterval>;

        timer = setInterval(() => {
            if (index <= fullText.length) {
                setText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, typingSpeed);

        return () => clearInterval(timer);
    }, []);



    return (
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/palaciobn.jpg"
                    alt="Palacio de Gobierno"
                    fill
                    priority
                    className="object-cover"
                />
                {/* Dark Overlay & Cinematic Blur */}
                <div className="absolute inset-0 bg-black/46 backdrop-blur-sm" />
                {/* Red Atmospheric Tint Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#4a0404]/80 to-black mix-blend-multiply opacity-90 z-10" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center text-center">
                {/* Main Title */}
                <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D91023] to-orange-400 drop-shadow-lg">
                        AkllAI
                    </span>
                </h1>

                {/* Subtitle */}
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 uppercase tracking-widest">
                    Infórmate. Conoce. Vota
                </h2>

                {/* Typewriter Description */}
                <p className="text-lg md:text-xl text-zinc-300 max-w-2xl font-mono h-20 md:h-auto">
                    {text}
                    <span className="animate-pulse text-[#D91023] font-bold">|</span>
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col md:flex-row items-center gap-5 mt-12 z-20">
                    {/* Primary Button */}
                    <Link
                        href="/prueba"
                        className="group relative px-8 py-3.5 bg-gradient-to-r from-[#D91023] to-orange-400 rounded-full font-bold text-white text-lg shadow-[0_0_15px_rgba(217,16,35,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(217,16,35,0.7)]"
                    >
                        Prueba AkllAI
                    </Link>

                    {/* Secondary Button */}
                    <Link
                        href="/como-funciona"
                        className="group relative px-8 py-3.5 bg-transparent border border-zinc-400/50 rounded-full font-medium text-white text-lg transition-all duration-300 hover:bg-white/10 hover:border-white"
                    >
                        Conoce más
                    </Link>
                </div>

                {/* Optional decorative line */}
                <div className="w-24 h-1 bg-[#D91023] rounded-full mt-8 shadow-[0_0_10px_#D91023]" />
            </div>
        </div>
    );
}
