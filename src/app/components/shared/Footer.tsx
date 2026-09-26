import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
  <footer className='bg-[#0C0D10]'>
      <div className="w-full border-t border-[#1F242D] text-neutral-content py-6 px-6 md:px-16 container mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
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
    </div>
  </footer>
  )
}

export default Footer;