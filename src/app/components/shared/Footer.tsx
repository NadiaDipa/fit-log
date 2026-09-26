import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-[#090A0D] border-t border-[#1F242D] text-neutral-content py-6 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Logo & Brand Name */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="FitLog Logo"
            width={24}
            height={24}
            className="h-6 w-6 object-contain"
          />
          <span className="text-[17px] font-bold tracking-wider text-white">FITLOG</span>
        </Link>

        {/* Right: Copyright Text */}
        <p className="text-[#6B7280] text-xs md:text-sm text-center md:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  )
}

export default Footer;