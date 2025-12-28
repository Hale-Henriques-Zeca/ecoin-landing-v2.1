"use client";

import { useState } from "react";
import { useAccount, useConnect } from "wagmi";
import * as ethers from "ethers";

export default function BuyBackWallet() {
  const { isConnected } = useAccount();
  const { connect, connectors } = useConnect();

  const [amount, setAmount] = useState("");
  const [timeLock, setTimeLock] = useState("3");
  const [loading, setLoading] = useState(false);

  async function handleBuyBack() {
    if (!window.ethereum) return alert("Carteira não detectada");
    if (!amount) return alert("Informe a quantidade");

    try {
      setLoading(true);
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      // placeholder
      console.log("BuyBack:", amount, timeLock);

      setLoading(false);
      alert("Buy-Back enviado (mock)");
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  }

  return (
    <section className="bg-black py-20">
      <div className="max-w-md mx-auto px-6">
        {!isConnected ? (
          <button
            onClick={() => connectors[0] && connect({ connector: connectors[0] })}
            className="w-full py-4 bg-[#D4AF37] text-black font-bold rounded-xl hover:bg-yellow-400 transition"
          >
            🔗 Conectar Carteira
          </button>
        ) : (
          <div className="bg-[#0f172a]/80 border border-[#1C2D5A] rounded-2xl p-6">
            <label className="block text-sm text-gray-300 mb-1">
              ⏱ Time-Lock
            </label>
            <select
              className="w-full mb-4 p-2 rounded bg-black border border-gray-700 text-[#D4AF37]"
              value={timeLock}
              onChange={(e) => setTimeLock(e.target.value)}
            >
              <option value="3">3 horas</option>
              <option value="6">6 horas</option>
              <option value="12">12 horas</option>
              <option value="24">1 dia</option>
              <option value="72">3 dias</option>
              <option value="168">7 dias</option>
            </select>

            <label className="block text-sm text-gray-300 mb-1">
              💰 Quantidade
            </label>
            <input
              type="number"
              className="w-full p-2 rounded bg-black border border-gray-700 text-yellow-300 mb-5"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <button
              disabled={loading}
              onClick={handleBuyBack}
              className="w-full py-3 bg-[#D4AF37] text-black font-bold rounded-lg hover:bg-yellow-400 disabled:opacity-50"
            >
              {loading ? "Processando…" : "🚀 Executar Buy-Back"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
