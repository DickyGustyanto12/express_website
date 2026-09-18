import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const ContactUs = () => {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="bg-[#FFCC00] text-black font-bold py-1 px-3 rounded text-sm mb-4 inline-block">
            # HUBUNGI KAMI
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-2">
            Punya Pertanyaan atau Keluhan?
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Tim kami siap membantu Anda. Silakan hubungi kami melalui informasi di bawah atau isi formulir yang tersedia.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/3 space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="bg-[#FFCC00] p-3 rounded-lg">
                <MapPin className="text-black" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Alamat Kantor</h4>
                <p className="text-gray-600 mt-1">Jl. Logistik Nusantara No. 123, Jakarta, Indonesia</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-[#FFCC00] p-3 rounded-lg">
                <Phone className="text-black" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Telepon</h4>
                <p className="text-gray-600 mt-1">+62 812 3456 7890</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-[#FFCC00] p-3 rounded-lg">
                <Mail className="text-black" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Email</h4>
                <p className="text-gray-600 mt-1">info@nssexpress.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-2/3 bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-gray-700 font-semibold mb-2">Nama Lengkap</label>
                  <input 
                    type="text" 
                    className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFCC00] transition-colors bg-white" 
                    placeholder="Masukkan nama Anda" 
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-gray-700 font-semibold mb-2">Email</label>
                  <input 
                    type="email" 
                    className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFCC00] transition-colors bg-white" 
                    placeholder="Masukkan email Anda" 
                  />
                </div>
              </div>
              
              <div className="flex flex-col">
                <label className="text-gray-700 font-semibold mb-2">Subjek</label>
                <input 
                  type="text" 
                  className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFCC00] transition-colors bg-white" 
                  placeholder="Topik pesan Anda" 
                />
              </div>
              
              <div className="flex flex-col">
                <label className="text-gray-700 font-semibold mb-2">Pesan</label>
                <textarea 
                  rows={4} 
                  className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFCC00] transition-colors bg-white resize-none" 
                  placeholder="Tulis pesan Anda di sini..."
                />
              </div>
              
              <button 
                type="button" 
                className="bg-[#FFCC00] hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 w-full md:w-auto"
              >
                <Send size={20} />
                Kirim Pesan
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactUs;