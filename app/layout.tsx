import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {Navbar} from "@/components/Navbar";
import {Analytics} from "@vercel/analytics/react"

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Build Back Bursaries",
    description: "Fight for fairer access to education at Bath University.",
    openGraph: {
        title: "Build Back Bursaries",
        description: "Fight for fairer access to education at Bath University.",
        type: "website",
        // Temporary URL for the campaign
        url: "https://buildbackbursaries.vercel.app/",
        images: [
            {
                url: "https://buildbackbursaries.vercel.app/og.png",
                width: 1200,
                height: 630,
                alt: "Build Back Bursaries"
            }
            ]
    },
    twitter: {
        title: "Build Back Bursaries",
        description: "Fight for fairer access to education at Bath University.",
        card: "summary_large_image",
    }
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            {/* Vercel Analytics to identify the reach of the campaign */}
            <Analytics framework={"Next"}/>
            <body className={inter.className + "min-h-screen max-w-screen-lg mx-auto px-8 py-8 lg:px-24 "}>
                <Navbar/>
                {children}
            </body>
        </html>
    );
}
