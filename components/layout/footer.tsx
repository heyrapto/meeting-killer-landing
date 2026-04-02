import Link from "next/link";
import React from "react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="px-4 sm:px-6 bg-white overflow-hidden border-t border-[#F2F4F7]">
      <div className="space-y-5 sm:space-y-7 pb-10">
        <div className="py-8 sm:py-10 lg:py-12 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 lg:gap-16 max-w-[1248px] mx-auto justify-between border-b border-[#F2F4F7] pb-8">
          <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 flex-wrap justify-center sm:justify-start font-figtree text-[#0E121B] text-sm/[20px] font-medium opacity-80">
            <Link href={"/"}>Home</Link>
            <Link href={"#problem"}>Why switch</Link>
            <Link href={"#how-it-works"}>How it works</Link>
            <Link href={"#features"}>Features</Link>
            <Link href={"#privacy"}>Privacy Policy</Link>
            <Link href={"#terms"}>Terms of Service</Link>
          </div>

          <div className="text-[#525866] font-inter text-xs sm:text-sm text-center sm:text-left opacity-70">
            © {new Date().getFullYear()} Meeting Killer. All rights reserved.
          </div>
        </div>

        <div className="flex items-center flex-wrap justify-center max-md:flex-col gap-6 pt-10">
          <span className="font-normal font-cal-sans text-5xl sm:text-[120px] md:text-[160px] lg:text-[200px]/[100%] text-[#F5F7FA] text-center pointer-events-none select-none tracking-tight">
            MeetingKiller
          </span>
        </div>
      </div>
    </footer>
  );
}
