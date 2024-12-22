"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import './fontawesome';
import Navbar from "./navbar/navbar.js";
import Footer from "./footer/footer.js";
import Cakes from "./cakes/cakes";
import Home from "./home/home";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const [activePage, setActivePage] = useState('HOME');
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar setActivePage={setActivePage}/>
        {activePage === 'HOME' && <Home/>}
        {activePage === 'CAKES' && <Cakes />}
        <Footer/>
      </body>
    </html>
  );
}
