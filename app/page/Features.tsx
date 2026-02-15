// src/components/FeaturesSection.tsx
'use client';

import { 
  Globe, 
  Zap, 
  BadgePercent, 
  PlayCircle, 
  Briefcase, 
  Headphones 
} from 'lucide-react';

export default function FeaturesSection() {
    const features = [
        {
            icon: <Globe size={24} />,
            title: 'Fiber Terluas',
            description: 'Jangkauan fiber optik stabil di berbagai wilayah.',
        },
        {
            icon: <Zap size={24} />,
            title: 'Kecepatan Stabil',
            description: 'Internet unlimited tanpa batasan kuota (FUP).',
        },
        {
            icon: <BadgePercent size={24} />,
            title: 'Harga Hemat',
            description: 'Pilihan paket yang pas dengan budget bulanan Anda.',
        },
        {
            icon: <PlayCircle size={24} />,
            title: 'Bebas Buffering',
            description: 'Streaming kualitas HD/4K tanpa gangguan koneksi.',
        },
        {
            icon: <Briefcase size={24} />,
            title: 'Optimal WFH',
            description: 'Koneksi andal untuk kerja dan belajar dari rumah.',
        },
        {
            icon: <Headphones size={24} />,
            title: 'Support 24/7',
            description: 'Bantuan teknis yang siap melayani Anda kapan saja.',
        },
    ];

    return (
        <section className="relative w-full py-20 bg-gray-100" id="features">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" 
                 style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />

            <div className="container mx-auto px-4 md:px-12 relative z-10">
                {/* Header Section */}
                <div className="mb-16 text-center lg:text-left" data-aos="fade-up">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">
                        Mengapa <span className="text-red-600">Pilih Kami?</span>
                    </h2>
                </div>

                {/* Features Grid: 2 Kolom di Mobile agar compact */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group bg-white p-5 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-100 transition-all duration-500 hover:border-red-500 hover:shadow-2xl hover:shadow-red-50 hover:-translate-y-1"
                            data-aos="fade-up"
                            data-aos-delay={index * 50}
                        >
                            {/* Icon & Title Wrapper (Compact Row) */}
                            <div className="flex items-center gap-3 md:gap-4 mb-4">
                                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-600 transition-all duration-500 group-hover:bg-red-600 group-hover:text-white group-hover:rotate-6">
                                    {feature.icon}
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-sm md:text-xl font-black text-slate-900 uppercase tracking-tight group-hover:text-red-600 transition-colors">
                                        {feature.title}
                                    </h3>
                                    {/* Animated Line */}
                                    <div className="h-1 w-6 bg-red-600 mt-1 rounded-full transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100"></div>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-[10px] md:text-sm text-slate-500 font-medium leading-relaxed italic border-l-2 border-slate-50 pl-3 group-hover:border-red-100 transition-colors">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}