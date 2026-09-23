"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="bg-[#1E1E1E]">
      <div className="navbar shadow-sm container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
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
          <div>
            <Link href="/" className="btn btn-ghost text-xl">
              <Image
                src="/logo.png"
                alt="FitLog Logo"
                width={28}
                height={28}
                className="w-7 h-7 object-contain"
              />
              <span className="text-[#FFFFFF]">FITLOG</span>
            </Link>
          </div>
        </div>

        {/* Center Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-2">
            <li>
              <Link
                href="/"
                className={`px-4 py-1.5 rounded-full text-xs font-semibold text-[#C2F800]`}>
                Workouts
              </Link>
            </li>
            <li>
              <Link
                href="/my-plan"
                className={`px-4 py-1.5 rounded-full text-xs font-semibold text-[#9CA3AF]`}>
                My Plan
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Links */}
        <div className="navbar-end">
          <ul className="flex items-center gap-2">
            <li>
              <Link
                href="/plan"
                className={`px-4 py-1.5 rounded-full text-xs font-semibold text-[#D1D5DB]`}
              >
                Plan
              </Link>
            </li>
            <li>
              <Link
                href="/saved"
                className={`px-4 py-1.5 rounded-full text-xs font-semibold text-[#9CA3AF]`}
              >
                Saved
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;