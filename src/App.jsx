import { useState } from "react";
import Header from "@/components/Header.jsx";
import MainSection from "@/components/MainSection.jsx";
import MainSectionBottom from "@/components/MainSectionBottom.jsx";
import CtaSection from "@/components/CtaSection.jsx";
import Platform from "@/components/Platform.jsx";
import GetStarted from "@/components/GetStarted.jsx";
import Solution from "@/components/Solution.jsx";
import CtaCard from "@/components/CtaCard.jsx";
import News from "@/components/News.jsx";
import Footer from "@/components/Footer.jsx";


import "./App.css";

function App() {
  return (
    <>
      <div className="max-w-6xl  mx-auto ">
        <Header />
        <MainSection />
      </div>
      <MainSectionBottom />
      <CtaSection />
      <Platform />
      <GetStarted/>
      <Solution/>
      <News/>
      <CtaCard/>
      <Footer/>
      
      
    </>
  );
}

export default App;
