"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BsInfoCircle } from "react-icons/bs";

export default function ECoinDevelopmentNotice() {
   const [showModal, setShowModal] = useState(false);
  return (
    <section className="relative bg-gradient-to-b from-[#0A0A0A] via-[#050505] to-black text-gray-200 border border-[#D4AF37]/20 rounded-3xl shadow-lg py-12 px-6 mx-auto mt-12 max-w-6xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        {/* Ícone e Título */}
        <div className="flex flex-col items-center justify-center gap-3">
          <BsInfoCircle className="text-[#D4AF37] text-4xl" />
          <h2 className="text-2xl md:text-3xl font-bold text-[#D4AF37]">
            🛠️ Sistema em Desenvolvimento Contínuo
          </h2>
        </div>

        {/* Mensagem principal */}
        <p className="max-w-3xl mx-auto text-sm sm:text-base leading-relaxed text-gray-300">
          O website e os sistemas de produção baseados em banco de dados do
          ecossistema <span className="text-[#D4AF37] font-semibold">E-Coin</span> ainda
          estão em desenvolvimento significativo. Atualmente, estima-se que cerca de{" "}
          <span className="text-[#00FF9C] font-semibold">25%</span> da plataforma esteja
          funcional com bases de dados reais, enquanto o restante utiliza
          temporariamente templates estruturais que serão substituídos conforme os
          módulos forem integrados à produção real.
        </p>

        <p className="max-w-3xl mx-auto text-sm sm:text-base leading-relaxed text-gray-400">
          A equipe <span className="text-[#00C3FF] font-semibold">E-Code+</span> está
          trabalhando incansavelmente para garantir que tudo o que foi lançado na
          plataforma funcione de forma 100% operacional até{" "}
          <span className="text-[#D4AF37] font-semibold"> Q2 - 2026</span>.
        </p>

{/* Manifesto Official da EdenKingDom Corporation / Modal */}
      <div className="text-center mt-16">
        <button
          onClick={() => setShowModal(true)}
          className="bg-gradient-to-r from-[#00FF9C] to-[#00C3FF] text-black font-bold py-3 px-10 rounded-full hover:opacity-90 transition"
        >
          Manifesto Official da EdenKingDom Corporation
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
              Manifesto Official da EdenKingDom Corporation
            </h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
  A EdenKingDom Corporation é uma entidade global, independente e multissetorial,
  regida por princípios universais de legalidade, ética, sustentabilidade e
  soberania institucional. Não competimos por especulação nem por preços
  artificiais: operamos com excelência técnica, ciência aplicada e responsabilidade
  social real.
  <br /><br />
  Atuamos acima de ideologias políticas, religiosas ou interesses individuais.
  Nossa estrutura responde exclusivamente ao Conselho Central, preservando a
  integridade, a continuidade e a inviolabilidade corporativa em todas as
  jurisdições onde operamos.
  <br /><br />
  A participação pública ocorre de forma inclusiva e transparente através de
  modelos sem direito a voto <span className="text-[#D4AF37] font-semibold">Buy Your Seat</span> na sessão dos acionistas, assegurando prosperidade compartilhada sem
  interferência política interna. Servimos à vida, à verdade e ao progresso humano
  sustentável.
</p>

            <a
            href="https://www.edenkingdom.org/whitepaper"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#f5d97e] text-black font-bold py-3 px-8 rounded-full hover:opacity-90 transition shadow-lg"
          >
            👉  Visite o whitepaper da EdenKingDom Corporation
          </a>
          </div>
        </div>
      )}
          
        {/* Link para o site oficial */}
        <div className="mt-8">
          <a
            href="https://edenkingdom.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#f5d97e] text-black font-bold py-3 px-8 rounded-full hover:opacity-90 transition shadow-lg"
          >
            👉 Visite a EdenKingDom Corporation Official
          </a>
        </div>
      </motion.div>

      {/* Fundo visual */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] -translate-x-1/2 bg-[#D4AF37]/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#00C3FF]/10 rounded-full blur-[120px]" />
      </div>
    </section>
  );
}
