"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const savedLang = localStorage.getItem("preferred-lang");
    if (savedLang && (savedLang === "en" || savedLang === "zh")) {
      router.replace(`/${savedLang}`);
    } else {
      router.replace("/en");
    }
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-white animate-spin" />
    </div>
  );
}
