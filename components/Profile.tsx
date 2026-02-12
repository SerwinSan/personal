'use client';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaUniversity, FaUserSecret, FaQuoteLeft } from 'react-icons/fa';

export default function Profile() {
  return (
    <section className="py-20 bg-p5-gray text-p5-white relative overflow-hidden flex justify-center">
      
      {/* Background Pattern (Garis Miring Halus) */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{backgroundImage: 'repeating-linear-gradient(-45deg, #000 0, #000 2px, transparent 2px, transparent 10px)'}}>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12 max-w-6xl">
        
        {/* BAGIAN KIRI: FOTO / AVATAR */}
        <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3 flex justify-center"
        >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Frame Foto Miring */}
                <div className="absolute inset-0 border-4 border-p5-red transform -rotate-6 bg-p5-black z-0"></div>
                <div className="absolute inset-0 border-4 border-p5-white transform rotate-3 z-10"></div>
                
                {/* Placeholder Foto */}
                {/* Tips: Gunakan foto background transparan atau hitam putih supaya makin P5 */}
                <div className="absolute inset-0 overflow-hidden transform rotate-3 z-10 m-2 bg-gray-800 flex items-center justify-center">
                    {/* Jika belum ada foto, pakai Icon dulu */}
                    <FaUserSecret className="text-9xl text-p5-gray opacity-50" />
                    
                    {/* Kalau sudah ada foto, uncomment baris bawah ini: */}
                    {/* <img src="/foto-profil.jpg" alt="Profile" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" /> */}
                </div>

                {/* Label "WANTED" atau Nama */}
                <div className="absolute -bottom-6 -left-6 bg-p5-yellow text-p5-black font-heading text-2xl px-4 py-1 transform -rotate-12 border-2 border-black z-20 shadow-lg">
                    THE PHANTOM
                </div>
            </div>
        </motion.div>


        {/* BAGIAN KANAN: BIODATA TEKS */}
        <motion.div 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3"
        >
            {/* Judul Section */}
            <h2 className="font-heading text-5xl md:text-7xl text-p5-white mb-8 transform -skew-x-12 border-l-8 border-p5-red pl-4">
                WHO AM I?
            </h2>

            {/* Kotak Biodata */}
            <div className="bg-p5-white text-p5-black p-6 md:p-8 transform skew-x-[-2deg] shadow-[10px_10px_0px_rgba(208,0,0,1)] relative">
                
                {/* Hiasan Pin Kertas */}
                <div className="absolute -top-3 left-1/2 w-4 h-4 rounded-full bg-p5-red border-2 border-black"></div>

                <div className="space-y-6">
                    
                    {/* Intro Singkat */}
                    <div className="font-body text-lg md:text-xl font-medium leading-relaxed border-b-2 border-p5-gray pb-4">
                        <FaQuoteLeft className="text-p5-red text-2xl mb-2" />
                        My name is Hamid, im a final year student. A software engineer who focused on delivering high-performance Web and Mobile applications. 
                        Based in Bekasi, Indonesia, I am currently pursuing my degree at Universitas Dian Nusantara.
                        My expertise lies at the intersection of Backend Logic (Laravel) and Mobile Experience (Flutter). 
                        I enjoy solving complex problems—whether it's optimizing a database query or perfecting a UI transition. 
                        Outside of the terminal, I recharge by cycling, training calisthenics, and exploring storytelling through anime.
                    </div>

                    {/* Detail Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-heading text-xl uppercase tracking-wide">
                        
                        {/* Lokasi */}
                        <div className="flex items-center gap-3 group">
                            <div className="bg-p5-black text-p5-white p-2 transform rotate-3 group-hover:bg-p5-red transition-colors">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <div className="text-xs text-p5-gray font-bold">Base of Operation</div>
                                <div className="text-p5-red">Bekasi, Indonesia</div>
                            </div>
                        </div>

                        {/* Kampus */}
                        <div className="flex items-center gap-3 group">
                            <div className="bg-p5-black text-p5-white p-2 transform -rotate-3 group-hover:bg-p5-red transition-colors">
                                <FaUniversity />
                            </div>
                            <div>
                                <div className="text-xs text-p5-gray font-bold">Academy</div>
                                <div className="text-p5-red">Universitas Dian Nusantara</div>
                            </div>
                        </div>

                        {/* Status */}
                        <div className="flex items-center gap-3 group">
                            <div className="bg-p5-black text-p5-white p-2 transform rotate-1 group-hover:bg-p5-red transition-colors">
                                <FaUserSecret />
                            </div>
                            <div>
                                <div className="text-xs text-p5-gray font-bold">Code Name</div>
                                <div className="text-p5-red">Fullstack Dev</div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}