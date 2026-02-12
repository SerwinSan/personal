'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  { 
    id: 1, 
    icon: <FaGithub />, 
    href: "https://github.com/SerwinSan", 
    color: "hover:text-gray-800",
    label: "GitHub" 
  },
  { 
    id: 2, 
    icon: <FaLinkedin />, 
    href: "https://linkedin.com/in/hamid-msz", 
    color: "hover:text-blue-600",
    label: "LinkedIn" 
  },
  { 
    id: 3, 
    icon: <FaInstagram />, 
    href: "https://instagram.com/shinne0", 
    color: "hover:text-pink-600",
    label: "Instagram" 
  },
];

export default function ContactFooter() {
  return (
    <footer id="contact" className="relative bg-p5-black text-p5-white py-24 overflow-hidden flex justify-center items-center">
        
        {/* Background Pattern (Garis Miring Halus) */}
        <div className="absolute inset-0 opacity-20" 
             style={{backgroundImage: 'repeating-linear-gradient(45deg, #333 0, #333 1px, transparent 1px, transparent 10px)'}}>
        </div>

        {/* KONTAINER UTAMA: CALLING CARD */}
        <div className="relative z-10 w-full max-w-4xl px-4">
            
            <motion.div 
                initial={{ y: 100, opacity: 0, rotate: 5 }}
                whileInView={{ y: 0, opacity: 1, rotate: -2 }}
                transition={{ type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                className="bg-p5-white text-p5-black p-8 md:p-12 transform -rotate-2 shadow-[15px_15px_0px_rgba(208,0,0,1)] border-4 border-p5-black relative"
            >
                {/* Logo Hiasan Pojok Kanan Atas */}
                <div className="absolute top-4 right-4 text-p5-red opacity-20 transform rotate-12">
                    <FaEnvelope size={100} />
                </div>

                <div className="relative z-10 text-center md:text-left">
                    <h2 className="font-heading text-5xl md:text-7xl text-p5-red mb-2 uppercase tracking-tighter">
                        Take Your Heart
                    </h2>
                    <p className="font-body text-xl font-bold italic bg-p5-black text-p5-white inline-block px-4 py-1 transform skew-x-[-10deg] mb-8">
                        I will steal your project ideas & make them real!
                    </p>

                    <div className="flex flex-col md:flex-row items-center gap-8 mt-4">
                        
                        {/* EMAIL */}
                        <motion.a 
                            href="mailto:wlkr3422@gmail.com"
                            whileHover={{ scale: 1.05, x: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-p5-red text-p5-white font-heading text-2xl px-8 py-3 uppercase tracking-widest border-2 border-p5-black shadow-[5px_5px_0px_rgba(0,0,0,1)] hover:bg-p5-black hover:text-p5-red transition-colors cursor-pointer flex items-center gap-3"
                        >
                           <FaEnvelope /> Send Calling Card
                        </motion.a>

                        {/* PEMBATAS (Garis Miring) */}
                        <div className="h-12 w-1 bg-p5-gray transform skew-x-[-20deg] hidden md:block"></div>

                        {/* SOCIAL ICONS */}
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.id}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -5, rotate: 10 }}
                                    className={`text-4xl text-p5-black transition-colors ${social.color} bg-p5-gray/10 p-3 rounded-sm transform skew-x-[-10deg] border border-transparent hover:border-p5-black`}
                                    title={social.label}
                                >
                                    <div className="transform skew-x-[10deg]"> {/* Balikin icon biar lurus */}
                                        {social.icon}
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                    </div>
                </div>
            </motion.div>
        </div>
    </footer>
  );
}