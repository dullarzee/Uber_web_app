import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LocationProviderContext from "../../components/locationContexts";

/*const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});*/

export const metadata: Metadata = {
    title: "Uber",
    description: "Ride with style",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body><LocationProviderContext>
                {children}
            </LocationProviderContext></body>
        </html>
    );
}
