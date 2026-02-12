import Link from 'next/link';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import { FaArrowLeft, FaCode, FaLock, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { FaCamera } from 'react-icons/fa6';

// Ini agar Next.js tahu halaman apa saja yang perlu disiapkan (Optimasi)
export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-p5-gray text-p5-white flex flex-col items-center py-20 px-4 relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 2px, transparent 10px)'}}>
      </div>

      <div className="relative z-10 w-full max-w-5xl">
        
        {/* Tombol Back */}
        <Link href="/#projects" className="inline-flex items-center gap-2 text-p5-yellow hover:text-p5-white mb-8 font-heading uppercase tracking-widest transition-colors transform hover:-translate-x-2">
          <FaArrowLeft /> Abort Mission (Back)
        </Link>

        {/* Header Kartu - Miring */}
        <div className="bg-p5-red p-1 transform -skew-x-2 md:-skew-x-6 mb-8 shadow-[10px_10px_0px_rgba(0,0,0,1)]">
            <div className="bg-p5-black p-6 md:p-12 text-center border-4 border-p5-white/10">
                <div className="text-p5-yellow font-heading text-lg md:text-xl tracking-[0.3em] mb-2 animate-pulse">
                    CONFIDENTIAL FILE #{project.id}
                </div>
                <h1 className="font-heading text-4xl md:text-7xl uppercase text-p5-white mb-4 leading-none">
                    {project.title}
                </h1>
                <div className="inline-flex items-center gap-2 bg-p5-white text-p5-black px-4 py-1 font-bold transform skew-x-6 text-sm md:text-base">
                    <FaLock className="text-p5-red" /> Difficulty: {project.difficulty}
                </div>
            </div>
        </div>

        {/* Grid Konten */}
        <div className="grid md:grid-cols-3 gap-8">
            
            {/* Kolom Kiri: Deskripsi Detail */}
            <div className="md:col-span-2 bg-p5-white text-p5-black p-8 transform rotate-1 shadow-lg relative">
                {/* Efek selotip di pojok */}
                <div className="absolute -top-3 left-1/2 w-24 h-6 bg-p5-red/80 transform -rotate-2"></div>
                
                <h2 className="font-heading text-3xl mb-6 text-p5-red border-b-4 border-p5-black inline-block">
                    MISSION REPORT
                </h2>
                <p className="font-body text-lg leading-relaxed font-medium text-justify">
                    {project.fullDesc}
                </p>
            </div>

            {/* Kolom Kanan: Tech Stack & Link */}
            <div className="md:col-span-1 flex flex-col gap-6">
                
                {/* Tech Stack List */}
                <div className="bg-p5-black p-6 border-l-8 border-p5-yellow transform -rotate-1 shadow-md">
                    <h3 className="font-heading text-2xl text-p5-white mb-4 flex items-center gap-2">
                        <FaCode /> ARSENAL
                    </h3>
                    <ul className="space-y-2">
                        {project.tech.map((tech, idx) => (
                            <li key={idx} className="font-body text-p5-black bg-p5-gray/20 text-p5-white px-3 py-1 font-bold text-sm uppercase flex justify-between border-b border-gray-700">
                                {tech} <span className="text-p5-yellow">⚡</span>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* Tombol Aksi (Link) */}
                <div className="flex flex-col gap-3">
                    {project.demoLink && (
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" 
                           className="bg-p5-red text-white font-heading text-xl py-3 px-4 uppercase hover:bg-p5-yellow hover:text-black transition-colors shadow-[5px_5px_0px_white] text-center flex items-center justify-center gap-2 transform hover:-translate-y-1">
                           <FaExternalLinkAlt /> Launch Demo
                        </a>
                    )}
                    
                    {project.repoLink && (
                        <a href={project.repoLink} target="_blank" rel="noopener noreferrer" 
                           className="bg-p5-black text-white font-heading text-xl py-3 px-4 uppercase hover:bg-gray-800 transition-colors border-2 border-p5-white text-center flex items-center justify-center gap-2 transform hover:-translate-y-1">
                           <FaGithub /> Secret Code
                        </a>
                    )}
                </div>

            </div>

        </div>
        {/* Hanya muncul jika array gallery ada isinya */}
        {project.gallery && project.gallery.length > 0 && (
            <div className="w-full animate-in fade-in slide-in-from-bottom-10 duration-1000">
                <div className="flex items-center gap-4 mb-6">
                     <h2 className="font-heading text-4xl md:text-5xl text-p5-white bg-p5-black px-6 py-2 transform -skew-x-12 border-l-8 border-p5-red shadow-[5px_5px_0px_rgba(255,255,255,0.2)]">
                        VISUAL EVIDENCE
                    </h2>
                    <FaCamera className="text-3xl text-p5-gray opacity-50"/>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.gallery.map((image, index) => (
                        <div key={index} className="group relative">
                            {/* Frame Gambar */}
                            <div className="relative overflow-hidden border-4 border-p5-white bg-black shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:rotate-1 hover:border-p5-yellow hover:shadow-[10px_10px_0px_rgba(208,0,0,0.8)]">
                                {/* Gambar */}
                                {/* Gunakan tag img biasa agar mudah, bisa diganti Image Next.js jika mau */}
                                <img 
                                    src={image} 
                                    alt={`Evidence ${index + 1}`} 
                                    className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                />
                                
                                {/* Overlay Efek Scanline (Hiasan) */}
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 pointer-events-none bg-[length:100%_2px,3px_100%]"></div>
                            </div>
                            
                            {/* Label Angka */}
                            <div className="absolute -bottom-3 -right-3 bg-p5-red text-white font-heading px-3 py-1 text-xl border-2 border-black transform -rotate-6">
                                #{index + 1}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )}
      </div>
    </main>
  );
}