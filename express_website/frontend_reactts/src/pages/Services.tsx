import { motion } from 'framer-motion';
import { Package, Clock, Truck } from 'lucide-react';

const Services = () => {
  const daftarLayanan = [
    {
      id: 1,
      judul: "Layanan Reguler",
      deskripsi: "Pengiriman standar dengan harga terjangkau ke seluruh pelosok Nusantara. Cocok untuk kebutuhan sehari-hari.",
      ikon: <Package size={48} className="text-[#FFCC00] mb-4" />
    },
    {
      id: 2,
      judul: "Same Day Service",
      deskripsi: "Barang sampai di hari yang sama. Solusi cepat, aman, dan tepat waktu ke tangan pelanggan Anda.",
      ikon: <Clock size={48} className="text-[#FFCC00] mb-4" />
    },
    {
      id: 3,
      judul: "Kargo & Distribusi",
      deskripsi: "Solusi pengiriman barang dalam jumlah atau ukuran besar dengan armada truk kami yang tangguh.",
      ikon: <Truck size={48} className="text-[#FFCC00] mb-4" />
    }
  ];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="bg-[#FFCC00] text-black font-bold py-1 px-3 rounded text-sm mb-4 inline-block">
            # PILIHAN LAYANAN KAMI
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-2">
            Solusi Logistik & Distribusi
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Kami menyediakan berbagai pilihan pengiriman yang cepat, aman, dan dapat diandalkan untuk menunjang bisnis Anda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {daftarLayanan.map((layanan, index) => (
            <motion.div 
              key={layanan.id} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#FFCC00] cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {layanan.ikon}
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {layanan.judul}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {layanan.deskripsi}
              </p>
              
              <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded transition-colors duration-300 text-sm w-full">
                Lihat Detail
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;