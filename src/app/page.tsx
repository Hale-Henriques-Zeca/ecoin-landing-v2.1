"use client";

import StayInLoopSection from "@/sections/StayInLoopSection";
import EventsShowcase from "@/sections/EventsShowcase";
import EcoinAISection from "@/sections/EcoinAISection";
import BuyBackSmartPool from "@/app/BuyBackSmartPool";
import BuildersShowcase from "@/sections/BuildersShowcase";
import EKDSmartFinanceTool from "@/components/EKDSmartFinanceTool";
import EKDPreSaleStakePanel from "@/components/EKDPreSaleStakePanel";
import CompoundCalculatorPanel from "@/components/CompoundCalculatorPanel";
import ECoinDevelopmentNotice from "@/components/ECoinDevelopmentNotice";
import NowSection from "@/sections/NowSection";
import Ecosystem from "@/sections/Ecosystem";
import CareersPage from "@/app/CareersPage";
import Security from "@/sections/Security";
import Roadmap from "@/sections/Roadmap";
import Footer from "@/components/Footer";
import EBCDEXPanel from "@/components/EBCDEXPanel";
import ECoinOnChainPresale from "@/components/ECoinOnChainPresale";
import Hero from "@/sections/Hero";
import EcoinCarousel from "@/components/EcoinCarousel";


export default function Home() {
  return (
    <>
      <Hero />
      <ECoinDevelopmentNotice />
       <EcoinCarousel />
      <EcoinAISection />
      <EKDPreSaleStakePanel />
      <ECoinOnChainPresale />
<EKDSmartFinanceTool />
<CompoundCalculatorPanel />
<EBCDEXPanel />
      <BuyBackSmartPool /> 
      <NowSection />
<StayInLoopSection />
<EventsShowcase />
<BuildersShowcase />
      <Ecosystem />
      <CareersPage />
      <Security />
      <Roadmap />
      <Footer />
    </>
  );
}

