import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import "./globals.css";

const font = DM_Sans({
    variable: "--app-font",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "defaul7",
    description: "Personal website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <head>
                <meta name="apple-mobile-web-app-title" content="defaul7.net" />
            </head>
            <body className={`${font.variable} antialiased`}>{children}</body>
        </html>
    );
}
