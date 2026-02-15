// src/components/Header.tsx
'use client';

import { useState } from 'react';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header className="fixed top-6 left-0 right-0 z-50 px-6">
            {/* Capsule Navigation Container */}
            <nav className="max-w-7xl mx-auto backdrop-blur-lg bg-white/80 rounded-full border border-white/40 shadow-2xl shadow-red-100/50">
                <div className="px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo/Brand */}
                        <div className="flex items-center gap-2">
                            <img src="/logo-indihome.svg" alt="Indihome" className="h-9 md:h-10 object-contain" />
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            <button
                                onClick={() => scrollToSection('hero')}
                                className="text-slate-700 hover:text-red-600 font-medium transition-colors relative group"
                            >
                                Beranda
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                            </button>
                            <button
                                onClick={() => scrollToSection('pricing')}
                                className="text-slate-700 hover:text-red-600 font-medium transition-colors relative group"
                            >
                                Paket Harga
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                            </button>
                            <button
                                onClick={() => scrollToSection('features')}
                                className="text-slate-700 hover:text-red-600 font-medium transition-colors relative group"
                            >
                                Keunggulan
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="text-slate-700 hover:text-red-600 font-medium transition-colors relative group"
                            >
                                Kontak
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                            </button>
                        </div>

                        {/* CTA removed from header (kept elsewhere) */}

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-slate-700 hover:text-red-600 transition-colors rounded hover:bg-red-50"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>

                </div>
            </nav>

            {/* Mobile Menu Card - Animated Slide Down */}
            {isMobileMenuOpen && (
                <div className="fixed top-24 left-6 right-6 md:hidden z-40 animate-in slide-in-from-top-2 duration-300">
                    <div className="backdrop-blur-lg bg-white/80 border border-white/40 rounded-2xl shadow-2xl shadow-red-100/50 overflow-hidden">
                        <div className="p-4 space-y-2">
                            <button
                                onClick={() => scrollToSection('hero')}
                                className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-red-50 hover:text-red-600 rounded font-medium transition-colors"
                            >
                                Beranda
                            </button>
                            <button
                                onClick={() => scrollToSection('pricing')}
                                className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-red-50 hover:text-red-600 rounded font-medium transition-colors"
                            >
                                Paket Harga
                            </button>
                            <button
                                onClick={() => scrollToSection('features')}
                                className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-red-50 hover:text-red-600 rounded font-medium transition-colors"
                            >
                                Keunggulan
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-red-50 hover:text-red-600 rounded font-medium transition-colors"
                            >
                                Kontak
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
