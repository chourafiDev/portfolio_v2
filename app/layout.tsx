import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chourafidev | Home",
  description:
    "Passionate Full Stack Web and Mobile Developer. Transforming ideas into seamless digital experiences. Expertise in front-end design, back-end development, and mobile app creation. Let's innovate together!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark custom-container`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
