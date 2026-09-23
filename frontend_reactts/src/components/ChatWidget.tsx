import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  X,
  Send,
  ArrowLeft,
  ExternalLink,
  Phone,
} from "lucide-react";

interface PesanChat {
  id: number;
  pengirim: "admin" | "user";
  teks: string;
  waktu: string;
}

interface ChatWidgetProps {
  bukaChat?: boolean;
  setBukaChat?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChatWidget = ({
  bukaChat: externalBukaChat,
  setBukaChat: externalSetBukaChat,
}: ChatWidgetProps = {}) => {
  const [internalBukaChat, setInternalBukaChat] = useState(false);

  const bukaChat =
    externalBukaChat !== undefined ? externalBukaChat : internalBukaChat;

  const setBukaChat = externalSetBukaChat || setInternalBukaChat;
  const [sudahMulai, setSudahMulai] = useState(false);

  const [nama, setNama] = useState("");
  const [nomorHp, setNomorHp] = useState("");
  const [pesanInput, setPesanInput] = useState("");

  const [daftarPesan, setDaftarPesan] = useState<PesanChat[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [daftarPesan]);

  const dapatkanWaktuSekarang = () => {
    const d = new Date();
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
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
        pengirim: "admin",
        teks: `Halo Kak ${nama}! Selamat datang di NSS Express. Senang bisa terhubung. Ada yang bisa kami bantu hari ini?`,
        waktu: dapatkanWaktuSekarang(),
      },
    ]);
  };

  const handleKirimPesan = (teksManual?: string) => {
    const teksKirim = teksManual || pesanInput;
    if (!teksKirim.trim()) return;

    const pesanBaruUser: PesanChat = {
      id: Date.now(),
      pengirim: "user",
      teks: teksKirim,
      waktu: dapatkanWaktuSekarang(),
    };

    setDaftarPesan((prev) => [...prev, pesanBaruUser]);
    setPesanInput("");

    setTimeout(() => {
      let balasan = `Terima kasih Kak ${nama}. Pertanyaan Kakak telah kami catat. Tim support kami akan segera menindaklanjuti ke nomor ${nomorHp}.`;

      if (
        teksKirim.toLowerCase().includes("lacak") ||
        teksKirim.toLowerCase().includes("resi")
      ) {
        balasan =
          "Untuk melacak paket, Kakak dapat memasukkan nomor resi pengiriman melalui menu Pelacakan di halaman web ini.";
      } else if (
        teksKirim.toLowerCase().includes("ongkir") ||
        teksKirim.toLowerCase().includes("tarif")
      ) {
        balasan =
          "Kakak bisa menggunakan fitur Cek Ongkir di halaman utama website kami dengan memasukkan kota asal, kota tujuan, dan berat barang untuk melihat pilihan layanan secara instan!";
      } else if (
        teksKirim.toLowerCase().includes("cabang") ||
        teksKirim.toLowerCase().includes("lokasi")
      ) {
        balasan =
          "NSS Express memiliki berbagai titik layanan di seluruh wilayah. Salah satunya di perwakilan utama kami di Slipi, Jakarta Barat.";
      } else if (
        teksKirim.toLowerCase().includes("klaim") ||
        teksKirim.toLowerCase().includes("rusak") ||
        teksKirim.toLowerCase().includes("kendala")
      ) {
        balasan =
          "Untuk kendala paket atau klaim, silakan langsung terhubung dengan tim CS utama kami melalui tombol WhatsApp di bawah.";
      }

      const pesanBaruAdmin: PesanChat = {
        id: Date.now() + 1,
        pengirim: "admin",
        teks: balasan,
        waktu: dapatkanWaktuSekarang(),
      };
      setDaftarPesan((prev) => [...prev, pesanBaruAdmin]);
    }, 600);
  };

  const handleBukaWhatsAppLangsung = () => {
    const teksWA = encodeURIComponent(
      `Halo NSS Express, saya ${nama || "Pelanggan"} (${nomorHp || "-"}). Saya ingin bertanya informasi pengiriman.`,
    );
    window.open(`https://wa.me/628112551010?text=${teksWA}`, "_blank");
  };

  return (
    <aside
      aria-label="Live Chat Support"
      className="fixed bottom-10 md:bottom-28 right-6 md:right-8 z-50 flex flex-col items-end"
    >
      <AnimatePresence>
        {bukaChat && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.92 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-[90vw] sm:w-[380px] md:w-[420px] max-w-[420px] bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-[#FFCC00] mb-4 flex flex-col h-[520px] md:h-[620px]"
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
                  <h4 className="font-extrabold text-sm md:text-base leading-tight text-black flex items-center gap-1.5">
                    Customer Service
                  </h4>
                  <p className="text-[11px] md:text-xs text-black font-bold mt-0.5">
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
              <div className="p-5 md:p-7 bg-white overflow-y-auto flex-1 flex flex-col justify-center">
                <div className="w-10 h-10 bg-[#FFCC00] text-gray-950 rounded-full flex items-center justify-center mb-3 shadow-sm">
                  <MessageSquare size={20} className="text-gray-950" />
                </div>

                <div className="flex items-center gap-2 mb-1.5">
                  <h3 className="text-xl md:text-2xl font-extrabold text-gray-900">
                    Halo!
                  </h3>
                  <span className="bg-[#FFCC00] text-black text-[10px] md:text-xs font-bold px-2.5 py-0.5 rounded-full">
                    ONLINE
                  </span>
                </div>

                <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-4">
                  Silakan isi nama dan nomor HP/WhatsApp terlebih dahulu untuk
                  mulai terhubung dengan CS kami.
                </p>

                <form onSubmit={handleMulaiChat} className="space-y-3">
                  <div>
                    <label
                      htmlFor="chat-input-nama"
                      className="block text-xs md:text-sm font-bold text-gray-800 mb-1"
                    >
                      Nama
                    </label>
                    <input
                      id="chat-input-nama"
                      type="text"
                      required
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                      placeholder="Nama Anda"
                      className="w-full px-3.5 py-2.5 md:py-3 rounded-xl border border-gray-300 text-gray-800 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-[#FFCC00] focus:border-[#FFCC00] transition-all placeholder:text-gray-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="chat-input-nohp"
                      className="block text-xs md:text-sm font-bold text-gray-800 mb-1"
                    >
                      Nomor HP / WhatsApp
                    </label>
                    <input
                      id="chat-input-nohp"
                      type="tel"
                      required
                      value={nomorHp}
                      onChange={(e) => setNomorHp(e.target.value)}
                      placeholder="08xxxxxxxxxx"
                      className="w-full px-3.5 py-2.5 md:py-3 rounded-xl border border-gray-300 text-gray-800 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-[#FFCC00] focus:border-[#FFCC00] transition-all placeholder:text-gray-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#FFCC00] hover:bg-yellow-400 text-gray-950 font-extrabold py-3 md:py-3.5 px-4 rounded-xl text-xs md:text-sm transition-all duration-200 shadow-md cursor-pointer mt-1 active:scale-[0.99] flex items-center justify-center gap-2"
                  >
                    <span>Mulai Chat</span>
                  </button>

                  <p className="text-[10px] md:text-xs text-gray-400 text-center pt-0.5">
                    Data digunakan untuk membantu tindak lanjut percakapan Anda.
                  </p>
                </form>
              </div>
            ) : (
              <div className="flex flex-col flex-1 bg-slate-50 overflow-hidden">
                <div className="px-3.5 py-2 bg-yellow-100 border-b border-yellow-200 flex items-center justify-between text-[11px] md:text-xs text-gray-800 shrink-0">
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

                <div className="flex-1 p-3.5 md:p-4 overflow-y-auto space-y-3">
                  {daftarPesan.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${msg.pengirim === "user" ? "items-end" : "items-start"}`}
                    >
                      <div
                        className={`max-w-[85%] md:max-w-[78%] px-3.5 py-2.5 md:px-4 md:py-3 rounded-2xl text-xs md:text-sm leading-relaxed shadow-sm break-words whitespace-pre-wrap ${
                          msg.pengirim === "user"
                            ? "bg-[#FFCC00] text-gray-950 font-medium rounded-br-none"
                            : "bg-white text-gray-800 border border-gray-200 rounded-bl-none"
                        }`}
                      >
                        {msg.teks}
                      </div>
                      <span className="text-[9px] md:text-[11px] text-gray-400 mt-0.5 px-1">
                        {msg.waktu}
                      </span>
                    </div>
                  ))}

                  <div className="pt-1">
                    <p className="text-[10px] md:text-xs font-semibold text-gray-500 mb-1.5">
                      Pilihan pertanyaan cepat:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      <button
                        onClick={() =>
                          handleKirimPesan(
                            "Di mana saja lokasi cabang terdekat?",
                          )
                        }
                        className="bg-white hover:bg-yellow-100 hover:border-[#FFCC00] border border-gray-300 text-gray-700 text-[11px] md:text-xs px-2.5 py-1.5 rounded-full transition-colors cursor-pointer text-left"
                      >
                        📍 Lokasi Cabang
                      </button>
                      <button
                        onClick={() =>
                          handleKirimPesan("Bagaimana cara cek ongkos kirim?")
                        }
                        className="bg-white hover:bg-yellow-100 hover:border-[#FFCC00] border border-gray-300 text-gray-700 text-[11px] md:text-xs px-2.5 py-1.5 rounded-full transition-colors cursor-pointer text-left"
                      >
                        💰 Cara Cek Ongkir
                      </button>
                      <button
                        onClick={() =>
                          handleKirimPesan("Bagaimana cara melacak nomor resi?")
                        }
                        className="bg-white hover:bg-yellow-100 hover:border-[#FFCC00] border border-gray-300 text-gray-700 text-[11px] md:text-xs px-2.5 py-1.5 rounded-full transition-colors cursor-pointer text-left"
                      >
                        📦 Cara Lacak Resi
                      </button>
                      <button
                        onClick={handleBukaWhatsAppLangsung}
                        className="bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 text-emerald-900 text-[11px] md:text-xs px-2.5 py-1.5 rounded-full transition-colors cursor-pointer text-left font-medium"
                      >
                        💬 Lanjut ke WhatsApp
                      </button>
                    </div>
                  </div>

                  <div ref={messagesEndRef} />
                </div>

                <div className="p-2.5 md:p-3 bg-white border-t border-gray-200 shrink-0">
                  <div className="flex items-center gap-1.5 md:gap-2">
                    <input
                      type="text"
                      value={pesanInput}
                      onChange={(e) => setPesanInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleKirimPesan()}
                      placeholder="Ketik pesan..."
                      className="flex-1 px-3.5 py-2 md:py-2.5 border border-gray-300 rounded-xl text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-[#FFCC00] focus:border-[#FFCC00] text-gray-800 placeholder:text-gray-400"
                    />
                    <button
                      onClick={() => handleKirimPesan()}
                      className="bg-[#FFCC00] hover:bg-yellow-400 text-gray-950 p-2 md:p-2.5 rounded-xl transition-colors cursor-pointer flex items-center justify-center shrink-0 shadow-sm"
                    >
                      <Send size={14} className="md:w-4 md:h-4" />
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
