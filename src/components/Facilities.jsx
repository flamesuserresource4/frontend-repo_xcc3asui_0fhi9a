import { Home, Dumbbell, Wifi, Castle } from 'lucide-react';

const items = [
  { icon: Castle, title: 'Rooftop Pool' },
  { icon: Dumbbell, title: 'Gym 24/7' },
  { icon: Wifi, title: 'Smart Home' },
  { icon: Home, title: 'Sky Lounge' },
];

export default function Facilities() {
  return (
    <section id="fasilitas" className="py-24 bg-[#121212]" aria-label="Fasilitas Premium">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-bold mb-8"
          style={{ fontFamily: 'SF Pro Display, -apple-system, system-ui, Inter, sans-serif', color: '#F5F5F5' }}
        >
          Fasilitas Premium
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title }) => (
            <div key={title} className="flex flex-col items-center rounded-3xl border border-[#A7F3D0]/30 bg-white/5 backdrop-blur-xl p-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_30px_rgba(0,0,0,0.4)]">
              <div className="w-16 h-16 rounded-2xl border border-[#A7F3D0]/50 bg-white/10 flex items-center justify-center mb-4">
                <Icon className="text-[#A7F3D0]" size={28} />
              </div>
              <p className="text-[#F5F5F5] font-semibold" style={{ fontFamily: 'SF Pro Text, -apple-system, system-ui, Inter, sans-serif' }}>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
