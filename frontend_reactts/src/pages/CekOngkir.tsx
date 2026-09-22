import { useState } from "react";
import {
  Search,
  Container,
  MapPinned,
  MapPinCheck,
  BanknoteCheck,
} from "lucide-react";

const CekOngkir = () => {
  const [berat, setBerat] = useState("");
  const [kotaAsal, setKotaAsal] = useState("");
  const [kotaTujuan, setKotaTujuan] = useState("");
  return (
    <div className="bg-black py-20">
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
      <div className="text-left md:text-center">
        <span className="bg-[#FFCC00] text-black font-bold py-1 px-3 rounded text-sm mb-4 inline-block">
          # Cek Ongkir
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-2 mb-3">
          Cek Biaya Ongkos Kirim Paket
        </h2>
        <p className="text-white mt-1">
          Masukkan Kota asal dan Kota tujuan pengiriman anda.
        </p>
      </div>

      <div className="flex-col lg:flex lg:flex-row mt-8 mb-1 space-y-10 justify-center">
        <div className="md:pr-15">
          <p className="mb-2">Berat Barang :</p>
          <div className="flex">
            <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-2 py-4 transition-colors cursor-pointer rounded-l-sm">
              <Container />
            </button>
            <input
              type="text"
              value={berat}
              onChange={(e) => setBerat(e.target.value)}
              onKeyDown={(e) => e.key === "Enter"}
              placeholder="Berat (Kg)"
              className="w-26 px-4 py-4 focus:outline-none text-gray-700 bg-white  rounded-r-sm"
            />
          </div>
        </div>
        <div className="">
          <p className="mb-2">Kota Asal Pengiriman :</p>
          <div className="flex">
            <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-2 py-4 transition-colors cursor-pointer rounded-l-sm">
              <MapPinned />
            </button>
            <input
              type="text"
              value={kotaAsal}
              onChange={(e) => setKotaAsal(e.target.value)}
              onKeyDown={(e) => e.key === "Enter"}
              placeholder="Kota Asal Pengiriman "
              className="w-46 px-4 py-4 focus:outline-none text-gray-700 bg-white  rounded-r-sm"
            />
          </div>
        </div>
        <div className="md:px-10">
          <p className="mb-2">Kota Tujuan :</p>
          <div className="flex">
            <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-2 py-4 transition-colors cursor-pointer rounded-l-sm">
              <MapPinCheck />
            </button>
            <input
              type="text"
              value={kotaTujuan}
              onChange={(e) => setKotaTujuan(e.target.value)}
              onKeyDown={(e) => e.key === "Enter"}
              placeholder="Kota Tujuan"
              className="w-46 px-4 py-4 focus:outline-none text-gray-700 bg-white  rounded-r-sm"
            />
          </div>
        </div>
      </div>
      <div className="flex md:justify-center mt-10 md:mt-1 w-full">
        <button className="w-full justify-center bg-yellow-400 text-black px-15 py-2 rounded-sm font-medium cursor-pointer hover:bg-yellow-300 md:text-lg flex">
          <div className="mr-2">
            <BanknoteCheck />
          </div>
          CEK ONGKIR
        </button>
      </div>
    </div>
  );
};

export default CekOngkir;
