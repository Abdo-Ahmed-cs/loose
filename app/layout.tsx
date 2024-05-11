import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["200", "300", "400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Loose",
  description: "A fasion e-commerce shop for women",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/icons/l.svg" />
      </head>
      <body className={plus_jakarta_sans.className}>{children}</body>
    </html>
  );
}
