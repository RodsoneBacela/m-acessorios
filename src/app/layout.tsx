import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '../components/layout/Navbar';
import Footer from './../components/layout/Footer';
import ToastProvider from "@/providers/ToastProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable}  antialiased`}
      >
        <ToastProvider/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
