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
            className="w-[90vw] sm:w-[340px] max-w-[360px] bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-[#FFCC00] mb-4 flex flex-col"
            style={{ maxHeight: 'calc(100vh - 140px)' }}
          >
            <div className="bg-[#FFCC00] text-black px-4 py-3.5 flex items-center justify-between shadow-sm border-b border-yellow-400">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-black text-[#FFCC00] flex items-center justify-center shadow-sm">
                    <Phone size={18} />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#FFCC00] rounded-full"></span>
                </div>
                <div>
                  <h4 className="font-extrabold text-sm leading-tight text-black flex items-center gap-1.5">
                    Customer Service
                  </h4>
                  <p className="text-[11px] text-black font-bold mt-0.5">
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
                <X size={18} strokeWidth={2.5} />
              </button>
            </div>

            {!sudahMulai ? (
              <div className="p-5 bg-white overflow-y-auto">
                <div className="w-10 h-10 bg-[#FFCC00] text-gray-950 rounded-full flex items-center justify-center mb-3 shadow-sm">
                  <MessageSquare size={20} className="text-gray-950" />
                </div>

                <div className="flex items-center gap-2 mb-1.5">
                  <h3 className="text-xl font-extrabold text-gray-900">
                    Halo!
                  </h3>
                  <span className="bg-[#FFCC00] text-black text-[10px] font-bold px-2 py-0.5 rounded-full">
                    ONLINE
                  </span>
                </div>

                <p className="text-gray-600 text-xs leading-relaxed mb-4">
                  Silakan isi nama dan nomor HP/WhatsApp terlebih dahulu untuk mulai terhubung dengan CS kami.
                </p>

                <form onSubmit={handleMulaiChat} className="space-y-3">
                  <div>
                    <label htmlFor="chat-input-nama" className="block text-xs font-bold text-gray-800 mb-1">
                      Nama
                    </label>
                    <input
                      id="chat-input-nama"
                      type="text"
                      required
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                      placeholder="Nama Anda"
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 text-gray-800 text-xs focus:outline-none focus:ring-2 focus:ring-[#FFCC00] focus:border-[#FFCC00] transition-all placeholder:text-gray-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="chat-input-nohp" className="block text-xs font-bold text-gray-800 mb-1">
                      Nomor HP / WhatsApp
                    </label>
                    <input
                      id="chat-input-nohp"
                      type="tel"
                      required
                      value={nomorHp}
                      onChange={(e) => setNomorHp(e.target.value)}
                      placeholder="08xxxxxxxxxx"
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 text-gray-800 text-xs focus:outline-none focus:ring-2 focus:ring-[#FFCC00] focus:border-[#FFCC00] transition-all placeholder:text-gray-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#FFCC00] hover:bg-yellow-400 text-gray-950 font-extrabold py-2.5 px-4 rounded-xl text-xs transition-all duration-200 shadow-md cursor-pointer mt-1 active:scale-[0.99] flex items-center justify-center gap-2"
                  >
                    <span>Mulai Chat</span>
                  </button>

                  <p className="text-[10px] text-gray-400 text-center pt-0.5">
                    Data digunakan untuk membantu tindak lanjut percakapan Anda.
                  </p>
                </form>
              </div>
            ) : (
              <div className="flex flex-col h-[340px] bg-slate-50">
                <div className="px-3.5 py-1.5 bg-yellow-100 border-b border-yellow-200 flex items-center justify-between text-[11px] text-gray-800">
                  <button
                    onClick={() => setSudahMulai(false)}
                    className="flex items-center gap-1 hover:text-yellow-800 transition-colors cursor-pointer font-semibold"
                  >
                    <ArrowLeft size={12} /> Ganti Data ({nama})
                  </button>
                  <button
                    onClick={handleBukaWhatsAppLangsung}
                    className="flex items-center gap-1 text-emerald-800 hover:text-emerald-900 font-semibold cursor-pointer"
                  >
                    Buka WA <ExternalLink size={10} />
                  </button>
                </div>

                <div className="flex-1 p-3.5 overflow-y-auto space-y-2.5">
                  {daftarPesan.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${msg.pengirim === 'user' ? 'items-end' : 'items-start'}`}
                    >
                      <div
                        className={`max-w-[85%] px-3 py-2 rounded-2xl text-xs leading-relaxed shadow-sm ${msg.pengirim === 'user'
                          ? 'bg-[#FFCC00] text-gray-950 font-medium rounded-br-none'
                          : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
                          }`}
                      >
                        {msg.teks}
                      </div>
                      <span className="text-[9px] text-gray-400 mt-0.5 px-1">
                        {msg.waktu}
                      </span>
                    </div>
                  ))}

                  <div className="pt-1">
                    <p className="text-[10px] font-semibold text-gray-500 mb-1.5">
                      Pilihan pertanyaan cepat:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {/* <button
                        onClick={() => handleKirimPesan("Bagaimana cara melacak paket saya?")}
                        className="bg-white hover:bg-yellow-100 hover:border-[#FFCC00] border border-gray-300 text-gray-700 text-[11px] px-2 py-1 rounded-full transition-colors cursor-pointer text-left"
                      >
                        📦 Lacak Paket
                      </button> */}
                      {/*<button
                        onClick={() => handleKirimPesan("Berapa tarif ongkos kirim NSS Express?")}
                        className="bg-white hover:bg-yellow-100 hover:border-[#FFCC00] border border-gray-300 text-gray-700 text-[11px] px-2 py-1 rounded-full transition-colors cursor-pointer text-left"
                      >
                        💰 Cek Ongkir
                      </button>*/}
                      <button
                        onClick={() => handleKirimPesan("Di mana saja lokasi cabang terdekat?")}
                        className="bg-white hover:bg-yellow-100 hover:border-[#FFCC00] border border-gray-300 text-gray-700 text-[11px] px-2 py-1 rounded-full transition-colors cursor-pointer text-left"
                      >
                        📍 Lokasi Cabang
                      </button>
                      <button
                        onClick={handleBukaWhatsAppLangsung}
                        className="bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 text-emerald-900 text-[11px] px-2 py-1 rounded-full transition-colors cursor-pointer text-left font-medium"
                      >
                        💬 Lanjut ke WhatsApp
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-2.5 bg-white border-t border-gray-200">
                  <div className="flex items-center gap-1.5">
                    <input
                      type="text"
                      value={pesanInput}
                      onChange={(e) => setPesanInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleKirimPesan()}
                      placeholder="Ketik pesan..."
                      className="flex-1 px-3 py-1.5 border border-gray-300 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#FFCC00] focus:border-[#FFCC00] text-gray-800 placeholder:text-gray-400"
                    />
                    <button
                      onClick={() => handleKirimPesan()}
                      className="bg-[#FFCC00] hover:bg-yellow-400 text-gray-950 p-2 rounded-xl transition-colors cursor-pointer flex items-center justify-center shrink-0 shadow-sm"
                    >
                      <Send size={14} />
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