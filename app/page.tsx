"use client"; 

import { useState } from "react";
import Preloader from "@/components/Preloader";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="relative">
      {!showContent && <Preloader onComplete={() => setShowContent(true)} />}
      
      <div className={`transition-opacity duration-1000 ${showContent ? "opacity-100" : "opacity-0"}`}>
        {/* Your Main Website Content */}
        <header className="h-screen flex items-center justify-center bg-gray-900 text-white text-6xl">
          Welcome to My Site
        </header>
      </div>
    </div>
  );
}
