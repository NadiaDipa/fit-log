import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-[#0C0D10] flex flex-col items-center justify-center relative px-6 overflow-hidden select-none">

      {/* Background 404 */}
      <div
        className="absolute inset-0 flex items-center justify-center text-[22vw] font-black leading-none text-transparent pointer-events-none opacity-20"
        style={{ WebkitTextStroke: "2px #C2F800" }}
      >
        404
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center gap-7">

        {/* 404 + Message */}
        <div className="flex items-center gap-4 sm:gap-6">

          <span className="text-[#C2F800] text-4xl sm:text-5xl font-extrabold tracking-tight leading-none">
            404
          </span>

          <div className="w-px h-8 sm:h-9 bg-white/20" />

          <span className="text-white text-lg sm:text-2xl font-bold">
            This page could not be found.
          </span>

        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm text-center max-w-md -mt-1">
          The page you are looking for may have been removed or does not exist.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="bg-[#C2F800] text-black font-bold text-sm px-6 py-3 rounded-xl hover:bg-[#b0df00] transition-colors"
        >
          Return to Home
        </Link>

      </div>

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#1F242D]" />

    </div>
  );
}