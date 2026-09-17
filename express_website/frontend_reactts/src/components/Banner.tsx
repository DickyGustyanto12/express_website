// src/components/Banner.tsx
import { useState, useEffect } from 'react';

// 1. Import semua gambar yang ingin dijadikan slideshow
import banner1 from '../assets/banner1.webp';
// import banner2 from '../assets/banner2.webp'; // Uncomment jika sudah ada
// import banner3 from '../assets/banner3.webp'; // Uncomment jika sudah ada

const Banner = () => {
  // Masukkan gambar-gambar ke dalam sebuah daftar (array)
  const slides = [
    banner1,
    // banner2, // Tambahkan di sini jika sudah ada filenya
    // banner3, // Tambahkan di sini jika sudah ada filenya
  ];

  // State untuk melacak gambar yang sedang aktif (dimulai dari urutan ke-0 / pertama)
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mengatur perpindahan gambar otomatis setiap 3 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // 3000 milidetik = 3 detik

    // Membersihkan timer saat komponen ditutup (praktik terbaik di React)
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[500px] md:h-[980px] overflow-hidden">
        
        {/* Menampilkan gambar sesuai urutan (currentIndex) dengan efek transisi */}
        {slides.map((slide, index) => (
          <img 
              key={index}
              src={slide} 
              alt={`Banner NSS Express ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100 z-0' : 'opacity-0 -z-10'
              }`}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-transparent z-10"></div>

        <div className="absolute inset-0 flex flex-col justify-center max-w-7xl mx-10 px-6 sm:px-10 lg:px-16 z-20 w-full">
            <div className="max-w-3xl animate-fade-in-up">
                <span className="inline-block py-2 px-3 rounded-sm bg-yellow-400 border border-blue-500/30 text-black text-sm font-semibold tracking-wider mb-6 backdrop-blur-sm">
                    #1 MITRA LOGISTIK ANDA
                </span>

                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
                   <span className="text-red-600">NSS</span> <span className="text-blue-600">EXPRESS</span>
                </h1>
               
                <p className="text-lg md:text-2xl text-slate-300 leading-relaxed mb-10 font-light max-w-2xl">
                    Solusi logistik dan distribusi terpercaya untuk menjangkau seluruh Nusantara. <strong className="text-white font-semibold">Cepat, aman, dan tepat waktu</strong> ke tangan pelanggan Anda.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-5">
                    <button className="cursor-pointer group rounded-sm flex items-center justify-center gap-2 bg-white text-slate-900 font-extrabold px-8 py-4 transition-all duration-300 hover:bg-yellow-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(250,204,21,0.4)]">
                        <span>Hubungi Kami</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Banner;