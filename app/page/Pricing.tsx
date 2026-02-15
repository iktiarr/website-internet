import { getPricingData } from '@/lib/contenful';
import PricingTabs from './PricingTabs';

export default async function PricingSection() {
  const data = await getPricingData();

  return (
    <section className="py-24 bg-gray-100 relative overflow-hidden" id="pricing">
      {/* Minimalist Background Deco */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-[0.02]" 
           style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
            Harga Langganan
          </h2>
          <p className="text-slate-500 text-lg">
            Pilih layanan yang paling sesuai dengan kebutuhan digital Anda hari ini.
          </p>
        </div>

        {/* Memanggil Komponen Tab */}
        <PricingTabs 
          dynamicData={data.dynamic} 
          wifiOnlyData={data.wifiOnly}  
        />
      </div>
    </section>
  );
}