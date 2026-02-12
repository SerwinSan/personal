'use client';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "LANGUAGES",
    skills: ["PHP", "Javascript", "Dart", "Python", "SQL"]
  },
  {
    title: "FRAMEWORKS",
    skills: ["Laravel", "Next.js", "React", "Flutter", "Tailwind CSS", "Bootstrap"]
  },
  {
    title: "TOOLS & OTHERS",
    skills: ["Git / GitHub", "MySQL", "Firebase", "Gemini AI API", "Vercel", "Postman"]
  }
];

export default function SocialStats() {
  return (
    <section className="min-h-screen bg-p5-black text-p5-white py-24 relative overflow-hidden flex flex-col justify-center">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="mb-16 text-center md:text-left">
           <motion.h2 
             initial={{ x: -100, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             className="font-heading text-6xl md:text-8xl text-p5-white transform -rotate-2 leading-none inline-block border-b-8 border-p5-red"
           >
             MY ARSENAL
           </motion.h2>
           <p className="font-body text-xl mt-4 text-p5-gray font-bold tracking-widest bg-p5-white text-p5-black inline-block px-4 py-1 transform skew-x-[-10deg]">
             WEAPONS OF CREATION
           </p>
        </div>

        {/* Grid Kategori */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {skillCategories.map((category, catIndex) => (
            <motion.div 
              key={catIndex}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: catIndex * 0.2 }}
              className="relative"
            >
              {/* Judul Kategori */}
              <div className="bg-p5-red text-p5-black font-heading text-2xl px-4 py-2 transform -skew-x-12 inline-block mb-4 shadow-[5px_5px_0px_white]">
                {category.title}
              </div>

              {/* List Skill (Kotak-kotak Miring) */}
              <div className="flex flex-col gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ x: 10, scale: 1.05 }}
                    className="bg-p5-gray border-l-4 border-p5-yellow p-3 transform skew-x-[-10deg] hover:bg-p5-white hover:text-p5-black hover:border-p5-red transition-all cursor-default group"
                  >
                    <span className="font-heading text-xl tracking-wider transform skew-x-[10deg] inline-block w-full">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Dekorasi Garis */}
              <div className="absolute top-0 right-0 h-full w-[1px] bg-p5-white/20 hidden md:block transform rotate-6 translate-x-4"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}