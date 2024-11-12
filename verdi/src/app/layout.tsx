import type { Metadata } from "next";
import "./globals.css";
import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Rodape from "@/components/Rodape/Rodape";

export const metadata: Metadata = {
  title: "Verdí",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="bg-emerald-950 font-migra font-extrabold flex flex-col justify-between min-h-screen">
        <Cabecalho />
        <main className="flex flex-grow justify-center items-center">
          {children}
        </main>
        <Rodape />
      </body>
    </html>
  );
}