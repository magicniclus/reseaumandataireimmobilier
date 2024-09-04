import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reseau mandaitaire immobilier by eXp",
  description:
    "Devenez mandataire immobilier au sein de la meilleure équipe du meilleur réseau",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5JB9HKG2JG"
        ></script>
        <script>
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-5JB9HKG2JG');`}
        </script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
