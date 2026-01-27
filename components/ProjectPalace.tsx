'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { projects } from '@/data/projects';

export default function ProjectPalace() {
  return (
    <section className="py-20 bg-p5-white text-p5-black relative overflow-hidden">
        {/* Dekorasi Background */}
        <div className="absolute top-0 left-0 w-full h-20 bg-p5-gray transform -skew-y-2 origin-top-left z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
            {/* Header Section */}
            <div className="mb-16 text-center">
                <h2 className="font-heading text-5xl md:text-8xl transform -rotate-2 inline-block bg-p5-black text-p5-red px-6 py-2 shadow-[10px_10px_0px_rgba(208,0,0,1)]">
                    Experience
                </h2>
                <p className="font-body text-xl mt-4 font-bold tracking-widest text-p5-gray">INFILTRATION LOGS</p>
            </div>

            {/* Grid Projects */}
            <div className="flex flex-col gap-8 max-w-4xl mx-auto">
                {projects.map((project, index) => (
                    // Link membungkus seluruh kartu
                    <Link href={`/projects/${project.id}`} key={project.id} className="block w-full">
                        <motion.div
                            initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative cursor-pointer"
                        >
                            {/* 1. Background Kartu (Hitam -> Merah saat hover) */}
                            <div className="absolute inset-0 bg-p5-black transform -skew-x-12 border-2 border-p5-black transition-colors duration-300 group-hover:bg-p5-red group-hover:border-p5-red group-hover:translate-x-4 shadow-xl"></div>

                            {/* 2. Konten Kartu */}
                            <div className="relative p-6 md:p-8 flex flex-col md:flex-row items-center justify-between transform -skew-x-12 text-p5-white group-hover:text-p5-white">
                                
                                {/* Kiri: Judul & Info */}
                                <div className="flex-1 text-center md:text-left transform skew-x-12 md:skew-x-0">
                                    <div className="text-xs font-bold text-p5-yellow tracking-widest mb-1 group-hover:text-p5-black">
                                        Difficulty: {project.difficulty}
                                    </div>
                                    <h3 className="font-heading text-3xl md:text-5xl uppercase leading-none mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="font-body text-lg text-gray-400 group-hover:text-p5-black font-semibold">
                                        {project.category}
                                    </p>
                                </div>

                                {/* Kanan: Deskripsi & Tombol Aksi */}
                                <div className="mt-4 md:mt-0 md:w-1/3 border-t-2 md:border-t-0 md:border-l-2 border-p5-gray/50 md:pl-6 group-hover:border-p5-black pt-4 md:pt-0">
                                    <p className="font-body text-sm transform skew-x-12 md:skew-x-0 opacity-80 group-hover:opacity-100 group-hover:text-p5-black line-clamp-2">
                                        {project.desc}
                                    </p>
                                    <div className="mt-4 text-center md:text-right">
                                        <span className="bg-p5-yellow text-p5-black px-4 py-1 text-xs font-bold uppercase transform skew-x-12 inline-block hover:bg-white transition-colors">
                                            Read More
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    </section>
  );
}