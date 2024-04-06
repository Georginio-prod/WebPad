import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/provider/theme-provider";

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        storageKey="webPad-theme-2"
      >
        <Toaster position="bottom-center"/>
        {children}
      </ThemeProvider>

      </body>
    </html>
  );
}
