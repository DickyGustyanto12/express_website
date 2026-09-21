import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, ArrowLeft, ExternalLink, Phone } from 'lucide-react';

interface PesanChat {
  id: number;
  pengirim: 'admin' | 'user';
  teks: string;
  waktu: string;
}

interface ChatWidgetProps {
  bukaChat?: boolean;
  setBukaChat?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChatWidget = ({ bukaChat: externalBukaChat, setBukaChat: externalSetBukaChat }: ChatWidgetProps = {}) => {
  const [internalBukaChat, setInternalBukaChat] = useState(false);

  const bukaChat = externalBukaChat !== undefined ? externalBukaChat : internalBukaChat;
  const setBukaChat = externalSetBukaChat || setInternalBukaChat;
  const [sudahMulai, setSudahMulai] = useState(false);

  const [nama, setNama] = useState('');
  const [nomorHp, setNomorHp] = useState('');
  const [pesanInput, setPesanInput] = useState('');

  const [daftarPesan, setDaftarPesan] = useState<PesanChat[]>([]);

  const dapatkanWaktuSekarang = () => {
    const d = new Date();
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleMulaiChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nama.trim() || !nomorHp.trim()) {
      alert("Harap lengkapi nama dan nomor WhatsApp Anda terlebih dahulu.");
      return;
    }

    setSudahMulai(true);
    setDaftarPesan([
      {
        id: 1,
        pengirim: 'admin',
        teks: `Halo Kak ${nama}! Selamat datang di NSS Express. Senang bisa terhubung. Ada yang bisa kami bantu hari ini?`,
        waktu: dapatkanWaktuSekarang()
      }
    ]);
  };

  const handleKirimPesan = (teksManual?: string) => {
    const teksKirim = teksManual || pesanInput;
    if (!teksKirim.trim()) return;

    const pesanBaruUser: PesanChat = {
      id: Date.now(),
      pengirim: 'user',
      teks: teksKirim,
      waktu: dapatkanWaktuSekarang()
    };

    setDaftarPesan((prev) => [...prev, pesanBaruUser]);
    setPesanInput('');

    setTimeout(() => {
      let balasan = `Terima kasih Kak ${nama}. Pertanyaan Kakak telah kami catat. Tim support kami akan segera menindaklanjuti ke nomor ${nomorHp}.`;

      if (teksKirim.toLowerCase().includes('lacak') || teksKirim.toLowerCase().includes('resi')) {
        balasan = "Untuk melacak paket, Kakak dapat memasukkan nomor resi pengiriman melalui menu Pelacakan kami atau informasikan nomor resinya ke CS WhatsApp kami.";
      } else if (teksKirim.toLowerCase().includes('ongkir') || teksKirim.toLowerCase().includes('tarif')) {
        balasan = "Tarif kami sangat bersaing mulai dari layanan Reguler hingga Same Day Service. Silakan tanyakan rute tujuan spesifik ke WhatsApp CS kami ya!";
      } else if (teksKirim.toLowerCase().includes('cabang') || teksKirim.toLowerCase().includes('lokasi')) {
        balasan = "NSS Express memiliki lebih dari 50 cabang di seluruh Indonesia. Kakak bisa melihat peta cabang pada bagian 'Lokasi Cabang' di halaman web ini.";
      }

      const pesanBaruAdmin: PesanChat = {
        id: Date.now() + 1,
        pengirim: 'admin',
        teks: balasan,
        waktu: dapatkanWaktuSekarang()
      };
      setDaftarPesan((prev) => [...prev, pesanBaruAdmin]);
    }, 600);
  };

  const handleBukaWhatsAppLangsung = () => {
    const teksWA = encodeURIComponent(
      `Halo NSS Express, saya ${nama || 'Pelanggan'} (${nomorHp || '-'}). Saya ingin bertanya informasi pengiriman.`
    );
    window.open(`https://wa.me/6281234567890?text=${teksWA}`, '_blank');
  };

  return (
    <aside aria-label="Live Chat Support" className="fixed bottom-10 md:bottom-28 right-6 md:right-8 z-50 flex flex-col items-end">
      <AnimatePresence>
        {bukaChat && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.92 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="w-[90vw] sm:w-[380px] max-w-[390px] bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-[#FFCC00] mb-4 flex flex-col"
            style={{ maxHeight: 'calc(100vh - 140px)' }}
          >
            <div className="bg-[#FFCC00] text-black px-5 py-4 flex items-center justify-between shadow-sm border-b border-yellow-400">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-11 h-11 rounded-full bg-black text-[#FFCC00] flex items-center justify-center shadow-sm">
                    <Phone size={20} />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#FFCC00] rounded-full"></span>
                </div>
                <div>
                  <h4 className="font-extrabold text-base leading-tight text-black flex items-center gap-1.5">
                    Customer Service
                  </h4>
                  <p className="text-xs text-black font-bold mt-0.5">
                    Siap membantu
                  </p>
                </div>
              </div>

              <button
                type="button"
                aria-label="Tutup jendela chat"
                onClick={() => setBukaChat(false)}
                className="text-black hover:bg-yellow-400 p-1.5 rounded-lg transition-colors cursor-pointer"
              >
                <X size={20} strokeWidth={2.5} />
              </button>
            </div>

            {!sudahMulai ? (
              <div className="p-6 bg-white overflow-y-auto">
                <div className="w-12 h-12 bg-[#FFCC00] text-gray-950 rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <MessageSquare size={24} className="text-gray-950" />
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-extrabold text-gray-900">
                    Halo!
                  </h3>
                  <span className="bg-[#FFCC00] text-black text-[10px] font-bold px-2 py-0.5 rounded-full">
                    ONLINE
                  </span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Silakan isi nama dan nomor HP/WhatsApp terlebih dahulu. Setelah masuk, Kakak dapat memilih pertanyaan yang tersedia atau mengetik pertanyaan sendiri.
                </p>

                <form onSubmit={handleMulaiChat} className="space-y-4">
                  <div>
                    <label htmlFor="chat-input-nama" className="block text-xs font-bold text-gray-800 mb-1.5">
                      Nama
                    </label>
                    <input
                      id="chat-input-nama"
                      type="text"
                      required
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                      placeholder="Nama Anda"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFCC00] focus:border-[#FFCC00] transition-all placeholder:text-gray-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="chat-input-nohp" className="block text-xs font-bold text-gray-800 mb-1.5">
                      Nomor HP / WhatsApp
                    </label>
                    <input
                      id="chat-input-nohp"
                      type="tel"
                      required
                      value={nomorHp}
                      onChange={(e) => setNomorHp(e.target.value)}
                      placeholder="08xxxxxxxxxx"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFCC00] focus:border-[#FFCC00] transition-all placeholder:text-gray-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#FFCC00] hover:bg-yellow-400 text-gray-950 font-extrabold py-3 px-4 rounded-xl text-sm transition-all duration-200 shadow-md cursor-pointer mt-2 active:scale-[0.99] flex items-center justify-center gap-2"
                  >
                    <span>Mulai Chat</span>
                  </button>

                  <p className="text-[11px] text-gray-400 text-center pt-1">
                    Data digunakan untuk membantu tindak lanjut percakapan Anda.
                  </p>
                </form>
              </div>
            ) : (
              <div className="flex flex-col h-[420px] bg-slate-50">
                <div className="px-4 py-2 bg-yellow-100 border-b border-yellow-200 flex items-center justify-between text-xs text-gray-800">
                  <button
                    onClick={() => setSudahMulai(false)}
                    className="flex items-center gap-1 hover:text-yellow-800 transition-colors cursor-pointer font-semibold"
                  >
                    <ArrowLeft size={14} /> Ganti Data ({nama})
                  </button>
                  <button
                    onClick={handleBukaWhatsAppLangsung}
                    className="flex items-center gap-1 text-emerald-800 hover:text-emerald-900 font-semibold cursor-pointer"
                  >
                    Buka WA <ExternalLink size={12} />
                  </button>
                </div>

                <div className="flex-1 p-4 overflow-y-auto space-y-3">
                  {daftarPesan.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${
                        msg.pengirim === 'user' ? 'items-end' : 'items-start'
                      }`}
                    >
                      <div
                        className={`max-w-[82%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                          msg.pengirim === 'user'
                            ? 'bg-[#FFCC00] text-gray-950 font-medium rounded-br-none'
                            : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
                        }`}
                      >
                        {msg.teks}
                      </div>
                      <span className="text-[10px] text-gray-400 mt-1 px-1">
                        {msg.waktu}
                      </span>
                    </div>
                  ))}

                  <div className="pt-2">
                    <p className="text-[11px] font-semibold text-gray-500 mb-2">
                      Pilihan pertanyaan cepat:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      <button
                        onClick={() => handleKirimPesan("Bagaimana cara melacak paket saya?")}
                        className="bg-white hover:bg-yellow-100 hover:border-[#FFCC00] border border-gray-300 text-gray-700 text-xs px-2.5 py-1.5 rounded-full transition-colors cursor-pointer text-left"
                      >
                        📦 Lacak Paket
                      </button>
                      <button
                        onClick={() => handleKirimPesan("Berapa tarif ongkos kirim NSS Express?")}
                        className="bg-white hover:bg-yellow-100 hover:border-[#FFCC00] border border-gray-300 text-gray-700 text-xs px-2.5 py-1.5 rounded-full transition-colors cursor-pointer text-left"
                      >
                        💰 Cek Ongkir
                      </button>
                      <button
                        onClick={() => handleKirimPesan("Di mana saja lokasi cabang terdekat?")}
                        className="bg-white hover:bg-yellow-100 hover:border-[#FFCC00] border border-gray-300 text-gray-700 text-xs px-2.5 py-1.5 rounded-full transition-colors cursor-pointer text-left"
                      >
                        📍 Lokasi Cabang
                      </button>
                      <button
                        onClick={handleBukaWhatsAppLangsung}
                        className="bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 text-emerald-900 text-xs px-2.5 py-1.5 rounded-full transition-colors cursor-pointer text-left font-medium"
                      >
                        💬 Lanjut ke WhatsApp
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-white border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={pesanInput}
                      onChange={(e) => setPesanInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleKirimPesan()}
                      placeholder="Ketik pesan Anda..."
                      className="flex-1 px-3.5 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FFCC00] focus:border-[#FFCC00] text-gray-800 placeholder:text-gray-400"
                    />
                    <button
                      onClick={() => handleKirimPesan()}
                      className="bg-[#FFCC00] hover:bg-yellow-400 text-gray-950 p-2.5 rounded-xl transition-colors cursor-pointer flex items-center justify-center shrink-0 shadow-sm"
                    >
                      <Send size={16} />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setBukaChat(!bukaChat)}
        className="bg-white hover:bg-yellow-100 shadow-xl border-2 border-[#FFCC00] rounded-full py-2 px-4 flex items-center gap-3 cursor-pointer transition-colors duration-200"
      >
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-[#FFCC00] text-black flex items-center justify-center shadow-sm">
            <Phone size={18} />
          </div>
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></span>
        </div>

        <div className="text-left">
          <h4 className="font-extrabold text-gray-900 text-sm leading-tight">
            Customer Service
          </h4>
          <p className="text-[11px] text-gray-600 leading-tight">
            Siap membantu
          </p>
        </div>
      </motion.button>
    </aside>
  );
};

export default ChatWidget;
