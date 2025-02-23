"use client"; 

import { useState } from "react";
import Preloader from "../components/PreLoader";
import Hero from "@/components/Hero";
import Image from "next/image";
import About from "@/components/About";
import Case from "@/components/Case";
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="relative cursor-crosshair">
      {!showContent && <Preloader onComplete={() => setShowContent(true)} />}
      
      <div className={`transition-opacity duration-1000 ${showContent ? "opacity-100" : "opacity-0"}`}>
        {/* Your Main Website Content */}
        <div>
        <main>
          <Hero/>
          <Case/>
          <About/>
      <Image src='/p6.webp'alt='img' width={10000} height={40} />
          <Achievements/>
          <Footer/>
        </main>
        </div>
      </div>
    </div>
  );
}
