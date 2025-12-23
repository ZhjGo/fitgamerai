import { Inter } from "next/font/google";
import "../../globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

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
                <Navbar />
                <main className="min-h-screen pt-24 pb-12">
                    {children}
                </main>
            </body>
        </html>
    );
}
