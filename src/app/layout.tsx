import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/shared/Navbar";
import WorkoutsProvider from "@/context/WorkoutsContext";
import { Toaster } from "react-hot-toast";

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
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <WorkoutsProvider>
          <Navbar />
          {children} 
          <Toaster/>
        </WorkoutsProvider>
      </body>
    </html>
  );
}
