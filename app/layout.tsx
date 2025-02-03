import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
    variable: "--font-roboto",
    weight: ["700", "500", "300"],
    subsets: ["latin"]
})

const robotoMono = Roboto_Mono({
    variable: "--font-roboto-mono",
    weight: ["700", "500", "300"],
    subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Yapper",
  description: "Yap freely with fellow yappers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${robotoMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
