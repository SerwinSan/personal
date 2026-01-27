'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    // Deteksi elemen yang bisa diklik untuk efek hover
    const mouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
            setIsHovering(true);
        } else {
            setIsHovering(false);
        }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", mouseOver); // Tambah listener hover

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", mouseOver);
    };
  }, []);

  return (
    <>
      {/* Sembunyikan Kursor Asli (Hanya di Desktop) */}
      <style jsx global>{`
        @media (min-width: 768px) {
            body {
                cursor: none;
            }
            a, button {
                cursor: none;
            }
        }
      `}</style>

      {/* Kursor Custom (Hanya muncul di layar besar) */}
      <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999]">
        
        {/* Lingkaran Luar (Mengikuti dengan delay) */}
        <motion.div
          className="fixed top-0 left-0 w-8 h-8 border-2 border-p5-red rounded-full flex items-center justify-center"
          animate={{
            x: mousePosition.x - 16, // -16 biar di tengah (setengah dari w-8/32px)
            y: mousePosition.y - 16,
            scale: isHovering ? 2 : 1, // Membesar saat hover link
            borderColor: isHovering ? '#FFE600' : '#D00000' // Jadi kuning saat hover
          }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
        >
             {/* Hiasan Crosshair kecil di dalam */}
             <div className={`w-1 h-1 bg-p5-red rounded-full ${isHovering ? 'bg-p5-yellow' : ''}`}></div>
        </motion.div>

        {/* Titik Tengah (Mengikuti instan) */}
        <motion.div
            className="fixed top-0 left-0 w-2 h-2 bg-p5-white rounded-full mix-blend-difference"
            animate={{
                x: mousePosition.x - 4,
                y: mousePosition.y - 4
            }}
            transition={{ type: "tween", ease: "linear", duration: 0 }}
        />
      </div>
    </>
  );
}