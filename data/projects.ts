export const projects = [
  { 
    id: 1, 
    title: "SERVICE BOOKING APP", 
    category: "Fullstack", 
    difficulty: "85%", 
    desc: "Platform penjadwalan layanan AC berbasis web dengan notifikasi otomatis.",
    fullDesc: "Aplikasi web komprehensif yang dirancang untuk modernisasi sistem pemesanan layanan AC. Dibangun menggunakan Laravel (PHP) yang menjamin keamanan dan performa. Fitur utamanya mencakup manajemen jadwal tingkat lanjut untuk menghindari bentrok pesanan, serta sistem notifikasi otomatis (Event-Driven) yang memberitahu teknisi dan pelanggan secara realtime, meningkatkan efisiensi operasional bisnis secara signifikan.",
    tech: ["Laravel", "MySQL", "JavaScript", "Bootstrap", "PHP"],
    repoLink: "/maintenance",
    demoLink: "/maintenance",
    gallery: [
        "/project-images/p1-1.png",
        "/project-images/p1-2.png",
        "/project-images/p1-3.png"
    ]
  },
  { 
    id: 2, 
    title: "AI CHAT MOBILE", 
    category: "Mobile & AI", 
    difficulty: "90%", 
    desc: "Aplikasi chat real-time dengan integrasi kecerdasan buatan Gemini AI.",
    fullDesc: "Aplikasi komunikasi seluler mutakhir yang menggabungkan kecepatan Flutter dengan keandalan Firebase untuk pesan real-time. Nilai jual utamanya adalah integrasi Gemini AI Chatbot, menciptakan pengalaman pengguna yang cerdas dan interaktif. User tidak hanya bisa chatting dengan manusia, tapi juga mendapatkan asisten virtual yang responsif dalam satu genggaman.",
    tech: ["Flutter", "Firebase", "Gemini AI API", "Dart"],
    repoLink: "/maintenance",
    demoLink: "/maintenance",
    gallery: [] 
  },
  { 
    id: 3, 
    title: "INVENTORY SYSTEM", 
    category: "Fullstack", 
    difficulty: "70%", 
    desc: "Sistem monitoring stok gudang dengan pelaporan PDF otomatis.",
    fullDesc: "Solusi manajemen inventaris yang dibangun untuk akurasi data gudang. Menggunakan PHP dan MySQL untuk menangani operasi CRUD (Create, Read, Update, Delete) yang kompleks dengan cepat. Dilengkapi fitur unggulan berupa 'Automated PDF Reporting', memungkinkan manajer gudang mengunduh laporan stok mingguan/bulanan secara instan untuk keperluan audit dan analisa bisnis.",
    tech: ["PHP", "MySQL", "HTML/CSS", "JavaScript", "PDF Generator"],
    repoLink: "/maintenance",
    demoLink: "/maintenance",
    gallery: [
        "/project-images/p3-1.png",
        "/project-images/p3-2.png",
        "/project-images/p3-3.png"
    ] 
  },
    { 
    id: 4, 
    title: "Smart Finance Tracker", 
    category: "Fullstack (MERN)", 
    difficulty: "90%", 
    desc: "Platform manajemen keuangan dengan sistem Multi-Pocketing dan visualisasi analitik data.",
    fullDesc: "Aplikasi keuangan holistik yang dirancang untuk memecahkan masalah tercampurnya dana pribadi dan operasional melalui fitur 'Virtual Pocketing'. Dibangun menggunakan arsitektur MERN Stack yang modern, aplikasi ini mengimplementasikan 'Smart Ledger' untuk sinkronisasi saldo otomatis antar-dompet secara real-time. Dilengkapi dengan visualisasi data interaktif menggunakan Recharts untuk memantau tren pengeluaran, fitur ekspor laporan ke Excel (CSV), serta sistem keamanan autentikasi berbasis JWT (JSON Web Token) yang terenkripsi.",
    tech: ["MongoDB", "Express.js", "React (Vite)", "Node.js", "Tailwind CSS", "Recharts", "JWT Auth"],
    repoLink: "https://github.com/SerwinSan/finance-tracker-mern",
    demoLink: "https://finance-tracker-mern-azure.vercel.app/",
    gallery: [
        "/project-images/p4-1.png",
        "/project-images/p4-2.png",
        "/project-images/p4-3.png"
    ] 
  },
];