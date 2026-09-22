import { useNavigate } from "react-router-dom";
import {
  LogOut,
  LayoutDashboard,
  Package,
  Users,
  TrendingUp,
} from "lucide-react";
import Swal from "sweetalert2";

const Dashboard = () => {
  const navigate = useNavigate();

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
      <aside className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col justify-between hidden md:flex shadow-sm">
        <div>
          <div className="text-xl font-extrabold text-gray-900 mb-8 flex items-center gap-2">
            <span className="bg-[#FFCC00] px-2 py-1 rounded-lg text-sm text-gray-950">
              NSS
            </span>{" "}
            Dashboard
          </div>
          <nav className="space-y-2">
            <div className="flex items-center gap-3 px-4 py-3 bg-yellow-50 border-l-4 border-[#FFCC00] rounded-xl text-sm font-bold text-gray-900">
              <LayoutDashboard size={18} className="text-yellow-600" />
              <span>Ringkasan</span>
            </div>
          </nav>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl text-sm font-semibold transition-colors cursor-pointer w-full"
        >
          <LogOut size={18} />
          <span>Keluar</span>
        </button>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
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
            className="md:hidden flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-md"
          >
            <LogOut size={16} /> Keluar
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-4">
            <div className="bg-yellow-100 p-4 rounded-xl text-yellow-700">
              <Package size={24} />
            </div>
            <div>
              <div className="text-sm text-gray-500 font-semibold">
                Total Pengiriman
              </div>
              <div className="text-2xl font-extrabold text-gray-900">1,482</div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-4">
            <div className="bg-blue-100 p-4 rounded-xl text-blue-700">
              <Users size={24} />
            </div>
            <div>
              <div className="text-sm text-gray-500 font-semibold">
                Kurir Aktif
              </div>
              <div className="text-2xl font-extrabold text-gray-900">
                38 Orang
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-4">
            <div className="bg-green-100 p-4 rounded-xl text-green-700">
              <TrendingUp size={24} />
            </div>
            <div>
              <div className="text-sm text-gray-500 font-semibold">
                Tingkat Keberhasilan
              </div>
              <div className="text-2xl font-extrabold text-gray-900">99.4%</div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-2">
            Status Sistem
          </h2>
          <p className="text-gray-600 text-sm">
            Panel internal berjalan dengan lancar, aman, dan seluruh layanan
            terhubung secara real-time.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
