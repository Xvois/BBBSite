import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {Navbar} from "@/components/Navbar";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {

    title: "Build Back Bursaries",
    description: "Fight for fairer access to education at Bath University.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className + "min-h-screen max-w-screen-lg mx-auto px-8 py-8 lg:px-24 "}>
        <Navbar/>
        {children}
        </body>
        </html>
    );
}
