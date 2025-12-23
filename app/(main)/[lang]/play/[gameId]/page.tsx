import { Metadata } from "next";
import { getGameById, games } from "@/lib/games";
import { getDictionary } from "@/lib/dictionary";
import Link from "next/link";
import { X } from "lucide-react";
import { notFound } from "next/navigation";

interface PageProps {
    params: {
        lang: string;
        gameId: string;
    };
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; gameId: string }> }): Promise<Metadata> {
    const { lang, gameId } = await params;
    const currentLang = lang as "en" | "zh";
    const game = getGameById(gameId);
    if (!game) return { title: "Game Not Found" };

    return {
        title: `${game[currentLang].seo.title} | Motion Play`,
        description: game[currentLang].seo.description,
        keywords: game[currentLang].seo.keywords,
    };
}

export async function generateStaticParams() {
    const locales = ["en", "zh"];
    const paths = [];

    for (const lang of locales) {
        for (const game of games) {
            paths.push({ lang, gameId: game.id });
        }
    }

    return paths;
}

export default async function GamePage({ params }: { params: Promise<{ lang: string; gameId: string }> }) {
    const { lang, gameId } = await params;
    const currentLang = lang as "en" | "zh";
    const game = getGameById(gameId);
    const dict = await getDictionary(currentLang);

    if (!game) {
        notFound();
    }

    return (
        <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-4 md:p-8">
            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-blue-500/10 blur-[120px] rounded-full" />
                <div className="absolute top-1/4 left-1/4 w-[40%] h-[40%] bg-purple-500/10 blur-[100px] rounded-full" />
            </div>

            {/* Floating Exit Button */}
            <Link
                href={`/${lang}`}
                className="absolute top-6 right-6 z-[110] apple-button w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-white hover:bg-white/20 transition-all"
            >
                <X size={24} />
            </Link>

            {/* Game Container */}
            <div className="relative w-full h-full max-w-6xl aspect-video rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_-20px_rgba(59,130,246,0.5)] border border-white/10 bg-zinc-900 group">
                <iframe
                    src={`/games/${gameId}/index.html?lang=${lang}`}
                    className="w-full h-full border-none"
                    allow="camera; microphone; accelerometer; gyroscope"
                    title={game[currentLang].title}
                />

                {/* Subtle glass overlay when not interacting (optional) */}
                <div className="absolute inset-0 pointer-events-none border-[1px] border-white/5 rounded-[2.5rem] z-10" />
            </div>

            {/* Bottom Info Bar */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-cover bg-center" style={{ backgroundImage: `url(${game[currentLang].thumbnail})` }} />
                <div>
                    <h2 className="text-sm font-bold text-white/90">{game[currentLang].title}</h2>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest font-semibold">{game[currentLang].category}</p>
                </div>
            </div>
        </div>
    );
}
