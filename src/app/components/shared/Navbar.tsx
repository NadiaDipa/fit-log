"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-[#1E1E1E]">
      <div className="navbar container mx-auto py-4 px-4 lg:py-8">
        {/* Left Side: Mobile Menu & Desktop Logo */}
        <div className="navbar-start w-auto lg:w-1/4">
          {/* Mobile Hamburger Menu */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost text-white px-0">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-[#1E1E1E] text-white rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/">Workouts</Link>
              </li>
              <li>
                <Link href="/my-plan">My Plan</Link>
              </li>
            </ul>
          </div>

          {/* Desktop Logo */}
          <div className="hidden lg:flex items-center">
            <Link href="/" className="btn btn-ghost text-xl px-0">
              <Image
                src="/logo.png"
                alt="FitLog Logo"
                width={28}
                height={28}
                className="w-7 h-7 object-contain"
              />
              <span className="text-[#FFFFFF] font-oswald text-2xl">FITLOG</span>
            </Link>
          </div>
        </div>

        {/* Center Side: Mobile Logo & Desktop Links */}
        <div className="navbar-center flex-1 justify-center">
          {/* Mobile & Tablet Center Logo */}
          <div className="flex lg:hidden items-center">
            <Link href="/" className="btn btn-ghost text-xl px-0">
              <Image
                src="/logo.png"
                alt="FitLog Logo"
                width={28}
                height={28}
                className="w-7 h-7 object-contain"
              />
              <span className="text-[#FFFFFF] font-oswald text-2xl">FITLOG</span>
            </Link>
          </div>

          {/* Center Links (Desktop only) */}
          <ul className="hidden lg:flex items-center gap-2 whitespace-nowrap">
            <li>
              <Link
                href="/"
                className={`px-4 py-1.5 rounded-full text-[14px] text-[#C2F800] font-inter bg-[#C2F800]/5`}
              >
                Workouts
              </Link>
            </li>
            <li>
              <Link
                href="/my-plan"
                className={`px-4 py-1.5 rounded-full text-[14px] text-[#9CA3AF] font-inter`}
              >
                My Plan
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Links */}
        <div className="navbar-end w-auto lg:w-1/4">
          <ul className="flex items-center gap-1 sm:gap-2 whitespace-nowrap">
            <li>
              <Link
                href="/plan"
                className={`px-2 sm:px-4 py-1.5 rounded-full font-semibold text-[#D1D5DB] text-[13px] sm:text-[14px] flex items-center`}
              >
                Plan
                <div className="badge bg-[#C2F800] border-0 btn-circle ml-2 sm:ml-3 text-black font-bold">
                  0
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/saved"
                className={`px-2 sm:px-4 py-1.5 rounded-full text-[13px] sm:text-[14px] text-[#9CA3AF] flex items-center`}
              >
                Saved
                <div className="badge bg-[#1E1E1E] border-gray-700 btn-circle ml-2 sm:ml-3 text-white">
                  0
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;