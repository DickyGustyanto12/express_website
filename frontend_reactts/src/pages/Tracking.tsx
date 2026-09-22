import { Search } from "lucide-react";
import { useState } from "react";


const Tracking = () => {
    const [kataKunci, setKataKunci] = useState("");


    return (
        <div className="bg-gray-50 text-center py-20">
            <span className="bg-[#FFCC00] text-black font-bold py-1 px-3 rounded text-sm mb-4 inline-block">
                # Lacak Paket
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-3">
                Lacak Paket Anda
            </h2>
            <p className="text-gray-600 mt-1">
                Masukkan nomor resi Anda untuk melacak paket Anda.
            </p>
            <div className="lg:max-w-xl mx-auto mt-8">
                <div className="flex w-full bg-white rounded-lg shadow-sm border border-gray-300 overflow-hidden focus-within:ring-2 focus-within:ring-black transition-all">
                    <div className="pl-4 flex items-center justify-center text-gray-400">
                        <Search size={20} />
                    </div>
                    <input
                        type="text"
                        value={kataKunci}
                        onChange={(e) => setKataKunci(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter'}
                        placeholder="Masukkan nomor AWB"
                        className="w-full px-4 py-4 focus:outline-none text-gray-700"
                    />
                    <button
                        className="bg-black hover:bg-gray-800 text-white px-8 py-4 transition-colors cursor-pointer"
                    >
                        Cari
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Tracking;