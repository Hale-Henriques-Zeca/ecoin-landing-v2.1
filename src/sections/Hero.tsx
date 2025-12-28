"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  // 🟦 Gerar partículas SOMENTE no cliente
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const p = Array.from({ length: 45 }).map(() => ({
      x: Math.random() * 1400,
      y: Math.random() * 800,
      size: Math.random() * 6 + 2,
      duration: 6 + Math.random() * 5,
      delay: Math.random() * 5,
    }));
    setParticles(p);
  }, []);

  return (
    <section className="
  relative
  w-full
  min-h-[90vh]
  sm:h-[95vh]
  overflow-hidden
  flex
  flex-col
  items-center
  justify-start
  bg-black
  pt-safe
">


      {/* Fundo Radial */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.35),transparent_70%)] animate-pulse"></div>

      {/* Partículas */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute bg-[#D4AF37] rounded-full"
            initial={{
              opacity: 0,
              scale: 0,
              x: p.x,
              y: p.y,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.3, 0],
              x: "+=80",
              y: "-=120",
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
            }}
            style={{
              width: p.size,
              height: p.size,
              filter: "blur(2px)",
            }}
          />
        ))}
      </div>

      {/* LOGO + CÍRCULO PREMIUM */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="relative z-20 mt-16 sm:mt-21"
      >
        <div className="relative flex justify-center">

          {/* Círculo suave (do novo sistema) */}
          <motion.div
            className="absolute w-[300px] h-[300px] rounded-full border border-[#D4AF37]/40 animate-pulse-soft"
          ></motion.div>

          {/* Círculo rotativo (do sistema antigo, mantendo o efeito premium) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            className="absolute w-[320px] h-[320px] rounded-full border border-[#D4AF37]/25"
          ></motion.div>

          {/* LOGO */}
          <Image
            src="/logo.png"
            alt="E-Coin Logo"
            width={300}
            height={180}
            className="w-[220px] sm:w-[280px] md:w-[360px] drop-shadow-[0_0_25px_rgba(212,175,55,0.65)]"
          />
        </div>
      </motion.div>

      {/* TÍTULO + BOTÕES */}
      <motion.div
  className="relative z-20 mt-8 px-4 flex flex-col items-center text-center"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.4 }}
>
  <h1 className="
    text-3xl sm:text-4xl md:text-5xl lg:text-5xl
    font-extrabold
    text-[#D4AF37]
    tracking-wider
    drop-shadow-lg
    max-w-3xl
  ">
    THE OFFICIAL E-COIN
  </h1>

  <p className="
    text-gray-300
    text-sm sm:text-base md:text-lg
    mt-4
    max-w-xl
  ">
    A moeda corporativa da EdenKingDom — construída com tecnologia, segurança e visão eterna.
  </p>


        {/* NOVA ORGANIZAÇÃO DE BOTÕES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 mt-5">

          <Button text="Whitepaper" href="/whitepaper" />

          <Button text="E-Coin Business Presentation" href="/EcoinBusinessPresentation" />

          <Button text="Líder de Equipes" href="/equipes" />

          <Button text="Interpretação de Solidity da E-Coin" href="/ECoinSolidity" />

        </div>

      </motion.div>
    </section>
  );
}

function Button({ text, href }: { text: string; href: string }) {
  return (
    <a
      href={href}
      className="
  px-4 py-2
  sm:px-6 sm:py-3
  text-sm sm:text-base
  rounded-xl
  bg-[#D4AF37]
  text-black
  font-semibold
  hover:bg-[#bfa536]
  transition
  shadow-xl
  w-full
"
    >
      {text}
    </a>
  );
}
