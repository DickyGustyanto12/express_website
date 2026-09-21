import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, ExternalLink } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const penandaKuning = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = penandaKuning;

interface TipeCabang {
  id: number;
  kota: string;
  lat: number;
  lng: number;
  alamat: string;
}

const PengaturTampilanPeta = ({ lat, lng }: { lat: number; lng: number }) => {
  const peta = useMap();
  peta.setView([lat, lng], 13);
  return null;
};

const Cabang = () => {
  const [cabangTerpilih, setCabangTerpilih] = useState<TipeCabang | null>(null);
  const [kataKunci, setKataKunci] = useState("");

  const titikTengahPeta: [number, number] = [-2.5489, 118.0149];

  const daftarCabang: TipeCabang[] = [
    {
      id: 1,
      kota: "Jakarta",
      lat: -6.2088,
      lng: 106.8456,
      alamat: "Jl. Logistik Nusantara No. 123, Jakarta Pusat"
    },
    {
      id: 2,
      kota: "Semarang",
      lat: -6.9932,
      lng: 110.4203,
      alamat: "Jl. Pemuda No. 45, Semarang Tengah"
    },
    {
      id: 3,
      kota: "Surabaya",
      lat: -7.2504,
      lng: 112.7688,
      alamat: "Jl. Pahlawan No. 88, Surabaya Kota"
    }
  ];

  const tanganiPencarian = () => {
    if (!kataKunci.trim()) return;

    const hasilPencarian = daftarCabang.find((cabang) => 
      cabang.kota.toLowerCase().includes(kataKunci.toLowerCase()) || 
      cabang.alamat.toLowerCase().includes(kataKunci.toLowerCase())
    );

    if (hasilPencarian) {
      setCabangTerpilih(hasilPencarian);
    } else {
      alert("Maaf, cabang tidak ditemukan.");
    }
  };

  return (
    <section id="alamat" className="py-20 bg-gray-50 overflow-hidden border-t border-gray-200 mx-10 lg:mx-0 scroll-mt-24">
      <div className="container px-10 md:px-10 max-w-full lg:px-45">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-5/12 space-y-8 z-10 lg:sticky lg:top-24"
          >
            <div className="text-center lg:text-left">
              <span className="bg-[#FFCC00] text-black font-bold py-1 px-3 rounded text-sm mb-4 inline-block">
                # LOKASI CABANG
              </span>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                Temukan Cabang NSS Express Terdekat
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed text-justify lg:text-left">
                Pilih atau cari cabang pada peta untuk melihat detail lokasi operasional kami.
              </p>
            </div>

            <div className="flex w-full bg-white rounded-lg shadow-sm border border-gray-300 overflow-hidden focus-within:ring-2 focus-within:ring-black transition-all">
              <div className="pl-4 flex items-center justify-center text-gray-400">
                <Search size={20} />
              </div>
              <input
                type="text"
                value={kataKunci}
                onChange={(e) => setKataKunci(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && tanganiPencarian()}
                placeholder="Masukkan kota atau kecamatan"
                className="w-full px-4 py-4 focus:outline-none text-gray-700"
              />
              <button 
                onClick={tanganiPencarian}
                className="bg-black hover:bg-gray-800 text-white font-bold px-8 py-4 transition-colors"
              >
                Cari
              </button>
            </div>

            {cabangTerpilih && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white border-t-4 border-[#FFCC00] p-6 rounded-xl shadow-md flex flex-col gap-4 text-center lg:text-left lg:max-w-md lg:h-fit"
              >
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3">
                  <div className="bg-black p-2 rounded-full mt-1">
                    <MapPin size={20} className="text-[#FFCC00]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">NSS Express {cabangTerpilih.kota}</h3>
                    <p className="text-gray-600 leading-relaxed text-justify lg:text-left">{cabangTerpilih.alamat}</p>
                  </div>
                </div>
                
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${cabangTerpilih.lat},${cabangTerpilih.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#FFCC00] hover:bg-yellow-500 text-black font-bold py-3 px-4 rounded-lg transition-colors duration-300 text-sm mt-2"
                >
                  <ExternalLink size={18} />
                  Buka Rute di Google Maps
                </a>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-7/12 h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl border-4 border-gray-100 relative z-0"
          >
            <MapContainer 
              center={titikTengahPeta} 
              zoom={5} 
              scrollWheelZoom={true}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              
              {cabangTerpilih && (
                <PengaturTampilanPeta lat={cabangTerpilih.lat} lng={cabangTerpilih.lng} />
              )}

              {daftarCabang.map((cabang) => (
                <Marker 
                  key={cabang.id} 
                  position={[cabang.lat, cabang.lng]}
                  eventHandlers={{
                    click: () => setCabangTerpilih(cabang)
                  }}
                >
                  <Popup>
                    <div className="font-bold text-gray-900">{cabang.kota}</div>
                    <div className="text-gray-600 text-xs mt-1">Klik penanda untuk melihat detail</div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Cabang;