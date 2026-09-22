import { useState } from "react";
import { Search } from "lucide-react";

const CekOngkir = () => {
    const [kataKunci, setKataKunci] = useState("");
    return (



        <div className="bg-black text-center py-20">
            {/* <div className="card-lg min-w-fit p-10 rounded-sm bg-white shadow-sm mx-auto text-center w-42">
                <figure>
                    <img
                        src=""
                        alt="" />
                </figure>
                <div className="card-body text-center">
                    <p className="font-bold text-4xl text-black">Cek Ongkos Kirim</p>
                    <p className="text-black">Masukkan Kota asal dan Kota tujuan pengiriman anda.</p>
                </div>
                <label className="input rounded-sm bg-white border border-black text-black">
                    <svg className="h-[1em] opacity-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="black"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search" />
                </label>
            </div>*/}
            <span className="bg-[#FFCC00] text-black font-bold py-1 px-3 rounded text-sm mb-4 inline-block">
                # Cek Ongkir
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-2 mb-3">
                Cek Biaya Ongkos Kirim Paket
            </h2>
            <p className="text-white mt-1">
                Masukkan Kota asal dan Kota tujuan pengiriman anda.
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
                        className="bg-yellow-400 hover:bg-gray-800 text-black px-8 py-4 transition-colors cursor-pointer"
                    >
                        Cari
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CekOngkir;