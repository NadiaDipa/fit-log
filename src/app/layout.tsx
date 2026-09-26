import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/shared/Navbar";
import WorkoutsProvider from "@/context/WorkoutsContext";
import { Toaster } from "react-hot-toast";
import Footer from "./components/shared/Footer";

export const metadata: Metadata = {
  title: "FitLog",
  description: "Track your fitness journey",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light" className="h-full antialiased">
      <body
        className="min-h-full flex flex-col bg-[#0C0D10]"
        suppressHydrationWarning
      >
        <WorkoutsProvider>
          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <Toaster />
          <Footer />
        </WorkoutsProvider>
      </body>
    </html>
  );
}