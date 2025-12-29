"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Line } from "react-chartjs-2";
import { JsonRpcProvider } from "ethers";
import axios from "axios";




export default function EKDSmartFinanceTool() {
  const [mode, setMode] = useState<"converter" | "calculator" | "market">("converter");

  // ====== CALCULATOR ======
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleKey = (key: string) => {
    if (key === "C") {
      setExpression("");
      setResult("");
    } else if (key === "=") {
      try {
        const evalResult = eval(expression);
        setResult(evalResult.toString());
      } catch {
        setResult("Error");
      }
    } else {
      setExpression((prev) => prev + key);
    }
  };

  const calculatorKeys = [
    "C", "%", "÷", "×",
    "7", "8", "9", "-",
    "4", "5", "6", "+",
    "1", "2", "3", ".",
    "0", "="
  ];

  // ====== CONVERTER ======
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("MZN");
  const [amount, setAmount] = useState<number | string>("");
  const [converted, setConverted] = useState<number | null>(null);
  const [rate, setRate] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const currencies = [
    "USD", "EUR", "GBP", "MZN", "BTC", "ETH", "BNB", "USDT", "E-COIN",
  ];

 const fetchLiveRate = async (from: string, to: string) => {
  setLoading(true);

  try {
    // ✅ E-COIN → API interna (server-side)
    if (from === "E-COIN" || to === "E-COIN") {
      const res = await fetch("/api/ecoin-price");

      if (!res.ok) {
        throw new Error("Erro ao chamar API E-COIN");
      }

      const data = await res.json();
      const price = Number(data.price);

      setRate(price);
      return price;
    }

    // 🌍 Outras moedas → CoinGecko
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${from.toLowerCase()}&vs_currencies=${to.toLowerCase()}`
    );

    const rateValue =
      res.data[from.toLowerCase()]?.[to.toLowerCase()] ?? 1;

    setRate(rateValue);
    return rateValue;

  } catch (err) {
    console.error("Erro ao buscar taxa:", err);
    setRate(null);
    return null;

  } finally {
    setLoading(false);
  }
};



  // ====== MARKET DASHBOARD ======
  const [marketData, setMarketData] = useState<
    { symbol: string; price: number; change: number }[]
  >([]);

  const fetchMarketData = async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,tether&vs_currencies=usd"
      );
      const btc = res.data.bitcoin.usd;
      const eth = res.data.ethereum.usd;
      const bnb = res.data.binancecoin.usd;
      const usdt = res.data.tether.usd;

      const ecoinRate = await fetchLiveRate("E-COIN", "USD");

      const all = [
        { symbol: "E-COIN", price: ecoinRate || 1, change: +(Math.random() * 2 - 1).toFixed(2) },
        { symbol: "BTC", price: btc, change: +(Math.random() * 2 - 1).toFixed(2) },
        { symbol: "ETH", price: eth, change: +(Math.random() * 2 - 1).toFixed(2) },
        { symbol: "BNB", price: bnb, change: +(Math.random() * 2 - 1).toFixed(2) },
        { symbol: "USDT", price: usdt, change: 0 },
      ];

      setMarketData(all);

      // === Salvar no Supabase ===
      
    } catch (err) {
      console.error("Erro ao buscar dados do mercado:", err);
    }
  };

  useEffect(() => {
    fetchMarketData();
    const interval = setInterval(fetchMarketData, 10000);
    return () => clearInterval(interval);
  }, []);

  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        fill: true,
        label: `${fromCurrency} → ${toCurrency}`,
        data: [1, 1.02, 0.98, 1.01, 1.03].map((n) => n * (rate ?? 1)),
        borderColor: "#D4AF37",
        backgroundColor: "rgba(212,175,55,0.1)",
        tension: 0.3,
      },
    ],
  };

  return (
    <section className="relative w-full bg-black text-white py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_70%)]" />

      {/* TÍTULO CENTRAL */}
      <div className="flex flex-col items-center justify-center mb-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          EKD <span className="text-[#D4AF37]">Smart Finance Tool</span>
        </h2>
        <div className="flex items-center gap-3 bg-[#0D0D0D]/70 border border-gray-800 rounded-full p-2">
          {["converter", "calculator", "market"].map((tab) => (
            <button
              key={tab}
              onClick={() => setMode(tab as any)}
              className={`px-5 py-2 rounded-full text-sm capitalize transition ${
                mode === tab
                  ? "bg-[#D4AF37]/20 text-[#D4AF37]"
                  : "text-gray-400 hover:text-[#D4AF37]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* CONTEÚDO CENTRALIZADO */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto"
      >
        {mode === "converter" && (
          <div className="bg-[#0D0D0D]/80 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4 text-[#D4AF37]">Converter</h3>
            <div className="flex justify-between mb-4">
              <span className="text-sm text-gray-400">Live Exchange</span>
              <span className="text-xs text-gray-500">{new Date().toLocaleDateString()}</span>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <select
                  className="bg-transparent border border-gray-700 p-2 rounded-lg text-sm text-white"
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                >
                  {currencies.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
                <button onClick={() => [setFromCurrency(toCurrency), setToCurrency(fromCurrency)]} className="text-[#D4AF37] hover:text-white text-2xl">
                  ↔
                </button>
                <select
                  className="bg-transparent border border-gray-700 p-2 rounded-lg text-sm text-white"
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                >
                  {currencies.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>

              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount..."
                className="w-full bg-transparent border border-gray-700 p-3 rounded-lg text-xl text-[#D4AF37] focus:outline-none"
              />

              <div className="text-2xl mt-2">
                ={" "}
                <span className="text-[#D4AF37]">
                  {loading ? "Loading..." : converted !== null ? converted : "—"}
                </span>{" "}
                {toCurrency}
              </div>

              <div className="h-44 mt-6">
                <Line data={chartData} options={{ plugins: { legend: { display: false } } }} />
              </div>
            </div>
          </div>
        )}

        {mode === "calculator" && (
          <div className="bg-[#0D0D0D]/80 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4 text-[#D4AF37]">Calculator</h3>
            <div className="bg-black/70 border border-gray-700 rounded-lg p-4 text-right mb-4">
              <div className="text-gray-400 text-sm">{expression}</div>
              <div className="text-3xl font-semibold text-[#D4AF37]">
                {result || "0"}
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {calculatorKeys.map((key) => (
                <button
                  key={key}
                  onClick={() => handleKey(key === "÷" ? "/" : key === "×" ? "*" : key)}
                  className={`py-3 rounded-lg text-lg font-semibold transition ${
                    key === "="
                      ? "bg-[#D4AF37] text-black hover:bg-[#f1c95a]"
                      : "bg-[#111]/70 hover:bg-[#222] text-white"
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>
          </div>
        )}

        {mode === "market" && (
          <div className="bg-[#0D0D0D]/80 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4 text-[#D4AF37]">Live Market Dashboard</h3>
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="text-gray-400 border-b border-gray-800">
                  <th className="py-2">Asset</th>
                  <th className="py-2">Price (USD)</th>
                  <th className="py-2">Change</th>
                </tr>
              </thead>
              <tbody>
                {marketData.map((coin) => (
                  <tr key={coin.symbol} className="border-b border-gray-900">
                    <td className="py-2 font-semibold">{coin.symbol}</td>
                    <td className="py-2">${coin.price.toLocaleString()}</td>
                    <td
                      className={`py-2 ${
                        coin.change > 0
                          ? "text-green-400"
                          : coin.change < 0
                          ? "text-red-400"
                          : "text-gray-400"
                      }`}
                    >
                      {coin.change > 0 ? "+" : ""}
                      {coin.change}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </motion.div>
    </section>
  );
}
