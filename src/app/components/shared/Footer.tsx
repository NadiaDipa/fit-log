import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0C0D10]">
      {/* Full-width border */}
      <div className="w-full border-t border-[#1F242D]">
        
        {/* Same alignment as Navbar */}
        <div className="container mx-auto px-2 py-6 text-neutral-content sm:px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

            {/* Logo & Brand Name */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="FitLog Logo"
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />

              <span className="text-[17px] font-bold tracking-wider text-white">
                FITLOG
              </span>
            </Link>

            {/* Copyright Text */}
            <p className="text-center text-xs text-[#6B7280] md:text-right md:text-sm">
              © 2026 FitLog — Workout Library. Train hard, log honest.
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;