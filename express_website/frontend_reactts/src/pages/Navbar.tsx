// src/components/Navbar.tsx
import { useState } from 'react';
import logoexpress from '../assets/logoexpress.webp';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#ffe30e]/95 backdrop-blur-md text-gray-900 shadow-sm transition-all duration-300">
      <div className=" mx-10 px-6 sm:px-10 lg:px-16">
        <div className="flex justify-between items-center h-20">
          
          <div className="shrink-0 cursor-pointer flex items-center hover:scale-105 transition-transform duration-300">
            <img 
              src={logoexpress} 
              alt="Logo NSS Express" 
              className="h-30 w-auto object-contain drop-shadow-sm"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8 font-bold text-[16px] tracking-wide">
            <a href="#" className="group relative hover:text-blue-700 transition duration-300 py-2">
              BERANDA
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
            </a>

            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="cursor-pointer flex items-center gap-1 group relative hover:text-blue-700 transition duration-300 py-2 focus:outline-none">
                <span>LAYANAN</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
                </svg>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fade-in-up">
                  <a 
                    href="#reguler" 
                    className="block px-4 py-2.5 text-[16px] font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                  >
                    REGULER
                  </a>
                  <a 
                    href="#next" 
                    className="block px-4 py-2.5 text-[16px] font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                  >
                    NEXT
                  </a>
                </div>
              )}
            </div>

            <a href="#" className="group relative hover:text-blue-700 transition duration-300 py-2">
              KONTAK KAMI
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="group relative hover:text-blue-700 transition duration-300 py-2">
              ALAMAT
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button className="p-2 text-gray-900 hover:text-red-600 focus:outline-none bg-white/20 rounded-lg backdrop-blur-sm transition-colors">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;