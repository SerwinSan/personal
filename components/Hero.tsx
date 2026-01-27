'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Hero() {
  // State untuk waktu
  const [timeData, setTimeData] = useState({
    date: '01/01',
    day: 'MON',
    phase: 'LOADING...'
  });

  // Effect untuk update jam setiap detik
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      
      // Format Tanggal (MM/DD)
      const date = `${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getDate().toString().padStart(2, '0')}`;
      
      // Format Hari (Singkatan)
      const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
      const day = days[now.getDay()];

      // Logika "Persona Time Phase"
      const hour = now.getHours();
      let phase = 'EVENING';
      if (hour >= 5 && hour < 11) phase = 'MORNING';
      else if (hour >= 11 && hour < 15) phase = 'LUNCHTIME';
      else if (hour >= 15 && hour < 18) phase = 'AFTER SCHOOL';
      else if (hour >= 18 && hour < 24) phase = 'EVENING';
      else phase = 'LATE NIGHT'; // 00 - 05

      setTimeData({ date, day, phase });
    };

    updateTime(); // Jalanin langsung pas load
    const interval = setInterval(updateTime, 60000); // Update tiap 1 menit
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-p5-red">
      
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{
             backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 2px, transparent 10px)'
           }}>
      </div>
      <div className="absolute inset-0 bg-p5-black z-0 transform -skew-y-6 origin-top-left translate-y-24 md:translate-y-32 h-[120%] border-t-8 border-p5-white"></div>
      
      <div className="relative z-10 text-center flex flex-col items-center">
        <motion.div 
          initial={{ x: -300, opacity: 0, skewX: 20 }}
          animate={{ x: 0, opacity: 1, skewX: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="relative"
        >
            <h1 className="font-heading text-6xl md:text-[10rem] leading-none text-p5-white uppercase tracking-tighter transform -rotate-2 drop-shadow-[5px_5px_0px_rgba(0,0,0,1)]">
            The Phantom
            </h1>
            <div className="absolute -top-10 -right-10 text-p5-yellow text-6xl animate-pulse">★</div>
        </motion.div>
        
        <motion.div 
            initial={{ x: 300, opacity: 0, skewX: -20 }}
            animate={{ x: 0, opacity: 1, skewX: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.2 }}
        >
            <h1 className="font-heading text-4xl md:text-8xl leading-none text-p5-black bg-p5-white px-2 md:px-4 inline-block transform -rotate-1 skew-x-[-10deg] border-2 md:border-4 border-p5-black mt-2">
            Developer
            </h1>
        </motion.div>

        <motion.p 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, type: "spring" }}
          className="mt-8 font-body font-bold text-xl md:text-2xl text-p5-white bg-p5-black px-6 py-2 transform skew-x-[-15deg] border-2 border-p5-red shadow-[5px_5px_0px_rgba(255,255,255,0.5)]"
        >
          Hamid Muhammad Saiful Zaman
        </motion.p>
      </div>

      <div className="absolute bottom-10 right-4 md:right-10 z-20 font-heading text-p5-white text-right transform -rotate-6">
        <div className="text-4xl drop-shadow-md">{timeData.date}</div>
        <div className="text-6xl text-p5-yellow drop-shadow-md leading-none">{timeData.day}</div>
        <div className="text-xl bg-p5-white text-p5-black px-2 inline-block font-bold mt-1 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
          {timeData.phase}
        </div>
      </div>

    </section>
  );
}