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
        alt="Background Image"
        fill
        priority
        className={`object-cover transition-all duration-1500 ease-in-out ${
          isMounted ? "blur-0 scale-100" : "blur-lg scale-105"
        }`}
      />

      <div className="absolute inset-0 bg-black/75" />

      <SidebarLayout />
    </section>
  );
}
