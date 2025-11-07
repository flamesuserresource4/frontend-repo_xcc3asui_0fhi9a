import { useState } from 'react';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Unit', href: '#unit' },
  { label: 'Fasilitas', href: '#fasilitas' },
  { label: 'Kontak', href: '#kontak' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50" role="banner">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between rounded-2xl border border-[#A7F3D0]/40 bg-white/5 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          <a href="#home" className="px-4 py-2 select-none" aria-label="Jakarta Sky Liquida home">
            <div
              className="text-[14px] sm:text-[16px] tracking-widest font-semibold"
              style={{
                fontFamily: 'SF Pro Display, -apple-system, system-ui, Inter, sans-serif',
                color: '#F5F5F5',
              }}
            >
              JAKARTA <span className="text-[#A7F3D0]">SKY</span> LIQUIDA
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-2 pr-2" aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 rounded-xl border border-[#A7F3D0]/30 text-[#F5F5F5]/90 hover:text-white transition-transform duration-200 bg-white/5 hover:bg-white/10 backdrop-blur-md"
                style={{ fontFamily: 'SF Pro Text, -apple-system, system-ui, Inter, sans-serif' }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden m-2 h-12 px-5 rounded-2xl border border-[#A7F3D0] text-[#F5F5F5] text-lg font-semibold backdrop-blur-xl bg-white/5 shadow-[inset_0_0_0_1px_rgba(167,243,208,0.35)] active:scale-95 transition-transform"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            ☰ MENU
          </button>
        </div>

        {open && (
          <div className="mt-2 flex flex-col md:hidden gap-2 rounded-2xl border border-[#A7F3D0]/30 bg-white/5 backdrop-blur-xl p-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="w-full text-center px-4 py-3 rounded-xl border border-[#A7F3D0]/30 text-[#F5F5F5]/90 hover:text-white transition bg-white/5 hover:bg-white/10"
                style={{ fontFamily: 'SF Pro Text, -apple-system, system-ui, Inter, sans-serif' }}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
