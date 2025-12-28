

'use client';

export default function Whitepaper() {

  // ✅ Função de impressão nativa segura
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print(); // só executa no navegador
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-300 py-20 px-6 print:bg-white print:text-black">
      <div className="max-w-5xl mx-auto space-y-20">
{/* CABEÇALHO */}
        <header className="text-center mb-10 print:text-center"></header>

        {/* TÍTULO */}
        <header>
          <h1 className="text-4xl font-bold text-[#D4AF37] mb-4">
            🌐 WHITEPAPER OFICIAL — E-COIN 
          </h1>
          <p className="text-sm text-gray-200">
            Whitepaper institucional da EdenKingDom Coin (E-Coin) — Moeda corporativa da EdenKingDom Corporation.
          </p>
          <p className="text-sm text-gray-400">
            Versão 1.0 — 15 de Dezembro de 2025
          </p>

          {/* 🔘 BOTÃO IMPRIMIR */}
          <button
            onClick={handlePrint}
            className="bg-[#D4AF37] text-black font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-[#b8962c] transition print:hidden"
          >
            ⬇ Baixar / Imprimir Whitepaper
          </button>
        </header>
        
        {/* CONTEÚDO DO WHITEPAPER */}
        <div id="whitepaper-content"></div>
{/* SUMMARY / ÍNDICE */}
<section className="border border-gray-800 rounded-xl p-6 bg-black/40">
  <h2 className="text-2xl font-bold text-[#D4AF37] mb-6">
    Summary
  </h2>

  <ul className="space-y-2 text-sm">
    <li><a href="#topo">🌐 WHITEPAPER E-COIN OFICIAL</a></li>

    <li><a href="#intro">I. Introdução à EdenKingDom Coin (E-Coin)</a></li>
    <li className="ml-4"><a href="#o-que-e">O que é a E-Coin</a></li>
    <li className="ml-4"><a href="#resumo-executivo">Resumo Executivo</a></li>
    <li className="ml-4"><a href="#conclusao-tecnica">🔒 Conclusão técnica</a></li>

    <li><a href="#paleta">Paleta oficial EKD & E-COIN</a></li>
    <li><a href="#tema">Tema e Paletes Padrão E-Coin</a></li>

    <li><a href="#problema">II. Introdução e Declaração do Problema</a></li>
    <li className="ml-4"><a href="#porque-surgiu">Porque surgiu e quais problemas resolve</a></li>

    <li><a href="#comparativo">⚖️ Comparativo Técnico: Shiba Inu vs. E-Coin</a></li>
    <li className="ml-4"><a href="#visao">📜 Visão Geral e Propósito</a></li>
    <li className="ml-4"><a href="#estrutura">🧩 Estrutura e Clareza</a></li>
    <li className="ml-4"><a href="#tokenomics">🪙 Tokenomics</a></li>
    <li className="ml-4"><a href="#ecossistema">🌐 Ecossistema</a></li>
    <li className="ml-4"><a href="#tecnologia">⚙️ Tecnologia</a></li>
    <li className="ml-4"><a href="#roadmap">🧭 Roteiro (Roadmap)</a></li>
    <li className="ml-4"><a href="#legal">⚖️ Legal e Transparência</a></li>
    <li className="ml-4"><a href="#mensagem">💡 Mensagem Filosófica</a></li>

    <li><a href="#tokens-fracassados">Comparação com tokens fracassados</a></li>

    <li><a href="#solucao">III. A Solução do Problema</a></li>
    <li className="ml-4"><a href="#pilares">🔑 Pilares da Solução</a></li>

    <li><a href="#arquitetura">IV. Tecnologia e Arquitetura da E-Coin</a></li>
    <li className="ml-4"><a href="#especificacoes">🔧 Especificações Técnicas</a></li>
    <li className="ml-4"><a href="#modulos">🧩 Módulos Estruturais</a></li>

    <li><a href="#tokenomics-economia">V. Tokenomics e Especificações Econômicas</a></li>
    <li className="ml-4"><a href="#resumo-geral">📊 Resumo Geral</a></li>
    <li className="ml-4"><a href="#vesting">🔒 Vesting e Time-Lock</a></li>

    <li><a href="#roadmap-detalhado">VI. Roteiro de Desenvolvimento</a></li>
    <li><a href="#mercado">VII. Análise de Mercado e Concorrência</a></li>

    <li><a href="#equipe">VIII. Equipe e Governança</a></li>
    <li><a href="#fundos">IX. Uso dos Fundos</a></li>

    <li><a href="#seguranca">X. Segurança e Conformidade</a></li>
    <li className="ml-4"><a href="#seguranca-tecnica">🔐 Segurança Técnica</a></li>
    <li className="ml-4"><a href="#conformidade">⚖️ Conformidade Jurídica</a></li>

    <li><a href="#disclaimer">XI. Declarações Legais</a></li>
    <li><a href="#conclusao">XII. Conclusão</a></li>
    <li><a href="#assinatura">👑 Assinatura Oficial</a></li>
  </ul>
</section>

{/* I. Introdução à EdenKingDom Coin (E-Coin) */}
<section id="intro" className="relative overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-6 md:p-10">
  {/* efeitos de fundo (glow) */}
  <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#1C2D5A]/20 blur-3xl" />

  <h2 className="text-2xl font-semibold text-[#D4AF37] mb-4">
    I. Introdução à EdenKingDom Coin (E-Coin)
  </h2>

  <p>
    A <strong className="text-[#D4AF37]">EdenKingDom Coin (E-Coin)</strong> é o token oficial do ecossistema EdenKingDom Corporation, criado para unir tecnologia, inovação financeira e inclusão digital em uma única plataforma global. Mais do que apenas uma criptomoeda, a E-Coin representa a base de um sistema financeiro inteligente, sustentável e conectado a múltiplos setores — desde comércio e pagamentos de salarios, até investimentos e acionistas da EdenKingDom Corporation a nivel global, marketplaces, serviços sociais e governança digital da corporação.
  </p>

  <p className="mt-4">
    A <strong className="text-[#D4AF37]"> E-Coin</strong> é a moeda corporativa oficial da EdenKingDom Corporation, criada para operar em todos os setores do ecossistema EKD —{" "}
    <strong className="text-[#D4AF37]"> pagamentos</strong>,{" "}
    <strong className="text-[#D4AF37]"> logística</strong>,{" "}
    <strong className="text-[#D4AF37]"> educação</strong>,{" "}
    <strong className="text-[#D4AF37]"> turismo</strong>,{" "}
    <strong className="text-[#D4AF37]"> saúde</strong>,{" "}
    <strong className="text-[#D4AF37]"> blockchain</strong>,{" "}
    <strong className="text-[#D4AF37]"> energia</strong>,{" "}
    <strong className="text-[#D4AF37]"> serviços financeiros</strong> e{" "}
    <strong className="text-[#D4AF37]"> operações institucionais</strong>.
  </p>
</section>

{/* O que é a E-Coin */}
<section id="o-que-e" className="relative overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-6 md:p-10">
  {/* efeitos de fundo (glow) */}
  <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#708238]/12 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />

  <h2 className="text-2xl font-semibold text-[#D4AF37] mb-4">
    O que é a E-Coin?
  </h2>

  <p>
    A <strong className="text-[#D4AF37]">E-Coin</strong> um token baseado na Binance Smart Chain (BSC), criada pela EdenKingDom Corporation, desenvolvido para oferecer velocidade, baixo custo de transação e segurança de nível institucional. Ele é totalmente integrado ao ecossistema EdenKingDom, servindo como:
  </p>

  <ul className="mt-4 space-y-2">
    <li>
      <strong className="text-[#D4AF37]">• Moeda de pagamento</strong> – para serviços, produtos e marketplaces internos;
    </li>
    <li>
      <strong className="text-[#D4AF37]">• Ativo de investimento</strong> – com programas de staking, pré-venda e recompensas;
    </li>
    <li>
      <strong className="text-[#D4AF37]">• Ferramenta de governança</strong> – para decisões estratégicas da comunidade;
    </li>
    <li>
      <strong className="text-[#D4AF37]">• Mecanismo de liquidez</strong> – para trocas internas e externas via DEX/CEX.
    </li>
  </ul>

  <p className="mt-4">
    Diferente de criptomoedas especulativas, a E-Coin nasce com
    <strong className="text-[#D4AF37]"> oferta total fixa, 100% emitida na gênese</strong>,
    governança DAO, liquidez corporativa e mecanismos de proteção como
    <strong className="text-[#D4AF37]"> buyback inteligente como método de queima deflacionária</strong>.
  </p>

  <div className="my-6">
    <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
  </div>

  <p>
    Com a E-Coin, o usuário tem um token multifuncional, adaptado tanto para uso cotidiano quanto para oportunidades de crescimento financeiro. Comprando na baixa, Vendendo na Alta e ter margem de lucros todos os dia da sua vida e tornar a sua vida mais sustentada com a E-Coin.
  </p>

  <div className="my-6">
    <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
  </div>

  <p>
    A E-Coin veio para mudar vidas e combater a probreza extrema no mundo, mesmo sem um emprego, mas a compra e venda da E-Coin, torna-ti financeiramente estável surtindo bem as necessidades diária da sua vida.
  </p>

  <div className="my-6">
    <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
  </div>

  <p>
    A E-Coin representa o elo entre valor real e valor digital, sendo auditável, deflacionária, descentralizada e corporativamente lastreada. Seu objetivo é unificar o ecossistema financeiro interno da EdenKingDom Corporation, conectando serviços, pagamentos, investimentos e governança em uma única rede interoperável.
  </p>

  <p className="mt-4">
    Diferente das criptomoedas especulativas, a E-Coin nasceu com oferta total fixa e imutável, já 100% emitida na gênese, garantindo escassez e estabilidade. A valorização da moeda está diretamente ligada à expansão do ecossistema corporativo, ao volume de uso real e à integração de receitas multissetoriais da EdenKingDom.
  </p>

  <p className="mt-4">
    Além de funcionar como moeda de pagamento, a E-Coin atua como ativo de investimento, mecanismo de staking, moeda de liquidez para DEX/CEX, e instrumento de governança comunitária via o modelo GenesisDAO.
  </p>
</section>


        {/* Resumo Executivo */}
        <section>
          <h2 className="text-2xl font-semibold text-[#D4AF37] mb-4">
            Resumo Executivo — EdenKingDom Coin (E-Coin)

          </h2>
          <ul className="space-y-2">
            <li>“A Moeda Corporativa da Nova Era da economia da informação”;<strong className="text-[#D4AF37]"></strong></li>
            <li>📄 Versão:  <strong className="text-[#D4AF37]">1.0 — 15 de Dezembro de 2025;</strong></li>
            <li>🏛️ Emissora: <strong className="text-[#D4AF37]">EdenKingDom Corporation;</strong></li>
            <li>🔗 Blockchain: <strong className="text-[#D4AF37]">Binance Smart Chain (BEP-20);</strong></li>
            <li>💠 Símbolo: <strong className="text-[#D4AF37]"> E-Coin;</strong></li>
            <li>👑Contrato: <strong className="text-[#D4AF37]"> 0xDf69235019cc416dd5Be75dfc0eDc922aB4b5964;</strong></li>
            <li>🔒 Supply Total:<strong className="text-[#D4AF37]"> 100% emitido na gênese 1 trilhão, sem emissões futuras, comparado a Shiba Inu 1 quatrilhão com mint futuras;</strong></li>
            <li>📍 Sede: <strong className="text-[#D4AF37]"> Moçambique - Nhmatanda & EUA - Nova Iorque;</strong></li>
            <li>🧭 Lema: <strong className="text-[#D4AF37]"> <em>“O elo entre o valor real e o digital.”</em></strong></li>
          </ul>
        </section>

{/* 🔒 Conclusão técnica */}
        <section>
          <h2 className="text-2xl font-semibold text-[#D4AF37] mb-4">
            🔒 Conclusão técnica
          </h2>
          <p>
  👉 A E-Coin é 100% imutável quanto à emissão, não possui mint, burn manual,
  blacklist, whitelist nem mecanismos de alteração de taxas.
</p>
<p>
  Isto confirma “Supply fixo e imutável”, conforme o nosso whitepaper diz desde o começo.
</p>

          

{/* 🔥 E sobre a queima? */}
        <section>
          <h2 className="text-2xl font-semibold text-[#D4AF37] mb-4">
            🔥 E sobre a queima?
          </h2>
          <p>
            👉 Os nossos auditores em si, não encontraram uma função burn() — por isso indicam “Token burn function not found” Portanto, nossa E-Coin não é queimável.

<p>
            Mas há duas formas diferentes de “queimar” tokens:
          </p>
<h2 className="text-2xl font-semibold text-[#D4AF37] mb-4">
            🔸 A. Burn on-chain (automático ou manual)
          </h2>
          <ul className="space-y-2">
            <li>• Requer a função burn() ou transferTo(address(0)).</li>
            <li>• O contrato da E-Coin não inclui isso — ou seja, não queima automaticamente parte de cada transação.</li>
          </ul>
          </p>
          
          </section>
<h2 className="text-2xl font-semibold text-[#D4AF37] mb-4">
           
          </h2>
          <p>
            

<p>
           
          </p>
<h2 className="text-2xl font-semibold text-[#D4AF37] mb-4">
            🔸 B. Burn econômico (via buyback e tesouraria)
          </h2>
          <ul className="space-y-2">
            <li>• O Buyback é o modelo e sistema corporativo - EdenKingDom que executa queimas indiretas</li>
            <li>• O “buyback” recompra tokens de mercado e os envia para reserva de liquidez ou carteiras inativas.</li>
            <li>•	Isso reduz circulação real sem alterar o supply total e fixo no contrato causando escassez e valorização em Massa da E-Coin no mercado.</li>
          </ul>
          </p>
          <p>
            ✅ Portanto, o contrato é fixo, mas o ecossistema implementa o burn via gestão corporativa e buyback, não via função blockchain direta.
          </p>
          <p>
            ✅ Para concluir, o contrato é deflacionário estático (sem mint) e o ecossistema é deflacionário dinâmico (via buyback e reservas).
          </p>
        </section>

        <section id="emissao-queima-buyback">
  <h2 className="text-2xl font-semibold text-[#D4AF37] mb-6">
    Emissão, Queima e Buyback — modelo da E-Coin
  </h2>

<div className="overflow-x-auto">
  <table className="min-w-[640px] w-full border-collapse text-sm">
    <thead className="bg-black/60">
      <tr>
        <th className="border border-gray-700 px-4 py-3 text-left text-[#D4AF37]">
          Mecanismo
        </th>
        <th className="border border-gray-700 px-4 py-3 text-left text-[#D4AF37]">
          Implementação na E-Coin
        </th>
        <th className="border border-gray-700 px-4 py-3 text-left text-[#D4AF37]">
          Explicação
        </th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td className="border border-gray-700 px-4 py-3">
          Mint (emissão)
        </td>
        <td className="border border-gray-700 px-4 py-3 text-red-400 font-semibold">
          ❌ Inexistente
        </td>
        <td className="border border-gray-700 px-4 py-3">
          Todo o supply (100%) foi emitido na gênese.
        </td>
      </tr>

      <tr>
        <td className="border border-gray-700 px-4 py-3">
          Burn (queima direta)
        </td>
        <td className="border border-gray-700 px-4 py-3 text-red-400 font-semibold">
          ❌ Inexistente no contrato
        </td>
        <td className="border border-gray-700 px-4 py-3">
          Pode ser executada via envio para carteira “burn” manualmente pela tesouraria.
        </td>
      </tr>

      <tr>
        <td className="border border-gray-700 px-4 py-3">
          Burn indireto (econômico)
        </td>
        <td className="border border-gray-700 px-4 py-3 text-green-400 font-semibold">
          ✅ Sim, via buyback
        </td>
        <td className="border border-gray-700 px-4 py-3">
          A tesouraria recompra tokens quando o preço cai, removendo-os da circulação.
        </td>
      </tr>

      <tr>
        <td className="border border-gray-700 px-4 py-3">
          Buyback inteligente
        </td>
        <td className="border border-gray-700 px-4 py-3 text-green-400 font-semibold">
          ✅ Implementado na política corporativa
        </td>
        <td className="border border-gray-700 px-4 py-3">
          Atua como “anti-dump”: estabiliza o preço e protege holders.
        </td>
      </tr>

      <tr>
        <td className="border border-gray-700 px-4 py-3">
          Halving / emissão decrescente
        </td>
        <td className="border border-gray-700 px-4 py-3 text-red-400 font-semibold">
          ❌ Não aplicável
        </td>
        <td className="border border-gray-700 px-4 py-3">
          Supply fixo, portanto não há nova emissão a reduzir.
        </td>
      </tr>
    </tbody>
  </table>
</div>
</section>

<section id="comparacao-bitcoin-ecoin">
  <h2 className="text-2xl font-semibold text-[#D4AF37] mb-6">
    💼 Comparação direta (Bitcoin vs E-Coin)
  </h2>

  {/* TABELA AQUI */}
  <div className="overflow-x-auto">
  <table className="min-w-[640px] w-full border-collapse text-sm">
    <thead className="bg-black/60">
      <tr>
        <th className="border border-gray-700 px-4 py-3 text-left text-[#D4AF37]">
          Parâmetro
        </th>
        <th className="border border-gray-700 px-4 py-3 text-left text-[#D4AF37]">
          Bitcoin
        </th>
        <th className="border border-gray-700 px-4 py-3 text-left text-[#D4AF37]">
          E-Coin
        </th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td className="border border-gray-700 px-4 py-3 font-medium">
          Rede
        </td>
        <td className="border border-gray-700 px-4 py-3">
          Própria (PoW)
        </td>
        <td className="border border-gray-700 px-4 py-3">
          Binance Smart Chain (BEP-20)
        </td>
      </tr>

      <tr>
        <td className="border border-gray-700 px-4 py-3 font-medium">
          Emissão (mint)
        </td>
        <td className="border border-gray-700 px-4 py-3">
          Automática até 21M
        </td>
        <td className="border border-gray-700 px-4 py-3 text-green-400 font-semibold">
          100% emitido na gênese
        </td>
      </tr>

      <tr>
        <td className="border border-gray-700 px-4 py-3 font-medium">
          Burn (perda ou envio)
        </td>
        <td className="border border-gray-700 px-4 py-3">
          Indireto (endereços perdidos)
        </td>
        <td className="border border-gray-700 px-4 py-3">
          Indireto via buyback corporativo
        </td>
      </tr>

      <tr>
        <td className="border border-gray-700 px-4 py-3 font-medium">
          Halving
        </td>
        <td className="border border-gray-700 px-4 py-3">
          Sim, a cada 210.000 blocos
        </td>
        <td className="border border-gray-700 px-4 py-3 text-green-400 font-semibold">
          Não necessário (supply fixo)
        </td>
      </tr>

      <tr>
        <td className="border border-gray-700 px-4 py-3 font-medium">
          Controle humano
        </td>
        <td className="border border-gray-700 px-4 py-3">
          Nenhum
        </td>
        <td className="border border-gray-700 px-4 py-3">
          Corporativo, apenas para/na buybacks via EdenKingDom Treasury
        </td>
      </tr>

      <tr>
        <td className="border border-gray-700 px-4 py-3 font-medium">
          Lastro real
        </td>
        <td className="border border-gray-700 px-4 py-3 text-red-400 font-semibold">
          Não
        </td>
        <td className="border border-gray-700 px-4 py-3 text-green-400 font-semibold">
          Sim, receitas multissetoriais
        </td>
      </tr>

      <tr>
        <td className="border border-gray-700 px-4 py-3 font-medium">
          Governança
        </td>
        <td className="border border-gray-700 px-4 py-3">
          Mineradores / comunidade
        </td>
        <td className="border border-gray-700 px-4 py-3">
          GenesisDAO / Holders corporativos, Traders, Tercearios, Holders e Público no geral
        </td>
      </tr>
    </tbody>
  </table>
</div>

</section>

<section id="paleta">
  <h2 className="text-2xl font-semibold text-[#D4AF37] mb-6">
    🎨 Paleta oficial EKD & E-COIN
  </h2>

  {/* TABELA AQUI */}
  <div className="overflow-x-auto mb-10">
  <table className="min-w-[640px] w-full border-collapse text-sm">
    <thead className="bg-black/60">
      <tr>
        <th className="border border-gray-700 px-4 py-3 text-left text-[#D4AF37]">
          Cor
        </th>
        <th className="border border-gray-700 px-4 py-3 text-left text-[#D4AF37]">
          Código HEX
        </th>
        <th className="border border-gray-700 px-4 py-3 text-left text-[#D4AF37]">
          Observação
        </th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td className="border border-gray-700 px-4 py-3 font-medium">
          Dourado
        </td>
        <td className="border border-gray-700 px-4 py-3 text-[#D4AF37] font-semibold">
          #D4AF37
        </td>
        <td className="border border-gray-700 px-4 py-3">
          Cor principal da E-Coin
        </td>
      </tr>

      <tr>
        <td className="border border-gray-700 px-4 py-3 font-medium">
          Verde-oliva
        </td>
        <td className="border border-gray-700 px-4 py-3 text-[#708238] font-semibold">
          #708238
        </td>
        <td className="border border-gray-700 px-4 py-3">
          Cor institucional de apoio
        </td>
      </tr>

      <tr>
        <td className="border border-gray-700 px-4 py-3 font-medium">
          Azul-profundo
        </td>
        <td className="border border-gray-700 px-4 py-3 text-[#1C2D5A] font-semibold">
          #1C2D5A
        </td>
        <td className="border border-gray-700 px-4 py-3">
          Tecnologia, segurança e confiança
        </td>
      </tr>

      <tr>
        <td className="border border-gray-700 px-4 py-3 font-medium">
          Branco-pérola
        </td>
        <td className="border border-gray-700 px-4 py-3 text-gray-200 font-semibold">
          #FDFDFD
        </td>
        <td className="border border-gray-700 px-4 py-3">
          Transparência e clareza (E-Coin)
        </td>
      </tr>

      <tr>
        <td className="border border-gray-700 px-4 py-3 font-medium">
          Cinza-mineral
        </td>
        <td className="border border-gray-700 px-4 py-3 text-[#8E8E8E] font-semibold">
          #8E8E8E
        </td>
        <td className="border border-gray-700 px-4 py-3">
          Elementos neutros e institucionais
        </td>
      </tr>
    </tbody>
  </table>
</div>

<div id="tema" className="space-y-6">
  <h3 className="text-xl font-semibold text-[#D4AF37]">
    Tema e Paletes Padrão E-Coin (Ouro + Preto + Branco perolado)
  </h3>

  <p>
    🎯 <strong>Ideal para:</strong> Whitepapers, websites e PDFs oficiais.
  </p>

  <div>
    <p className="font-semibold mb-2">🎨 Paleta:</p>
    <ul className="list-disc ml-6 space-y-1">
      <li>
        <span className="text-[#D4AF37] font-semibold">
          Ouro metálico #D4AF37
        </span>{" "}
        → riqueza e valor.
      </li>
      <li>
        <span className="font-semibold">Preto profundo #000000</span> → autoridade e solidez.
      </li>
      <li>
        <span className="text-gray-200 font-semibold">
          Branco perolado #FDFDFD
        </span>{" "}
        → pureza e transparência.
      </li>
    </ul>
  </div>

  <div>
    <p className="font-semibold mb-2">✨ Estilo visual:</p>
    <ul className="list-disc ml-6 space-y-1">
      <li>Fundo negro ou cinza-chumbo com reflexos dourados.</li>
      <li>Letras e ícones dourados, com brilho suave.</li>
      <li>Tabelas e gráficos em moldura dourada.</li>
    </ul>
  </div>

  <div>
    <p className="font-semibold mb-2">💪 Força:</p>
    <p>
      Transmite prestígio, estabilidade e confiança premium — como Bitcoin + Binance. O que
      Combina perfeitamente com o conceito da nossa <em>“Moeda Corporativa Global — E-Coin”</em>.
    </p>
  </div>
</div>

</section>

{/* II. Introdução e Declaração do Problema */}
<section
  id="problema"
  className="relative overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-6 md:p-10"
>
  {/* efeitos de fundo */}
  <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#1C2D5A]/25 blur-3xl" />

  <h2 className="text-2xl font-semibold text-[#D4AF37] mb-4">
    II. Introdução e Declaração do Problema
  </h2>

  <p>
    O cenário atual do mercado de criptomoedas é dominado por ativos com grande
    volatilidade, ausência de lastro real e falta de utilidade prática. Muitos
    tokens fracassam por não possuírem sustentação económica ou estrutura
    corporativa capaz de garantir liquidez estável e confiança aos traders e
    holders.
  </p>

  <p className="mt-4">
    A maioria dos projetos cripto existentes baseia-se exclusivamente em
    especulação de mercado, sem conexão com economias produtivas ou modelos de
    governança sólidos, expondo investidores a riscos elevados e instabilidade
    constante.
  </p>

  {/* Problemas identificados */}
  <h3 className="mt-8 mb-3 text-xl font-semibold text-[#D4AF37]">
    Problemas identificados
  </h3>

  <ul className="space-y-2">
    <li>
      <strong className="text-[#D4AF37]">• Alta volatilidade</strong> — quedas
      drásticas de preço causadas por especulação e manipulação.
    </li>
    <li>
      <strong className="text-[#D4AF37]">• Ausência de valor real</strong> — tokens
      sem conexão com economias produtivas.
    </li>
    <li>
      <strong className="text-[#D4AF37]">• Falta de governança transparente</strong>{" "}
      — decisões centralizadas e pouco auditáveis.
    </li>
    <li>
      <strong className="text-[#D4AF37]">• Rug pulls e insegurança técnica</strong>{" "}
      — contratos sem auditoria ou liquidez bloqueada.
    </li>
    <li>
      <strong className="text-[#D4AF37]">• Falta de integração prática</strong> —
      projetos sem utilidade além do próprio mercado cripto.
    </li>
  </ul>

  <p className="mt-6">
    A <strong className="text-[#D4AF37]">E-Coin</strong> surge como resposta
    direta a essas falhas, estabelecendo um modelo híbrido e sustentável,
    apoiado por economia real, liquidez corporativa, auditoria descentralizada
    e, sobretudo, segurança reforçada para traders e holders através do
    mecanismo de <strong className="text-[#D4AF37]">buyback inteligente</strong>.
  </p>

  {/* separador */}
  <div className="my-8">
    <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
  </div>

  {/* Porque surgiu */}
  <h3
    id="porque-surgiu"
    className="mb-3 text-xl font-semibold text-[#D4AF37]"
  >
    Porque surgiu e quais problemas resolve
  </h3>

  <p>
    O mercado cripto está repleto de tokens que fracassaram por falta de
    utilidade real, ausência de governança transparente e estratégias
    económicas insustentáveis. A E-Coin surge para resolver exatamente esses
    problemas, oferecendo um modelo financeiro institucional e orientado para
    uso real.
  </p>

  <ul className="mt-4 space-y-2">
    <li>
      <strong className="text-[#D4AF37]">
        Preço interno estável e controlado
      </strong>{" "}
      — evitando oscilações extremas e protegendo investidores;
    </li>
    <li>
      <strong className="text-[#D4AF37]">
        Integração prática com a economia real
      </strong>{" "}
      — pagamentos, serviços, marketplaces e investimentos em um único
      ecossistema;
    </li>
    <li>
      <strong className="text-[#D4AF37]">
        Modelo de referência inovador
      </strong>{" "}
      — bonificações e recompensas distribuídas de forma clara, rastreável e
      auditável;
    </li>
    <li>
      <strong className="text-[#D4AF37]">
        Liquidez garantida
      </strong>{" "}
      — via pools e swaps integrados, sem dependência exclusiva de especulação
      externa.
    </li>
  </ul>

  <p className="mt-6">
    Em vez de ser apenas mais uma moeda no mercado, a{" "}
    <strong className="text-[#D4AF37]">E-Coin</strong> atua como o{" "}
    <strong className="text-[#D4AF37]">
      motor financeiro central do ecossistema EdenKingDom
    </strong>
    , sustentando operações reais, crescimento institucional e confiança de
    longo prazo.
  </p>
</section>

{/* ⚖️ Comparação Técnica: Shiba Inu vs. E-Coin */}
<section
  id="comparativo"
  className="relative overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-6 md:p-10"
>
  {/* efeitos de fundo */}
  <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-[#1C2D5A]/25 blur-3xl" />

  <h2 className="text-2xl font-semibold text-[#D4AF37] mb-6">
    ⚖️ Comparação Técnica: Shiba Inu vs. E-Coin (EdenKingDom Coin)
  </h2>

  <h3
    id="visao"
    className="text-xl font-semibold text-[#D4AF37] mb-4"
  >
    1. 📜 Visão Geral e Propósito
  </h3>

  {/* TABELA */}
  <div className="overflow-x-auto">
    <table className="min-w-[640px] w-full border-collapse text-sm">
      <thead>
        <tr className="bg-[#D4AF37]/10">
          <th className="border border-gray-700 px-4 py-3 text-left text-[#D4AF37]">
            Aspecto
          </th>
          <th className="border border-gray-700 px-4 py-3 text-left">
            Shiba Inu
          </th>
          <th className="border border-gray-700 px-4 py-3 text-left">
            E-Coin
          </th>
        </tr>
      </thead>

      <tbody>
        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-4 py-3 font-semibold text-[#D4AF37]">
            Identidade
          </td>
          <td className="border border-gray-700 px-4 py-3">
            “Experimento de comunidade descentralizada” (pág. 2–3).
          </td>
          <td className="border border-gray-700 px-4 py-3">
            “Moeda corporativa descentralizada, sustentável e multi-setorial.”
          </td>
        </tr>

        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-4 py-3 font-semibold text-[#D4AF37]">
            Propósito Central
          </td>
          <td className="border border-gray-700 px-4 py-3">
            Criar um ecossistema liderado por comunidade (SHIB, LEASH, BONE).
          </td>
          <td className="border border-gray-700 px-4 py-3">
            Criar uma infraestrutura econômica para o ecossistema EdenKingDom Corporation,
            com utilidade real e rendimento estruturado.
          </td>
        </tr>

        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-4 py-3 font-semibold text-[#D4AF37]">
            Tom do Documento
          </td>
          <td className="border border-gray-700 px-4 py-3">
            Humorístico e comunitário (“woof paper”).
          </td>
          <td className="border border-gray-700 px-4 py-3">
            Profissional, institucional e voltado a investidores, holders, traders e governança
            corporativa.
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* COMENTÁRIO */}
  <div className="mt-8">
    <h4
      id="comentario"
      className="text-lg font-semibold text-[#4ade80] mb-2"
    >
      🟢 Comentário
    </h4>

    <p>
      O Shiba nasceu como movimento de comunidade, sem finalidade corporativa.
      A <strong className="text-[#D4AF37]">E-Coin</strong> possui um propósito
      econômico-estrutural, integrando-se a empresas, questoes utilitários e
      produtos financeiros, o que lhe confere uma base muito mais sólida para
      whitepapers institucionais e futuras listagens em CEX.
    </p>
  </div>
</section>

{/* 🧩 Estrutura e Clareza */}
<section
  id="estrutura"
  className="relative overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-6 md:p-10"
>
  {/* efeitos de fundo */}
  <div className="pointer-events-none absolute -top-20 left-0 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-[#1C2D5A]/30 blur-3xl" />

  <h3 className="text-xl font-semibold text-[#D4AF37] mb-6">
    2. 🧩 Estrutura e Clareza
  </h3>

  {/* TABELA */}
  <div className="overflow-x-auto">
    <table className="min-w-[640px] w-full border-collapse text-sm">
      <thead>
        <tr className="bg-[#D4AF37]/10">
          <th className="border border-gray-700 px-4 py-3 text-left text-[#D4AF37]">
            Critério
          </th>
          <th className="border border-gray-700 px-4 py-3 text-left">
            Shiba Inu
          </th>
          <th className="border border-gray-700 px-4 py-3 text-left">
            E-Coin
          </th>
        </tr>
      </thead>

      <tbody>
        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-4 py-3 font-semibold text-[#D4AF37]">
            Formato do Documento
          </td>
          <td className="border border-gray-700 px-4 py-3">
            8 páginas curtas, linguagem popular e memética.
          </td>
          <td className="border border-gray-700 px-4 py-3">
            Planejado com mais de 10 seções técnicas (Resumo Executivo →
            Considerações Legais e mais).
          </td>
        </tr>

        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-4 py-3 font-semibold text-[#D4AF37]">
            Detalhamento
          </td>
          <td className="border border-gray-700 px-4 py-3">
            Simples; quase sem dados técnicos nem tokenomics profundos.
          </td>
          <td className="border border-gray-700 px-4 py-3">
            Extremamente técnico: inclui economia do token, plano de
            desenvolvimento, tecnologia BSC, roadmap e auditorias.
          </td>
        </tr>

        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-4 py-3 font-semibold text-[#D4AF37]">
            Design Visual
          </td>
          <td className="border border-gray-700 px-4 py-3">
            Básico, com figuras caninas e humor (“woof woof”).
          </td>
          <td className="border border-gray-700 px-4 py-3">
            Prevê layout corporativo (infográficos, gráficos de supply,
            diagramas de arquitetura, etc).
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* COMENTÁRIO */}
  <div className="mt-8">
    <h4 className="text-lg font-semibold text-[#4ade80] mb-2">
      🟢 Comentário
    </h4>
    <p>
      O whitepaper da <strong className="text-[#D4AF37]">E-Coin</strong> será
      muito mais robusto e auditável, atendendo aos padrões exigidos por
      exchanges CEX como <strong>Binance</strong> e <strong>Gate.io</strong>.
    </p>
  </div>
</section>

{/* 🪙 Tokenomics */}
<section
  id="tokenomics"
  className="relative overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-6 md:p-10"
>
  {/* efeitos de fundo */}
  <div className="pointer-events-none absolute -top-24 left-10 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 right-10 h-80 w-80 rounded-full bg-[#1C2D5A]/30 blur-3xl" />

  <h3 className="text-xl font-semibold text-[#D4AF37] mb-6">
    3. 🪙 Tokenomics
  </h3>

  {/* TABELA */}
  <div className="overflow-x-auto">
    <table className="min-w-[640px] w-full border-collapse text-sm">
      <thead>
        <tr className="bg-[#D4AF37]/10">
          <th className="border border-gray-700 px-4 py-3 text-left text-[#D4AF37]">
            Elemento
          </th>
          <th className="border border-gray-700 px-4 py-3 text-left">
            Shiba Inu
          </th>
          <th className="border border-gray-700 px-4 py-3 text-left">
            E-Coin
          </th>
        </tr>
      </thead>

      <tbody>
        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-4 py-3 font-semibold text-[#D4AF37]">
            Rede
          </td>
          <td className="border border-gray-700 px-4 py-3">
            Ethereum (ERC-20).
          </td>
          <td className="border border-gray-700 px-4 py-3">
            Binance Smart Chain (BEP-20).
          </td>
        </tr>

        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-4 py-3 font-semibold text-[#D4AF37]">
            Supply Total
          </td>
          <td className="border border-gray-700 px-4 py-3">
            1 quadrilhão SHIB, com 50 % enviados a Vitalik Buterin (pág. 3–4).
          </td>
          <td className="border border-gray-700 px-4 py-3">
            Supply fixo e único, 100% emitido na gênesis: (1 trilhão E-Coin), contrato sem funções: (Mint e burn), tudo controlado e deflacionado pelo mecanismo (Buy-Back Engine e Smart Pool).
          </td>
        </tr>

        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-4 py-3 font-semibold text-[#D4AF37]">
            Burn / Emission
          </td>
          <td className="border border-gray-700 px-4 py-3">
            Queimas pontuais e “liquidity lock”.
          </td>
          <td className="border border-gray-700 px-4 py-3">
            Smart Burn + Smart Mint automáticos pelo mecanismo: (Buy-Back Engine e Smart Pool), vinculados a staking e liquidez.
          </td>
        </tr>

        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-4 py-3 font-semibold text-[#D4AF37]">
            Liquidez
          </td>
          <td className="border border-gray-700 px-4 py-3">
            Fornecida à Uniswap, parcialmente bloqueada.
          </td>
          <td className="border border-gray-700 px-4 py-3">
            Planejada via PancakeSwap LP, E-Swap + E-Treasury USDT sobre influências directas da EBC.
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* COMENTÁRIO */}
  <div className="mt-8">
    <h4 className="text-lg font-semibold text-[#4ade80] mb-2">
      🟢 Comentário
    </h4>
    <p>
      A <strong className="text-[#D4AF37]">E-Coin</strong> implementa mecanismos
      de controle econômico reais — emissão e queima inteligentes, vesting,
      staking pelo mecanismo: (Buy-Back Engine e Smart Pool) — enquanto o Shiba dependia de hype e de grandes
      detentores.
    </p>
  </div>
</section>

{/* 🌐 Ecossistema */}
<section
  id="ecossistema"
  className="relative overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-6 md:p-10"
>
  {/* efeitos de fundo */}
  <div className="pointer-events-none absolute -top-24 left-0 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-[#1C2D5A]/30 blur-3xl" />

  <h3 className="text-xl font-semibold text-[#D4AF37] mb-6">
    4. 🌐 Ecossistema
  </h3>

  {/* TABELA */}
  <div className="overflow-x-auto">
    <table className="min-w-[640px] w-full border-collapse text-sm">
      <thead>
        <tr className="bg-[#D4AF37]/10">
          <th className="border border-gray-700 px-4 py-3 text-left text-[#D4AF37]">
            Aspecto
          </th>
          <th className="border border-gray-700 px-4 py-3 text-left">
            Shiba Inu
          </th>
          <th className="border border-gray-700 px-4 py-3 text-left">
            E-Coin
          </th>
        </tr>
      </thead>

      <tbody>
        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-4 py-3 font-semibold text-[#D4AF37]">
            Componentes
          </td>
          <td className="border border-gray-700 px-4 py-3">
            SHIB, LEASH, BONE, ShibaSwap, NFTs, Shibarium (pág. 5–7).
          </td>
          <td className="border border-gray-700 px-4 py-3">
            A E-Coin, Dashboard Financeiro, HFT Arbitrage Bot - EBC, Marketplace,
            Staking Engine - Smart Pool, Referral System, E-Swap, EBC, E-Pay, E-Wallet, E-Finder, E-Jobe, E-Code+, E-Pay Crypto ATM & Card, E-Donation, E-Chain: Bridge CEX – DEX.
          </td>
        </tr>

        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-4 py-3 font-semibold text-[#D4AF37]">
            Aplicação Real
          </td>
          <td className="border border-gray-700 px-4 py-3">
            Trocas em DEX e NFT de mascotes.
          </td>
          <td className="border border-gray-700 px-4 py-3">
            Pagamentos, staking, arbitragem, integração multi-setorial
            (EdenKingDom brands).
          </td>
        </tr>

        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-4 py-3 font-semibold text-[#D4AF37]">
            Governança
          </td>
          <td className="border border-gray-700 px-4 py-3">
            Limitada (BONE DAO).
          </td>
          <td className="border border-gray-700 px-4 py-3">
            Completa – baseada em holders e organização corporativa.
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* COMENTÁRIO */}
  <div className="mt-8">
    <h4 className="text-lg font-semibold text-[#4ade80] mb-2">
      🟢 Comentário
    </h4>
    <p>
      A <strong className="text-[#D4AF37]">E-Coin</strong> tem funções
      utilitárias corporativas — não depende apenas de memes ou comunidades
      espontâneas.
    </p>
  </div>
</section>

{/* ⚙️ Tecnologia */}
<section
  id="tecnologia"
  className="relative overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-6 md:p-10"
>
  {/* efeitos de fundo */}
  <div className="pointer-events-none absolute -top-24 left-10 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 right-10 h-80 w-80 rounded-full bg-[#1C2D5A]/30 blur-3xl" />

  <h3 className="text-xl font-semibold text-[#D4AF37] mb-6">
    5. ⚙️ Tecnologia
  </h3>

  {/* TABELA */}
  <div className="overflow-x-auto">
    <table className="min-w-[640px] w-full border-collapse text-sm">
      <thead>
        <tr className="bg-[#D4AF37]/10">
          <th className="border border-gray-700 px-4 py-3 text-left text-[#D4AF37]">
            Critério
          </th>
          <th className="border border-gray-700 px-4 py-3 text-left">
            Shiba Inu
          </th>
          <th className="border border-gray-700 px-4 py-3 text-left">
            E-Coin
          </th>
        </tr>
      </thead>

      <tbody>
        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-4 py-3 font-semibold text-[#D4AF37]">
            Blockchain
          </td>
          <td className="border border-gray-700 px-4 py-3">
            Ethereum.
          </td>
          <td className="border border-gray-700 px-4 py-3">
            Binance Smart Chain (BEP-20).
          </td>
        </tr>

        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-4 py-3 font-semibold text-[#D4AF37]">
            Contratos
          </td>
          <td className="border border-gray-700 px-4 py-3">
            ERC-20 simples + Uniswap LP.
          </td>
          <td className="border border-gray-700 px-4 py-3">
            Contratos inteligentes modulares (staking, presale, referral System,
            ledger via Telegram Bot). Pre-Listagem na Pancakeswap e E-Swap - (a DEX da casa), E-Pay Crypto ATM & Card.
          </td>
        </tr>

        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-4 py-3 font-semibold text-[#D4AF37]">
            Auditoria
          </td>
          <td className="border border-gray-700 px-4 py-3">
            Nenhuma verificada oficialmente.
          </td>
          <td className="border border-gray-700 px-4 py-3">
            Planejada e inicialmente auditada com CertiK, GoPlus e Hashdit.
          </td>
        </tr>

        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-4 py-3 font-semibold text-[#D4AF37]">
            Escalabilidade
          </td>
          <td className="border border-gray-700 px-4 py-3">
            Custos altos de gas.
          </td>
          <td className="border border-gray-700 px-4 py-3">
            Transações baratas, rápidas e interoperáveis.
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* COMENTÁRIO */}
  <div className="mt-8">
    <h4 className="text-lg font-semibold text-[#4ade80] mb-2">
      🟢 Comentário
    </h4>
    <p>
      A <strong className="text-[#D4AF37]">E-Coin</strong> combina eficiência
      BSC com design DeFi real, o que oferece melhor desempenho técnico e custo
      operacional.
    </p>
  </div>
</section>

{/* 🧭 Roteiro (Roadmap) */}
<section
  id="roadmap"
  className="relative overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-6 md:p-10"
>
  {/* efeitos de fundo */}
  <div className="pointer-events-none absolute -top-24 left-0 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-[#1C2D5A]/30 blur-3xl" />

  <h3 className="text-xl font-semibold text-[#D4AF37] mb-6">
    6. 🧭 Roteiro (Roadmap)
  </h3>

  {/* TABELA */}
  <div className="overflow-x-auto">
    <table className="min-w-[640px] w-full border-collapse text-sm">
      <thead>
        <tr className="bg-[#D4AF37]/10">
          <th className="border border-gray-700 px-4 py-3 text-left">
            Shiba Inu
          </th>
          <th className="border border-gray-700 px-4 py-3 text-left">
            E-Coin
          </th>
        </tr>
      </thead>

      <tbody>
        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-4 py-4">
            Roteiro pouco definido, baseado em comunidade e listagens.
          </td>
          <td className="border border-gray-700 px-4 py-4">
            Roadmap estruturado por fases: Presale → Staking → DEX → CEX →
            Governança → Expansão Web3 & EBC e uso como meio de Pagamentos (serviços, Salrios, Supermercados, etc) pelo E-Pay, E-Job e E-Pay Crypto ATM & Card.
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* COMENTÁRIO */}
  <div className="mt-8">
    <h4 className="text-lg font-semibold text-[#4ade80] mb-2">
      🟢 Comentário
    </h4>
    <p>
      A <strong className="text-[#D4AF37]">E-Coin</strong> tem visão corporativa
      e escalonada, algo que faltou no Shiba Inu.
    </p>
  </div>
</section>

{/* ⚖️ Legal e Transparência */}
<section
  id="legal-transparency"
  className="relative overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-6 md:p-10"
>
  {/* efeitos de fundo */}
  <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-[#1C2D5A]/30 blur-3xl" />

  <h3 className="text-xl font-semibold text-[#D4AF37] mb-6">
    7. ⚖️ Legal e Transparência
  </h3>

  {/* TABELA */}
  <div className="overflow-x-auto">
    <table className="min-w-[640px] w-full border-collapse text-sm">
      <thead>
        <tr className="bg-[#D4AF37]/10">
          <th className="border border-gray-700 px-4 py-3 text-left">
            Aspecto
          </th>
          <th className="border border-gray-700 px-4 py-3 text-left">
            Shiba Inu
          </th>
          <th className="border border-gray-700 px-4 py-3 text-left">
            E-Coin
          </th>
        </tr>
      </thead>

      <tbody>
        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-4 py-4 font-medium">
            Declaração Legal
          </td>
          <td className="border border-gray-700 px-4 py-4">
            Nenhuma proteção jurídica explícita.
          </td>
          <td className="border border-gray-700 px-4 py-4">
            Seção completa com disclaimer, conformidade AML / KYC e
            preparação para CEX listing.
          </td>
        </tr>

        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-4 py-4 font-medium">
            Equipe
          </td>
          <td className="border border-gray-700 px-4 py-4">
            Anônima (Ryoshi).
          </td>
          <td className="border border-gray-700 px-4 py-4">
            Equipe identificada (Athelstan Pateron Atanas
CEO & Fundador — EdenKingDom Corporation
 &amp;
            Code+ - EdenKingDom Dev Team).
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* COMENTÁRIO */}
  <div className="mt-8">
    <h4 className="text-lg font-semibold text-[#4ade80] mb-2">
      🟢 Comentário
    </h4>
    <p>
      Essa <strong className="text-[#D4AF37]">transparência</strong> e
      <strong className="text-[#D4AF37]"> formalização jurídica</strong>
       colocam a E-Coin em nível institucional, apta a registro,
      compliance regulatório e integração com grandes exchanges.
    </p>
  </div>
</section>

{/* 💡 Mensagem Filosófica */}
<section
  id="philosophical-message"
  className="relative overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-6 md:p-10"
>
  {/* efeitos visuais suaves de fundo */}
  <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-[#1C2D5A]/30 blur-3xl" />

  <h3 className="text-xl font-semibold text-[#D4AF37] mb-6">
    8. 💡 Mensagem Filosófica
  </h3>

  {/* TABELA */}
  <div className="overflow-x-auto">
    <table className="min-w-[640px] w-full border-collapse text-sm">
      <thead>
        <tr className="bg-[#D4AF37]/10">
          <th className="border border-gray-700 px-4 py-3 text-left">
            Tema
          </th>
          <th className="border border-gray-700 px-4 py-3 text-left">
            Shiba Inu
          </th>
          <th className="border border-gray-700 px-4 py-3 text-left">
            E-Coin
          </th>
        </tr>
      </thead>

      <tbody>
        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-4 py-4 font-medium">
            Base Ideológica
          </td>
          <td className="border border-gray-700 px-4 py-4">
            “Poder ao povo, descentralização meme.”
          </td>
          <td className="border border-gray-700 px-4 py-4">
            “União entre tecnologia, finanças e propósito social
            corporativo.”
          </td>
        </tr>

        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-4 py-4 font-medium">
            Estilo de Comunicação
          </td>
          <td className="border border-gray-700 px-4 py-4">
            Humor, mascotes e apelo viral.
          </td>
          <td className="border border-gray-700 px-4 py-4">
            Linguagem executiva, educacional e orientada a impacto
            social.
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* COMENTÁRIO */}
  <div className="mt-8">
    <h4 className="text-lg font-semibold text-[#4ade80] mb-2">
      🟢 Comentário
    </h4>
    <p>
      Enquanto o <strong>Shiba Inu</strong> apostou fortemente em
      <strong className="text-[#D4AF37]"> cultura pop e viralidade</strong>,
      a <strong className="text-[#D4AF37]">E-Coin</strong> adota um
      posicionamento de <strong className="text-[#D4AF37]">
      marca global, sustentável e institucional</strong>, combinando
      inovação tecnológica, utilidade econômica real e governança
      estruturada.
    </p>
  </div>
</section>

{/* 🧠 Conclusão — Comparativo Global */}
<section
  id="conclusion"
  className="relative overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-6 md:p-10 mt-16"
>
  {/* efeitos visuais suaves */}
  <div className="pointer-events-none absolute -top-24 left-1/3 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-[#1C2D5A]/30 blur-3xl" />

  <h3 className="text-2xl font-semibold text-[#D4AF37] mb-8">
    🧠 Conclusão — Comparativo Global
  </h3>

  {/* TABELA */}
  <div className="overflow-x-auto">
    <table className="min-w-[640px] w-full border-collapse text-sm">
      <thead>
        <tr className="bg-[#D4AF37]/10">
          <th className="border border-gray-700 px-4 py-3 text-left">
            Métrica
          </th>
          <th className="border border-gray-700 px-4 py-3 text-left">
            Melhor Projeto
          </th>
        </tr>
      </thead>

      <tbody>
        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-4 py-3">
            Estrutura Profissional
          </td>
          <td className="border border-gray-700 px-4 py-3 text-[#4ade80] font-semibold">
            🟢 E-Coin
          </td>
        </tr>

        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-4 py-3">
            Base Comunitária
          </td>
          <td className="border border-gray-700 px-4 py-3 text-blue-400 font-semibold">
            🔵 Shiba Inu
          </td>
        </tr>

        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-4 py-3">
            Sustentabilidade Econômica
          </td>
          <td className="border border-gray-700 px-4 py-3 text-[#4ade80] font-semibold">
            🟢 E-Coin
          </td>
        </tr>

        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-4 py-3">
            Risco de Volatilidade
          </td>
          <td className="border border-gray-700 px-4 py-3 text-blue-400 font-semibold">
            🔵 Shiba Inu <span className="text-xs">(altíssimo)</span>
          </td>
        </tr>

        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-4 py-3">
            Potencial de Adoção Real
          </td>
          <td className="border border-gray-700 px-4 py-3 text-[#4ade80] font-semibold">
            🟢 E-Coin
          </td>
        </tr>

        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-4 py-3">
            Apelo Viral / Cultural
          </td>
          <td className="border border-gray-700 px-4 py-3 text-blue-400 font-semibold">
            🔵 Shiba Inu
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* SÍNTESE FINAL */}
  <div className="mt-10">
    <h4 className="text-xl font-semibold text-[#D4AF37] mb-4">
      ✅ Síntese Final
    </h4>

    <p className="mb-4">
      <strong>Shiba Inu</strong> é uma moeda-meme que prosperou através da
      <strong className="text-[#D4AF37]"> emoção e força comunitária</strong>.
    </p>

    <p className="mb-4">
      <strong className="text-[#D4AF37]">E-Coin</strong> é uma
      <strong className="text-[#D4AF37]">
        {" "}infraestrutura financeira corporativa
      </strong>{" "}
      projetada para prosperar por
      <strong className="text-[#D4AF37]">
        {" "}utilidade real, governança e confiança institucional
      </strong>.
    </p>

    <p className="text-gray-200">
      A <strong className="text-[#D4AF37]">E-Coin</strong> representa a
      <strong className="text-[#D4AF37]">
        {" "}profissionalização do modelo Shiba
      </strong>, unindo emoção e propósito real —
      <strong className="text-[#D4AF37]">
        {" "}a ponte entre cripto-comunidade e economia institucional
      </strong>.
    </p>
  </div>
</section>

{/* ❌ Comparação com Tokens Fracassados */}
<section
  id="failed-tokens-comparison"
  className="relative overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-6 md:p-10 mt-16"
>
  {/* efeitos visuais suaves de fundo */}
  <div className="pointer-events-none absolute -top-24 right-1/3 h-72 w-72 rounded-full bg-[#1C2D5A]/30 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-28 left-0 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-3xl" />

  <h3 className="text-xl font-semibold text-[#D4AF37] mb-6">
    ❌ Comparação com Tokens Fracassados
  </h3>

  <p className="mb-4">
    Muitos tokens prometeram “mudança no mercado”, mas desapareceram por
    <strong className="text-[#D4AF37]"> falta de base técnica</strong>,
    <strong className="text-[#D4AF37]"> utilidade real</strong> e
    <strong className="text-[#D4AF37]"> estratégia econômica sustentável</strong>.
    Entre os problemas mais comuns observados estão:
  </p>

  <ul className="list-disc pl-6 space-y-2 mb-6">
    <li>
      Ausência de casos de uso reais — moedas criadas apenas para especulação;
    </li>
    <li>
      Falta de transparência em contratos, liquidez e distribuição;
    </li>
    <li>
      Economia inflacionária sem mecanismos de controle ou queima;
    </li>
    <li>
      Comunidades sem engajamento ou sem propósito claro.
    </li>
  </ul>

  <p className="mb-4 font-medium text-[#D4AF37]">
    A E-Coin é diferente porque:
  </p>

  <ul className="list-disc pl-6 space-y-2 mb-6">
    <li>
      Possui casos de uso práticos dentro do ecossistema EdenKingDom —
      pagamentos, serviços, marketplaces, staking e governança;
    </li>
    <li>
      Utiliza contratos inteligentes auditáveis, focados em segurança e confiança;
    </li>
    <li>
      Adota mecanismos de queima e controle de oferta, garantindo sustentabilidade
      econômica;
    </li>
    <li>
      Envolve a comunidade por meio de programas de referência, staking e
      recompensas, criando valor real a cada transação.
    </li>
  </ul>

  <p>
    Com isso, a <strong className="text-[#D4AF37]">E-Coin</strong> não depende
    de promessas vagas ou hype momentâneo, mas sim de
    <strong className="text-[#D4AF37]"> tecnologia sólida</strong>,
    <strong className="text-[#D4AF37]"> governança clara</strong> e
    <strong className="text-[#D4AF37]"> utilidade prática</strong>,
    assegurando um crescimento consistente, confiável e sustentável
    no longo prazo.
  </p>
</section>

{/* 🧩 III. A Solução do Problema */}
<section
  id="solution"
  className="relative overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-6 md:p-10 mt-16"
>
  {/* efeitos visuais suaves de fundo */}
  <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-[#1C2D5A]/30 blur-3xl" />

  <h3 className="text-xl font-semibold text-[#D4AF37] mb-6">
    III. 🧩 A Solução do Problema
  </h3>

  <p className="mb-4">
    A <strong className="text-[#D4AF37]">E-Coin</strong> é um token corporativo
    descentralizado que oferece uma nova forma de integrar blockchain e economia
    real. Inspirada no modelo imutável do Bitcoin, mas construída com
    <strong className="text-[#D4AF37]">
      {" "}
      arquitetura moderna e governança inteligente
    </strong>
    , a E-Coin une princípios de escassez, segurança — sobretudo por meio do
    mecanismo de <strong className="text-[#D4AF37]">buyback</strong> — e
    utilidade prática.
  </p>

  <h4 className="text-lg font-semibold text-[#D4AF37] mb-4">
    🔑 Pilares da Solução
  </h4>

  <ul className="list-disc pl-6 space-y-3 mb-6">
    <li>
      <strong className="text-[#D4AF37]">Oferta Fixa e Imutável:</strong> 100%
      dos tokens foram emitidos na gênese; não existe possibilidade de emissão
      futura.
    </li>
    <li>
      <strong className="text-[#D4AF37]">Liquidez Inteligente:</strong> Sistema
      automatizado de buyback &amp; burn que estabiliza o preço e protege
      investidores contra dumpings ou perdas massivas causadas por grandes
      vendedores.
    </li>
    <li>
      <strong className="text-[#D4AF37]">Lastro Corporativo Real:</strong>
      Sustentada por receitas multissetoriais da EdenKingDom, incluindo educação,
      energia, construção, saúde, transportes e marketplaces.
    </li>
    <li>
      <strong className="text-[#D4AF37]">Integração Total:</strong> Utilizada em
      todas as plataformas do ecossistema EdenKingDom — pagamentos, staking,
      marketplaces e investimentos.
    </li>
    <li>
      <strong className="text-[#D4AF37]">Governança DAO:</strong> Decisões
      estratégicas validadas por holders por meio da{" "}
      <strong className="text-[#D4AF37]">GenesisDAO</strong>, garantindo
      descentralização participativa e transparência.
    </li>
  </ul>

  <p>
    A combinação desses fatores transforma a{" "}
    <strong className="text-[#D4AF37]">E-Coin</strong> na primeira moeda
    corporativa global com estabilidade funcional, sustentada por fluxos reais
    de valor e por uma comunidade econômica produtiva — a{" "}
    <strong className="text-[#D4AF37]">EdenKingDom Corporation</strong>.
  </p>
</section>

{/* ⚙️ IV. Tecnologia e Arquitetura da E-Coin */}
<section
  id="technology-architecture"
  className="relative overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-6 md:p-10 mt-16"
>
  {/* efeitos visuais suaves de fundo */}
  <div className="pointer-events-none absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-[#1C2D5A]/30 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-3xl" />

  <h3 className="text-xl font-semibold text-[#D4AF37] mb-6">
    IV. ⚙️ Tecnologia e Arquitetura da E-Coin
  </h3>

  <p className="mb-4">
    A <strong className="text-[#D4AF37]">E-Coin</strong> foi desenvolvida sobre a{" "}
    <strong className="text-[#D4AF37]">
      Binance Smart Chain (BEP-20)
    </strong>{" "}
    por sua eficiência, compatibilidade e escalabilidade.
  </p>

  <p className="mb-6">
    O contrato inteligente foi auditado por sistemas de verificação
    automatizada —{" "}
    <strong className="text-[#D4AF37]">GoPlus</strong>,{" "}
    <strong className="text-[#D4AF37]">CertiK</strong> e{" "}
    <strong className="text-[#D4AF37]">HashDit</strong> — apresentando
    <strong className="text-[#D4AF37]">
      {" "}
      ausência de vulnerabilidades críticas
    </strong>{" "}
    e{" "}
    <strong className="text-[#D4AF37]">
      100% de transparência on-chain
    </strong>.
  </p>

  <h4 className="text-lg font-semibold text-[#D4AF37] mb-4">
    🔧 Especificações Técnicas
  </h4>

  {/* TABELA */}
  <div className="overflow-x-auto mb-10">
    <table className="min-w-[640px] w-full border-collapse text-sm">
      <thead>
        <tr className="bg-[#D4AF37]/10">
          <th className="border border-gray-700 px-4 py-3 text-left">
            Propriedade
          </th>
          <th className="border border-gray-700 px-4 py-3 text-left">
            Valor
          </th>
        </tr>
      </thead>
      <tbody>
        {[
          ["Blockchain", "Binance Smart Chain (BEP-20)"],
          ["Tipo", "Token Corporativo Deflacionário"],
          ["Contrato", "0xDf69235019cc416dd5Be75dfc0eDc922aB4b5964"],
          ["Símbolo", "E-Coin"],
          ["Decimais", "18"],
          ["Supply Total", "100% emitido (sem mint adicional)"],
          ["Mecanismo de Consenso", "Proof-of-Staked Authority (PoSA)"],
          ["Auditorias", "GoPlus, CertiK, HashDit (sem alertas críticos)"],
        ].map(([k, v]) => (
          <tr key={k} className="hover:bg-white/5">
            <td className="border border-gray-700 px-4 py-3 font-medium">
              {k}
            </td>
            <td className="border border-gray-700 px-4 py-3 break-all bg-[#D4AF37]/5">
              {v}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  <h4 className="text-lg font-semibold text-[#D4AF37] mb-4">
    🧩 Módulos Estruturais
  </h4>

  <ul className="list-disc pl-6 space-y-3 mb-8">
    <li>
      <strong className="text-[#D4AF37]">
        Smart Treasury (Tesouraria Inteligente):
      </strong>{" "}
      gestão automatizada de buybacks e recompensas.
    </li>
    <li>
      <strong className="text-[#D4AF37]">
        Staking Engine via Telegram Bot:
      </strong>{" "}
      distribuição diária proporcional de recompensas on-chain.
    </li>
    <li>
      <strong className="text-[#D4AF37]">Liquidity Pool Lock:</strong>{" "}
      liquidez bloqueada em smart contract time-locked, garantindo proteção
      contra rug pulls.
    </li>
    <li>
      <strong className="text-[#D4AF37]">
        E-Chain Gateway (Futuro):
      </strong>{" "}
      integração com a futura blockchain própria{" "}
      <strong className="text-[#D4AF37]">E-Chain</strong>, permitindo
      governança e interoperabilidade cross-chain.
    </li>
  </ul>

  <h4 className="text-lg font-semibold text-[#D4AF37] mb-4">
    🚀 Produtos Futuros
  </h4>

  <ul className="list-disc pl-6 space-y-2">
    <li>
      Plataforma de trading:{" "}
      <strong className="text-[#D4AF37]">
        EdenKingDom Buy Crypto (EBC)
      </strong>.
    </li>
    <li>
      <strong className="text-[#D4AF37]">E-Wallet</strong>.
    </li>
    <li>Outros serviços financeiros e institucionais em expansão.</li>
  </ul>
</section>

{/* 📊 V. Tokenomics e Especificações Econômicas */}
<section
  id="tokenomics"
  className="relative overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-6 md:p-10 mt-16"

>
  {/* efeitos de fundo */}
  <div className="pointer-events-none absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-[#1C2D5A]/30 blur-3xl" />

  <h3 className="text-xl font-semibold text-[#D4AF37] mb-6">
    V. 📊 Tokenomics e Especificações Econômicas
  </h3>

  <p className="mb-4">
    A <strong className="text-[#D4AF37]">EdenKingDom Coin (E-Coin)</strong> foi concebida para
    ser <strong className="text-[#D4AF37]">escassa, sustentável e deflacionária</strong>,
    garantindo valorização progressiva e segurança a longo prazo.
  </p>

  <p className="mb-8">
    Toda a oferta foi emitida na gênese,{" "}
    <strong className="text-[#D4AF37]">sem possibilidade de novas emissões</strong>,
    tornando-a comparável ao modelo imutável do Bitcoin, porém com{" "}
    <strong className="text-[#D4AF37]">
      governança, liquidez e estrutura corporativa
    </strong>.
  </p>

  {/* RESUMO GERAL */}
  <h4 className="text-lg font-semibold text-[#D4AF37] mb-4">
    📊 Resumo Geral
  </h4>

  <div className="overflow-x-auto mb-10">
    <table className="w-full border-collapse text-sm">
      <thead>
        <tr className="bg-[#D4AF37]/10">
          <th className="border border-gray-700 px-4 py-3 text-left">Item</th>
          <th className="border border-gray-700 px-4 py-3 text-left">
            Descrição
          </th>
        </tr>
      </thead>
      <tbody>
        {[
          ["Tipo de Token", "Moeda Corporativa (Utility + Governance + Reward)"],
          ["Rede", "Binance Smart Chain (BEP-20)"],
          ["Contrato", "0xDf69235019cc416dd5Be75dfc0eDc922aB4b5964"],
          ["Supply Total", "1 trilhão — 100% emitido na gênese"],
          ["Mint / Burn", "Sem mint desde da Genesis, mint adicional & externo pelo mecanismo buyback / Queima via buyback"],
          ["Taxas de Transação", "0% compra / 0% venda"],
          ["Buyback Automático", "Ativado por liquidez de reserva"],
          ["Liquidez", "Bloqueada e time-locked em contrato"],
          ["Auditorias", "GoPlus ✓ CertiK ✓ HashDit ✓"],
        ].map(([k, v]) => (
          <tr key={k} className="hover:bg-white/5">
            <td className="border border-gray-700 px-4 py-3 font-medium">
              {k}
            </td>
            <td className="border border-gray-700 px-4 py-3 bg-[#D4AF37]/5 break-all">
              {v}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* DISTRIBUIÇÃO */}
  <h4 className="text-lg font-semibold text-[#D4AF37] mb-4">
    🧩 Estrutura de Distribuição
  </h4>

  <div className="overflow-x-auto mb-8">
    <table className="min-w-[640px] w-full border-collapse text-sm">
      <thead>
        <tr className="bg-[#D4AF37]/10">
          <th className="border border-gray-700 px-4 py-3 text-left">
            Categoria
          </th>
          <th className="border border-gray-700 px-4 py-3 text-left">
            Percentagem
          </th>
          <th className="border border-gray-700 px-4 py-3 text-left">
            Descrição
          </th>
        </tr>
      </thead>
      <tbody>
        {[
          ["Presale & Early Adopters", "20%", "Captação inicial e expansão comunitária"],
          ["Pool de Liquidez", "30%", "Estabilidade e trocas rápidas em DEX/CEX"],
          ["Staking & Recompensas", "15%", "Recompensas diárias e incentivo ao holding pelo Smart Pool"],
          ["Tesouraria Corporativa", "25%", "Buyback, reservas e crescimento"],
          ["Desenvolvimento & Parcerias", "5%", "Integrações técnicas e marketing"],
          ["Equipa & Fundadores", "5%", "Time-lock para governança sustentável"],
        ].map(([a, b, c]) => (
          <tr key={a} className="hover:bg-white/5">
            <td className="border border-gray-700 px-4 py-3 font-medium">
              {a}
            </td>
            <td className="border border-gray-700 px-4 py-3">{b}</td>
            <td className="border border-gray-700 px-4 py-3">{c}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* VESTING */}
  <h4 className="text-lg font-semibold text-[#D4AF37] mb-4">
    🔒 Vesting e Time-Lock
  </h4>

  <ul className="list-disc pl-6 space-y-2 mb-10">
    <li>Tokens da equipa e fundadores bloqueados por 12 meses.</li>
    <li>Liberação gradual trimestral a partir do 2.º ano.</li>
    <li>Pool de liquidez bloqueado por 48 meses em smart contract verificável.</li>
  </ul>

  {/* MECANISMOS */}
  <h4 className="text-lg font-semibold text-[#D4AF37] mb-4">
    ⚙️ Mecanismos de Valorização e Sustentabilidade
  </h4>

  <ol className="list-decimal pl-6 space-y-3">
    <li>
      <strong className="text-[#D4AF37]">
        Queima Deflacionária Automática:
      </strong>{" "}
      parte das recompensas e fluxos corporativos é utilizada em buyback
      seguido de burn, reforçando a escassez.
    </li>
    <li>
      <strong className="text-[#D4AF37]">Buyback Inteligente:</strong>{" "}
      quedas de preço superiores a 5% acionam recompras automáticas via
      tesouraria.
    </li>
    <li>
      <strong className="text-[#D4AF37]">Liquidez Dinâmica:</strong>{" "}
      ajuste contínuo dos pares USDT/E-Coin em DEX e CEX conforme volume.
    </li>
    <li>
      <strong className="text-[#D4AF37]">Staking Compensatório:</strong>{" "}
      redistribuição de parte dos lucros corporativos aos holders.
    </li>
  </ol>

  <p className="mt-8">
    Esses mecanismos asseguram que a{" "}
    <strong className="text-[#D4AF37]">E-Coin permaneça deflacionária, resiliente
    e valorizável</strong>, mesmo em ciclos de baixa do mercado, protegendo
    investidores, traders e holders contra choques extremos.
  </p>

</section>

{/* 🧭 VI. Roteiro de Desenvolvimento (Roadmap) */}
<section
  id="roadmap"
  className="relative overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-6 md:p-10 mt-16"
>
  {/* efeitos de fundo */}
  <div className="pointer-events-none absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-[#1C2D5A]/30 blur-3xl" />

  <h3 className="text-xl font-semibold text-[#D4AF37] mb-6">
    VI. 🧭 Roteiro de Desenvolvimento (Roadmap)
  </h3>

  <p className="mb-8">
    O desenvolvimento da{" "}
    <strong className="text-[#D4AF37]">E-Coin</strong> segue um roadmap
    <strong className="text-[#D4AF37]"> corporativo, progressivo e verificável</strong>,
    garantindo crescimento sustentável, adoção real e evolução tecnológica
    contínua dentro do ecossistema EdenKingDom.
  </p>

  {/* TABELA ROADMAP */}
  <div className="overflow-x-auto">
    <table className="min-w-[640px] w-full border-collapse text-sm">
      <thead>
        <tr className="bg-[#D4AF37]/10">
          <th className="border border-gray-700 px-4 py-3 text-left">
            Fase
          </th>
          <th className="border border-gray-700 px-4 py-3 text-left">
            Período
          </th>
          <th className="border border-gray-700 px-4 py-3 text-left">
            Metas e Marcos
          </th>
        </tr>
      </thead>

      <tbody>
        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-4 py-4 font-medium">
            Fase I — Gênese, Presale, Staking, Liquidez Inicial e Pre-Listagem - DEX
          </td>
          <td className="border border-gray-700 px-4 py-4">
            Q3 2025
          </td>
          <td className="border border-gray-700 px-4 py-4">
            <li>Lançamento oficial da <strong>E-Coin</strong></li>
            <li>Deploy do token <strong>BEP-20</strong> e emissão total na gênese.</li>
            <li>Lançamento oficial da <strong>E-Coin</strong> ao Publico</li>
            <li>Listagem PancakeSwap</li>
                <li>Lançamento do <strong>Bot Telegram Presale & Staking</strong> e formação inicial
            de liquidez.</li>
                <li>Lançamento do E-Swap</li>
                <li>Auditoria e relatório de segurança</li>
          </td>
        </tr>

        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-4 py-4 font-medium">
            Fase II — Expansão do Ecossistema EKD, Liquidez Massiva e Pre-listagem em CEX 
          </td>
          <td className="border border-gray-700 px-4 py-4">
            Q1 2026
          </td>
          <td className="border border-gray-700 px-4 py-4">
            <li>Listagens: OKX, Gate.io, Bitget, KuCoin</li>
                <li>Lançamento da E-Wallet</li>
                <li>Lançamento da EBC</li>
                <li>Expansão do Ecossistema EKD</li>
                <li>Introdução do E-Pay Global</li>
                <li>Implementação da E-Pay Vault</li>
          </td>
        </tr>

        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-4 py-4 font-medium">
            Fase III — Integração Corporativa
          </td>
          <td className="border border-gray-700 px-4 py-4">
            Q2 2026
          </td>
          <td className="border border-gray-700 px-4 py-4">
            <li>Listagens: Binance & Coinbase</li>
                <li>Lançamento do E-Chain Testnet</li>
                <li>Integrações globais com serviços EKD</li>
                <li>Integração da E-Coin nos sistemas{" "}
            <strong>EBC, E-Pay, E-Job e E-Learn</strong>, abrangendo múltiplos
            setores da EdenKingDom Corporation e parceiros terceirizados.</li>
            
          </td>
        </tr>

        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-4 py-4 font-medium">
            Fase IV — Governança DAO
          </td>
          <td className="border border-gray-700 px-4 py-4">
            Q3 2026
          </td>
          <td className="border border-gray-700 px-4 py-4">
            
            <li>Lançamento da <strong>GenesisDAO</strong> e ativação da governança
            participativa dos holders.</li>
                <li>Buy-Back Smart Pool</li>
                <li>ECGPSE</li>
                <li>E-Coin Price Alert & Buy-Back Collective</li>
          </td>
        </tr>

        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-4 py-4 font-medium">
            Fase V — Expansão e Listagem Internacional
          </td>
          <td className="border border-gray-700 px-4 py-4">
            Q4 2026
          </td>
          <td className="border border-gray-700 px-4 py-4">
            
                <li>E-Coin Como a moeda de taxas na E-Chain</li>
                <li>Implementação do E-Chain Browser (E-Finder)</li>
                <li>Expansão para Ásia, Europa, África, América do Sul, Central depois do Norte</li>
          </td>
        </tr>

        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-4 py-4 font-medium">
            Fase VI — E-Chain e Interoperabilidade
          </td>
          <td className="border border-gray-700 px-4 py-4">
            Q2 2027 em diante
          </td>
          <td className="border border-gray-700 px-4 py-4">
            <li>Lançamento da própria blockchain corporativa{" "}
            <strong>Mainnet da E-Chain</strong>, com foco em governança avançada e
            interoperabilidade cross-chain.</li>
            <li>Adoção corporativa internacional</li>
                <li>E-Pay + Crypto ATM Network Vinculadas a E-Coin e E-USD</li>
                <li>Pagamentos globais com E-Coin e E-USD</li>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* COMENTÁRIO FINAL */}
  <div className="mt-8">
    <h4 className="text-lg font-semibold text-[#4ade80] mb-2">
      🟢 Comentário
    </h4>
    <p>
      Este roadmap demonstra que a{" "}
      <strong className="text-[#D4AF37]">E-Coin</strong> não é um projeto
      especulativo, mas sim uma{" "}
      <strong className="text-[#D4AF37]">
        infraestrutura financeira corporativa de longo prazo
      </strong>,
      com metas claras, execução faseada e expansão tecnológica contínua.
    </p>
  </div>
</section>

{/* 💼 VII. Análise de Mercado e Concorrência */}
<section
  id="market-analysis"
  className="relative overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-6 md:p-10 mt-16"
>
  {/* efeitos de fundo */}
  <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-[#1C2D5A]/30 blur-3xl" />

  {/* título */}
  <h3 className="text-xl font-semibold text-[#D4AF37] mb-6">
    VII. 💼 Análise de Mercado e Concorrência
  </h3>

  {/* introdução */}
  <p className="mb-6 text-gray-200">
    A <strong className="text-[#D4AF37]">E-Coin</strong> atua em um mercado de
    alta demanda por moedas semi-estáveis, voláteis e de{" "}
    <strong className="text-[#D4AF37]">utilidade real</strong>. Enquanto a
    maioria dos tokens no mercado se baseia em narrativas especulativas, a{" "}
    <strong className="text-[#D4AF37]">E-Coin</strong> apresenta uso corporativo
    concreto, posicionando-se em um{" "}
    <strong className="text-[#D4AF37]">segmento híbrido</strong> entre moeda de
    utilidade e ativo financeiro institucional.
  </p>

  {/* subtítulo SWOT */}
  <h4 className="text-lg font-semibold text-[#4ade80] mb-4">
    📊 Análise SWOT (Forças, Fraquezas, Oportunidades e Ameaças)
  </h4>

  {/* grid SWOT */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
    {/* Forças */}
    <div className="rounded-xl border border-[#D4AF37]/30 bg-black/60 p-5">
      <h5 className="text-[#D4AF37] font-semibold mb-2">🟢 Forças (Strengths)</h5>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>Supply fixo e governança DAO.</li>
        <li>Liquidez bloqueada e buyback automático.</li>
        <li>Lastro real em atividades produtivas corporativas.</li>
      </ul>
    </div>

    {/* Fraquezas */}
    <div className="rounded-xl border border-[#D4AF37]/30 bg-black/60 p-5">
      <h5 className="text-[#D4AF37] font-semibold mb-2">🟠 Fraquezas (Weaknesses)</h5>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>Alta responsabilidade operacional do ecossistema corporativo.</li>
      </ul>
    </div>

    {/* Oportunidades */}
    <div className="rounded-xl border border-[#D4AF37]/30 bg-black/60 p-5">
      <h5 className="text-[#D4AF37] font-semibold mb-2">🔵 Oportunidades (Opportunities)</h5>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>Listagens em CEX e expansão de serviços em África e América.</li>
        <li>Parcerias com fintechs e empresas de pagamento.</li>
      </ul>
    </div>

    {/* Ameaças */}
    <div className="rounded-xl border border-[#D4AF37]/30 bg-black/60 p-5">
      <h5 className="text-[#D4AF37] font-semibold mb-2">🔴 Ameaças (Threats)</h5>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>Mudanças regulatórias globais ou taxas imprevistas.</li>
      </ul>
    </div>
  </div>

  {/* conclusão */}
  <div className="mt-8">
    <p className="text-gray-300">
      A <strong className="text-[#D4AF37]">E-Coin</strong> mitiga essas ameaças
      com <strong>conformidade internacional</strong>,{" "}
      <strong>auditorias regulares</strong> e{" "}
      <strong>diversificação econômica</strong>, garantindo estabilidade e
      segurança tanto para investidores quanto para o ecossistema corporativo.
    </p>
  </div>
</section>

{/* 🧑‍💼 VIII. Equipe e Governança */}
<section
  id="team-governance"
  className="relative overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-6 md:p-10 mt-16"
>
  {/* EFEITOS DE FUNDO */}
  <div className="pointer-events-none absolute -top-20 left-1/3 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-[#1C2D5A]/30 blur-3xl" />

  {/* TÍTULO */}
  <h3 className="text-xl font-semibold text-[#D4AF37] mb-6">
    VIII. 🧑‍💼 Equipe e Governança
  </h3>

  {/* INTRODUÇÃO */}
  <p className="mb-8 text-gray-200">
    A <strong className="text-[#D4AF37]">E-Coin</strong> é liderada pela{" "}
    <strong className="text-[#D4AF37]">EdenKingDom Corporation</strong>, 
    com uma estrutura internacional de liderança multissetorial, 
    combinando inovação tecnológica, governança descentralizada 
    e gestão corporativa responsável.
  </p>

  {/* TABELA EQUIPE */}
  <div className="overflow-x-auto">
    <table className="min-w-[640px] w-full border-collapse text-sm">
      <thead>
        <tr className="bg-[#D4AF37]/10 text-[#D4AF37]">
          <th className="border border-gray-700 px-4 py-3 text-left">
            Nome
          </th>
          <th className="border border-gray-700 px-4 py-3 text-left">
            Função
          </th>
          <th className="border border-gray-700 px-4 py-3 text-left">
            Descrição
          </th>
        </tr>
      </thead>

      <tbody>
        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-4 py-4 font-medium text-gray-100">
            Eng. Dr. MBA. Athelstan Pateron Atanas
          </td>
          <td className="border border-gray-700 px-4 py-4 text-gray-300">
            CEO Global & Fundador
          </td>
          <td className="border border-gray-700 px-4 py-4 text-gray-300">
            Visionário por trás da EdenKingDom, criador da E-Coin 
            e da estrutura <strong>GenesisDAO</strong>.
          </td>
        </tr>

        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-4 py-4 font-medium text-gray-100">
            E-Code+ Division
          </td>
          <td className="border border-gray-700 px-4 py-4 text-gray-300">
            Desenvolvimento Técnico
          </td>
          <td className="border border-gray-700 px-4 py-4 text-gray-300">
            Responsável pelo código-fonte, auditorias, integrações BSC 
            e conexões DEX/CEX globais.
          </td>
        </tr>

        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-4 py-4 font-medium text-gray-100">
            E-Finance Division
          </td>
          <td className="border border-gray-700 px-4 py-4 text-gray-300">
            Gestão de Tesouraria & Buy-Back
          </td>
          <td className="border border-gray-700 px-4 py-4 text-gray-300">
            Administra reservas, liquidez e estratégias de mercado, 
            supervisionando execuções automáticas de recompra (ECGPSE).
          </td>
        </tr>

        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-4 py-4 font-medium text-gray-100">
            E-Governance Council (GenesisDAO)
          </td>
          <td className="border border-gray-700 px-4 py-4 text-gray-300">
            Governança Comunitária
          </td>
          <td className="border border-gray-700 px-4 py-4 text-gray-300">
            Comitê on-chain para votações, melhorias e decisões estratégicas 
            supervisionadas por holders da E-Coin.
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* COMENTÁRIO FINAL */}
  <div className="mt-8">
    <h4 className="text-lg font-semibold text-[#4ade80] mb-2">
      🟢 Estrutura Corporativa
    </h4>
    <p className="text-gray-300">
      A liderança da E-Coin é distribuída entre divisões técnicas, financeiras e governamentais, 
      assegurando transparência, responsabilidade e inovação em cada nível do ecossistema. 
      Essa estrutura híbrida permite uma <strong className="text-[#D4AF37]">
      governança DAO corporativa</strong>, onde decisões estratégicas são executadas de forma descentralizada e auditável.
    </p>
  </div>
</section>

{/* 💰 IX. Uso dos Fundos */}
<section
  id="funds-allocation"
  className="relative overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-6 md:p-10 mt-16"
>
  {/* EFEITOS DE FUNDO */}
  <div className="pointer-events-none absolute -top-20 left-1/3 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-[#1C2D5A]/30 blur-3xl" />

  {/* TÍTULO */}
  <h3 className="text-xl font-semibold text-[#D4AF37] mb-6">
    IX. 💰 Uso dos Fundos
  </h3>

  {/* DESCRIÇÃO INTRODUTÓRIA */}
  <p className="mb-8 text-gray-200">
    Os fundos arrecadados durante a{" "}
    <strong className="text-[#D4AF37]">Presale</strong> e nas operações iniciais
    são direcionados estrategicamente para{" "}
    <strong className="text-[#D4AF37]">liquidez real</strong> na listagem da{" "}
    <strong className="text-[#D4AF37]">E-Coin</strong> em{" "}
    <strong>DEX & CEX</strong>, marketing, expansão e ações de impacto social.
    <br />
    <br />
    Excedentes são destinados a{" "}
    <strong className="text-[#D4AF37]">doações, custos gerais de serviços</strong>{" "}
    e sustentação mínima do ecossistema{" "}
    <strong className="text-[#D4AF37]">EdenKingDom</strong>, visto que a corporação
    possui fundos próprios para seu sustento corporativo geral e integral.
  </p>

  {/* TABELA DE USO DOS FUNDOS */}
  <div className="overflow-x-auto">
    <table className="min-w-[640px] w-full border-collapse text-sm">
      <thead>
        <tr className="bg-[#D4AF37]/10 text-[#D4AF37]">
          <th className="border border-gray-700 px-4 py-3 text-left">Categoria</th>
          <th className="border border-gray-700 px-4 py-3 text-left">Percentagem</th>
          <th className="border border-gray-700 px-4 py-3 text-left">Descrição</th>
        </tr>
      </thead>

      <tbody>
        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-4 py-4 font-medium text-gray-100">
            Desenvolvimento Técnico
          </td>
          <td className="border border-gray-700 px-4 py-4 text-gray-300">10 %</td>
          <td className="border border-gray-700 px-4 py-4 text-gray-300">
            Smart Contracts, Staking, DEX e integrações com E-Apps.
          </td>
        </tr>

        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-4 py-4 font-medium text-gray-100">
            Marketing e Expansão
          </td>
          <td className="border border-gray-700 px-4 py-4 text-gray-300">25 %</td>
          <td className="border border-gray-700 px-4 py-4 text-gray-300">
            Campanhas institucionais globais e parcerias estratégicas.
          </td>
        </tr>

        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-4 py-4 font-medium text-gray-100">
            Liquidez Inicial e Sustentável em DEX/CEX
          </td>
          <td className="border border-gray-700 px-4 py-4 text-gray-300">40 %</td>
          <td className="border border-gray-700 px-4 py-4 text-gray-300">
            Fornecimento de liquidez em par com USDT e EKDC, garantindo estabilidade e volume global.
          </td>
        </tr>

        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-4 py-4 font-medium text-gray-100">
            Tesouraria Corporativa
          </td>
          <td className="border border-gray-700 px-4 py-4 text-gray-300">15 %</td>
          <td className="border border-gray-700 px-4 py-4 text-gray-300">
            Buy-Back programado e reserva de estabilidade para controle de mercado e crescimento contínuo.
          </td>
        </tr>

        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-4 py-4 font-medium text-gray-100">
            Custos Legais e Auditorias
          </td>
          <td className="border border-gray-700 px-4 py-4 text-gray-300">10 %</td>
          <td className="border border-gray-700 px-4 py-4 text-gray-300">
            Conformidade regulatória internacional e auditorias periódicas para
            garantir transparência e legitimidade institucional.
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* COMENTÁRIO FINAL */}
  <div className="mt-8">
    <h4 className="text-lg font-semibold text-[#4ade80] mb-2">
      🟢 Política de Sustentabilidade Financeira
    </h4>
    <p className="text-gray-300">
      A <strong className="text-[#D4AF37]">E-Coin</strong> adota uma política de alocação
      transparente e descentralizada, priorizando o equilíbrio entre
      <strong> liquidez, expansão e impacto social</strong>.
      Cada movimento de fundo é auditável on-chain e integrado à{" "}
      <strong className="text-[#D4AF37]">GenesisDAO</strong>, reforçando o compromisso
      de governança e confiança pública.
    </p>
  </div>
</section>

{/* 🛡️ X. Segurança e Conformidade */}
<section
  id="security-compliance"
  className="relative overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-6 md:p-10 mt-16"
>
  {/* EFEITOS DE FUNDO */}
  <div className="pointer-events-none absolute -top-20 left-1/3 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-[#1C2D5A]/30 blur-3xl" />

  {/* TÍTULO */}
  <h3 className="text-xl font-semibold text-[#D4AF37] mb-6">
    X. 🛡️ Segurança e Conformidade
  </h3>

  {/* INTRODUÇÃO */}
  <p className="mb-8 text-gray-200">
    A <strong className="text-[#D4AF37]">E-Coin</strong> adota uma política de{" "}
    <strong className="text-[#D4AF37]">segurança de nível corporativo</strong>,
    aliando auditoria técnica, bloqueio de liquidez e conformidade regulatória
    internacional para garantir transparência, estabilidade e confiança
    contínua no ecossistema EdenKingDom.
  </p>

  {/* BLOCO 1 — SEGURANÇA TÉCNICA */}
  <div className="rounded-2xl border border-[#D4AF37]/30 bg-black/60 p-5 mb-8">
    <h4 className="text-lg font-semibold text-[#D4AF37] mb-3">
      🔐 1. Segurança Técnica
    </h4>

    <ul className="list-disc list-inside text-gray-300 space-y-2">
      <li>
        Auditorias independentes realizadas via{" "}
        <strong>GoPlus</strong>, <strong>CertiK</strong> e{" "}
        <strong>HashDit</strong> sem alertas críticos.
      </li>
      <li>
        Liquidez bloqueada (<strong>time-locked</strong>) — evita manipulação e{" "}
        <em>rug pulls</em>.
      </li>
      <li>
        Sem funções ocultas ou de <em>backdoor</em>, conforme verificação pública
        em <strong>BscScan</strong>.
      </li>
      <li>
        Sem possibilidade de <em>mint</em> adicional, impedindo inflação futura
        da <strong>E-Coin</strong>.
      </li>
      <li>
        <strong>Buyback anti-dump</strong> — mecanismo interno que recompra tokens{" "}
        (<strong>E-Coin</strong>) após quedas abruptas e drásticas, estabilizando
        o preço e protegendo traders, holders, investidores e parceiros de mercado.
      </li>
    </ul>
  </div>

  {/* BLOCO 2 — CONFORMIDADE JURÍDICA */}
  <div className="rounded-2xl border border-[#D4AF37]/30 bg-black/60 p-5">
    <h4 className="text-lg font-semibold text-[#D4AF37] mb-3">
      ⚖️ 2. Conformidade Jurídica e Internacional
    </h4>

    <p className="text-gray-300 mb-3">
      A <strong className="text-[#D4AF37]">EdenKingDom Corporation</strong> cumpre
      rigorosamente os padrões de{" "}
      <strong>conformidade e due diligence</strong> segundo as orientações da{" "}
      <strong>FATF</strong>, <strong>SEC (EUA)</strong> e{" "}
      <strong>MiCA (União Europeia)</strong>.
    </p>

    <p className="text-gray-300">
      O projeto está em conformidade com políticas{" "}
      <strong>KYC (Know Your Customer)</strong> e{" "}
      <strong>AML (Anti-Money Laundering)</strong> aplicáveis às suas plataformas
      associadas — <strong>EBC</strong>, <strong>E-Pay</strong>,{" "}
      <strong>E-Finder</strong>, <strong>E-Job</strong> e{" "}
      <strong>E-Chain</strong> — assegurando rastreabilidade, legitimidade e
      integridade financeira global.
    </p>
  </div>

  {/* COMENTÁRIO FINAL */}
  <div className="mt-8">
    <h4 className="text-lg font-semibold text-[#4ade80] mb-2">
      🟢 Compromisso Ético e Corporativo
    </h4>
    <p className="text-gray-300">
      A <strong className="text-[#D4AF37]">E-Coin</strong> mantém o compromisso de
      ser uma das moedas mais seguras e auditáveis do mercado cripto africano e
      internacional, promovendo governança transparente e conformidade global
      em todas as suas operações on-chain e off-chain.
    </p>
  </div>
</section>

{/* ⚖️ XI. Declarações Legais (Legal Disclaimer) */}
<section
  id="legal-disclaimer"
  className="relative overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-6 md:p-10 mt-16"
>
  {/* EFEITOS DE FUNDO */}
  <div className="pointer-events-none absolute -top-20 left-1/3 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-[#1C2D5A]/30 blur-3xl" />

  {/* TÍTULO */}
  <h3 className="text-xl font-semibold text-[#D4AF37] mb-6">
    XI. ⚖️ Declarações Legais (Legal Disclaimer)
  </h3>

  {/* CONTEÚDO PRINCIPAL */}
  <div className="space-y-5 text-gray-300 leading-relaxed">
    <p>
      O presente documento tem caráter{" "}
      <strong className="text-[#D4AF37]">informativo e educacional</strong>, e não constitui
      um prospecto financeiro, oferta pública de títulos mobiliários ou
      recomendação direta de investimento.
    </p>

    <p>
      Os tokens <strong className="text-[#D4AF37]">EdenKingDom Coin (E-Coin)</strong> não conferem
      direitos de propriedade, voto ou dividendos da{" "}
      <strong className="text-[#D4AF37]">EdenKingDom Corporation</strong>,
      salvo nas instâncias previstas dentro do sistema de governança{" "}
      <strong className="text-[#D4AF37]">GenesisDAO</strong>.
    </p>

    <p>
      Investimentos em criptomoedas envolvem riscos de volatilidade e de mercado,
      cabendo ao investidor a decisão{" "}
      <strong className="text-[#D4AF37]">informada e autônoma</strong>.
      O nosso sistema de{" "}
      <strong className="text-[#D4AF37]">Buy-Back Smart Pool</strong> oferece um
      alto nível de segurança e estabilidade para traders, holders e investidores;
      contudo, a decisão final deve sempre ser tomada de forma independente
      e responsável por cada participante.
    </p>

    <p>
      A <strong className="text-[#D4AF37]">EdenKingDom Corporation</strong> reserva-se o direito
      de atualizar, revisar ou ajustar suas políticas operacionais, tecnológicas
      e legais conforme{" "}
      <strong className="text-[#D4AF37]">exigências regulatórias</strong> e as
      <strong className="text-[#D4AF37]"> evoluções do mercado global</strong>.
      Tais atualizações visam garantir a conformidade contínua e o alinhamento
      às melhores práticas internacionais.
    </p>
  </div>

  {/* COMENTÁRIO FINAL */}
  <div className="mt-8">
    <h4 className="text-lg font-semibold text-[#4ade80] mb-2">
      🟢 Transparência e Responsabilidade
    </h4>
    <p className="text-gray-300">
      A <strong className="text-[#D4AF37]">E-Coin</strong> é um projeto ético, responsável e
      orientado à sustentabilidade. Todas as informações apresentadas têm
      o propósito de promover a compreensão, a educação financeira e a clareza
      regulatória no ambiente de ativos digitais.
    </p>
  </div>
</section>

{/* 🌍 XII. Conclusão e Chamado à Comunidade (Join E-Coin Movement) */}
<section
  id="conclusion-community"
  className="relative overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-6 md:p-10 mt-16 mb-20"
>
  {/* EFEITOS DE FUNDO */}
  <div className="pointer-events-none absolute -top-28 left-1/3 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-[#1C2D5A]/40 blur-3xl" />

  {/* TÍTULO */}
  <h3 className="text-xl font-semibold text-[#D4AF37] mb-6">
    XII. 🌍 Conclusão e Chamado à Comunidade (Join E-Coin Movement)
  </h3>

  {/* CONTEÚDO PRINCIPAL */}
  <div className="space-y-5 text-gray-300 leading-relaxed">
    <p>
      A <strong className="text-[#D4AF37]">E-Coin (EdenKingDom Coin)</strong> é uma{" "}
      <strong className="text-[#D4AF37]">moeda corporativa de nova geração</strong> — 
      semi-estável, volátil, transparente, auditável e{" "}
      <strong className="text-[#D4AF37]">lastreada em valor real</strong>.
      Ela representa a fusão entre tecnologia, economia e propósito social,
      sustentando todo o ecossistema{" "}
      <strong className="text-[#D4AF37]">EdenKingDom Corporation</strong> com base em:
    </p>

    {/* LISTA DE PILARES */}
    <ul className="list-disc list-inside text-gray-300 space-y-2">
      <li>🔒 Segurança On-Chain Total</li>
      <li>💧 Liquidez Real e Sustentável</li>
      <li>⚙️ Governança DAO Participativa</li>
      <li>🌐 Utilidade Multissetorial Global</li>
    </ul>

    <p>
      A <strong className="text-[#D4AF37]">E-Coin</strong> não é apenas um ativo digital —
      é o <strong className="text-[#D4AF37]">núcleo</strong> de um sistema financeiro
      corporativo global que une <strong>blockchain, produtividade e
      responsabilidade social</strong>.
    </p>

    <blockquote className="border-l-4 border-[#D4AF37]/60 pl-4 italic text-[#D4AF37] text-sm sm:text-base">
      “A E-Coin é o elo entre o valor real e o digital —  
      o símbolo de uma economia construída desde o Gênesis e projetada para a Eternidade.”
    </blockquote>

    {/* BLOCO EXPANDIDO – VISÃO FUTURA */}
    <div className="rounded-2xl border border-[#D4AF37]/30 bg-black/60 p-5 mt-8">
      <h4 className="text-lg font-semibold text-[#D4AF37] mb-3">
        🚀 O Futuro da E-Coin e o Chamado à Comunidade
      </h4>
      <p className="text-gray-300 mb-3">
        A próxima era da <strong className="text-[#D4AF37]">E-Coin</strong> será marcada
        pela expansão de seu ecossistema, integração plena à{" "}
        <strong>E-Chain</strong>, e pelo fortalecimento da{" "}
        <strong>GenesisDAO</strong> como a voz soberana da comunidade global.
      </p>
      <p className="text-gray-300 mb-3">
        Cada holder, trader e investidor é parte de uma nova geração de construtores
        de valor, conectando tecnologia e humanidade. Juntos, transformamos o
        blockchain em instrumento de <strong>equidade, inovação e impacto social</strong>.
      </p>
      <p className="text-gray-300">
        A <strong className="text-[#D4AF37]">E-Coin Movement</strong> é mais do que um projeto:
        é um pacto entre gerações para reimaginar o futuro financeiro da África,
        da América e do mundo.  
        <br className="hidden sm:block" />
        <strong>Junte-se ao movimento. Construa o legado. Viva a E-Coin.</strong>
      </p>
    </div>
  </div>

  {/* ENCERRAMENTO VISUAL */}
  <div className="mt-10 text-center">
    <p className="text-sm text-[#D4AF37]/80 uppercase tracking-[0.25em]">
      E-Coin | EdenKingDom Corporation © 2025 — Built from Genesis, Designed for Eternity
    </p>
  </div>
</section>

      {/* 🛡️ Seção Oficial — Mecanismo de Buy-Back e Conformidade AML */}
<section
  id="buyback-intro"
  className="relative overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-6 md:p-10 mt-16"
>
  {/* EFEITOS DE FUNDO */}
  <div className="pointer-events-none absolute -top-24 left-1/3 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-28 right-0 h-96 w-96 rounded-full bg-[#1C2D5A]/40 blur-3xl" />

  {/* TÍTULO */}
  <h3 className="text-xl font-semibold text-[#D4AF37] mb-6">
    🛡️ Seção Oficial — Mecanismo de Buy-Back e Conformidade AML
  </h3>

  <h4 className="text-lg font-semibold text-[#D4AF37]/90 mb-3">I. Introdução</h4>

  {/* CONTEÚDO */}
  <div className="space-y-5 text-gray-300 leading-relaxed">
    <p>
      O mecanismo de <strong className="text-[#D4AF37]">Buy-Back Inteligente</strong> da{" "}
      <strong>E-Coin</strong> é o coração do nosso sistema de estabilidade,
      sustentação e valorização. Ele substitui os métodos tradicionais de{" "}
      <em>mint</em> (emissão) e <em>burn</em> (queima) — ausentes no contrato
      inteligente — por um processo econômico externo, automatizado e
      corporativamente regulado.
    </p>

    <p>
      O que criamos com a <strong className="text-[#D4AF37]">E-Coin</strong> é uma evolução direta
      do que <strong>Bitcoin</strong>, <strong>Ethereum</strong> e{" "}
      <strong>Shiba Inu</strong> jamais implementaram: resolver de forma definitiva o
      problema da <strong>volatilidade</strong> e da{" "}
      <strong>liquidação de holders e bancas de negociação</strong>.
    </p>

    <p>
      O nosso sistema de <strong className="text-[#D4AF37]">recompra automatizada (Buy-Back)</strong>{" "}
      funciona como um <strong>pulmão econômico</strong> da E-Coin — sempre que há pressão de venda
      (<em>dump</em>), a <strong>E-Treasury</strong> recompra tokens equivalentes,
      absorvendo o impacto e mantendo a estabilidade do preço.
    </p>

    {/* EFEITOS IMEDIATOS */}
    <div className="rounded-2xl border border-[#D4AF37]/30 bg-black/60 p-5">
      <h5 className="text-[#D4AF37] font-semibold mb-2">🧩 Efeitos Imediatos:</h5>
      <ol className="list-decimal list-inside space-y-2">
        <li>
          <strong>Estabilidade do preço (anti-dump):</strong> o valor não despenca após vendas em massa.
        </li>
        <li>
          <strong>Crescimento controlado (auto-regulação):</strong> em alta, o sistema reduz atuação,
          permitindo valorização natural.
        </li>
        <li>
          <strong>Proteção ao holder (anti-liquidação):</strong> impede perdas por desvalorizações abruptas,
          garantindo liquidação zero.
        </li>
      </ol>
    </div>

    {/* TABELA BUY-BACK = EMISSÃO + QUEIMA INTELIGENTE */}
    <div className="overflow-x-auto mt-6">
      <table className="min-w-[640px] w-full border-collapse text-sm">
        <thead>
          <tr className="bg-[#D4AF37]/10">
            <th className="border border-gray-700 px-4 py-3 text-left">Situação</th>
            <th className="border border-gray-700 px-4 py-3 text-left">Ação</th>
            <th className="border border-gray-700 px-4 py-3 text-left">Resultado</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-white/5">
            <td className="border border-gray-700 px-4 py-3">Vendas em massa</td>
            <td className="border border-gray-700 px-4 py-3">Tesouraria recompra</td>
            <td className="border border-gray-700 px-4 py-3">Queima parcial → reduz oferta</td>
          </tr>
          <tr className="hover:bg-white/5">
            <td className="border border-gray-700 px-4 py-3">Demanda alta</td>
            <td className="border border-gray-700 px-4 py-3">Liberação controlada</td>
            <td className="border border-gray-700 px-4 py-3">Estabiliza o preço e garante liquidez</td>
          </tr>
          <tr className="hover:bg-white/5">
            <td className="border border-gray-700 px-4 py-3">Estagnação</td>
            <td className="border border-gray-700 px-4 py-3">Micro-queimas graduais</td>
            <td className="border border-gray-700 px-4 py-3">Incentiva valorização orgânica</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="italic text-[#D4AF37]/90">
      ➡️ O sistema respira junto com o mercado, sem inflacionar nem deflacionar
      em excesso.
    </p>

    {/* MODELO DEFLACIONÁRIO */}
    <h5 className="text-lg font-semibold text-[#D4AF37] mt-6 mb-2">
      💎 Modelo Deflacionário com Base Real
    </h5>
    <p>
      Cada recompra é sustentada por{" "}
      <strong className="text-[#D4AF37]">receitas corporativas reais</strong>,
      liquidez em <strong>USDT</strong> e contratos multi-assinatura que garantem
      segurança. Assim, a E-Coin deixa de ser especulativa e torna-se um{" "}
      <strong>ativo corporativo de valor intrínseco</strong>.
    </p>

    {/* COMPARATIVO */}
    <div className="overflow-x-auto mt-6">
      <table className="min-w-[640px] w-full border-collapse text-sm">
        <thead>
          <tr className="bg-[#D4AF37]/10">
            <th className="border border-gray-700 px-4 py-3 text-left">Critério</th>
            <th className="border border-gray-700 px-4 py-3 text-left">Bitcoin</th>
            <th className="border border-gray-700 px-4 py-3 text-left">Shiba Inu</th>
            <th className="border border-gray-700 px-4 py-3 text-left">E-Coin</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-white/5">
            <td className="border border-gray-700 px-4 py-3">Volatilidade</td>
            <td className="border border-gray-700 px-4 py-3">Alta</td>
            <td className="border border-gray-700 px-4 py-3">Altíssima</td>
            <td className="border border-gray-700 px-4 py-3">Controlada</td>
          </tr>
          <tr className="hover:bg-white/5">
            <td className="border border-gray-700 px-4 py-3">Mecanismo de Defesa</td>
            <td className="border border-gray-700 px-4 py-3">Nenhum</td>
            <td className="border border-gray-700 px-4 py-3">Burn manual</td>
            <td className="border border-gray-700 px-4 py-3">Buy-Back automatizado</td>
          </tr>
          <tr className="hover:bg-white/5">
            <td className="border border-gray-700 px-4 py-3">Liquidação de Holders</td>
            <td className="border border-gray-700 px-4 py-3">Sim</td>
            <td className="border border-gray-700 px-4 py-3">Sim</td>
            <td className="border border-gray-700 px-4 py-3 text-[#4ade80] font-semibold">❌ Nunca</td>
          </tr>
          <tr className="hover:bg-white/5">
            <td className="border border-gray-700 px-4 py-3">Base Real</td>
            <td className="border border-gray-700 px-4 py-3">Nenhuma</td>
            <td className="border border-gray-700 px-4 py-3">Meme / Hype</td>
            <td className="border border-gray-700 px-4 py-3">Receitas corporativas multi-setoriais</td>
          </tr>
          <tr className="hover:bg-white/5">
            <td className="border border-gray-700 px-4 py-3">Sustentabilidade</td>
            <td className="border border-gray-700 px-4 py-3">Mineradores dependentes</td>
            <td className="border border-gray-700 px-4 py-3">Comunidade volátil</td>
            <td className="border border-gray-700 px-4 py-3">Economia corporativa autossustentável</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="mt-6 text-gray-200">
      🟢 <strong>Resultado:</strong> A E-Coin torna-se uma moeda corporativa{" "}
      <strong>imune à liquidação</strong>, com estabilidade, recompensas e valorização
      orgânica-progressiva — parte integrante da estrutura deflacionária,
      sustentável e transparente da{" "}
      <strong className="text-[#D4AF37]">EdenKingDom Corporation</strong>.
    </p>
  </div>
</section>

{/* 🧠 II. Função Econômica — O Buy-Back como Mecanismo Externo de Mint e Burn */}
<section
  id="buyback-economic-function"
  className="relative overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-6 md:p-10 mt-12"
>
  {/* EFEITOS DE FUNDO */}
  <div className="pointer-events-none absolute -top-20 left-1/3 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-[#1C2D5A]/40 blur-3xl" />

  {/* TÍTULO */}
  <h4 className="text-lg font-semibold text-[#D4AF37] mb-4">
    II. 🧠 Função Econômica — O Buy-Back como Mecanismo Externo de Mint e Burn
  </h4>

  {/* CONTEÚDO PRINCIPAL */}
  <div className="space-y-5 text-gray-300 leading-relaxed">
    <p>
      O contrato principal da <strong className="text-[#D4AF37]">E-Coin</strong> não contém funções
      diretas de <code className="text-[#4ade80]">mint()</code> nem{" "}
      <code className="text-[#ef4444]">burn()</code>.  
      Em vez disso, o sistema de recompra (<em>buy-back</em>) executado pela{" "}
      <strong className="text-[#D4AF37]">E-Treasury</strong> realiza essas funções{" "}
      <strong>de forma indireta, segura e rastreável</strong>, fora do contrato.
    </p>

    <p>
      A <strong className="text-[#D4AF37]">E-Coin</strong> opera sob o princípio de que{" "}
      <strong>mercado e corporação funcionam em equilíbrio</strong>.  
      Assim, as funções clássicas de emissão e queima são substituídas por{" "}
      <strong className="text-[#D4AF37]">mecanismos econômicos reais</strong>,
      baseados em liquidez corporativa e auditoria pública.
    </p>

    {/* TABELA DE EQUIVALÊNCIA */}
    <div className="overflow-x-auto mt-6">
      <table className="min-w-[640px] w-full border-collapse text-sm">
        <thead>
          <tr className="bg-[#D4AF37]/10">
            <th className="border border-gray-700 px-4 py-3 text-left">Ação Tradicional</th>
            <th className="border border-gray-700 px-4 py-3 text-left">Equivalente E-Coin</th>
            <th className="border border-gray-700 px-4 py-3 text-left">Efeito Econômico</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-white/5">
            <td className="border border-gray-700 px-4 py-3">🔥 burn()</td>
            <td className="border border-gray-700 px-4 py-3">
              Recompra (<em>buy-back</em>) e retenção
            </td>
            <td className="border border-gray-700 px-4 py-3">
              Reduz o supply em circulação — tokens retirados do mercado e
              mantidos em cold wallet ou queimados periodicamente, aumentando a escassez e o valor.
            </td>
          </tr>
          <tr className="hover:bg-white/5">
            <td className="border border-gray-700 px-4 py-3">💎 mint()</td>
            <td className="border border-gray-700 px-4 py-3">
              Re-injeção controlada de liquidez via E-Treasury
            </td>
            <td className="border border-gray-700 px-4 py-3">
              Tokens previamente recomprados retornam ao mercado de forma controlada,
              estabilizando o preço enquanto a demanda aumenta.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* EXPLICAÇÃO FINAL */}
    <p>
      Essas operações não ocorrem através de funções internas do contrato, mas{" "}
      <strong>por meio de ações corporativas rastreáveis</strong>, lastreadas em{" "}
      <strong>receitas reais das divisões EdenKingDom</strong> e com{" "}
      <strong>auditoria on-chain pública</strong>.
    </p>

    <p>
      Assim, a <strong className="text-[#D4AF37]">E-Coin</strong> mantém natureza{" "}
      <strong>deflacionária e sustentável</strong> — onde emissão e queima são{" "}
      <strong>reflexos econômicos</strong>, e não ações de código.
      Isso elimina riscos de manipulação, preserva o supply fixo e garante que 
      todo o processo seja governado por receita real e não por privilégio administrativo.
    </p>
  </div>
</section>

{/* 💰 III. Estrutura do Fundo de Recompra (Buy-Back Treasury) */}
<section
  id="buyback-treasury"
  className="relative overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-6 md:p-10 mt-12"
>
  {/* EFEITOS DE FUNDO */}
  <div className="pointer-events-none absolute -top-20 left-1/3 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-[#1C2D5A]/40 blur-3xl" />

  {/* TÍTULO */}
  <h4 className="text-lg font-semibold text-[#D4AF37] mb-4">
    III. 💰 Estrutura do Fundo de Recompra (Buy-Back Treasury)
  </h4>

  {/* CONTEÚDO PRINCIPAL */}
  <div className="space-y-5 text-gray-300 leading-relaxed">
    <p>
      O <strong className="text-[#D4AF37]">Buy-Back Treasury</strong> é o{" "}
      <strong>fundo corporativo descentralizado</strong> que sustenta o equilíbrio
      da moeda <strong>E-Coin</strong>.  
      Ele é alimentado por <strong>receitas reais e verificáveis</strong> da{" "}
      <strong className="text-[#D4AF37]">EdenKingDom Corporation</strong>, provenientes de
      divisões como <em>energia, construção, tecnologia, educação, saúde, marketplace</em> e muito mais.
    </p>

    <p>
      Este fundo é o motor que transforma a liquidez corporativa em{" "}
      <strong>estabilidade de preço</strong> e <strong>proteção de valor</strong>,
      operando de forma automática, transparente e pública.
    </p>

    {/* 🔹 QUANDO HÁ VENDA EM MASSA */}
    <div className="rounded-2xl border border-[#D4AF37]/30 bg-black/60 p-5">
      <h5 className="text-[#D4AF37] font-semibold mb-2">
        🔹 Quando o sistema detecta venda em massa (<em>dump</em>):
      </h5>
      <p>
        A <strong>E-Treasury</strong> recompra automaticamente o volume proporcional,
        impedindo desvalorização drástica do preço e protegendo traders, holders e investidores
        contra liquidação repentina.
      </p>
    </div>

    {/* 🔹 QUANDO HÁ ALTA DEMANDA */}
    <div className="rounded-2xl border border-[#D4AF37]/30 bg-black/60 p-5">
      <h5 className="text-[#D4AF37] font-semibold mb-2">
        🔹 Quando há alta demanda (<em>bull market</em>):
      </h5>
      <p>
        O sistema reduz a recompra e pode liberar gradualmente parte dos tokens
        previamente recomprados, de forma{" "}
        <strong>controlada, transparente e pública</strong>, acompanhando o aumento de novos holders.
      </p>
    </div>

    {/* POLÍTICA DE LIBERAÇÃO */}
    <div className="rounded-2xl border border-[#1C2D5A]/40 bg-[#0a0a0a]/70 p-5">
      <h5 className="text-[#D4AF37] font-semibold mb-2">📜 Política de Liberação</h5>
      <p>
        Apenas <strong>1 %</strong> das recompensas recompradas pode ser
        reintroduzido no mercado a cada <strong>6 – 10 meses</strong>, conforme a
        demanda e os sinais de mercado (<em>bull trend</em>).  
        Isso garante o equilíbrio do ecossistema e{" "}
        <strong>impede a diluição de valor</strong>.
      </p>
      <p className="mt-3">
        Todas as atividades do fundo são{" "}
        <strong>auditadas e exibidas publicamente</strong> no painel{" "}
        <strong className="text-[#D4AF37]">E-Coin Global Price Sync Engine (ECGPSE)</strong> — 
        além do painel dedicado ao preço da moeda,{" "}
        <strong className="text-[#D4AF37]">EdenKingDom Coin Price (ECP)</strong>,
        disponível no portal oficial:{" "}
        <a
          href="https://ecoin.edenkingdom.org"
          target="_blank"
          className="text-[#4ade80] underline hover:text-[#22c55e]"
        >
          ecoin.edenkingdom.org
        </a>
        .
      </p>
    </div>

    <p className="mt-4 text-gray-300">
      Dessa forma, o fundo de recompra mantém o equilíbrio natural entre
      <strong> oferta e demanda </strong>,
      transformando o <strong>Buy-Back Treasury</strong> em um verdadeiro{" "}
      <strong>escudo econômico descentralizado</strong> da E-Coin.
    </p>
  </div>
</section>

{/* ⚖️ IV. Compliance — Anti-Money Laundering (AML) e KYC */}
<section
  id="compliance-aml"
  className="relative overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-6 md:p-10 mt-12"
>
  {/* EFEITOS DE FUNDO */}
  <div className="pointer-events-none absolute -top-20 left-1/3 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-[#1C2D5A]/40 blur-3xl" />

  {/* TÍTULO */}
  <h4 className="text-lg font-semibold text-[#D4AF37] mb-4">
    IV. ⚖️ Compliance — Anti-Money Laundering (AML) e KYC
  </h4>

  {/* CONTEÚDO PRINCIPAL */}
  <div className="space-y-5 text-gray-300 leading-relaxed">
    <p>
      O mecanismo da <strong className="text-[#D4AF37]">E-Coin</strong> é totalmente compatível
      com os <strong>padrões internacionais AML e KYC</strong>, como os definidos pela{" "}
      <strong>FATF</strong>, <strong>MiCA (UE)</strong> e <strong>FinCEN (EUA)</strong>.
      Cada operação da <strong>E-Treasury</strong> segue diretrizes de conformidade financeira,
      auditoria contábil e transparência on-chain.
    </p>

    {/* A) FONTES LEGÍTIMAS */}
    <div className="rounded-2xl border border-[#D4AF37]/30 bg-black/60 p-5">
      <h5 className="text-[#D4AF37] font-semibold mb-2">
        ✅ a) Fontes verificáveis e legítimas
      </h5>
      <p>
        O fundo de recompra utiliza <strong>receitas corporativas auditadas</strong> — oriundas de
        operações comerciais, serviços e plataformas da{" "}
        <strong className="text-[#D4AF37]">EdenKingDom Corporation</strong>.
        Cada transação é rastreável e associada a comprovantes contábeis e{" "}
        <strong>hash on-chain</strong>.
      </p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>Ledger contábil corporativo (em fiat e cripto);</li>
        <li>Hash pública da recompra na Binance Smart Chain;</li>
        <li>Relatórios periódicos de tesouraria — (E-Treasury) com prova de reservas on-chain.</li>
      </ul>
      <p className="mt-3 text-gray-200">
        🔸 Cada token recomprado tem origem legítima e propósito econômico claro — 
        estabilizar o preço e proteger investidores.
      </p>
    </div>

    {/* B) TRANSPARÊNCIA TOTAL */}
    <div className="rounded-2xl border border-[#D4AF37]/30 bg-black/60 p-5">
      <h5 className="text-[#D4AF37] font-semibold mb-2">
        ✅ b) Transparência e rastreabilidade total
      </h5>
      <ul className="list-disc list-inside space-y-1">
        <li>Todas as recompras e liberações são públicas e auditáveis on-chain.</li>
        <li>
          As carteiras da tesouraria (<strong>E-Treasury</strong>) são 
          <strong>multisig 3-of-5</strong>, evitando controle individual.
        </li>
        <li>
          Não há mistura de fundos pessoais com fundos corporativos — 
          fator essencial de conformidade AML.
        </li>
      </ul>
    </div>

    {/* C) AUSÊNCIA DE FLUXO CIRCULAR */}
    <div className="rounded-2xl border border-[#1C2D5A]/40 bg-[#0a0a0a]/70 p-5">
      <h5 className="text-[#D4AF37] font-semibold mb-2">
        ✅ c) Ausência de benefício privado ou fluxo circular
      </h5>
      <p>
        Na lavagem de dinheiro, há retorno ilícito ao emissor. 
        No nosso modelo ocorre o oposto:
      </p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>O valor recomprado não retorna à gestão pessoal ou privada;</li>
        <li>
          Os tokens recomprados são bloqueados, queimados ou reinjetados sob 
          <strong>cronograma público auditável</strong>;
        </li>
        <li>
          Nenhum fluxo de enriquecimento indevido ocorre — apenas gestão 
          macroeconômica legítima da moeda corporativa E-Coin.
        </li>
      </ul>
      <p className="mt-3">
        O <strong>Buy-Back</strong> não caracteriza lavagem de dinheiro, pois o 
        <strong>supply é fixo e eterno</strong>, sem novas emissões ou 
        reinjeções ocultas de liquidez.
      </p>
    </div>

    {/* CONCLUSÃO */}
    <p className="mt-4 text-gray-200 italic">
      A estrutura da E-Treasury cumpre integralmente os protocolos AML/KYC globais,
      tornando a E-Coin um modelo de compliance e governança transparente para o mercado cripto institucional.
    </p>
  </div>
</section>

{/* 🛡️ V. Segurança Econômica e Anti-Manipulação */}
<section
  id="economic-security"
  className="relative overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-6 md:p-10 mt-12"
>
  {/* EFEITOS DE FUNDO */}
  <div className="pointer-events-none absolute -top-20 left-1/3 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-[#1C2D5A]/40 blur-3xl" />

  {/* TÍTULO */}
  <h4 className="text-lg font-semibold text-[#D4AF37] mb-4">
    V. 🛡️ Segurança Econômica e Anti-Manipulação
  </h4>

  {/* CONTEÚDO PRINCIPAL */}
  <div className="space-y-5 text-gray-300 leading-relaxed">
    <p>
      O mecanismo de <strong className="text-[#D4AF37]">buy-back inteligente</strong> da{" "}
      <strong className="text-[#D4AF37]">E-Coin</strong> estabelece uma{" "}
      <strong>zona de imunidade de liquidação</strong>{" "}
      (<em>Liquidation-Free Zone</em>), assegurando que o mercado opere sob equilíbrio
      natural, sem colapsos nem desvalorizações abruptas.
    </p>

    <div className="rounded-2xl border border-[#D4AF37]/30 bg-black/60 p-5">
      <h5 className="text-[#D4AF37] font-semibold mb-2">🔒 Garantias Estruturais:</h5>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Holders</strong> nunca sofrem liquidação abrupta ou perda em massa
          de valor nos seus <em>holdings</em>;
        </li>
        <li>
          <strong>Vendas de grandes investidores (whales)</strong> são automaticamente
          absorvidas pelo fundo de recompra;
        </li>
        <li>
          A <strong>estabilidade do preço</strong> reflete diretamente o crescimento
          real do ecossistema{" "}
          <strong className="text-[#D4AF37]">EdenKingDom Corporation</strong>.
        </li>
      </ul>
    </div>

    <p>
      Essa arquitetura elimina a necessidade de{" "}
      <strong>mint manual</strong> ou{" "}
      <strong>queimas emergenciais</strong>, pois o próprio mercado se{" "}
      <strong>auto-corrige</strong> via os mecanismos combinados da{" "}
      <strong>E-Treasury</strong> e do{" "}
      <strong>Buy-Back Treasury</strong>.
    </p>

    <div className="rounded-2xl border border-[#1C2D5A]/40 bg-[#0a0a0a]/70 p-5">
      <h5 className="text-[#4ade80] font-semibold mb-2">🧩 Resultado Econômico</h5>
      <p>
        O sistema cria uma <strong>economia autorregulada</strong>, protegida contra
        manipulações externas e dumps coordenados.  
        A <strong>E-Coin</strong> mantém sua liquidez e valor sem depender de especulação,
        provando ser um modelo de <strong>resiliência econômica on-chain</strong>.
      </p>
    </div>

    <p className="italic text-gray-200">
      “A E-Coin é a primeira moeda corporativa capaz de respirar com o mercado —
      protegendo holders, equilibrando o preço e refletindo a verdadeira
      produtividade da EdenKingDom Corporation.”
    </p>
  </div>
</section>

{/* ♻️ VI. Política de Liberação e Reposição Inteligente */}
<section
  id="release-policy"
  className="relative overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-6 md:p-10 mt-12"
>
  {/* EFEITOS DE FUNDO */}
  <div className="pointer-events-none absolute -top-20 left-1/3 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-[#1C2D5A]/40 blur-3xl" />

  {/* TÍTULO */}
  <h4 className="text-lg font-semibold text-[#D4AF37] mb-4">
    VI. ♻️ Política de Liberação e Reposição Inteligente
  </h4>

  {/* CONTEÚDO PRINCIPAL */}
  <div className="space-y-6 text-gray-300 leading-relaxed">
    <p>
      O modelo de <strong className="text-[#D4AF37]">liberação gradual</strong> da{" "}
      <strong>E-Coin</strong> — limitado a{" "}
      <strong>1 % a cada 6 – 10 meses</strong>, ajustável conforme a
      demanda de mercado (<em>Bull Market</em>) — é um dos pilares da{" "}
      <strong>segurança e sustentabilidade</strong> do ecossistema.
    </p>

    {/* TABELA SIMBÓLICA */}
    <div className="overflow-x-auto">
      <table className="min-w-[320px] w-full border-collapse text-sm">
        <thead>
          <tr className="bg-[#D4AF37]/10">
            <th className="border border-gray-700 px-4 py-3 text-left">Elemento</th>
            <th className="border border-gray-700 px-4 py-3 text-left">Efeito Econômico</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-white/5">
            <td className="border border-gray-700 px-4 py-3">🔒 Liberação lenta</td>
            <td className="border border-gray-700 px-4 py-3">
              Evita oversupply e movimentos especulativos súbitos.
            </td>
          </tr>
          <tr className="hover:bg-white/5">
            <td className="border border-gray-700 px-4 py-3">
              💰 Expansão proporcional à base de holders
            </td>
            <td className="border border-gray-700 px-4 py-3">
              Mantém liquidez saudável e justa conforme o crescimento da comunidade.
            </td>
          </tr>
          <tr className="hover:bg-white/5">
            <td className="border border-gray-700 px-4 py-3">♻️ Reposição via novas receitas</td>
            <td className="border border-gray-700 px-4 py-3">
              Reforça o fundo de buy-back e mantém o ciclo deflacionário ativo.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      ➡️ Em outras palavras, o{" "}
      <strong>fundo de recompra</strong> nunca representa uma perda — ele é um{" "}
      <strong>investimento permanente na estabilidade</strong> do ecossistema E-Coin,
      continuamente realimentado pelas operações da{" "}
      <strong>E-Treasury</strong> e do{" "}
      <strong>Buy-Back Treasury</strong>.
    </p>

    <div className="rounded-2xl border border-[#1C2D5A]/40 bg-[#0a0a0a]/70 p-5">
      <h5 className="text-[#4ade80] font-semibold mb-2">📈 Resultado</h5>
      <p>
        A E-Coin mantém um equilíbrio orgânico entre circulação e escassez,
        evitando inflação e garantindo que o valor cresça com base em 
        <strong>produção real e receitas corporativas autênticas</strong>.
      </p>
    </div>

    <p className="italic text-gray-200">
      “Na E-Coin, cada token recomprado é uma semente de estabilidade —
      e cada liberação é um ato de crescimento responsável e sustentável.”
    </p>
  </div>
</section>

{/* ⚙️ VII. O Desafio do Sistema Buy-Back — Variação de Preço entre Exchanges */}
<section
  id="buyback-challenge"
  className="relative overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-6 md:p-10 mt-12"
>
  {/* EFEITOS DE FUNDO */}
  <div className="pointer-events-none absolute -top-20 left-1/3 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-[#1C2D5A]/40 blur-3xl" />

  {/* TÍTULO */}
  <h4 className="text-lg font-semibold text-[#D4AF37] mb-4">
    VII. ⚙️ O Desafio do Sistema Buy-Back — Variação de Preço entre Exchanges
  </h4>

  {/* CONTEÚDO PRINCIPAL */}
  <div className="space-y-6 text-gray-300 leading-relaxed">
    <p>
      Naturalmente, o preço de um ativo listado em múltiplas bolsas pode{" "}
      <strong>divergir por segundos ou minutos</strong> devido a variações
      locais de volume, ordens e fuso horário.  
      Essas micro-diferenças, conhecidas como{" "}
      <strong>spreads de arbitragem</strong>, podem causar distorções entre o
      valor real e o percebido da{" "}
      <strong className="text-[#D4AF37]">E-Coin</strong>.
    </p>

    <ul className="list-disc list-inside space-y-1">
      <li>Diferenças de volume e liquidez;</li>
      <li>Ordens locais de compra e venda simultâneas;</li>
      <li>Fusos horários e pares distintos (E-Coin/USDT, E-Coin/BNB, etc.).</li>
    </ul>

    <div className="rounded-2xl border border-[#D4AF37]/30 bg-black/60 p-5">
      <h5 className="text-[#D4AF37] font-semibold mb-2">📊 Exemplo de Desvio</h5>
      <p>
        <strong>E-Coin = $30</strong> na Binance / <strong>$31</strong> na Upbit →{" "}
        <strong>spread de $1.</strong>  
        Essa diferença pode parecer pequena, mas em larga escala cria{" "}
        <strong>arbitragem especulativa</strong> e fragmenta o mercado.
      </p>
    </div>

    <p>
      Para eliminar esse fenômeno e garantir que o{" "}
      <strong>preço da E-Coin permaneça justo e sincronizado</strong> em todas as
      exchanges globais, a EdenKingDom Corporation implementa um{" "}
      <strong>modelo corporativo de equilíbrio global via Buy-Back</strong>,
      apoiado por um motor automatizado de monitoramento e correção chamado:
    </p>

    <div className="rounded-2xl border border-[#1C2D5A]/40 bg-[#0a0a0a]/70 p-5 text-center">
      <h5 className="text-[#D4AF37] text-lg font-semibold mb-1">
        🌐 E-Coin Global Price Sync Engine (ECGPSE)
      </h5>
      <p className="text-sm text-gray-300">
        Sistema corporativo inteligente responsável por monitorar, comparar e
        ajustar o preço da E-Coin entre CEX e DEX em tempo real, mantendo
        equilíbrio, transparência e justiça global no valor de mercado.
      </p>
    </div>

    <p className="italic text-gray-200">
      “Em cada segundo de mercado, o ECGPSE trabalha silenciosamente — 
      sincronizando bolsas, protegendo o preço e garantindo o equilíbrio 
      global da E-Coin.”
    </p>
  </div>
</section>

{/* 🌐 VIII. Solução — E-Coin Global Price Sync Engine (ECGPSE) */}
<section
  id="ecgpse"
  className="relative overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-6 md:p-10 mt-12"
>
  {/* EFEITOS DE FUNDO */}
  <div className="pointer-events-none absolute -top-20 left-1/3 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-[#1C2D5A]/40 blur-3xl" />

  {/* TÍTULO */}
  <h4 className="text-lg font-semibold text-[#D4AF37] mb-4">
    VIII. 🌐 Solução — E-Coin Global Price Sync Engine (ECGPSE)
  </h4>

  {/* CONTEÚDO PRINCIPAL */}
  <div className="space-y-6 text-gray-300 leading-relaxed">
    <p>
      O <strong className="text-[#D4AF37]">ECGPSE</strong> é o{" "}
      <strong>motor corporativo automatizado</strong> responsável por
      monitorar, analisar e equalizar os preços da{" "}
      <strong>E-Coin</strong> em todas as exchanges globais, tanto{" "}
      <strong>CEX</strong> quanto <strong>DEX</strong>.
    </p>

    <h5 className="text-[#4ade80] font-semibold">🔹 Etapas de Funcionamento</h5>

    {/* ETAPA 1 */}
    <div className="rounded-2xl border border-[#D4AF37]/20 bg-black/60 p-5">
      <h6 className="font-semibold text-[#D4AF37] mb-1">
        1️⃣ Coleta de Dados em Tempo Real
      </h6>
      <p>
        O ECGPSE conecta-se às <strong>APIs públicas</strong> das exchanges
        (Binance, Gate.io, MEXC, PancakeSwap, Upbit, etc.) e lê os{" "}
        <strong>preços médios em milissegundos</strong>, garantindo vigilância
        global 24 h/dia.
      </p>
    </div>

    {/* ETAPA 2 */}
    <div className="rounded-2xl border border-[#D4AF37]/20 bg-black/60 p-5">
      <h6 className="font-semibold text-[#D4AF37] mb-1">
        2️⃣ Cálculo do Preço Global Médio (ECP – EdenKingDom Coin Price)
      </h6>
      <p>
        O sistema calcula uma{" "}
        <strong>média ponderada global</strong> com base no volume de cada
        exchange:
      </p>

      <div className="overflow-x-auto mt-3">
        <table className="min-w-[320px] w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#D4AF37]/10">
              <th className="border border-gray-700 px-3 py-2 text-left">
                Exchange
              </th>
              <th className="border border-gray-700 px-3 py-2 text-left">
                Peso (%)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-white/5">
              <td className="border border-gray-700 px-3 py-2">Binance</td>
              <td className="border border-gray-700 px-3 py-2">60 %</td>
            </tr>
            <tr className="hover:bg-white/5">
              <td className="border border-gray-700 px-3 py-2">PancakeSwap</td>
              <td className="border border-gray-700 px-3 py-2">25 %</td>
            </tr>
            <tr className="hover:bg-white/5">
              <td className="border border-gray-700 px-3 py-2">Upbit</td>
              <td className="border border-gray-700 px-3 py-2">15 %</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-3">
        O preço global é calculado por{" "}
        <strong>ECP = Σ(preço × peso)</strong>.
      </p>
    </div>

    {/* ETAPA 3 */}
    <div className="rounded-2xl border border-[#D4AF37]/20 bg-black/60 p-5">
      <h6 className="font-semibold text-[#D4AF37] mb-1">
        3️⃣ Análise de Desvios
      </h6>
      <p>
        Caso uma exchange apresente variação acima de{" "}
        <strong>1–2 %</strong> em relação ao ECP, o sistema aciona{" "}
        <strong>ajustes automáticos de liquidez</strong> para neutralizar o
        desvio.
      </p>
    </div>

    {/* ETAPA 4 */}
    <div className="rounded-2xl border border-[#D4AF37]/20 bg-black/60 p-5">
      <h6 className="font-semibold text-[#D4AF37] mb-1">
        4️⃣ Ação Buy-Back / Sell-Back Automática
      </h6>
      <p>
        • Se o preço estiver <strong>abaixo</strong> do ECP, a{" "}
        <strong>E-Treasury</strong> executa recompras (buy-back) na exchange
        correspondente, elevando o preço.  
        • Se o preço estiver <strong>acima</strong>, o sistema pode liberar
        volumes mínimos controlados, reduzindo pressão de alta e mantendo o
        equilíbrio global.
      </p>
    </div>

    {/* ETAPA 5 */}
    <div className="rounded-2xl border border-[#D4AF37]/20 bg-black/60 p-5">
      <h6 className="font-semibold text-[#D4AF37] mb-1">
        5️⃣ Sincronização com Oráculos DeFi
      </h6>
      <p>
        O ECGPSE integra-se com oráculos como{" "}
        <strong>Chainlink</strong> e <strong>Pyth Network</strong> para
        distribuir o <strong>preço global médio (ECP)</strong> às plataformas
        DeFi que usam E-Coin como colateral ou ativo de trading, garantindo
        consistência entre on-chain e off-chain.
      </p>
    </div>

    <p className="italic text-gray-200">
      “O ECGPSE é o cérebro que mantém o coração da E-Coin batendo em ritmo
      global — ajustando, sincronizando e equilibrando o mercado em tempo real.”
    </p>
  </div>
</section>

{/* 💎 IX. Buy-Back Engine como Ferramenta de Equilíbrio Global */}
<section
  id="buyback-engine"
  className="relative overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-6 md:p-10 mt-12"
>
  {/* EFEITOS DE FUNDO */}
  <div className="pointer-events-none absolute -top-20 left-1/3 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-[#1C2D5A]/40 blur-3xl" />

  {/* TÍTULO */}
  <h4 className="text-lg font-semibold text-[#D4AF37] mb-4">
    IX. 💎 Buy-Back Engine como Ferramenta de Equilíbrio Global
  </h4>

  {/* CONTEÚDO PRINCIPAL */}
  <div className="space-y-6 text-gray-300 leading-relaxed">
    <p>
      O <strong className="text-[#D4AF37]">fundo de recompra</strong> atua como{" "}
      <strong>árbitro econômico global</strong>, equilibrando os preços da{" "}
      <strong>E-Coin</strong> entre todas as bolsas (CEX e DEX) e garantindo
      paridade internacional independente da localização ou par de negociação.
    </p>

    {/* TABELA DE AÇÕES */}
    <div className="overflow-x-auto">
      <table className="min-w-[320px] w-full border-collapse text-sm">
        <thead>
          <tr className="bg-[#D4AF37]/10">
            <th className="border border-gray-700 px-3 py-2 text-left">Situação</th>
            <th className="border border-gray-700 px-3 py-2 text-left">Ação da Tesouraria</th>
            <th className="border border-gray-700 px-3 py-2 text-left">Resultado</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-white/5">
            <td className="border border-gray-700 px-3 py-3">
              Preço baixo em determinada exchange
            </td>
            <td className="border border-gray-700 px-3 py-3">
              Buy-back local ou injeção de liquidez
            </td>
            <td className="border border-gray-700 px-3 py-3">
              Elevação do preço até o ECP
            </td>
          </tr>

          <tr className="hover:bg-white/5">
            <td className="border border-gray-700 px-3 py-3">
              Preço alto demais em outra exchange
            </td>
            <td className="border border-gray-700 px-3 py-3">
              Venda controlada de reserva
            </td>
            <td className="border border-gray-700 px-3 py-3">
              Redução natural até o ECP
            </td>
          </tr>

          <tr className="hover:bg-white/5">
            <td className="border border-gray-700 px-3 py-3">
              Spread maior que 2 %
            </td>
            <td className="border border-gray-700 px-3 py-3">
              Sincronização automática via oráculo + ajuste manual da equipe
            </td>
            <td className="border border-gray-700 px-3 py-3">
              Uniformização em minutos
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* PARÁGRAFO FINAL */}
    <p>
      Dessa forma, a{" "}
      <strong className="text-[#D4AF37]">E-Coin</strong> mantém{" "}
      <strong>equilíbrio e paridade internacional</strong> — livre de manipulações,
      independente de país, exchange ou par de negociação.  
      O resultado é uma moeda com preço{" "}
      <strong>uniforme, estável e auditável em tempo real</strong> por meio do{" "}
      <strong>ECGPSE</strong> e da{" "}
      <strong>E-Treasury</strong>.
    </p>

    <p className="italic text-gray-200">
      “O Buy-Back Engine é o árbitro invisível da nova economia — garantindo que
      cada E-Coin valha o mesmo em qualquer parte do mundo.”
    </p>
  </div>
</section>

{/* 🏦 X. Compliance e Legalidade do Modelo */}
<section
  id="compliance"
  className="relative overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-6 md:p-10 mt-12"
>
  {/* EFEITOS DE FUNDO */}
  <div className="pointer-events-none absolute -top-20 left-1/3 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-[#1C2D5A]/40 blur-3xl" />

  {/* TÍTULO */}
  <h4 className="text-lg font-semibold text-[#D4AF37] mb-4">
    X. 🏦 Compliance e Legalidade do Modelo
  </h4>

  {/* CONTEÚDO PRINCIPAL */}
  <div className="space-y-6 text-gray-300 leading-relaxed">
    {/* ✅ TRANSPARÊNCIA */}
    <div className="rounded-2xl border border-[#D4AF37]/30 bg-black/60 p-5">
      <h5 className="text-[#4ade80] font-semibold mb-2">✅ Transparência</h5>
      <p>
        Cada ação executada pelo{" "}
        <strong className="text-[#D4AF37]">E-Coin Global Price Sync Engine (ECGPSE)</strong>{" "}
        é registrada <strong>on-chain com hash público</strong>, garantindo
        rastreabilidade absoluta e prevenindo manipulação ou lavagem de dinheiro.
        O sistema atua como um{" "}
        <strong>árbitro automatizado de mercado</strong>, e não como trader privado.
      </p>
    </div>

    {/* ✅ RECURSOS CORPORATIVOS AUDITÁVEIS */}
    <div className="rounded-2xl border border-[#D4AF37]/30 bg-black/60 p-5">
      <h5 className="text-[#4ade80] font-semibold mb-2">✅ Recursos Corporativos Auditáveis</h5>
      <p>
        Todas as recompras são financiadas com{" "}
        <strong>receitas corporativas legítimas</strong> da{" "}
        <strong>EdenKingDom Corporation</strong>, provenientes de seus múltiplos
        setores — energia, tecnologia, marketplace, educação e saúde.  
        Essas operações são{" "}
        <strong>registradas e auditadas</strong> tanto em registros contábeis quanto
        em blockchain pública, assegurando total integridade financeira.
      </p>
    </div>

    {/* ✅ EQUILÍBRIO REGULATÓRIO */}
    <div className="rounded-2xl border border-[#D4AF37]/30 bg-black/60 p-5">
      <h5 className="text-[#4ade80] font-semibold mb-2">✅ Equilíbrio Regulatório</h5>
      <p>
        O modelo segue integralmente as diretrizes de{" "}
        <strong>compliance internacional</strong> — incluindo{" "}
        <strong>SEC (EUA)</strong>, <strong>MiCA (UE)</strong> e{" "}
        <strong>FINMA (Suíça)</strong>.  
        Atua sob princípios de{" "}
        <strong>governança DAO</strong>, <strong>transparência operacional</strong>{" "}
        e <strong>proteção aos investidores</strong>, consolidando a{" "}
        <strong>E-Coin</strong> como referência de moeda corporativa segura e
        legalmente sustentável.
      </p>
    </div>

    {/* FRASE FINAL */}
    <p className="italic text-gray-200">
      “Com transparência on-chain e governança auditável, o modelo da E-Coin
      redefine a confiança e a conformidade no universo cripto-corporativo.”
    </p>
  </div>
</section>

{/* 💎 XI. E-Coin Price Stability Protocol */}
<section
  id="price-stability"
  className="relative overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-6 md:p-10 mt-12"
>
  {/* EFEITOS DE FUNDO */}
  <div className="pointer-events-none absolute -top-20 left-1/3 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-[#1C2D5A]/40 blur-3xl" />

  {/* TÍTULO */}
  <h4 className="text-lg font-semibold text-[#D4AF37] mb-4">
    XI. 💎 E-Coin Price Stability Protocol
  </h4>

  {/* CONTEÚDO PRINCIPAL */}
  <div className="space-y-6 text-gray-300 leading-relaxed">

    <p>
      O <strong className="text-[#D4AF37]">E-Coin Price Stability Protocol</strong> define 
      o funcionamento global do mecanismo de equilíbrio automático de preços, integrando o{" "}
      <strong>Buy-Back Engine</strong> a oráculos, agregadores e sistemas de liquidez em tempo real.
    </p>

    {/* 🌍 COMO UMA ÚNICA RECOMPRA */}
    <h5 className="text-[#4ade80] font-semibold mt-6">
      🌍 Como uma única recompra pode estabilizar o preço
    </h5>
    <p>
      Mesmo uma única operação de recompra pode reverter ou estabilizar o preço da{" "}
      <strong>E-Coin</strong> se executada no{" "}
      <strong>ponto certo e no volume certo</strong> — pois o mercado reage à 
      <strong>liquidez marginal</strong>, não apenas ao volume total.
    </p>

    <div className="bg-black/60 border border-[#D4AF37]/30 rounded-2xl p-4 text-sm sm:text-base">
      <p className="font-semibold text-[#D4AF37] mb-1">📈 Exemplo realista:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Na Binance, o preço cai de $31 para $29 por falta de ordens de compra;</li>
        <li>O sistema detecta o desvio e executa recompra de $50 000 em USDT;</li>
        <li>O preço médio retorna a $30,5–$31, empurrando bots de arbitragem em outras bolsas;</li>
        <li>Em minutos, o preço global se reequilibra automaticamente.</li>
      </ul>
      <p className="italic text-gray-400 mt-2">
        Resultado: uma recompra coordenada num único ponto gera um 
        <strong> efeito dominó de arbitragem</strong> global.
      </p>
    </div>

    {/* ⚙️ DUAS FORMAS */}
    <h5 className="text-[#4ade80] font-semibold mt-8">
      ⚙️ Duas formas de execução da recompra
    </h5>

    {/* 1️⃣ RECOMPRA DIRETA */}
    <div className="rounded-2xl border border-[#D4AF37]/20 bg-black/60 p-5">
      <h6 className="font-semibold text-[#D4AF37] mb-1">1️⃣ Recompra direta entre exchanges</h6>
      <p>
        A <strong>E-Treasury</strong> pode operar contas corporativas em múltiplas bolsas 
        (Binance, MEXC, Gate.io, PancakeSwap etc.).  
        Quando o preço cai mais em uma exchange, ocorre buy-back local imediato.  
        Os tokens recomprados são enviados à tesouraria principal para reforçar a escassez.
      </p>
      <p className="text-gray-400 text-sm mt-1">
        ✅ Vantagem: estabilização pontual imediata.  
        ⚠️ Desvantagem: requer múltiplas contas e compliance extra.
      </p>
    </div>

    {/* 2️⃣ RECOMPRA VIA ORÁCULO */}
    <div className="rounded-2xl border border-[#D4AF37]/20 bg-black/60 p-5">
      <h6 className="font-semibold text-[#D4AF37] mb-1">2️⃣ Recompra via Oráculo Global (Inter-Exchange Routing)</h6>
      <p>
        Nesta modalidade, o <strong>Buy-Back Engine</strong> utiliza oráculos e agregadores 
        para calcular o <strong>preço global médio (ECP)</strong> e enviar ordens via 
        <strong>smart routing</strong> — equalizando liquidez automaticamente entre DEX e CEX.
      </p>

      <ul className="list-disc pl-5 mt-3 space-y-1">
        <li>Conexão com APIs da CoinMarketCap, CoinGecko, Pyth e Chainlink;</li>
        <li>Recebimento de preço global ponderado;</li>
        <li>Uso do ECP como referência on-chain para DEX e AMM;</li>
        <li>Harmonização de preços em tempo real em todas as bolsas.</li>
      </ul>

      <p className="text-gray-400 text-sm mt-1">
        ✅ Vantagens: sem contas diretas em todas as exchanges, preço global centralizado e distribuído automaticamente.
      </p>
    </div>

    {/* 🔗 LIGAÇÃO ÀS REDES GLOBAIS */}
    <h5 className="text-[#4ade80] font-semibold mt-8">
      🔗 Ligação à MarketCup / CoinMarketCap / Chainlink
    </h5>
    <p>
      O <strong>Buy-Back Engine</strong> envia dados on-chain para agregadores 
      como <strong>CoinMarketCap</strong> e <strong>CoinGecko</strong>, 
      recebe feeds de preço confiáveis via <strong>Chainlink</strong> e{" "}
      <strong>Pyth</strong>, e transmite o <strong>preço médio oficial (ECP)</strong> 
      às pools de liquidez da <strong>E-Coin (E-Swap)</strong>.
    </p>
    <p className="italic text-gray-400 text-sm">
      Assim, o CoinMarketCap atua como ponte global e o Chainlink garante 
      que as DEX recebam valores justos e auditáveis.
    </p>

    {/* 💎 RESULTADO ECONÔMICO */}
    <h5 className="text-[#4ade80] font-semibold mt-8">💎 Resultado Econômico</h5>
    <div className="overflow-x-auto">
      <table className="min-w-[320px] w-full border-collapse text-sm">
        <thead>
          <tr className="bg-[#D4AF37]/10">
            <th className="border border-gray-700 px-3 py-2 text-left">Situação</th>
            <th className="border border-gray-700 px-3 py-2 text-left">Ação</th>
            <th className="border border-gray-700 px-3 py-2 text-left">Resultado</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-white/5">
            <td className="border border-gray-700 px-3 py-3">Preço em queda numa exchange</td>
            <td className="border border-gray-700 px-3 py-3">Recompra direta ou via oráculo</td>
            <td className="border border-gray-700 px-3 py-3">Elevação e equilíbrio global</td>
          </tr>
          <tr className="hover:bg-white/5">
            <td className="border border-gray-700 px-3 py-3">Preço divergente entre bolsas</td>
            <td className="border border-gray-700 px-3 py-3">Engine calcula ECP e ajusta liquidez</td>
            <td className="border border-gray-700 px-3 py-3">Uniformidade de preço em minutos</td>
          </tr>
          <tr className="hover:bg-white/5">
            <td className="border border-gray-700 px-3 py-3">Spread muito alto</td>
            <td className="border border-gray-700 px-3 py-3">Oráculo publica novo preço e força arbitragem</td>
            <td className="border border-gray-700 px-3 py-3">Sincronização automática</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* RESUMO */}
    <p className="mt-6 italic text-gray-200">
      “A E-Coin usa o mecanismo de Buy-Back, integrado a oráculos e agregadores 
      globais, para uniformizar o preço mundial em tempo real.  
      Uma única recompra estratégica pode sincronizar todos os mercados — tornando 
      a E-Coin uma criptomoeda corporativa autorregulada, imune à volatilidade 
      regional e à arbitragem drástica.”
    </p>
  </div>
</section>

{/* 🌐 XII. Buy-Back Global Engine & Inter-Exchange Liquidity Propagation */}
<section
  id="buyback-global"
  className="relative overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-6 md:p-10 mt-12"
>
  {/* EFEITOS DE FUNDO */}
  <div className="pointer-events-none absolute -top-20 left-1/3 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-[#1C2D5A]/40 blur-3xl" />

  {/* TÍTULO */}
  <h4 className="text-lg font-semibold text-[#D4AF37] mb-4">
    XII. 🌐 Buy-Back Global Engine & Inter-Exchange Liquidity Propagation
  </h4>

  {/* INTRODUÇÃO */}
  <p className="text-gray-300 mb-6 leading-relaxed">
    Esta seção responde às perguntas <strong>“como”</strong> e <strong>“onde”</strong> 
    os buy-backs ocorrem na prática — detalhando o processo técnico, a execução 
    e a redistribuição do efeito de liquidez para todas as 
    <strong> CEX</strong> e <strong>DEX</strong> conectadas ao ecossistema global da E-Coin.
  </p>

  {/* 💠 O QUE ACONTECE TECNICAMENTE */}
  <h5 className="text-[#4ade80] font-semibold mb-2">💠 O que acontece tecnicamente no Buy-Back</h5>
  <p className="text-gray-300 mb-4">
    O <strong className="text-[#D4AF37]">Buy-Back Engine</strong> é o 
    <strong> cérebro financeiro </strong> da <strong>E-Coin</strong>.  
    Ele executa recompensas de forma centralizada e propaga o efeito globalmente 
    por meio de oráculos e agregadores de mercado.
  </p>

  {/* ETAPAS DO PROCESSO */}
  <div className="space-y-3 text-sm sm:text-base bg-black/60 border border-[#D4AF37]/30 rounded-2xl p-4">
    <p><strong>1️⃣ Detecção de Desvio de Preço:</strong> monitora feeds da CoinMarketCap, CoinGecko, Chainlink e Pyth. Ao detectar desvio &gt; 1,5 % abaixo do ECP, ativa recompra.</p>
    <p><strong>2️⃣ Seleção Estratégica:</strong> escolhe a exchange com maior volume e menor spread (Binance, MEXC, PancakeSwap ou E-Swap) para execução.</p>
    <p><strong>3️⃣ Execução da Recompra:</strong> tesouraria envia ordens on-chain em USDT/BUSD/E-USD; tokens recomprados vão para EdenKingDom Treasury Wallet como “inactive supply”.</p>
    <p><strong>4️⃣ Propagação Global Automática:</strong> após a recompra, oráculos e agregadores redistribuem o novo ECP em segundos para DEX e CEX globais.</p>
    <p className="italic text-gray-400">🔁 Resultado: uniformização instantânea de preço entre todas as bolsas conectadas.</p>
  </div>

  {/* ⚙️ ONDE ACONTECEM */}
  <h5 className="text-[#4ade80] font-semibold mt-8 mb-3">⚙️ Onde os Buy-Backs Acontecem</h5>
  <p className="text-gray-300 mb-3">
    O “local físico” de execução é definido pelo impacto econômico, não pela geografia.
    Há três <strong>zonas principais</strong> de atuação:
  </p>

  <div className="overflow-x-auto">
    <table className="min-w-[320px] w-full border-collapse text-sm">
      <thead>
        <tr className="bg-[#D4AF37]/10">
          <th className="border border-gray-700 px-3 py-2 text-left">Zona</th>
          <th className="border border-gray-700 px-3 py-2 text-left">Tipo</th>
          <th className="border border-gray-700 px-3 py-2 text-left">Função</th>
          <th className="border border-gray-700 px-3 py-2 text-left">Exemplo</th>
        </tr>
      </thead>
      <tbody>
        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-3 py-3">1️⃣ Central Treasury Buy-Back (CEX)</td>
          <td className="border border-gray-700 px-3 py-3">Tesouraria principal</td>
          <td className="border border-gray-700 px-3 py-3">Mantém a paridade global</td>
          <td className="border border-gray-700 px-3 py-3">Binance / Gate.io / MEXC</td>
        </tr>
        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-3 py-3">2️⃣ Smart Pool Buy-Back (DEX)</td>
          <td className="border border-gray-700 px-3 py-3">Contrato automatizado</td>
          <td className="border border-gray-700 px-3 py-3">Reequilibra pools descentralizados</td>
          <td className="border border-gray-700 px-3 py-3">PancakeSwap / E-Swap</td>
        </tr>
        <tr className="hover:bg-white/5">
          <td className="border border-gray-700 px-3 py-3">3️⃣ Off-Chain Corporate Buy-Back</td>
          <td className="border border-gray-700 px-3 py-3">Tesouraria real corporativa</td>
          <td className="border border-gray-700 px-3 py-3">Recompra com receitas E-Pay, E-Job, E-BC etc.</td>
          <td className="border border-gray-700 px-3 py-3">E-Coin Treasury Gateway</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p className="italic text-gray-400 mt-3">
    💡 Mesmo que a recompra ocorra apenas numa bolsa central (ex.: Binance ou E-Swap),
    o efeito se propaga globalmente por arbitragem e atualização oracular.
  </p>

  {/* 🧮 DISTRIBUIÇÃO DO EFEITO */}
  <h5 className="text-[#4ade80] font-semibold mt-8 mb-2">🧮 Distribuição do Efeito (via Market Data APIs)</h5>
  <ul className="list-disc pl-5 text-gray-300 space-y-1">
    <li>As APIs de CoinMarketCap, CoinGecko, Pyth e Chainlink leem o novo preço da E-Coin.</li>
    <li>Esses dados são redistribuídos globalmente em tempo real.</li>
    <li>As exchanges que usam esses oráculos ajustam seus AMMs e livros de ordens automaticamente.</li>
  </ul>
  <p className="text-gray-400 text-sm mt-1">
    📊 Resultado: o efeito do buy-back se espalha globalmente e corrige o preço em todas as plataformas em live mode.
  </p>

  {/* 🏦 FONTE DE FUNDOS */}
  <h5 className="text-[#4ade80] font-semibold mt-8 mb-2">🏦 Fonte de Fundos e Registro On-Chain</h5>
  <p className="text-gray-300 mb-4">
    As recompras são sustentadas por <strong>receitas corporativas verificadas</strong> 
    da <strong>EdenKingDom Corporation</strong> — provenientes de múltiplas divisões 
    (E-Pay, E-Job, E-Learn, E-FlyLog, E-ExpressLog, E-Transports, E-Recycling, E-Motors, E-Stay, E-Pay Vault, E-Hospital, E-News, E-SonyCine, E-Infogram e outras).
  </p>
  <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm sm:text-base">
    <li>Tesouraria on-chain abastecida por staking, presale e operações institucionais;</li>
    <li>Reservas bloqueadas em smart contracts multi-sig;</li>
    <li>Cada recompra gera hash público na BSC, registro no E-Coin Treasury Monitor e feed de atualização em oráculos.</li>
  </ul>

  {/* FRASE FINAL */}
  <p className="italic text-gray-200 mt-6">
    “O Buy-Back Global Engine é a ponte entre a liquidez real e a informação global — 
    um sistema que compra em um único ponto e corrige o mercado em todos os continentes.”
  </p>
</section>

{/* 💎 XIII. E-Coin Buy-Back Smart Pool (DEX) — O Pulmão Deflacionário da E-Coin */}
<section
  id="smartpool"
  className="relative overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-6 md:p-10 mt-12"
>
  {/* efeitos de fundo */}
  <div className="pointer-events-none absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-[#1C2D5A]/40 blur-3xl" />

  {/* título */}
  <h4 className="text-lg font-semibold text-[#D4AF37] mb-4">
    XIII. 💎 E-Coin Buy-Back Smart Pool (DEX) — O Pulmão Deflacionário da E-Coin
  </h4>

  {/* introdução */}
  <p className="text-gray-300 mb-6 leading-relaxed">
    O <strong className="text-[#D4AF37]">E-Coin Buy-Back Smart Pool</strong> é a escolha
    estratégica mais sustentável para manter o equilíbrio e a estabilidade de preço da{" "}
    <strong>E-Coin</strong>, tanto sob o ponto de vista econômico quanto regulatório.  
    A seguir, mostramos porque essa opção é a mais poderosa, como ela funciona internamente
    e como se integra ao ecossistema <strong>EdenKingDom</strong> (E-Swap, E-Pay, E-Chain, EBC etc.).
  </p>

  {/* ⚙️ tabela de comparação */}
  <h5 className="text-[#4ade80] font-semibold mb-3">
    ⚙️ Por que o E-Coin Buy-Back Smart Pool é a melhor opção?
  </h5>
  <div className="overflow-x-auto mb-6">
    <table className="min-w-[320px] w-full border-collapse text-sm">
      <thead>
        <tr className="bg-[#D4AF37]/10">
          <th className="border border-gray-700 px-3 py-2 text-left">Critério</th>
          <th className="border border-gray-700 px-3 py-2 text-left">Execução via CEX</th>
          <th className="border border-gray-700 px-3 py-2 text-left">Execução via DEX (Smart Pool)</th>
        </tr>
      </thead>
      <tbody>
        <tr className="hover:bg-white/5"><td className="border px-3 py-3">Controle on-chain</td><td className="border px-3 py-3">Parcial</td><td className="border px-3 py-3">Total (BSC transparente)</td></tr>
        <tr className="hover:bg-white/5"><td className="border px-3 py-3">Auditoria pública</td><td className="border px-3 py-3">Limitada</td><td className="border px-3 py-3">Verificável em BscScan</td></tr>
        <tr className="hover:bg-white/5"><td className="border px-3 py-3">Compliance (AML/KYC)</td><td className="border px-3 py-3">Externa</td><td className="border px-3 py-3">Automatizada via contrato</td></tr>
        <tr className="hover:bg-white/5"><td className="border px-3 py-3">Custo de operação</td><td className="border px-3 py-3">Alto</td><td className="border px-3 py-3">Baixíssimo (gas fee)</td></tr>
        <tr className="hover:bg-white/5"><td className="border px-3 py-3">Velocidade de resposta</td><td className="border px-3 py-3">Segundos/minutos</td><td className="border px-3 py-3">Instantânea</td></tr>
        <tr className="hover:bg-white/5"><td className="border px-3 py-3">Integração com oráculos</td><td className="border px-3 py-3">Limitada</td><td className="border px-3 py-3">Nativa (Chainlink/Pyth)</td></tr>
        <tr className="hover:bg-white/5"><td className="border px-3 py-3">Escalabilidade futura</td><td className="border px-3 py-3">Restrita</td><td className="border px-3 py-3">Global aberta a E-Apps</td></tr>
      </tbody>
    </table>
  </div>

  {/* 🧠 funcionamento */}
  <h5 className="text-[#4ade80] font-semibold mb-2">🧠 Como o E-Coin Buy-Back Smart Pool funciona?</h5>
  <p className="text-gray-300 mb-3">
    O sistema opera por meio de um <strong>contrato inteligente autônomo</strong> na{" "}
    <strong>Binance Smart Chain</strong>.  Ele usa oráculos e liquidez pré-alocada da{" "}
    <strong>E-Treasury</strong> para recomprar e queimar tokens quando o preço diverge do{" "}
    <strong>EdenKingDom Coin Price (ECP)</strong>.
  </p>

  <div className="space-y-2 text-sm sm:text-base bg-black/60 border border-[#D4AF37]/30 rounded-2xl p-4">
    <p>1️⃣ Monitoramento via Chainlink/Pyth → consulta do ECP global;</p>
    <p>2️⃣ Desvio &gt; 1.5 % → contrato entra em modo Buy-Back;</p>
    <p>3️⃣ Recompra automática ECOIN/USDT com liquidez on-chain;</p>
    <p>4️⃣ Tokens recomprados vão para Vault Address (inactive supply);</p>
    <p>5️⃣ Oráculos publicam novo ECP para todas as DEX (E-Swap, PancakeSwap etc.).</p>
  </div>

  {/* 💎 vantagens */}
  <h5 className="text-[#4ade80] font-semibold mt-8 mb-2">💎 Vantagens Corporativas Diretas</h5>
  <ul className="list-disc pl-5 text-gray-300 space-y-1">
    <li>Liquidez automatizada e auditável (24 h on-chain);</li>
    <li>Economia de custos operacionais (somente gas fee BSC);</li>
    <li>Governança DAO para ajuste de parâmetros e Vaults;</li>
    <li>Integração plena com E-Swap, EBC, E-Pay e E-Chain.</li>
  </ul>

  {/* 🔗 operação híbrida */}
  <h5 className="text-[#4ade80] font-semibold mt-8 mb-2">
    🔗 Operação Híbrida (DEX + Oráculos Globais)
  </h5>
  <p className="text-gray-300 mb-3">
    Mesmo operando via DEX, o sistema atua globalmente graças aos oráculos (Chainlink/Pyth) e aos agregadores (CoinMarketCap/CoinGecko).  
    Os AMMs de todas as plataformas recebem o preço ajustado em tempo real.
  </p>
  <p className="text-gray-400 text-sm italic">
    📊 Uma única recompra em Smart Pool pode restabelecer o preço global da E-Coin, da Binance ao E-Swap.
  </p>

  {/* 🧩 painel */}
  <h5 className="text-[#4ade80] font-semibold mt-8 mb-2">
    🧩 Como funciona o painel “E-Coin Buy-Back Smart Pool”
  </h5>
  <ol className="list-decimal pl-5 text-gray-300 space-y-1">
    <li>Usuário conecta sua wallet (MetaMask, Trust, Binance Wallet);</li>
    <li>Escolhe quantidade e tempo de bloqueio (3 h → 7 d);</li>
    <li>Smart Contract mantém tokens bloqueados e gera yield interno;</li>
    <li>Dois painéis dinâmicos: <i>Buy-Back Locked at XX Price</i> e <i>Buy-Back Profit (Growth)</i>;</li>
    <li>Botão <code>Swap Back</code> (para E-Swap/PancakeSwap).</li>
  </ol>
  <p className="text-gray-400 text-sm mt-1">
    No fim do time lock, 50 % da recompensa vai ao holder e 100 % do principal é devolvido.
  </p>

  {/* slogan */}
  <p className="mt-6 italic text-center text-[#D4AF37] font-medium">
    “De trader para trader, de holder para holder, de investidor em ativos digitais para investidor em ativos digitais.”
  </p>
</section>

{/* XIV 🌀 E-Coin Price Alert & Buy-Back Collective Panel */}
<section
  id="pricealert"
  className="relative overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-6 md:p-10 mt-12"
>
  {/* efeitos de fundo */}
  <div className="pointer-events-none absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-[#1C2D5A]/40 blur-3xl" />

  {/* título */}
  <h4 className="text-lg font-semibold text-[#D4AF37] mb-4">
    XIV 🌀 E-Coin Price Alert & Buy-Back Collective Panel
  </h4>
  <p className="italic text-center text-[#D4AF37] mb-6">
    “De trader para trader. De holder para holder. De investidor em ativos digitais para investidor em ativos digitais.”
  </p>

  {/* 🔔 mecanismo de alerta */}
  <h5 className="text-[#4ade80] font-semibold mb-2">🔔 Mecanismo de Alerta ECP (E-Coin Price)</h5>
  <p className="text-gray-300 mb-4 leading-relaxed">
    Conecte-se ao painel oficial do <strong>EdenKingDom Coin Price (ECP)</strong> e receba notificações
    inteligentes sempre que surgir uma oportunidade real de compra estratégica — sincronizada com o comportamento
    de mercado da <strong>E-Coin</strong>.
  </p>

  {/* 💡 como funciona */}
  <h5 className="text-[#4ade80] font-semibold mb-2">💡 Como funciona</h5>
  <p className="text-gray-300 mb-2">
    O sistema monitora em tempo real as variações da E-Coin e envia alertas automáticos personalizados via:
  </p>
  <ul className="list-disc pl-6 text-gray-300 space-y-1 mb-3">
    <li>📩 Email</li>
    <li>📱 SMS</li>
    <li>💬 (Em breve) Telegram / WhatsApp Bot</li>
  </ul>

  <p className="text-gray-300 mb-4">
    O usuário define seus próprios gatilhos:
  </p>
  <ul className="list-disc pl-6 text-gray-300 space-y-1 mb-6">
    <li>“Avisar-me quando o preço cair 5 % ou menos.”</li>
    <li>“Enviar alerta quando o buy-back coletivo for ativado.”</li>
    <li>“Notificar quando a E-Coin ultrapassar $ 1.20 novamente.”</li>
  </ul>

  {/* 🚀 missão */}
  <h5 className="text-[#4ade80] font-semibold mb-2">🚀 Missão do Painel</h5>
  <p className="text-gray-300 mb-4">
    Transformar o ECP em um <strong>TradingView inteligente</strong> dedicado à E-Coin.  
    Cada alerta é um convite à ação coletiva — um Buy-Back sincronizado entre comunidade e tesouraria,
    para defender o preço, estimular o crescimento e compartilhar lucros futuros via 
    <strong>E-Coin Buy-Back Smart Pool</strong>.
  </p>

  {/* 💰 benefícios */}
  <h5 className="text-[#4ade80] font-semibold mb-2">💰 Benefícios Diretos</h5>
  <ul className="list-disc pl-6 text-gray-300 space-y-1 mb-6">
    <li>Participação em Buy-Backs coletivos automáticos;</li>
    <li>Recebimento de até 50 % do crescimento futuro das recompras;</li>
    <li>Integração a uma rede sincronizada de investidores inteligentes;</li>
    <li>Acompanhamento de preço em tempo real com indicadores AI.</li>
  </ul>

  {/* 🌐 slogan */}
  <h5 className="text-[#4ade80] font-semibold mb-2">🌐 Slogan do Painel</h5>
  <p className="text-[#D4AF37] italic mb-6">
    “Quando o mercado fala, a E-Coin responde. Ganhe com o tempo — compre na baixa, cresça na alta.”
  </p>

  {/* 🔍 parecer técnico-estratégico */}
  <h5 className="text-[#4ade80] font-semibold mb-2">🔍 Parecer Técnico-Estratégico</h5>
  <p className="text-gray-300 mb-3">
    Esta funcionalidade é uma ponte entre <strong>marketing</strong>, <strong>comunidade</strong> e
    o <strong>mecanismo de buy-back</strong>:
  </p>
  <ul className="list-disc pl-6 text-gray-300 space-y-1">
    <li>Cria engajamento diário com holders e novos traders;</li>
    <li>Constrói comportamento coletivo positivo (comprar na baixa, segurar, recomprar);</li>
    <li>Integra-se futuramente ao E-Coin Signal Bot (AI métricas + relatórios de adesão);</li>
    <li>Posiciona a E-Coin como cripto-ecossistema auto-educativo e autorregulado com governança participativa.</li>
  </ul>
</section>




        {/* 🧩 XV. Sessão de Conclusões — Cinematic Edition */}
<section
  id="cinematic-conclusion"
  className="relative overflow-hidden rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-b from-black via-[#0a0a0a] to-[#1C2D5A] p-8 md:p-14 mt-16"
>
  {/* Luzes cinematográficas de fundo */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1),transparent_80%)] animate-pulse" />
    <div className="absolute -top-32 left-1/3 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-3xl animate-[spin_20s_linear_infinite]" />
    <div className="absolute bottom-0 right-0 h-[400px] w-[400px] bg-[#1C2D5A]/40 rounded-full blur-3xl opacity-50 animate-[ping_8s_ease_infinite]" />
  </div>

  {/* título e introdução */}
  <h4 className="relative text-2xl md:text-3xl font-semibold text-[#D4AF37] mb-6 text-center tracking-wide">
    🧩 XV. Sessão de Conclusões
  </h4>

  {/* efeitos de fundo */}
  <div className="pointer-events-none absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-[#1C2D5A]/40 blur-3xl" />

<p className="text-center italic text-[#D4AF37]/90 mb-10 text-sm md:text-base">
    “Encerramento técnico e filosófico do Sistema Financeiro E-Coin – onde a tecnologia encontra a transparência.”
  </p>
  
  {/* conclusão principal */}
  <h5 className="text-[#4ade80] font-semibold mb-2">Conclusão</h5>
  <p className="text-gray-300 mb-4 leading-relaxed">
    O modelo <strong className="text-[#D4AF37]">Smart Pool Buy-Back (DEX)</strong> posiciona a 
    <strong> E-Coin</strong> no mesmo nível de autonomia de uma stablecoin de arquitetura própria — 
    porém mantendo seu caráter deflacionário, volátil e sua <strong>governança corporativa auditável</strong>.
  </p>
  <blockquote className="border-l-4 border-[#D4AF37]/60 pl-4 italic text-gray-200 mb-6">
    “O Smart Pool Buy-Back é o coração descentralizado da E-Coin.  
    Ele combina inteligência de mercado, transparência on-chain e governança DAO para garantir 
    estabilidade global sem centralização bancária ou dependência de CEXs.  
    Cada compra é auditável, cada preço é sincronizado e cada holder é protegido.”
  </blockquote>

  {/* conclusão estratégica */}
  <h5 className="text-[#4ade80] font-semibold mb-2">🧠 Conclusão Estratégica</h5>
  <blockquote className="border-l-4 border-[#D4AF37]/60 pl-4 italic text-gray-200 mb-6">
    “Os buy-backs da E-Coin acontecem onde o impacto é mais eficiente — geralmente numa bolsa-âncora 
    como Binance ou PancakeSwap — mas o efeito global é garantido por oráculos e agregadores de preço 
    (CMC, CG, Pyth, Chainlink).  
    Assim, mesmo uma única recompra local gera equilíbrio internacional de preços, beneficiando todas 
    as DEX e CEX sem necessidade de múltiplas contas ou manipulação direta.”
  </blockquote>

  {/* conclusão geral */}
  <h5 className="text-[#4ade80] font-semibold mb-2">Conclusão Geral — O Sistema Financeiro da E-Coin é Robusto e Regulável</h5>
  <blockquote className="border-l-4 border-[#D4AF37]/60 pl-4 italic text-gray-200 mb-4">
    “A E-Coin não pratica especulação, não executa mint manual e não queima por destruição — 
    ela opera um modelo inteligente de recomposição de liquidez, sustentado por receitas reais 
    e auditado on-chain.”
  </blockquote>
  <ul className="list-disc pl-6 text-gray-300 mb-6">
    <li>O ciclo econômico é totalmente rastreável;</li>
    <li>As fontes de receita são legítimas e corporativas;</li>
    <li>O propósito é proteção ao investidor — não manipulação de preço.</li>
  </ul>
  <p className="text-gray-300 mb-6">
    Este formato é compatível com normas internacionais de <strong>AML/KYC</strong> e pode ser validado 
    por reguladores e exchanges de alto nível (<strong>Binance, Kraken, OKX</strong> etc.), 
    garantindo conformidade e confiança institucional.
  </p>

  {/* conclusão global */}
  <h5 className="text-[#4ade80] font-semibold mb-2">🧩 Conclusão Global</h5>
  <blockquote className="border-l-4 border-[#D4AF37]/60 pl-4 italic text-gray-200 mb-6">
    “A E-Coin mantém seu valor global através de um sistema de recompra inteligente e de sincronização 
    de preços, combinando tecnologia oracular, análise de mercado em tempo real e liquidez auditável.  
    Nenhum outro token corporativo possui uma infraestrutura de balanço econômico tão sofisticada 
    e regulável.”
  </blockquote>

  {/* conclusão oficial */}
  <h5 className="text-[#4ade80] font-semibold mb-2">Conclusão Oficial</h5>
  <blockquote className="border-l-4 border-[#D4AF37]/60 pl-4 italic text-gray-200">
    “A E-Coin não realiza emissão nem queima de forma arbitrária.  
    Seu mecanismo de buy-back atua como um sistema de respiração econômica, onde cada recompra reduz 
    o supply e cada liberação controlada mantém o equilíbrio do ecossistema.  
    Todas as ações são legais, auditáveis e sustentadas por valor corporativo real, 
    em conformidade com as normas <strong>AML/KYC internacionais</strong>.”
  </blockquote>

  {/* Linha divisória luminosa */}
  <div className="relative my-10 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />

  {/* Assinatura cinematográfica */}
  <div className="relative z-10 text-center text-gray-200 mt-8 space-y-3">
    <p className="text-[#D4AF37] text-xl md:text-2xl font-semibold tracking-wide">
      Eng. Lawyer, Pro. Crypto Trader & Analyst, Dr. MBA. Athelstan Pateron Atanas
    </p>
    <p className="text-gray-400 italic text-sm md:text-base">
      CEO & Fundador — <span className="text-[#D4AF37]">EdenKingDom Corporation</span>
    </p>
    <div className="flex flex-col md:flex-row items-center justify-center gap-3 mt-2 text-gray-400 text-sm">
      <span>📍 Moçambique – Nhamatanda</span>
      <span>📍 Canadá – Toronto</span>
      <span>📍 USA – Nova Iorque</span>
    </div>
    <p className="text-gray-500 mt-3 text-xs md:text-sm">📅 15 de Dezembro de 2025</p>
  </div>

  {/* Efeito de brilho final */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_75%)] animate-pulse pointer-events-none" />
</section>

      </div>
    </div>
  );
}
