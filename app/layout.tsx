import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  weight: "300 900",
});

const greaterTheory = localFont({
  src: "./fonts/Greator-Theory.woff2",
  variable: "--font-greater-theory",
  weight: "400",
});

export const metadata: Metadata = {
  title: "BingMine",
  description: "Invest in Your Favorite Creators",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} ${greaterTheory.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
