'use client';
import Link from 'next/link';
import { FaTools, FaExclamationTriangle, FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Maintenance() {
  return (
    <main className="h-screen w-full bg-p5-black text-p5-white flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Background Pattern: Police Line Style */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{
             backgroundImage: 'repeating-linear-gradient(45deg, #D00000 0, #D00000 20px, #111 20px, #111 40px)'
           }}>
      </div>

      <div className="relative z-10 text-center px-4 max-w-2xl">
        
        {/* Ikon Besar Berputar */}
        <motion.div 
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-8xl text-p5-yellow mb-6 inline-block"
        >
          <FaTools />
        </motion.div>

        {/* Judul Miring Agresif */}
        <div className="bg-p5-red p-2 transform -skew-x-12 inline-block mb-8 shadow-[10px_10px_0px_white]">
           <h1 className="font-heading text-6xl md:text-8xl uppercase text-p5-black px-4">
             UNDER REPAIR
           </h1>
        </div>

        {/* Pesan */}
        <div className="bg-p5-white text-p5-black p-6 transform rotate-1 border-4 border-p5-red mb-8">
           <h2 className="font-heading text-2xl mb-2 flex items-center justify-center gap-2">
             <FaExclamationTriangle className="text-p5-red"/> ACCESS DENIED
           </h2>
           <p className="font-body text-lg font-bold">
             Area ini sedang dalam pengembangan kognitif. Silakan kembali lagi nanti setelah kami mencuri hatinya!
           </p>
        </div>

        {/* Tombol Kembali */}
        <Link href="/#projects" className="inline-block bg-p5-yellow text-p5-black font-heading text-2xl px-8 py-3 uppercase transform hover:scale-110 hover:rotate-2 transition-transform shadow-[5px_5px_0px_rgba(255,255,255,0.5)]">
           <FaArrowLeft className="inline mb-1 mr-2"/> Escape to Safety
        </Link>

      </div>
    </main>
  );
}