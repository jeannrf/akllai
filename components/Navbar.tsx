'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect for extra glassmorphism intensity or size reduction if needed
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Main', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Mision', href: '/mision' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'
                }`}
        >
            <div className="container mx-auto px-6">
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 md:px-8 py-3 flex items-center justify-between shadow-2xl shadow-black/50">

                    {/* Logo */}
                    <div className="flex-shrink-0 z-20">
                        <Link href="/" className="group block">
                            <span className="font-black text-2xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400 group-hover:to-white transition-all duration-300">
                                AkllAI
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation - Absolute Center */}
                    <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="relative text-zinc-400 hover:text-white transition-all duration-300 text-sm font-medium tracking-wide hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center z-20">
                        <Link
                            href="/prueba"
                            className="relative group overflow-hidden bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 py-2.5 rounded-full font-bold text-sm tracking-wide shadow-[0_0_15px_rgba(220,38,38,0.4)] hover:shadow-[0_0_25px_rgba(220,38,38,0.6)] transition-all duration-300 transform hover:scale-105"
                        >
                            <span className="relative z-10">Prueba ya AkllAI</span>
                            {/* Shine effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center z-20">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-red-500 transition-colors focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 top-[80px] z-40 md:hidden bg-black/95 backdrop-blur-3xl animate-in slide-in-from-top-10 fade-in duration-200">
                    <div className="flex flex-col items-center justify-center h-full space-y-8 pb-20">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-2xl text-zinc-400 hover:text-white font-bold tracking-tight transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/prueba"
                            className="mt-8 bg-gradient-to-r from-red-600 to-orange-500 text-white px-8 py-3 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(220,38,38,0.5)]"
                            onClick={() => setIsOpen(false)}
                        >
                            Prueba ya AkllAI
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
