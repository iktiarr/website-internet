// src/components/HeroSection.tsx
import Image from 'next/image';
import { getHeroData, getWhatsappData } from '@/lib/contenful'; // Import fungsi WA

export default async function HeroSection() {
    // Fetch kedua data secara bersamaan (Parallel Fetching)
    const [heroData, waData]: any = await Promise.all([
        getHeroData(),
        getWhatsappData()
    ]);

    const imageUrl = heroData.gambar.fields.file.url.startsWith('//')
        ? `https:${heroData.gambar.fields.file.url}`
        : heroData.gambar.fields.file.url;

    // Logika Pembersihan Nomor WA
    const rawNumber = waData?.link || "";
    const cleanNumber = String(rawNumber).replace(/\D/g, '');
    const waMessage = encodeURIComponent(`Halo, saya ingin bertanya mengenai layanan WiFi. Mohon info lengkapnya.`);
    const finalWaLink = `https://wa.me/${cleanNumber}?text=${waMessage}`;

    return (
        <section className="relative w-full min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden pt-28 lg:pt-0">
            {/* Full-bleed background image */}
            <div className="absolute inset-0 z-0">
                <Image src={imageUrl} alt={heroData.judul} fill priority className="object-cover object-top md:object-center" />
            </div>

            {/* Subtle texture over image */}
            <div className="absolute inset-0 z-10 opacity-[0.05] pointer-events-none" style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />

            {/* Gradient overlays */}
            <div className="hidden lg:block absolute inset-y-0 left-0 w-1/2 z-20 pointer-events-none bg-gradient-to-r from-white/95 via-white/60 to-transparent" />
            <div className="block lg:hidden absolute inset-x-0 bottom-0 h-1/3 z-20 pointer-events-none bg-gradient-to-t from-white/95 via-white/70 to-transparent" />

            <div className="container mx-auto px-6 md:px-12 mt-45 relative z-30">
                <div className="flex items-end lg:items-center justify-center lg:justify-start min-h-[60vh]">
                    <div className="w-full lg:w-100 space-y-8 text-center lg:text-left py-12 lg:py-20 px-4 sm:px-6 lg:pl-8 mt-40 lg:mt-0">
                        <div className="space-y-6">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black leading-[1.05] tracking-tight">
                                {heroData.judul}
                            </h1>

                            <p className="text-base md:text-lg text-slate-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                {heroData.deskripsi}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mt-8">
                            {/* Tombol disesuaikan ke tag <a> agar bisa redirect */}
                            <a 
                                href={finalWaLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full font-bold hover:from-red-700 hover:to-red-600 transition-all duration-300 active:scale-95 shadow-lg shadow-black/20 text-center"
                            >
                                Hubungi Kami
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}