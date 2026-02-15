import Header from '@/app/page/Header';
import HeroSection from '@/app/page/Hero';
import PricingSection from '@/app/page/Pricing';
import FeaturesSection from '@/app/page/Features';
import Footer from '@/app/page/Footer';


export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col">
        <div id="hero">
          <HeroSection />
        </div>
        <div id="pricing">
          <PricingSection />
        </div>
        <div id="features">
          <FeaturesSection />
        </div>
        <div id="contact">
          <Footer />
        </div>
      </main>
    </>
  );
}