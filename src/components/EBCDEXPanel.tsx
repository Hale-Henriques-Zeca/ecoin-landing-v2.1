"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Snowfall } from "react-snowfall";
import { FaTelegramPlane, FaWhatsapp, FaExchangeAlt } from "react-icons/fa";
import { BsStars } from "react-icons/bs";

export default function EBCDEXPanel() {
  const [mode, setMode] = useState<"swap" | "stake">("swap");
  const [showModal, setShowModal] = useState(false);

  // Animação suave de entrada
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="relative bg-[#000814] text-white py-24 overflow-hidden rounded-3xl border border-[#00FF9C]/10 mt-24">
      {/* Fundo cinematográfico com efeitos natalinos */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 w-[800px] h-[800px] -translate-x-1/2 bg-gradient-to-r from-[#00C3FF]/20 to-[#00FF9C]/20 blur-[180px]" />
        <Snowfall color="#D4AF37" snowflakeCount={35} />
      </div>

      {/* Cabeçalho */}
      <div className="text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold text-[#00FF9C]"
        >
          🎄 EBC DEX (E-Swap)
        </motion.h2>
        <p className="text-gray-400 mt-2">Your Gateway to Digital Freedom</p>
        <p className="text-sm text-[#D4AF37] mt-1">
          🎅 Feliz Natal & Próspero Ano Novo 2026!
        </p>
      </div>

      {/* Alternador Swap | Stake */}
      <div className="flex justify-center gap-4 mb-10">
        {["swap", "stake"].map((tab) => (
          <button
            key={tab}
            onClick={() => setMode(tab as "swap" | "stake")}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
              mode === tab
                ? "bg-gradient-to-r from-[#00FF9C] to-[#00C3FF] text-black shadow-lg"
                : "bg-[#0a0a0a]/50 border border-[#00FF9C]/20 text-gray-300 hover:text-white"
            }`}
          >
            {tab === "swap" ? "💱 Swap Panel" : "📊 Staking Panel"}
          </button>
        ))}
      </div>

      {/* Painel principal */}
      <motion.div
        className="max-w-4xl mx-auto bg-[#0a0a0a]/60 border border-[#00FF9C]/20 rounded-2xl p-8 text-center backdrop-blur-md shadow-xl"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        {mode === "swap" ? (
          /* --- Swap Panel --- */
          <div>
            <h3 className="text-2xl font-semibold text-[#00FF9C] mb-6">
    Swap E-Coin ↔ USDT
  </h3>

  <div className="grid gap-4">
    {/* Input From */}
    <div className="bg-[#000]/60 border border-[#00FF9C]/10 rounded-xl p-4">
      <label className="text-sm text-gray-400">From</label>
      <input
        type="text"
        placeholder="0.00"
        className="w-full bg-transparent outline-none text-2xl text-white"
      />
    </div>

    {/* Botão de troca */}
    <div className="flex justify-center">
      <button
        className="w-10 h-10 flex items-center justify-center rounded-full bg-[#00FF9C] hover:bg-[#00C3FF] transition"
        title="Trocar moedas"
      >
        <FaExchangeAlt className="text-black text-lg" />
      </button>
    </div>

    {/* Input To */}
    <div className="bg-[#000]/60 border border-[#00FF9C]/10 rounded-xl p-4">
      <label className="text-sm text-gray-400">To (estimated)</label>
      <input
        type="text"
        placeholder="0.00"
        className="w-full bg-transparent outline-none text-2xl text-white"
        disabled
      />
    </div>
              <button className="mt-4 bg-gradient-to-r from-[#00FF9C] to-[#00C3FF] text-black font-bold py-3 rounded-xl hover:opacity-90 transition">
                Swap Now
              </button>
            </div>
          </div>
        ) : (
          /* --- Staking Panel --- */
          <div>
            <h3 className="text-2xl font-semibold text-[#00FF9C] mb-6">
              Stake Your E-Coin
            </h3>
            <div className="grid gap-4">
              <div className="bg-[#000]/60 border border-[#00FF9C]/10 rounded-xl p-4">
                <label className="text-sm text-gray-400">Amount to Stake</label>
                <input
                  type="text"
                  placeholder="Enter amount"
                  className="w-full bg-transparent outline-none text-2xl text-white"
                />
              </div>
              <div className="bg-[#000]/60 border border-[#00FF9C]/10 rounded-xl p-4">
                <label className="text-sm text-gray-400">Lock Period</label>
                <select className="w-full bg-transparent text-white mt-2 outline-none">
                  <option value="30">0.3% Diário = 2.1% Semanal = 9% Mensal ≈ 108% APY</option>
                </select>
              </div>
              <div className="flex gap-4 justify-center mt-4">
                <button className="bg-gradient-to-r from-[#00FF9C] to-[#00C3FF] text-black font-bold py-3 px-8 rounded-xl hover:opacity-90 transition">
                  Stake
                </button>
                <button className="bg-[#111] border border-[#00FF9C]/20 py-3 px-8 rounded-xl hover:border-[#00FF9C]/50 transition">
                  Claim Reward
                </button>
                <button className="bg-gradient-to-r from-[#00FF9C] to-[#00C3FF] text-black font-bold py-3 px-8 rounded-xl hover:opacity-90 transition">
                  Unstake
                </button>
              </div>
            </div>
          </div>
        )}
      </motion.div>

      {/* Invite Friends / Modal */}
      <div className="text-center mt-16">
        <button
          onClick={() => setShowModal(true)}
          className="bg-gradient-to-r from-[#00FF9C] to-[#00C3FF] text-black font-bold py-3 px-10 rounded-full hover:opacity-90 transition"
        >
          🎁 Invite Friends
        </button>
      </div>

      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0a0a0a]/90 border border-[#00FF9C]/30 rounded-2xl p-8 max-w-lg text-center shadow-2xl"
          >
            <h3 className="text-2xl font-semibold text-[#00FF9C] mb-4">
              Connect Wallet & Invite Friends
            </h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Join E-Swap and help build the EdenKingDom financial ecosystem. All partners you invite are permanently assigned to you on-chain as your downline partners.
            </p>
            <button className="bg-gradient-to-r from-[#00FF9C] to-[#00C3FF] text-black font-bold py-3 px-8 rounded-xl hover:opacity-90 transition">
              Connect Wallet
            </button>
          </div>
        </div>
      )}

      {/* 🎁 Rodapé Social */}
      <motion.div
        className="mt-20 flex flex-col items-center gap-3 text-[#D4AF37]"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <p className="text-sm mb-2 text-gray-400">Conecte-se à comunidade EBC DEX (E-Swap)</p>
        <div className="flex gap-5 text-2xl">
          <a href="https://t.me/EdenKingDomBuyCrypto" target="_blank" rel="noopener noreferrer">
            <FaTelegramPlane className="hover:text-white transition" />
          </a>
          <a href="https://chat.whatsapp.com/Ge733s4ekK7IQrOWluwZlq" target="_blank" rel="noopener noreferrer">
  <FaWhatsapp className="hover:text-white transition" />
</a>

        </div>
        <BsStars className="text-3xl mt-4 animate-pulse text-[#D4AF37]" />
      </motion.div>
    </section>
  );
}
