import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { PostHogProvider } from "./components/PostHogProvider";

const poppins = Poppins({
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  subsets: ["latin"],
  variable: "--font-poppins",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Portfolio - Simon Picot",
  description: "Bienvenue sur mon portfolio, je suis développeur web en alternance.",
  icons: {
    icon: "https://em-content.zobj.net/source/apple/237/waving-hand-sign_emoji-modifier-fitzpatrick-type-1-2_1f44b-1f3fb_1f3fb.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <PostHogProvider>
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}