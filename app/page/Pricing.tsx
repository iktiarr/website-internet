'use client';

import { useState, useEffect } from 'react';
import { getPricingData } from '@/lib/contenful';
import PricingTabs from './PricingTabs';

export default function PricingSection() {
  // 1. Inisialisasi state untuk menampung data dan status loading
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // 2. Lifecycle untuk fetching data
  useEffect(() => {
    async function fetchData() {
      try {
        const pricingData = await getPricingData();
        setData(pricingData);
      } catch (error) {
        console.error("Gagal memuat data pricing:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // 3. Render loading state (opsional: bisa ganti dengan skeleton)
  if (loading) {
    return (
      <section className="py-24 bg-gray-100 flex items-center justify-center">
        <p className="text-slate-500 animate-pulse">Memuat harga...</p>
      </section>
    );
  }

  // Jika data gagal dimuat atau kosong
  if (!data) return null;

  return (
    <section className="py-24 bg-gray-100 relative overflow-hidden" id="pricing">
      {/* Minimalist Background Deco */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-[0.02]" 
        style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
            Harga Langganan
          </h2>
          <p className="text-slate-500 text-lg">
            Pilih layanan yang paling sesuai dengan kebutuhan digital Anda hari ini.
          </p>
        </div>

        {/* Memanggil Komponen Tab dengan data yang sudah di-fetch */}
        <PricingTabs 
          dynamicData={data.dynamic} 
          wifiOnlyData={data.wifiOnly}  
        />
      </div>
    </section>
  );
}