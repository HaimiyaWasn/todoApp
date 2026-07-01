"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

import SidebarLayout from "../layouts/SidebarLayout";
import BackgroundImage from "@/public/img/backgroundImage/background1.webp";

export default function TodoApp() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
<section className="relative flex min-h-screen overflow-hidden">
  <Image
    src={BackgroundImage}
    alt="Background"
    fill
    priority
    className="object-cover"
  />

  <div className="absolute inset-0 bg-black/75" />

  <SidebarLayout />

  <main className="relative z-10 flex-1 md:left-92.5">
    <header className="h-12 bg-black/25 backdrop-blur-lg flex items-center px-6 border-b-2 border-black/25">
      <h1>Welcome</h1>
    </header>

    <div className="p-6">
      Main Content
    </div>
  </main>
</section>
  );
}
