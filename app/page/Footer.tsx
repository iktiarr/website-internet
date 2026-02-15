'use client';
import { MapPin, Mail, MessageCircle, Phone } from 'lucide-react';

const FOOTER_CONFIG = {
  brandName: "Internetku",
  description: "Solusi Internet Fiber Optik Terbaik. Cepat, Stabil, dan Terpercaya.",
  address: "Jl. Gatot Subroto No. 52, Jakarta Selatan",
  phone: "6285926426318",
  email: "ardiyanreno12@gmail.com",
  whatsappNumber1: "62881012939840",
  whatsappNumber2: "62859264263318",
  tiktokLink: "https://www.tiktok.com/@melayani.pasang.indihome"
};

export default function Footer() {
  const firstPart = FOOTER_CONFIG.brandName.substring(0, 4);
  const secondPart = FOOTER_CONFIG.brandName.substring(4);

  return (
    <footer className="relative bg-gray-600 border-t border- overflow-hidden">
      <div className="container mx-auto px-6 py-16 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div className="space-y-5">
            <h3 className="text-3xl font-black tracking-tight text- uppercase">
              {firstPart}
              <span className="text-white">{secondPart}</span>
            </h3>

            <p className="text-sm text- leading-relaxed max-w-xs">
              {FOOTER_CONFIG.description}
            </p>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Lokasi Kami
            </h4>

            <div className="flex items-start gap-3 text-sm text-">
              <MapPin size={18} className="text-white mt-1 shrink-0" />
              <p className="leading-relaxed">
                {FOOTER_CONFIG.address}
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Hubungi Kami
            </h4>

            <div className="space-y-4 text-sm text-">

              <a
                href={`https://wa.me/${FOOTER_CONFIG.whatsappNumber1}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <MessageCircle size={18} className="text-white shrink-0" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`https://wa.me/${FOOTER_CONFIG.whatsappNumber2}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <MessageCircle size={18} className="text-white shrink-0" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`mailto:${FOOTER_CONFIG.email}`}
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Mail size={18} className="text-white shrink-0" />
                <span>{FOOTER_CONFIG.email}</span>
              </a>

              <a
                href={FOOTER_CONFIG.tiktokLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <svg
                  className="w-[18px] h-[18px] text-white shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9 3v12.5a3.5 3.5 0 1 1-2-3.16V9.5a7 7 0 1 0 4 6.34V6.26a6 6 0 0 0 4 1.74V5.1a3.5 3.5 0 0 1-2-3.1H9z"/>
                </svg>
                <span>TikTok</span>
              </a>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}
