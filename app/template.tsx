'use client';
import { motion } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      // Keadaan awal (sebelum halaman muncul)
      initial={{ y: 50, opacity: 0 }}
      
      // Keadaan akhir (saat halaman tampil)
      animate={{ y: 0, opacity: 1 }}
      
      // Pengaturan durasi dan kelenturan animasi
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
      
      className="w-full"
    >
      {children}
    </motion.div>
  );
}