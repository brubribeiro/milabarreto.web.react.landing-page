import type { Metadata } from "next";
import "./globals.css";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mila Barreto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <script
        src="https://static.elfsight.com/platform/platform.js"
        async
      ></script>
      <body className={`${montserrat.className}`}>{children}</body>
    </html>
  );
}
