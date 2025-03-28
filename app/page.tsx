"use client"; 

import { useState } from "react";
import Preloader from "../components/PreLoader";
import Hero from "@/components/Hero";
import Image from "next/image";
import About from "@/components/About";
import Case from "@/components/Case";
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="relative cursor-crosshair">
      {!showContent && <Preloader onComplete={() => setShowContent(true)} />}
      
      <div className={`transition-opacity duration-1000 ${showContent ? "opacity-100" : "opacity-0"}`}>
        {/* Your Main Website Content */}
        <div>
        <main className="bg-neutral-100">
          <Hero/>
          <Case/>
          <About/>
          <Image src='/p6.webp'alt='img' width={10000} height={40} />
          <Services/>
          <Achievements/>
          <Contact/>
          <Footer/>
        </main>
        </div>
      </div>
    </div>
  );
}
