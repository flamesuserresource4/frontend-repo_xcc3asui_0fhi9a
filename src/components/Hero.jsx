import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[100vh] w-full overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#121212]/40 via-[#121212]/60 to-[#121212]" />

      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mx-auto w-full max-w-2xl rounded-3xl border border-[#A7F3D0]/30 bg-white/10 backdrop-blur-2xl p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_60px_rgba(0,0,0,0.35)]">
            <h1
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4"
              style={{ fontFamily: 'SF Pro Display, -apple-system, system-ui, Inter, sans-serif', color: '#F5F5F5' }}
            >
              JAKARTA <span className="text-[#A7F3D0]">SKY</span> LIQUIDA
            </h1>
            <p
              className="text-lg sm:text-2xl text-[#F5F5F5]/90 mb-8 opacity-0 animate-[fadeIn_1.2s_ease_0.2s_forwards]"
              style={{ fontFamily: 'SF Pro Text, -apple-system, system-ui, Inter, sans-serif' }}
            >
              Hunian Masa Depan di Jantung Ibukota
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="#unit"
                className="pointer-events-auto h-16 px-8 rounded-2xl border border-[#A7F3D0] text-[#F5F5F5] text-[20px] font-bold backdrop-blur-xl bg-white/5 shadow-[inset_0_0_0_1px_rgba(167,243,208,0.35),0_10px_30px_rgba(0,0,0,0.4)] transition-transform duration-200 hover:scale-105 hover:bg-white/10"
                style={{ fontFamily: 'SF Pro Text, -apple-system, system-ui, Inter, sans-serif' }}
              >
                Lihat Unit
              </a>
              <a
                href="https://wa.me/+628123456789" target="_blank" rel="noreferrer"
                className="pointer-events-auto h-16 px-8 rounded-2xl border border-[#A7F3D0] text-[#121212] text-[20px] font-bold backdrop-blur-xl bg-[#A7F3D0] shadow-[inset_0_0_0_1px_rgba(167,243,208,0.55),0_10px_30px_rgba(0,0,0,0.45)] transition-transform duration-200 hover:scale-105"
                style={{ fontFamily: 'SF Pro Text, -apple-system, system-ui, Inter, sans-serif' }}
              >
                Hubungi WA
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </section>
  );
}
