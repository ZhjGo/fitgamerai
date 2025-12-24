"use client";

import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Languages, Home, Github } from "lucide-react";

export default function Navbar() {
    const params = useParams();
    const pathname = usePathname();
    const router = useRouter();
    const lang = (params.lang as string) || "en";

    const toggleLanguage = () => {
        const newLang = lang === "en" ? "zh" : "en";
        localStorage.setItem("preferred-lang", newLang);
        const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
        router.push(newPath);
    };

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl px-1">
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="glass-effect rounded-full px-6 py-3 flex items-center justify-between"
            >
                <Link
                    href={`/${lang}`}
                    className="apple-button w-10 h-10 rounded-full bg-white/5 hover:bg-white/10"
                >
                    <Home size={20} className="text-white/80" />
                </Link>

                <div className="flex-1" />

                <div className="flex items-center gap-3">
                    <a
                        href="https://github.com/ZhjGo/fitgamerai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="apple-button w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all border border-white/5"
                        title="View Source on GitHub"
                    >
                        <Github size={18} className="text-white/60 hover:text-white" />
                    </a>

                    <button
                        onClick={toggleLanguage}
                        className="apple-button group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/5"
                    >
                        <Languages size={16} className="text-white/60 group-hover:text-white transition-colors" />
                        <span className="text-xs font-semibold uppercase tracking-widest text-white/80">
                            {lang === "en" ? "中文" : "EN"}
                        </span>
                    </button>
                </div>
            </motion.nav>
        </div>
    );
}
