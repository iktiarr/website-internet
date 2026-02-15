'use client';
import { useState } from 'react';

export default function PricingTabs({ dynamicData, wifiOnlyData, waInfo }: any) {
  const [activeTab, setActiveTab] = useState<'dynamic' | 'wifi'>('dynamic');
  const [showAll, setShowAll] = useState(false);
  
  const currentData = activeTab === 'dynamic' ? dynamicData : wifiOnlyData;

  // Membersihkan nomor WA
  const cleanNumber = String(waInfo?.link || "").replace(/\D/g, '');

  // Deskripsi dinamis di bawah tab
  const tabDescriptions = {
    dynamic: "Layanan internet fiber optik komplit dengan hiburan terbaik untuk keluarga di rumah.",
    wifi: "Koneksi internet murni tanpa gangguan, fokus untuk produktivitas kerja dan belajar."
  };

  // Logika "Lihat Semua" untuk mobile (Limit 6 kartu)
  const displayData = showAll ? currentData : currentData.slice(0, 4);

  return (
    <div className="w-full">
      {/* Tab Switcher */}
      <div className="flex flex-col items-center mb-12" data-aos="fade-up">
        <div className="inline-flex p-1 bg-slate-100 rounded-2xl border border-slate-200 mb-6">
          <button
            onClick={() => { setActiveTab('dynamic'); setShowAll(false); }}
            className={`px-6 md:px-10 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
              activeTab === 'dynamic' ? 'bg-white text-red-600 shadow-md' : 'text-slate-500 hover:text-red-500'
            }`}
          >
            Dynamic WiFi
          </button>
          <button
            onClick={() => { setActiveTab('wifi'); setShowAll(false); }}
            className={`px-6 md:px-10 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
              activeTab === 'wifi' ? 'bg-white text-red-600 shadow-md' : 'text-slate-500 hover:text-red-500'
            }`}
          >
            WiFi Only
          </button>
        </div>
        
        {/* Deskripsi Tab (Poin 3) */}
        <p className="text-center text-slate-500 text-sm md:text-base max-w-xl mx-auto px-6 italic transition-all duration-500">
          "{tabDescriptions[activeTab]}"
        </p>
      </div>

      {/* Grid Card - Responsive 2 Kolom di Mobile (Poin 4.e) */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 max-w-7xl mx-auto px-2 md:px-4">
        {displayData.map((pkg: any, index: number) => {
          const hargaTampil = pkg.promo || pkg.harga;
          
          // Link WA Dinamis
          const waMessage = encodeURIComponent(
            `Halo, saya ingin pasang paket *${pkg.namaPaket}* dengan harga Rp${hargaTampil.toLocaleString('id-ID')}.`
          );
          const finalLink = `https://wa.me/${cleanNumber}?text=${waMessage}`;

          return (
            <div
              key={pkg.id}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              className="group relative w-full bg-white border border-slate-100 p-4 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] flex flex-col transition-all duration-500 hover:border-red-500 hover:shadow-2xl hover:shadow-red-100/50 hover:-translate-y-2"
            >
              {/* Nama Paket (Poin 4.b & 4.c) */}
              <div className="mb-4 md:mb-6">
                <h3 className="text-xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter transition-colors group-hover:text-red-600">
                  {pkg.namaPaket}
                </h3>
                {/* Garis Aksen Bergerak saat Hover */}
                <div className="h-1 bg-red-600 mt-2 rounded-full w-8 transition-all duration-500 group-hover:w-full group-hover:animate-pulse"></div>
              </div>

              {/* List Fitur */}
              <div className="flex-grow space-y-2 md:space-y-4 mb-6">
                {pkg.deskripsi.map((desc: string, i: number) => (
                  <div key={i} className="flex items-start gap-2 md:gap-3">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[10px] md:text-sm text-slate-600 font-bold uppercase italic leading-tight">
                      {desc}
                    </span>
                  </div>
                ))}
              </div>

              {/* Harga & Tombol (Alur Baru: Poin 4.d) */}
              <div className="mt-auto pt-4 border-t border-slate-50">
                <div className="mb-4">
                  {pkg.promo && (
                    <p className="text-[9px] md:text-[10px] font-black text-red-500 uppercase tracking-widest mb-1">
                      Promo Khusus
                    </p>
                  )}
                  <div className="flex items-baseline gap-1 text-slate-900">
                    <span className="text-[10px] md:text-sm font-bold">Rp</span>
                    <span className="text-xl md:text-4xl font-black tracking-tighter">
                      {hargaTampil.toLocaleString('id-ID')}
                    </span>
                    <span className="text-[8px] md:text-xs font-bold text-slate-400">/bulan</span>
                  </div>
                  {pkg.promo && (
                    <p className="text-[9px] md:text-xs text-slate-400 line-through font-medium">
                      Rp {pkg.harga.toLocaleString('id-ID')}
                    </p>
                  )}
                </div>

                <a
                  href={finalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-2.5 md:py-4 bg-slate-900 text-white text-center rounded-xl md:rounded-2xl font-bold text-[10px] md:text-sm uppercase tracking-widest transition-all duration-300 hover:bg-red-600 active:scale-95 shadow-lg shadow-slate-100"
                >
                  Pilih Paket
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tombol Lihat Semua - Muncul jika data > 6 (Poin 4.f) */}
      {!showAll && currentData.length > 4 && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(true)}
            className="px-8 py-3 bg-white text-red-600 border-2 border-red-600 rounded-full font-bold text-sm hover:bg-red-600 hover:text-white transition-all duration-300"
          >
            Lihat Semua Paket
          </button>
        </div>
      )}
    </div>
  );
} 