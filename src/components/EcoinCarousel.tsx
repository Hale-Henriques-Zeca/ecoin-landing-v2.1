"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const slides = [
  { title: "AI-Powered Smart Contracts", desc: "Automation meets security — powered by E-Coin Intelligence.", img: "/images/ai-contract.png" },
  { title: "Cross-Chain Swap Live", desc: "Seamless interoperability across all supported blockchains.", img: "/images/swap.jpg" },
  { title: "Buy-Back Engine Active", desc: "Every transaction fuels E-Coin sustainability & value.", img: "/images/buyback.jpg" },
  { title: "E-Coin is Zero Ownership By Design", desc: "No central control. Ownership-less. Pure decentralization by architecture. E-Coin was deployed without ownership.", img: "/images/Zero Ownership.png" },
  { title: "Low Gas Fee Protocol", desc: "Optimized for ultra-low latency transactions worldwide.", img: "/images/gasfee.jpg" },
  { title: "There is No Admin", desc: "Only E-Treasury team acts through buy-back mechanism ensuring full decentralization.", img: "/images/Decentralized.jpg" },
  { title: "No Mint by Design", desc: "Mint 100% emitted at deploy time — once and forever.", img: "/images/No Mint.png" },
  { title: "No Burn by Design", desc: "Economic burn via buyback and treasury system. Buyback re-acquires tokens and sends them to reserve or inactive wallets.", img: "/images/No Burn by Design.png" },
  { title: "No Privileged Functions", desc: "No owner, no admin, no central control — immutable code by architecture.", img: "/images/No Privileged Functions.png" },
  { title: "Fixed Supply", desc: "E-Coin total supply is permanently capped at deployment — deflationary by logic.", img: "/images/Fixed Supply.png" },
  { title: "Immutable Contract", desc: "No upgrades, no proxy — immutable and verified forever on-chain.", img: "/images/Immutable Contract.png" },
  { title: "No Halving", desc: "No artificial halving events — value is sustained through utility and buyback mechanics.", img: "/images/No Halving.png" },
  { title: "Binance Smart Chain (BEP-20)", desc: "Fully compatible with BSC ecosystem — fast, secure, and low-cost.", img: "/images/Binance Smart Chain (BEP-20).png" },
  { title: "Visit Our Whitepaper & E-Coin Solidity Interpretation", desc: "Learn more about E-Coin, its tokenomics, buyback mechanism, and the E-Treasury system.", img: "/images/Whitepaper.jpg" },
];

export default function EcoinCarousel() {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // auto-scroll animation
  useEffect(() => {
    if (!isPaused) {
      controls.start({
        x: ["0%", "-50%"],
        transition: { duration: 45, ease: "linear", repeat: Infinity },
      });
    } else {
      controls.stop();
    }
  }, [isPaused, controls]);

  // drag scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const start = (e: MouseEvent | TouchEvent) => {
      isDown = true;
      startX = ("touches" in e ? e.touches[0].pageX : e.pageX) - container.offsetLeft;
      scrollLeft = container.scrollLeft;
      setIsPaused(true);
    };

    const end = () => {
      isDown = false;
      setIsPaused(false);
    };

    const move = (e: MouseEvent | TouchEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = ("touches" in e ? e.touches[0].pageX : e.pageX) - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    };

    container.addEventListener("mousedown", start);
    container.addEventListener("mouseleave", end);
    container.addEventListener("mouseup", end);
    container.addEventListener("mousemove", move);
    container.addEventListener("touchstart", start);
    container.addEventListener("touchend", end);
    container.addEventListener("touchmove", move);

    return () => {
      container.removeEventListener("mousedown", start);
      container.removeEventListener("mouseleave", end);
      container.removeEventListener("mouseup", end);
      container.removeEventListener("mousemove", move);
      container.removeEventListener("touchstart", start);
      container.removeEventListener("touchend", end);
      container.removeEventListener("touchmove", move);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-black py-14 sm:py-20">
      {/* Fundo Holográfico */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 via-transparent to-[#D4AF37]/10 blur-3xl -z-10" />

      <div className="text-center mb-8">
        <h2 className="text-[#D4AF37] text-lg sm:text-xl font-semibold tracking-wider">
          E-Coin Universe in Motion
        </h2>
      </div>

      {/* Selo “Live Beta” */}
      <div className="absolute top-6 right-6 bg-gradient-to-r from-[#D4AF37] to-[#bfa536] text-black 
        px-3 py-1 rounded-full text-xs sm:text-sm font-bold shadow-lg animate-pulse">
        LIVE BETA 2025
      </div>

      {/* Carrossel */}
      <motion.div
        ref={containerRef}
        className="flex gap-6 px-6 cursor-grab overflow-x-scroll scrollbar-hide"
        animate={controls}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {[...slides, ...slides].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.08, rotateY: 12, z: 30 }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
            className="min-w-[250px] sm:min-w-[280px] md:min-w-[340px] bg-gradient-to-b 
              from-[#111] to-[#000] border border-[#D4AF37]/40 rounded-3xl shadow-[0_0_25px_rgba(212,175,55,0.25)]
              p-5 sm:p-6 flex flex-col items-center text-center hover:border-[#D4AF37]/80
              transition-all duration-700 hover:shadow-[0_0_40px_rgba(212,175,55,0.5)]
              [transform-style:preserve-3d] [perspective:1000px]"
          >
            <div className="relative w-full h-[160px] sm:h-[180px] overflow-hidden rounded-xl mb-4">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover opacity-90 hover:opacity-100 transition-transform duration-700 hover:scale-110"
              />
            </div>
            <h3 className="text-[#D4AF37] text-base sm:text-lg font-semibold mb-2 leading-snug">
              {item.title}
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-snug">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Gradientes laterais */}
      <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none" />
    </section>
  );
}
