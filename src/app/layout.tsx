import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@components/Navbar";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "GIAIC-ASSINGMENT",
  description: "ASSIGNMENT-2 DUBMISSION FROM OF WED 7 TO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       // <div className="bg-slate-900 max-w-screen  max-h-screen overflow-x-hidden font-poppins">
          <Navbar />
        {children}
        </div>
      </body>
    </html>
  );
}
