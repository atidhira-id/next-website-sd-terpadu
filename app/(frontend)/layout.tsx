import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { SchoolProvider } from "@/context/schoolContext";
import { getSchoolProfile } from "@/lib/api/Globals";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SD Terpadu Muhammadiyah 1 Besuki",
  description: "Website SD Terpadu Muhammadiyah 1 Besuki",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schoolProfile = await getSchoolProfile();

  return (
    <html lang="id">
      <SchoolProvider value={schoolProfile}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="flex flex-col min-h-screen bg-foreground font-sans">
            <Navbar logo={schoolProfile.logo.url} />
            <main className="flex-1 bg-gray-100">{children}</main>
            <Footer logo={schoolProfile.logo.url} />
          </div>
        </body>
      </SchoolProvider>
    </html>
  );
}
