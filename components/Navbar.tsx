'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRouter, usePathname } from 'next/navigation';

const menuItems = [
  { name: 'HOME', id: 'home' },
  { name: 'STATS', id: 'stats' },
  { name: 'EXPERIENCE', id: 'projects' },
  { name: 'CONTACT', id: 'contact' },
];

export default function Navbar() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  
  const router = useRouter(); // Untuk pindah halaman
  const pathname = usePathname(); // Untuk tahu kita lagi dimana

  const handleNavigation = (id: string) => {
    setIsMobileOpen(false); // Tutup menu HP dulu

    // Cek apakah kita sedang di Home Page ('/')
    if (pathname === '/') {
      // Jika di Home, cari elemen dan scroll
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Jika BUKAN di Home (misal di halaman detail), pindah ke Home dulu
      // Pakai format /#id supaya pas sampai sana langsung scroll
      router.push(`/#${id}`);
    }
  };

  return (
    <>
      {/* DESKTOP MENU */}
      <nav className="hidden md:flex fixed right-0 top-[20%] z-50 flex-col items-end gap-4 pr-4">
        {menuItems.map((item) => (
          <motion.button
            key={item.id}
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleNavigation(item.id)}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, type: 'spring' }}
            className="group relative flex items-center justify-end w-64"
          >
            <div className={`
              absolute right-0 top-0 h-12 w-full 
              transform -skew-x-[20deg] origin-bottom-right transition-all duration-300
              border-2 border-p5-white shadow-lg
              ${hovered === item.id ? 'bg-p5-red w-[110%] border-p5-yellow translate-x-[-10px]' : 'bg-p5-black w-[80%] translate-x-[20px]'}
            `}></div>

            <span className={`
              relative z-10 font-heading text-2xl uppercase tracking-widest pr-8
              transition-colors duration-200 transform -skew-x-[10deg]
              ${hovered === item.id ? 'text-p5-white italic' : 'text-p5-gray'}
            `}>
              {item.name}
            </span>
          </motion.button>
        ))}
      </nav>

      {/* MOBILE MENU BUTTON */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button 
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="bg-p5-black text-p5-red border-2 border-p5-white p-3 transform -skew-x-12 shadow-lg"
        >
          {isMobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="fixed inset-0 z-40 bg-p5-red flex flex-col items-center justify-center gap-8 md:hidden"
          >
             {/* Background Pattern */}
             <div className="absolute inset-0 opacity-20 pointer-events-none" 
                  style={{backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 2px, transparent 10px)'}}>
             </div>

            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className="font-heading text-5xl text-p5-white uppercase tracking-tighter hover:text-p5-black hover:italic transition-all transform -rotate-6"
              >
                {item.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}