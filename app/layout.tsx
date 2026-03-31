import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pubali Enterprise - Heavy Cargo & Barge Logistics",
  description:
    "Professional loading and unloading solutions for ports and river logistics. Specializing in coal, sand, and heavy machinery transport.",
  icons: {
    icon: [
      {
        url: "/icon.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon.svg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
