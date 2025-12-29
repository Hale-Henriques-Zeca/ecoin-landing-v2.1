"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaTelegramPlane, FaTelegram, FaWhatsapp, FaTwitter, FaDiscord } from "react-icons/fa";
import { BsStars } from "react-icons/bs";

export default function ECoinOnChainPresale() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  /* ⛔ CONTROLE DE HYDRATION */
  const [mounted, setMounted] = useState(false);

  /* ⏳ Countdown */
  const presaleEnd = new Date("2025-12-31T23:59:59Z").getTime();
  const [timeLeft, setTimeLeft] = useState(presaleEnd - Date.now());

  /* 📊 Estado de compra */
  const [walletConectada, setWalletConectada] = useState(false);
  const [mostrarCompra, setMostrarCompra] = useState(false);
  const [usdt, setUsdt] = useState("");

  useEffect(() => {
    setMounted(true);

    const timer = setInterval(() => {
      setTimeLeft(presaleEnd - Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  /* ✅ SÓ AGORA podemos retornar */
  if (!mounted) return null;

  const days = Math.max(Math.floor(timeLeft / 86400000), 0);
  const hours = Math.max(Math.floor((timeLeft / 3600000) % 24), 0);
  const minutes = Math.max(Math.floor((timeLeft / 60000) % 60), 0);
  const seconds = Math.max(Math.floor((timeLeft / 1000) % 60), 0);

  const precoECoin = 0.05;
  const ecoinRecebida = usdt ? (Number(usdt) / precoECoin).toFixed(2) : "0";

  return (
    <section className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* 🌌 FUNDO */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url('/images/ecoin-presale-hero-bg.jpg')" }}
        />
      </div>

      {/* 🧠 CONTEÚDO */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="relative z-10 min-h-screen flex items-center justify-center px-3"
      >
        <div className="w-full max-w-md bg-transparent p-4 sm:p-8 space-y-6 text-center">

          {/* COUNTDOWN */}
          <div>
            <p className="text-[10px] tracking-widest text-gray-300">
              PRÉ-VENDA TERMINA EM
            </p>
            <div className="flex justify-center gap-2 font-mono text-sm">
              {days}d : {hours}h : {minutes}m : {seconds}s
            </div>
          </div>

          {/* TÍTULO */}
          <h1 className="text-xl sm:text-3xl font-extrabold">
            Pré-Venda On-Chain <br />
            <span className="text-[#D4AF37]">E-Coin</span>
          </h1>

          <p className="text-gray-300 text-xs">
            Compra direta via blockchain na BNB Smart Chain.
          </p>

          {/* BOTÕES */}
          {!mostrarCompra && (
            <button
              onClick={() => setMostrarCompra(true)}
              className="w-full py-2.5 rounded-full font-semibold
              bg-gradient-to-r from-[#D4AF37] to-[#3B82F6]"
            >
              COMPRAR AGORA
            </button>
          )}

          {mostrarCompra && !walletConectada && (
            <button
              onClick={() => setWalletConectada(true)}
              className="w-full py-2.5 rounded-full font-semibold
              bg-gradient-to-r from-[#22C55E] to-[#16A34A]"
            >
              CONECTAR CARTEIRA
            </button>
          )}

          {walletConectada && (
            <div className="space-y-4 text-left">
              <div>
                <label className="text-xs text-gray-300">Valor em USDT</label>
                <input
                  type="number"
                  value={usdt}
                  onChange={(e) => setUsdt(e.target.value)}
                  className="w-full mt-1 p-2 rounded bg-black/50 border border-gray-700 text-white text-sm"
                  placeholder="Ex: 100"
                />
              </div>

              <div className="text-xs text-gray-300">
                Você receberá:
                <strong className="text-[#D4AF37]"> {ecoinRecebida} E-Coin</strong>
              </div>

              <button className="w-full py-2.5 rounded-full font-semibold bg-[#3B82F6]">
                CONFIRMAR COMPRA
              </button>

              <button
                onClick={() => setWalletConectada(false)}
                className="w-full text-xs text-red-400"
              >
                Desconectar carteira
              </button>
            </div>
          )}

          {/* FOOTER */}
          <p className="text-sm mb-2 text-gray-400">Conecte-se à comunidade E-Coin</p>
          <div className="flex justify-center gap-3 text-[10px] text-gray-300">
            <span>BSC</span>
            <span>Auditado</span>
            <span>Whitepaper</span>
            <span>BscScan</span>

            <div className="flex gap-5 text-2xl">
              <a href="https://t.me/ecoin2026" target="_blank" rel="noopener noreferrer">
                <FaTelegramPlane className="hover:text-white transition" />
              </a>
              <a href="https://x.com/CoinE28810?t=Dm9BWORAfzh5YcuqHYIUwQ&s=09" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="hover:text-white transition" />
              </a>
              <a href="https://discord.com/users/1443996675638300834" target="_blank" rel="noopener noreferrer">
                <FaDiscord className="hover:text-white transition" />
              </a>
              <a href="https://t.me/ecoin2025" target="_blank" rel="noopener noreferrer">
                          <FaTelegram className="hover:text-white transition" />
                        </a>
              <a href="https://chat.whatsapp.com/G1F6USX5NrrLKikm7yiXXQ" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="hover:text-white transition" />
              </a>          
            </div>

            <BsStars className="text-3xl mt-4 animate-pulse text-[#D4AF37]" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
