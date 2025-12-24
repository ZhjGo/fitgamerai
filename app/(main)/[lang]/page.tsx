import { Metadata } from "next";
import { getDictionary } from "@/lib/dictionary";
import { games } from "@/lib/games";
import GlassCard from "@/components/GlassCard";
import Link from "next/link";
import { Play } from "lucide-react";

export async function generateStaticParams() {
    return [{ lang: "en" }, { lang: "zh" }];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const dict = await getDictionary(lang as any);
    return {
        title: dict.home.hero_title,
        description: dict.home.hero_subtitle,
    };
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const currentLang = (lang === "zh" ? "zh" : "en") as "en" | "zh";
    const dict = await getDictionary(currentLang);

    return (
        <div className="max-w-7xl mx-auto px-6 space-y-12">
            {/* Hero Section */}
            <section className="text-center space-y-6 pt-12 pb-8">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                    {dict.home.hero_title}
                </h1>
                <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                    {dict.home.hero_subtitle}
                </p>
            </section>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[12rem]">
                {/* Featured Card (Large) */}
                {games.map((game, index) => (
                    <GlassCard
                        key={game.id}
                        className={`${index === 0
                            ? "md:col-span-2 md:row-span-2"
                            : "md:col-span-1 md:row-span-1"
                            } flex flex-col justify-end group cursor-pointer`}
                    >
                        <Link href={`/${lang}/play/${game.id}`} className="absolute inset-0">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${game[currentLang].thumbnail})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        </Link>

                        <div className="relative z-10 space-y-2">
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md">
                                    {game[currentLang].category}
                                </span>
                            </div>
                            <h3 className={`font-bold leading-tight ${index === 0 ? "text-3xl" : "text-xl"}`}>
                                {game[currentLang].title}
                            </h3>
                            <p className="text-sm text-white/60 line-clamp-2">
                                {game[currentLang].description}
                            </p>

                            <Link
                                href={`/${lang}/play/${game.id}`}
                                className="inline-flex items-center gap-2 mt-4 text-sm font-semibold hover:text-white transition-colors apple-button"
                            >
                                <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
                                    <Play size={14} fill="currentColor" />
                                </div>
                                {dict.common.play_now}
                            </Link>
                        </div>
                    </GlassCard>
                ))}

                {/* Placeholder Bento Boxes for visual filler */}
                <GlassCard className="md:col-span-1 md:row-span-2 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20 flex flex-col items-center justify-center text-center p-8">
                    <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center mb-6">
                        <div className="w-8 h-8 rounded-full bg-blue-500 blur-xl opacity-50 animate-pulse" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">{dict.home.more_coming_soon_title}</h4>
                    <p className="text-sm text-white/40">{dict.home.more_coming_soon_desc}</p>
                </GlassCard>

                <GlassCard className="md:col-span-2 md:row-span-1 bg-gradient-to-r from-orange-500/10 to-red-500/10 border-orange-500/20 flex items-center p-8 gap-6">
                    <div className="flex-1">
                        <h4 className="text-xl font-bold mb-1">{dict.home.no_hardware_title}</h4>
                        <p className="text-sm text-white/40">{dict.home.no_hardware_desc}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full border-2 border-orange-500/30 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                    </div>
                </GlassCard>
            </div>
        </div>
    );
}
