"use client";

import BonusCard from "./components/BonusCard";
import BonusTable from "./components/BonusTable";
import LevelTree from "./components/LevelTree";
import InfoBox from "./components/InfoBox";

export default function EquipesPage() {
  return (
    <div className="min-h-screen bg-black text-gray-300 pt-32 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center space-y-20">

        {/* TÍTULO */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-[#D4AF37] mb-3 tracking-wide">
            Líder de Equipes — E-Coin
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto">
            Estrutura oficial de bonificações da Pré-Venda e Staking via telegram bot da moeda
            corporativa{" "}
            <span className="text-[#D4AF37] font-semibold">E-Coin</span>.
          </p>
        </div>

        {/* CARTÃO DE EXPLICAÇÃO */}
        <InfoBox />

        {/* TABELA */}
        <BonusTable />

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
          <BonusCard
            title="Pré-Venda via telegram bot"
            percent="9%"
            levels="7 níveis"
            color="from-[#D4AF37] to-[#8d6f24]"
            items={[
              "5.10% — 1º nível",
              "1.10% — 2º nível",
              "1.00% — 3º nível",
              "0.90% — 4º nível",
              "0.50% — 5º nível",
              "0.30% — 6º nível",
              "0.10% — 7º nível",
            ]}
          />

          <BonusCard
            title="Staking via telegram bot"
            percent="1%"
            levels="2 níveis"
            color="from-[#444] to-[#222]"
            items={[
              "0.90% — 1º nível",
              "0.10% — 2º nível",
            ]}
          />
        </div>

        {/* ÁRVORE */}
        <div className="w-full max-w-3xl mx-auto">
          <LevelTree />
        </div>

{/* 🌐 EBC DEX (E-Swap) — Percentagens & Funcionamento */}
<div className="w-full max-w-5xl mx-auto space-y-16">

  {/* TÍTULO */}
  <div className="text-center space-y-3">
    <h2 className="text-3xl font-extrabold text-[#D4AF37]">
      🌐 EBC DEX (E-Swap)
    </h2>
    <p className="text-gray-400 max-w-3xl mx-auto">
      Como funcionam as percentagens, os ganhos e a lógica económica real
      por trás da DEX oficial do ecossistema EdenKingDom.
    </p>
  </div>

  {/* HEADLINE MARKETING */}
  <div className="bg-[#0D0D0D]/80 border border-gray-800 rounded-2xl p-6 text-center">
    <p className="text-lg text-gray-200 font-medium">
      Na E-Swap, a liquidez trabalha todos os dias,
      o staking acumula,
      o mês compõe
      e o ano consolida.
    </p>
    <p className="text-gray-400 mt-2">
      O que parece pequeno no dia torna-se poderoso no longo prazo.
    </p>
  </div>

  {/* FÓRMULA */}
  <div className="text-center">
    <p className="text-2xl font-bold text-[#22C55E]">
      0.3% Diário = 2.1% Semanal = 9% Mensal ≈ 108% APY
    </p>
    <p className="text-sm text-gray-400 mt-2">
      APY é projeção matemática baseada em constância de uso — não promessa fixa.
    </p>
  </div>

  {/* TABELA EXPLICATIVA */}
  <div className="overflow-x-auto">
    <table className="w-full border border-gray-800 rounded-xl overflow-hidden">
      <thead className="bg-[#111]">
        <tr>
          <th className="px-4 py-3 text-left text-[#D4AF37]">Período</th>
          <th className="px-4 py-3 text-left text-[#D4AF37]">Percentagem</th>
          <th className="px-4 py-3 text-left text-[#D4AF37]">Explicação</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-800">
        <tr>
          <td className="px-4 py-3">Diário (D)</td>
          <td className="px-4 py-3 text-[#22C55E]">0.3%</td>
          <td className="px-4 py-3">
            Recompensa média diária gerada pelo Smart Pool
          </td>
        </tr>
        <tr>
          <td className="px-4 py-3">Semanal (S)</td>
          <td className="px-4 py-3 text-[#22C55E]">2.1%</td>
          <td className="px-4 py-3">
            Soma natural de 7 dias (0.3% × 7)
          </td>
        </tr>
        <tr>
          <td className="px-4 py-3">Mensal (M)</td>
          <td className="px-4 py-3 text-[#22C55E]">9%</td>
          <td className="px-4 py-3">
            Média mensal baseada em atividade normal da DEX
          </td>
        </tr>
        <tr>
          <td className="px-4 py-3">Anual (APY)</td>
          <td className="px-4 py-3 text-[#22C55E]">≈108%</td>
          <td className="px-4 py-3">
            Projeção anual matemática, rendimento matematecamente garantido
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* COMO A E-SWAP GERA RENDIMENTO */}
  <div className="space-y-4">
    <h3 className="text-2xl font-semibold text-[#3B82F6]">
      🧠 Como a E-Swap gera esses rendimentos?
    </h3>
    <ul className="list-disc list-inside space-y-2 text-gray-300">
      <li>Taxas reais de swap (trading)</li>
      <li>Uso do contrato E-Coin no website</li>
      <li>Liquidez ativa</li>
      <li>Volume orgânico do ecossistema EdenKingDom</li>
    </ul>
    <p className="text-gray-400">
      Nenhuma recompensa vem de mintagem.  
      O supply da E-Coin é fixo.
    </p>
  </div>

  {/* TAXAS */}
  <div className="bg-[#0D0D0D]/80 border border-gray-800 rounded-xl p-6 space-y-4">
    <h3 className="text-xl font-semibold text-[#D4AF37]">
      💰 Estrutura de Taxas da E-Swap
    </h3>
    <p>
      Taxa padrão de swap: <strong className="text-[#22C55E]">0.3%</strong>
    </p>
    <ul className="list-disc list-inside text-gray-300 space-y-1">
      <li>Maior parte → Smart Pool & Liquidez</li>
      <li>Manutenção da DEX</li>
      <li>Sistema de referência exclusivo da E-Swap</li>
    </ul>
  </div>

  {/* REFERÊNCIAS */}
  <div className="space-y-6">
    <h3 className="text-2xl font-semibold text-[#3B82F6]">
      🤝 Sistema de Referências — E-Swap & Pre-sale e Staking Via E-Coin Website
    </h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-black/50 border border-gray-800 rounded-xl p-5">
        <h4 className="font-semibold text-[#22C55E] mb-2">
          🔗 Referência via DEX
        </h4>
        <ul className="text-gray-300 space-y-1">
          <li>10% da taxa de swap</li>
          <li>Apenas 1 nível</li>
          <li>Somente na E-Swap</li>
        </ul>
      </div>

      <div className="bg-black/50 border border-gray-800 rounded-xl p-5">
        <h4 className="font-semibold text-[#22C55E] mb-2">
          🧾 Website (Contrato - Pre-venda E-Coin)
        </h4>
        <ul className="text-gray-300 space-y-1">
          <li>1% de comissão</li>
          <li>Apenas 1 nível</li>
          <li>Somente compras no site</li>
        </ul>
      </div>
    </div>
  </div>

  {/* MENSAGEM FINAL */}
  <div className="bg-gradient-to-r from-[#D4AF37]/15 to-[#3B82F6]/15
                  border border-gray-800 rounded-2xl p-6 text-center space-y-3">
    <p className="text-lg font-semibold text-gray-200">
      A E-Swap não é um esquema de comissões.
    </p>
    <p className="text-gray-300">
      É uma DEX onde o uso gera valor,
      a liquidez é recompensada
      e as referências participam apenas do que realmente acontece.
    </p>
    <p className="text-[#D4AF37] font-bold">
      Pequenas percentagens. Grande consistência. Economia real.
    </p>
  </div>

</div>

        {/* RODAPÉ */}
        <div className="text-gray-500 text-xs pt-10">
          © EdenKingDom Corporation — E-Coin & EBE DEX (E-Swap) Network
        </div>

      </div>
    </div>
  );
}
