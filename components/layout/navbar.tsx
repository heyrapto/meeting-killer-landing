"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const links = [
  { name: "Why switch", href: "/#problem" },
  { name: "How it works", href: "/#how-it-works" },
  { name: "Features", href: "/#features" },
  { name: "Benefits", href: "/#benefits" },
];

const menuVariants = {
  closed: {
    opacity: 0,
    y: -8,
    filter: "blur(6px)",
    transition: { duration: 0.18 },
  },
  open: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      bounce: 0.24,
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
} as const;

const itemVariants = {
  closed: { opacity: 0, y: -6 },
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.3, duration: 0.4 },
  },
} as const;

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (typeof document === "undefined") return;
    const original = document.body.style.overflow;
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = original || "";
    }
    return () => {
      document.body.style.overflow = original || "";
    };
  }, [isMenuOpen]);

  return (
    <nav className="flex justify-between items-center p-4 absolute top-0 w-full h-[80px] z-50 lg:px-[80px] border-b border-gray-100 bg-white">
      <div className="flex items-center gap-10 w-full justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logo.png"
            width={200}
            height={100}
            alt="Logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 font-figtree tracking-[-0.084px]">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[#99A0AE] hover:text-[#0E121B] transition-all duration-300 text-[14px] font-medium relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#4F46E5] transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="#"
            role="button"
            className="hidden lg:block bg-white text-[#122368] font-figtree text-[14px] font-medium border tracking-[-0.084px] border-[#C0D5FF] hover:bg-[#F5F7FA] transition-all duration-300 px-[14px] py-[10px] rounded-[10px] shadow-sm"
          >
            Log in
          </Link>
          <Link
            href="#"
            role="button"
            className="hidden lg:block bg-[linear-gradient(0deg,_#4F46E5,_#4F46E5),linear-gradient(180deg,_rgba(255,_255,_255,_0.16)_0%,_rgba(255,_255,_255,_0)_100%)] shadow-[0px_0px_0px_1px_#4F46E5,0px_1px_2px_0px_#0E121B3D] text-white font-figtree text-[14px] font-medium border tracking-[-0.084px] border-white/12 hover:opacity-90 transition-all duration-300 px-[14px] py-[10px] rounded-[10px]"
          >
            Start Free
          </Link>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 rounded-md hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/10 transition"
          >
            <span
              className={`block w-6 h-0.5 bg-[#525866] transition-all duration-300 rounded-full ${isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-[#525866] transition-all duration-300 rounded-full ${isMenuOpen ? "opacity-0" : ""
                }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-[#525866] transition-all duration-300 rounded-full ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Popup */}
      <AnimatePresence initial={false} mode="wait">
        {isMenuOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMenuOpen(false)}
              className="lg:hidden fixed top-[80px] left-0 w-full h-[calc(100vh-80px)] bg-black/10 z-40"
              aria-hidden="true"
            />

            <motion.div
              key="mobile-menu"
              id="mobile-menu"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="lg:hidden fixed top-[80px] left-0 z-50 w-full bg-white/80 backdrop-blur-xl backdrop-saturate-150 border-b border-white/50 shadow-[0_8px_30px_rgba(0,0,0,0.12)] origin-top will-change-transform rounded-b-2xl border-t border-[#F2F4F7]"
            >
              <div className="flex flex-col p-6 space-y-6">
                <div className="flex flex-col space-y-4 font-figtree">
                  {links.map((link) => (
                    <motion.div key={link.name} variants={itemVariants}>
                      <Link
                        href={link.href}
                        className="text-[#525866] hover:text-[#0E121B] transition-all duration-300 text-[16px] font-medium py-2 block focus:outline-none focus-visible:ring-2 focus-visible:ring-black/10 rounded"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div variants={itemVariants} className="space-y-3 pt-4 border-t border-[#F2F4F7]">
                  <button className="bg-[linear-gradient(0deg,_#4F46E5,_#4F46E5),linear-gradient(180deg,_rgba(255,_255,_255,_0.16)_0%,_rgba(255,_255,_255,_0)_100%)] border border-white/12 shadow-[0px_0px_0px_1px_#4F46E5,0px_1px_2px_0px_#0E121B3D] text-white font-figtree font-medium px-6 py-3 rounded-[12px] w-full transition-all duration-200">
                    <Link href="#" onClick={() => setIsMenuOpen(false)} className="w-full block">
                      Start Free
                    </Link>
                  </button>
                  <button className="bg-white hover:bg-gray-50 border border-[#C0D5FF] text-[#122368] font-figtree font-medium px-6 py-3 rounded-[12px] w-full transition-all duration-200 shadow-sm">
                    <Link
                      href="#"
                      onClick={() => setIsMenuOpen(false)}
                      className="w-full block"
                    >
                      Log in
                    </Link>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
