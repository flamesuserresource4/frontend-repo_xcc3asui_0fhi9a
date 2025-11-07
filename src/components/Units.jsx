const units = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  name: 'Sky Suite 2BR',
  rent: 'SEWA Rp35jt/bulan',
  sell: 'JUAL Rp3.8M',
  img: `https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1600&auto=format&fit=crop`,
}));

export default function Units() {
  return (
    <section id="unit" className="relative py-24 bg-[#121212]" aria-label="Unit Tersedia">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-bold mb-8"
          style={{ fontFamily: 'SF Pro Display, -apple-system, system-ui, Inter, sans-serif', color: '#F5F5F5' }}
        >
          Unit Tersedia
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {units.map((u) => (
            <div key={u.id} className="rounded-3xl overflow-hidden border border-[#A7F3D0]/30 bg-white/5 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_30px_rgba(0,0,0,0.4)]">
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img src={u.img} alt={u.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#F5F5F5]" style={{ fontFamily: 'SF Pro Display, -apple-system, system-ui, Inter, sans-serif' }}>{u.name}</h3>
                <p className="mt-2 text-[#F5F5F5]/80" style={{ fontFamily: 'SF Pro Text, -apple-system, system-ui, Inter, sans-serif' }}>{u.rent} · {u.sell}</p>
                <a
                  href="https://wa.me/+628123456789" target="_blank" rel="noreferrer"
                  className="mt-5 inline-flex items-center justify-center h-16 px-6 rounded-2xl border border-[#A7F3D0] text-[#F5F5F5] text-[20px] font-bold backdrop-blur-xl bg-white/5 hover:bg-white/10 transition-transform duration-200 hover:scale-105 shadow-[inset_0_0_0_1px_rgba(167,243,208,0.35)]"
                  style={{ fontFamily: 'SF Pro Text, -apple-system, system-ui, Inter, sans-serif' }}
                >
                  HUBUNGI VIA WA
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
