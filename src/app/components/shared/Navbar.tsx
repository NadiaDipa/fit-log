"use client";

import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { WorkoutsContext } from "@/context/WorkoutsContext";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  const { myPlan = [], saved = [] } = useContext(WorkoutsContext) || {};

  // Active tab conditions
  const isMyPlanActive =
    pathname === "/my-plan" && (tab === "plan" || !tab);

  const isPlanActive =
    pathname === "/my-plan" && (tab === "plan" || !tab);

  const isSavedActive =
    pathname === "/my-plan" && tab === "saved";

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0C0D10] backdrop-blur-md">
      <div className="navbar container mx-auto px-2 py-4 sm:px-4 lg:py-6 relative">

        {/* Left Side: Mobile Menu & Desktop Logo */}
        <div className="navbar-start w-auto lg:w-1/4 z-10">

          {/* Mobile Hamburger Menu */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost px-0 text-white"
            >
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
              className="menu menu-sm dropdown-content z-1 mt-3 w-52 rounded-box border border-white/10 bg-[#1E1E1E] p-2 text-white shadow"
            >
              <li>
                <Link
                  href="/"
                  className={pathname === "/" ? "text-[#C2F800]" : ""}
                >
                  Workouts
                </Link>
              </li>

              <li>
                <Link
                  href="/my-plan?tab=plan"
                  className={
                    pathname === "/my-plan" ? "text-[#C2F800]" : ""
                  }
                >
                  My Plan
                </Link>
              </li>
            </ul>
          </div>

          {/* Desktop Logo */}
          <div className="hidden items-center lg:flex">
            <Link
              href="/"
              className="btn btn-ghost border-0 px-0 text-xl shadow-none hover:bg-transparent focus:bg-transparent active:bg-transparent"
            >
              <Image
                src="/logo.png"
                alt="FitLog Logo"
                width={28}
                height={28}
                className="h-7 w-7 object-contain"
              />

              <span className="font-oswald text-2xl text-[#FFFFFF]">
                FITLOG
              </span>
            </Link>
          </div>
        </div>

        {/* Center Side: Mobile Logo (Absolute Center) & Desktop Links */}
        <div className="navbar-center absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 flex-1 justify-center">

          {/* Mobile & Tablet Center Logo */}
          <div className="flex items-center lg:hidden">
            <Link
              href="/"
              className="btn btn-ghost px-0 text-xl hover:bg-transparent"
            >
              <Image
                src="/logo.png"
                alt="FitLog Logo"
                width={28}
                height={28}
                className="h-7 w-7 object-contain"
              />

              <span className="font-oswald text-2xl text-[#FFFFFF]">
                FITLOG
              </span>
            </Link>
          </div>

          {/* Center Links (Desktop only) */}
          <ul className="hidden items-center gap-2 whitespace-nowrap lg:flex">
            <li>
              <Link
                href="/"
                className={`rounded-full px-4 py-1.5 text-[14px] font-inter transition-all ${
                  pathname === "/"
                    ? "bg-[#C2F800]/5 text-[#C2F800]"
                    : "text-[#9CA3AF] hover:text-white"
                }`}
              >
                Workouts
              </Link>
            </li>

            <li>
              <Link
                href="/my-plan?tab=plan"
                className={`rounded-full px-4 py-1.5 text-[14px] font-inter transition-all ${
                  isMyPlanActive
                    ? "bg-[#C2F800]/5 text-[#C2F800]"
                    : "text-[#9CA3AF] hover:text-white"
                }`}
              >
                My Plan
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Links */}
        <div className="navbar-end w-auto lg:w-1/4 z-10 ml-auto">
          <ul className="flex items-center gap-0 whitespace-nowrap sm:gap-2">

            {/* Plan */}
            <li>
              <Link
                href="/my-plan?tab=plan"
                className={`flex items-center rounded-full px-1.5 py-1.5 text-[12px] font-semibold transition-all sm:px-4 sm:text-[14px] ${
                  isPlanActive
                    ? "bg-[#C2F800]/5 text-[#C2F800]"
                    : "text-[#D1D5DB] hover:text-white"
                }`}
              >
                Plan

                <div
                  className={`badge btn-circle ml-1.5 border-0 sm:ml-3 ${
                    isPlanActive
                      ? "bg-[#C2F800] font-bold text-black"
                      : "bg-[#2A2A2A] text-white"
                  }`}
                >
                  {mounted ? myPlan?.length || 0 : 0}
                </div>
              </Link>
            </li>

            {/* Saved */}
            <li>
              <Link
                href="/my-plan?tab=saved"
                className={`flex items-center rounded-full px-1.5 py-1.5 text-[12px] transition-all sm:px-4 sm:text-[14px] ${
                  isSavedActive
                    ? "bg-[#C2F800]/5 text-[#C2F800]"
                    : "text-[#9CA3AF] hover:text-white"
                }`}
              >
                Saved

                <div
                  className={`badge btn-circle ml-1.5 border bg-transparent sm:ml-3 ${
                    isSavedActive
                      ? "border-[#C2F800] text-[#C2F800]"
                      : "border-white/20 text-white"
                  }`}
                >
                  {mounted ? saved?.length || 0 : 0}
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