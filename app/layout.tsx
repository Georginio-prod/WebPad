import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WebPad",
  description: "",
  icons : {
    icon: [
      {
        media: "(prefers-color-schema: light)",
        url: "/note.png",
        href: "/note.png",
      },
      {
        media: "(prefers-color-schema: dark)",
        url: "/noteD.png",
        href: "/noteD.png",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
