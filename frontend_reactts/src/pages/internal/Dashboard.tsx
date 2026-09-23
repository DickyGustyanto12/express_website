import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LogOut,
  LayoutDashboard,
  Mail,
  Truck,
  Image as ImageIcon,
  ChevronRight,
} from "lucide-react";
import Swal from "sweetalert2";
import Logo from "../../assets/logoexpress.webp";

const Dashboard = () => {
  const navigate = useNavigate();
  const [menuAktif, setMenuAktif] = useState("ringkasan");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    Swal.fire({
      title: "Berhasil Keluar",
      text: "Anda telah keluar dari panel internal.",
      icon: "success",
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
      color: "#31371fff",
      background: "#ffffff",
    }).then(() => {
      navigate("/internal");
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex">
      <aside className="w-72 bg-[#FFCC00] border-r border-yellow-400 p-5 flex flex-col justify-between hidden md:flex shadow-md">
        <div>
          {/* Header Brand */}
          <div className="flex items-center gap-3 px-2 py-3 mb-6 border-b border-yellow-400/80">
            <div className="bg-white p-1 rounded-sm shadow-xs border border-yellow-300 flex items-center justify-center">
              <img
                src={Logo}
                alt="Logo"
                className="h-12 w-auto object-contain"
              />
            </div>
            <div>
              <h2 className="font-extrabold text-gray-950 tracking-wide text-lg">
                Admin Panel
              </h2>
              <p className="text-[12px] text-gray-800 font-bold uppercase tracking-wider">
                NSS Express
              </p>
            </div>
          </div>

          {/* User Profile Mini */}
          <div className="mb-6 px-3.5 py-3 bg-white/80 border border-yellow-300 rounded-sm flex items-center gap-3 shadow-xs">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gray-950 text-[#FFCC00] font-extrabold flex items-center justify-center text-xs">
                AD
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-600 border-2 border-white rounded-full"></span>
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-extrabold text-gray-950 truncate">
                Administrator
              </p>
              <p className="text-xs text-gray-600 truncate">
                admin@nssexpress.com
              </p>
            </div>
          </div>

          {/* Navigasi Menu */}
          <nav className="space-y-3">
            <button
              onClick={() => setMenuAktif("ringkasan")}
              className={`w-full flex items-center justify-between px-4 py-4 rounded-sm text-base transition-all duration-300 ease-in-out cursor-pointer ${
                menuAktif === "ringkasan"
                  ? "bg-white text-gray-950 font-extrabold shadow-md border border-white translate-x-1"
                  : "text-gray-950 hover:bg-white/40 hover:translate-x-1 font-bold"
              }`}
            >
              <div className="flex items-center gap-3.5">
                <LayoutDashboard size={20} className="text-gray-950" />
                <span>Dashboard</span>
              </div>
              <ChevronRight
                size={18}
                className={`text-gray-950 transition-transform duration-300 ${menuAktif === "ringkasan" ? "rotate-90" : ""}`}
              />
            </button>

            <button
              onClick={() => setMenuAktif("pesan")}
              className={`w-full flex items-center justify-between px-4 py-4 rounded-sm text-base transition-all duration-300 ease-in-out cursor-pointer ${
                menuAktif === "pesan"
                  ? "bg-white text-gray-950 font-extrabold shadow-md border border-white translate-x-1"
                  : "text-gray-950 hover:bg-white/40 hover:translate-x-1 font-bold"
              }`}
            >
              <div className="flex items-center gap-3.5">
                <Mail size={20} className="text-gray-950" />
                <span>Pesan Masuk</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                </span>
                <ChevronRight size={18} className="text-gray-950" />
              </div>
            </button>

            <button
              onClick={() => setMenuAktif("ongkir")}
              className={`w-full flex items-center justify-between px-4 py-4 rounded-sm text-base transition-all duration-300 ease-in-out cursor-pointer ${
                menuAktif === "ongkir"
                  ? "bg-white text-gray-950 font-extrabold shadow-md border border-white translate-x-1"
                  : "text-gray-950 hover:bg-white/40 hover:translate-x-1 font-bold"
              }`}
            >
              <div className="flex items-center gap-3.5">
                <Truck size={20} className="text-gray-950" />
                <span>Tarif Ongkir</span>
              </div>
              <ChevronRight size={18} className="text-gray-950" />
            </button>

            <button
              onClick={() => setMenuAktif("carousel")}
              className={`w-full flex items-center justify-between px-4 py-4 rounded-sm text-base transition-all duration-300 ease-in-out cursor-pointer ${
                menuAktif === "carousel"
                  ? "bg-white text-gray-950 font-extrabold shadow-md border border-white translate-x-1"
                  : "text-gray-950 hover:bg-white/40 hover:translate-x-1 font-bold"
              }`}
            >
              <div className="flex items-center gap-3.5">
                <ImageIcon size={20} className="text-gray-950" />
                <span>Banner Carousel</span>
              </div>
              <ChevronRight size={18} className="text-gray-950" />
            </button>
          </nav>
        </div>

        {/* Tombol Logout Merah di Bawah */}
        <div className="pt-4 border-t border-yellow-400/80">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3.5 px-4 py-4 text-white bg-red-600 hover:bg-red-700 rounded-sm text-base font-extrabold transition-all duration-300 ease-in-out hover:translate-x-1 cursor-pointer w-full shadow-sm border border-red-500"
          >
            <LogOut size={20} className="rotate-180" />
            <span>Keluar Sistem</span>
          </button>
        </div>
      </aside>

      {/* Konten Utama */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Card Selamat Datang dengan Garis Warna di Atas */}
        <header className="flex justify-between items-center mb-8 bg-white p-6 rounded-sm shadow-sm border border-gray-200 border-t-4 border-t-[#FFCC00]">
          <div>
            <h1 className="text-2xl font-extrabold text-gray-900">
              Selamat Datang, Admin
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Berikut adalah ringkasan sistem operasional hari ini.
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="md:hidden flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-sm text-sm font-semibold shadow-md"
          >
            <LogOut size={16} className="rotate-180" /> Keluar
          </button>
        </header>

        {/* Kartu Statistik Atas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Card 1: Pesan Masuk */}
          <div className="bg-white p-6 rounded-sm border border-gray-200 border-t-4 border-t-yellow-400 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md cursor-pointer flex flex-col justify-between">
            <div className="bg-yellow-100 w-12 h-12 rounded-sm text-yellow-700 flex items-center justify-center mb-4">
              <Mail size={24} />
            </div>
            <div>
              <div className="text-sm text-gray-500 font-semibold mb-1">
                Pesan Masuk Hari Ini
              </div>
              <div className="text-3xl font-extrabold text-gray-900">
                12 Pesan
              </div>
            </div>
          </div>

          {/* Card 2: Tarif Ongkir */}
          <div className="bg-white p-6 rounded-sm border border-gray-200 border-t-4 border-t-blue-500 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md cursor-pointer flex flex-col justify-between">
            <div className="bg-blue-100 w-12 h-12 rounded-sm text-blue-700 flex items-center justify-center mb-4">
              <Truck size={24} />
            </div>
            <div>
              <div className="text-sm text-gray-500 font-semibold mb-1">
                Tarif Ongkir Terupdate
              </div>
              <div className="text-3xl font-extrabold text-gray-900">
                24 Kota
              </div>
            </div>
          </div>

          {/* Card 3: Banner Carousel */}
          <div className="bg-white p-6 rounded-sm border border-gray-200 border-t-4 border-t-green-500 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md cursor-pointer flex flex-col justify-between">
            <div className="bg-green-100 w-12 h-12 rounded-sm text-green-700 flex items-center justify-center mb-4">
              <ImageIcon size={24} />
            </div>
            <div>
              <div className="text-sm text-gray-500 font-semibold mb-1">
                Carousel Aktif
              </div>
              <div className="text-3xl font-extrabold text-gray-900">
                4 Banner
              </div>
            </div>
          </div>
        </div>

        {/* Bagian Bawah: Pesan & Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white border border-gray-200 border-t-4 border-t-yellow-400 rounded-sm p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Pesan Masuk Terbaru
            </h2>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-sm text-sm flex justify-between items-center transition-colors hover:bg-gray-100">
                <div>
                  <p className="font-semibold text-gray-900">Budi Santoso</p>
                  <p className="text-gray-500 text-xs">
                    Tanya jadwal pengiriman kargo...
                  </p>
                </div>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-sm">
                  Baru
                </span>
              </div>
              <div className="p-3 bg-gray-50 rounded-sm text-sm flex justify-between items-center transition-colors hover:bg-gray-100">
                <div>
                  <p className="font-semibold text-gray-900">Siti Rahma</p>
                  <p className="text-gray-500 text-xs">
                    Konfirmasi resi pengiriman...
                  </p>
                </div>
                <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-sm">
                  Dibaca
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 border-t-4 border-t-green-500 rounded-sm p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Update Carousel
            </h2>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-sm text-sm flex justify-between items-center transition-colors hover:bg-gray-100">
                <div>
                  <p className="font-semibold text-gray-900">
                    Banner Utama (Promo Diskon)
                  </p>
                  <p className="text-gray-500 text-xs">
                    Urutan ke-1 | Status: Tayang
                  </p>
                </div>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-sm">
                  Aktif
                </span>
              </div>
              <div className="p-3 bg-gray-50 rounded-sm text-sm flex justify-between items-center transition-colors hover:bg-gray-100">
                <div>
                  <p className="font-semibold text-gray-900">
                    Banner Layanan Same Day
                  </p>
                  <p className="text-gray-500 text-xs">
                    Urutan ke-2 | Status: Tayang
                  </p>
                </div>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-sm">
                  Aktif
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabel Ongkir */}
        <div className="bg-white border border-gray-200 border-t-4 border-t-blue-500 rounded-sm p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Tabel Harga Ongkos Kirim Terupdate
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-600">
              <thead className="bg-gray-50 text-gray-900 uppercase text-xs">
                <tr>
                  <th className="px-4 py-3 rounded-sm">Kota Asal</th>
                  <th className="px-4 py-3">Kota Tujuan</th>
                  <th className="px-4 py-3">Layanan</th>
                  <th className="px-4 py-3 rounded-sm">Tarif / Kg</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-3">Jakarta</td>
                  <td className="px-4 py-3">Semarang</td>
                  <td className="px-4 py-3">Reguler</td>
                  <td className="px-4 py-3 font-semibold text-gray-900">
                    Rp 12.000
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Jakarta</td>
                  <td className="px-4 py-3">Surabaya</td>
                  <td className="px-4 py-3">Express</td>
                  <td className="px-4 py-3 font-semibold text-gray-900">
                    Rp 18.000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
