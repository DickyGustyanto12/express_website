import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import petaindonesia from '../assets/petaindonesia.webp';

const Cabang = () => {
  const daftarCabang = [
    {
      id: 1,
      kota: "Jakarta",
      alamat: "Jl. Logistik Nusantara No. 123, Jakarta Pusat, DKI Jakarta"
    },
    {
      id: 2,
      kota: "Semarang",
      alamat: "Jl. Pemuda No. 45, Semarang Tengah, Jawa Tengah"
    },
    {
      id: 3,
      kota: "Surabaya",
      alamat: "Jl. Pahlawan No. 88, Surabaya Kota, Jawa Timur"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden text-gray-900 border-t border-gray-200">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="bg-[#FFCC00] text-black font-bold py-1 px-3 rounded text-sm mb-4 inline-block">
            # JARINGAN KAMI
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-2">
            Terhubung di Kota-Kota Besar
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Temukan titik layanan operasional kami di berbagai wilayah strategis untuk memudahkan pengiriman barang Anda.
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-16">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full flex justify-center items-center"
          >
            <img 
              src={petaindonesia}
              alt="Peta Jaringan Indonesia" 
              className="w-full h-auto max-w-4xl drop-shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {daftarCabang.map((cabang, index) => (
              <motion.div 
                key={cabang.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-[#FFCC00] hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center gap-3"
              >
                <div className="bg-gray-100 p-2 rounded-full mt-1">
                  <MapPin size={20} className="text-[#FFCC00]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{cabang.kota}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{cabang.alamat}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Cabang;