import type { Metadata } from "next";
// Import font dari Google Fonts via Next.js
import { Anton, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

// Konfigurasi Font Heading (Keras/Tegas)
const anton = Anton({ 
  weight: "400", 
  subsets: ["latin"], 
  variable: "--font-anton" 
});

// Konfigurasi Font Body (Rapi/Padat)
const roboto = Roboto_Condensed({ 
  weight: ["300", "400", "700"],
  subsets: ["latin"], 
  variable: "--font-roboto" 
});

export const metadata: Metadata = {
  title: {
    default: "Hamid | The Phantom Developer",
    template: "%s | The Phantom Developer",
  },
  description: "Portofolio hamid yang berbasis di Bekasi.",
  keywords: ["Hamid", "Web Developer", "Fullstack", "Bekasi", "Laravel", "Flutter", "Persona 5 Portofolio", "Frontend", "Backend"],
  authors: [{ name: "Hamid" }],
  creator: "Hamid",
  openGraph: {
    title: "Hamid | The Phantom Developer",
    description: "Take Your Heart.",
    url: "https://hamid-msz.vercel.app", 
    siteName: "Hamid Portf",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamid | The Phantom Developer",
    description: "Web & Mobile Developer from Bekasi. Check out my arsenal.",
  },
  icons: {
    icon: "/icon", 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Gabungkan variabel font di body agar bisa dibaca Tailwind */}
      <body className={`${anton.variable} ${roboto.variable} bg-p5-gray text-p5-white overflow-x-hidden antialiased selection:bg-p5-red selection:text-p5-white`}>
        {/* Background Texture Global */}
        <div className="fixed inset-0 z-[-1] opacity-10 pointer-events-none" 
             style={{
               backgroundImage: 'radial-gradient(#555 1px, transparent 1px)', 
               backgroundSize: '20px 20px'
             }}>
        </div>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}