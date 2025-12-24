import { Inter } from "next/font/google";
import "../../globals.css";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
    return [{ lang: "en" }, { lang: "zh" }];
}

export const metadata: Metadata = {
    metadataBase: new URL("https://fitgamerai.com"),
    title: {
        default: "FitGamerAI - Motion Sensing Games",
        template: "%s | FitGamerAI"
    },
    description: "Experience the future of gaming with AI-powered motion sensing. Play with your body, no hardware required.",
    alternates: {
        canonical: "/",
        languages: {
            'en-US': '/en',
            'zh-CN': '/zh',
        },
    },
    icons: {
        icon: "/icon.png",
        apple: "/icon.png",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://fitgamerai.com",
        siteName: "FitGamerAI",
        images: [
            {
                url: "/icon.png",
                width: 512,
                height: 512,
                alt: "FitGamerAI Logo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "FitGamerAI - Motion Sensing Games",
        description: "AI-powered motion sensing games. Play with your body, no hardware required.",
        images: ["/icon.png"],
    },
};

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}) {
    const resolvedParams = await params;
    return (
        <html lang={resolvedParams.lang || "en"} className="dark">
            <body className={`${inter.className} bg-black text-white selection:bg-white/20 overflow-x-hidden`}>
                <GoogleAnalytics />
                <Navbar />
                <main className="min-h-screen pt-24 pb-12">
                    {children}
                </main>
            </body>
        </html>
    );
}
