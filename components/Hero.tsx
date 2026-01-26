'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

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
                    src="/images/palacio.jpg"
                    alt="Palacio de Gobierno"
                    fill
                    priority
                    className="object-cover"
                />
                {/* Dark Overlay & Cinematic Blur */}
                <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
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

                {/* Optional decorative line */}
                <div className="w-24 h-1 bg-[#D91023] rounded-full mt-8 shadow-[0_0_10px_#D91023]" />
            </div>
        </div>
    );
}
