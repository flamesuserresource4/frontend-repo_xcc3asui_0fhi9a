export default function LocationContact() {
  return (
    <section id="kontak" className="py-24 bg-[#121212]" aria-label="Lokasi & Kontak">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: 'SF Pro Display, -apple-system, system-ui, Inter, sans-serif', color: '#F5F5F5' }}
          >
            Lokasi Strategis
          </h2>
          <p className="text-[#F5F5F5]/80 mb-4" style={{ fontFamily: 'SF Pro Text, -apple-system, system-ui, Inter, sans-serif' }}>
            Terhubung MRT dan pusat bisnis Jakarta. Langsung akses ke CBD.
          </p>
          <div className="rounded-3xl overflow-hidden border border-[#A7F3D0]/30 bg-white/5 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_30px_rgba(0,0,0,0.4)]">
            <iframe
              title="Google Maps Jakarta CBD"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.312934653224!2d106.82342157602743!3d-6.220165062611112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e7a0a3a9d9%3A0x9a6a7f2e8e8ad2a!2sSCBD%2C%20Jl.%20Jend.%20Sudirman%2C%20Kecamatan%20Kebayoran%20Baru%2C%20Kota%20Jakarta%20Selatan!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-3 text-[#A7F3D0]" style={{ fontFamily: 'SF Pro Text, -apple-system, system-ui, Inter, sans-serif' }}>
            🚇 Dekat Stasiun MRT | 🧭 Akses cepat ke Sudirman - Thamrin
          </div>
        </div>

        <div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: 'SF Pro Display, -apple-system, system-ui, Inter, sans-serif', color: '#F5F5F5' }}
          >
            Booking Sekarang
          </h2>
          <form
            onSubmit={(e) => { e.preventDefault(); alert('Terima kasih! Tim kami akan segera menghubungi Anda.'); }}
            className="space-y-4 rounded-3xl border border-[#A7F3D0]/30 bg-white/5 backdrop-blur-xl p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_30px_rgba(0,0,0,0.4)]"
          >
            <div>
              <label className="block mb-1 text-[#F5F5F5]" style={{ fontFamily: 'SF Pro Text, -apple-system, system-ui, Inter, sans-serif' }}>Nama</label>
              <input required type="text" className="w-full h-12 px-4 rounded-xl bg-white/10 border border-[#A7F3D0]/30 text-[#F5F5F5] focus:outline-none focus:border-[#A7F3D0]" />
            </div>
            <div>
              <label className="block mb-1 text-[#F5F5F5]" style={{ fontFamily: 'SF Pro Text, -apple-system, system-ui, Inter, sans-serif' }}>No. WA</label>
              <input required type="tel" className="w-full h-12 px-4 rounded-xl bg-white/10 border border-[#A7F3D0]/30 text-[#F5F5F5] focus:outline-none focus:border-[#A7F3D0]" />
            </div>
            <div>
              <label className="block mb-1 text-[#F5F5F5]" style={{ fontFamily: 'SF Pro Text, -apple-system, system-ui, Inter, sans-serif' }}>Tipe Unit</label>
              <select className="w-full h-12 px-4 rounded-xl bg-white/10 border border-[#A7F3D0]/30 text-[#F5F5F5] focus:outline-none focus:border-[#A7F3D0]">
                <option className="bg-[#121212]">Sky Suite 2BR</option>
                <option className="bg-[#121212]">Sky Studio</option>
                <option className="bg-[#121212]">Sky Loft</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 text-[#F5F5F5]" style={{ fontFamily: 'SF Pro Text, -apple-system, system-ui, Inter, sans-serif' }}>Pesan</label>
              <textarea rows="4" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-[#A7F3D0]/30 text-[#F5F5F5] focus:outline-none focus:border-[#A7F3D0]" />
            </div>
            <button
              type="submit"
              className="w-full h-16 rounded-2xl border border-[#A7F3D0] text-[#121212] text-[20px] font-bold backdrop-blur-xl bg-[#A7F3D0] shadow-[inset_0_0_0_1px_rgba(167,243,208,0.55),0_10px_30px_rgba(0,0,0,0.45)] transition-transform duration-200 hover:scale-105"
              style={{ fontFamily: 'SF Pro Text, -apple-system, system-ui, Inter, sans-serif' }}
            >
              BOOKING SEKARANG
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
