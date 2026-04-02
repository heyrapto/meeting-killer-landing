"use client";
import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary";
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function Button({
  text,
  variant = "primary",
  className = "",
  style,
  onClick,
  children,
}: ButtonProps) {
  return (
    <motion.button
      initial={{ scale: 1 }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      whileTap={{
        scale: 0.98,
        transition: { duration: 0.1, ease: "easeIn" },
      }}
      onClick={onClick}
      className={`relative overflow-hidden rounded-[8px] px-5 py-2.5 font-medium transition-all duration-300 ease-out ${className} ${
        variant === "primary"
          ? "bg-gradient-to-br from-[#335CFF] to-[#2A4BD8] text-white shadow-lg hover:shadow-xl hover:from-[#4A6FFF] hover:to-[#3A5BE8]"
          : "bg-gradient-to-br from-[#fd1d1d] to-[#e01a1a] text-white shadow-lg hover:shadow-xl hover:from-[#ff3333] hover:to-[#f02a2a]"
      }`}
      style={style}
    >
      {/* Shimmer Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          repeat: Infinity,
          repeatDelay: 2,
          duration: 1.5,
          ease: "easeInOut",
        }}
      />

      {/* Button Content */}
      <span className="relative z-10 tracking-wide font-medium block">
        {children || text}
      </span>

      {/* Glow Effect on Hover */}
      <motion.div
        className="absolute inset-0 rounded-[8px] opacity-0"
        style={{
          background:
            variant === "primary"
              ? "radial-gradient(circle, rgba(51, 92, 255, 0.3) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(253, 29, 29, 0.3) 0%, transparent 70%)",
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Border Glow */}
      <motion.div
        className="absolute inset-0 rounded-[8px] border border-transparent"
        style={{
          background:
            variant === "primary"
              ? "linear-gradient(45deg, rgba(51, 92, 255, 0.5), rgba(74, 111, 255, 0.3))"
              : "linear-gradient(45deg, rgba(253, 29, 29, 0.5), rgba(255, 51, 51, 0.3))",
        }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { Icons } from "./ui/icons";

const navigationLinks = [
  { name: "About", href: "/#about" },
  { name: "Features", href: "/#features" },
  { name: "Why Us", href: "/#why-us" },
  { name: "FAQs", href: "/#faqs" },
];

const resourceLinks = [
  { name: "Whitepaper", href: "https://brainloom.gitbook.io/brainloom/" },
  { name: "Enter Dapp", href: "/" },
];

const supportLinks = [
  { name: "Privacy Policy", href: "/" },
  { name: "Terms of Service", href: "/" },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden">
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-4 space-y-6">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative">
                  <Image
                    src="/logo.svg"
                    alt="Brainloom"
                    width={48}
                    height={48}
                    className="w-10 h-10 sm:w-12 sm:h-12 transition-transform group-hover:scale-110"
                    priority
                  />
                  {/* Logo glow effect */}
                  <div className="absolute inset-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#335CFF]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h1 className="text-2xl sm:text-3xl font-cal-sans font-medium text-white group-hover:text-[#335CFF] transition-colors duration-300">
                  Brainloom
                </h1>
              </Link>

              <p className="text-[#99A0AE] font-figtree text-sm sm:text-base leading-relaxed max-w-sm">
                Create, train, and own AI models on the blockchain. Tokenize
                your models, let others run them, and earn crypto rewards.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a
                  href="https://x.com/Brainloomsol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 rounded-xl bg-[#2B303B]/30 border border-[#2B303B] hover:border-[#335CFF]/30 transition-all duration-300"
                >
                  <Icons.twitter className="size-5 text-white group-hover:text-[#335CFF] transition-colors duration-300" />
                  <div className="absolute inset-0 rounded-xl bg-[#335CFF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                </a>
                {/* <a
                  href="https://t.me/brainloom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 rounded-xl bg-[#2B303B]/30 border border-[#2B303B] hover:border-[#335CFF]/30 transition-all duration-300"
                >
                  <Icons.telegram className="size-5 text-white group-hover:text-[#335CFF] transition-colors duration-300" />
                  <div className="absolute inset-0 rounded-xl bg-[#335CFF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                </a> */}
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-2">
              <h3 className="font-cal-sans font-medium text-white text-lg mb-6">
                Navigation
              </h3>
              <ul className="space-y-4">
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[#99A0AE] hover:text-white font-figtree text-sm transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-[#335CFF] mr-0 group-hover:mr-2 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="lg:col-span-2">
              <h3 className="font-cal-sans font-medium text-white text-lg mb-6">
                Resources
              </h3>
              <ul className="space-y-4">
                {resourceLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#99A0AE] hover:text-white font-figtree text-sm transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-[#335CFF] mr-0 group-hover:mr-2 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="lg:col-span-2">
              <h3 className="font-cal-sans font-medium text-white text-lg mb-6">
                Support
              </h3>
              <ul className="space-y-4">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[#99A0AE] hover:text-white font-figtree text-sm transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-[#335CFF] mr-0 group-hover:mr-2 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-[#2B303B]/50 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-[#99A0AE] font-inter text-sm">
              © {new Date().getFullYear()} Brainloom. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icons } from "./ui/icons";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { name: "About", href: "/#about" },
  { name: "Features", href: "/#features" },
  { name: "Why Us", href: "/#why-us" },
  { name: "FAQs", href: "/#faqs" },
];

// Framer Motion variants for the mobile dropdown and its items
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

  // Lock body scroll when the mobile menu is open
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
    <nav className="flex justify-between items-center p-4 absolute top-0 w-full h-[80px] z-50 lg:px-[80px] border-b border-[#F2F4F7] bg-white">
      <div className="flex items-center gap-10 w-full justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="logo"
            width={40}
            height={40}
            className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[40px] lg:h-[40px]"
            priority
          />
          <h1 className="text-xl sm:text-2xl lg:text-[24px]/[120%] font-figtree font-medium text-[#0E121B] tracking-[-6%] leading-[120%] sm:leading-[120px]">
            Brainloom
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 font-figtree tracking-[-0.084px]">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[#99A0AE] hover:text-[#0E121B] transition-all duration-300 text-[14px] font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4 *:transition-colors *:duration-300 *:text-[#99A0AE] *:hover:text-[#0E121B]">
            {/* <Link href={""} target="_blank" rel="noopener noreferrer">
              <Icons.telegram />
            </Link> */}
            <Link
              href="https://x.com/Brainloomsol"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.twitter />
            </Link>
          </div>

          <Link
            href="https://brainloom.gitbook.io/brainloom/"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block bg-[#0E121B] font-figtree border tracking-[-0.084px] border-[#2B303B] text-white/90 hover:text-white transition-all duration-300 px-[14px] py-[10px] rounded-[10px]"
          >
            Whitepaper
          </Link>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1 rounded-md hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/10 transition"
          >
            <span
              className={`block w-6 h-0.5 bg-[#525866] transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-[#525866] transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-[#525866] transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Popup */}
      <AnimatePresence initial={false} mode="wait">
        {isMenuOpen && (
          <>
            {/* translucent overlay to capture outside clicks */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMenuOpen(false)}
              className="lg:hidden absolute top-full left-0 w-full h-[calc(100vh-80px)] bg-black/5 z-40"
              aria-hidden="true"
            />

            <motion.div
              key="mobile-menu"
              id="mobile-menu"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="lg:hidden absolute top-full left-0 z-50 w-full bg-white/60 backdrop-blur-xl backdrop-saturate-150 border-b border-white/50 shadow-[0_8px_30px_rgba(0,0,0,0.12)] origin-top will-change-transform rounded-b-2xl"
            >
              <div className="flex flex-col p-6 space-y-6">
                {/* Mobile Navigation Links */}
                <div className="flex flex-col space-y-4 font-figtree">
                  {links.map((link) => (
                    <motion.div key={link.name} variants={itemVariants}>
                      <Link
                        href={link.href}
                        className="text-[#525866] hover:text-[#0E121B] transition-all duration-300 text-[16px] font-medium py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/10 rounded"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Get Started Button */}
                <motion.div variants={itemVariants} className="space-y-3">
                  <button className="bg-white/80 hover:bg-white/90 font-figtree border border-white/60 text-[#0E121B] px-6 py-3 rounded-[12px] w-full transition-all duration-200 hover:shadow-sm">
                    <Link href="/" onClick={() => setIsMenuOpen(false)}>
                      Get Started
                    </Link>
                  </button>
                  <button className="bg-transparent hover:bg-white/70 font-figtree border border-white/60 text-[#0E121B] px-6 py-3 rounded-[12px] w-full transition-all duration-200">
                    <Link
                      href="https://brainloom.gitbook.io/brainloom/"
                      target="_blank"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Whitepaper
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

"use client";
import Image from "next/image";
import Nav from "../nav";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 70, damping: 16 },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] },
  },
};

export default function Hero() {
  return (
    <motion.section
      className="relative w-full z-10 isolate p-4 sm:p-6 lg:pb-0 overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="relative z-10 w-full h-full flex flex-col sm:justify-between bg-white rounded-[40px] overflow-hidden ">
        <Nav />

        <div className="space-y-16 relative pt-[134px] pb-10 md:pb-24 px-5">
          <motion.div
            className="max-h-[1106px] h-full w-full absolute top-0 left-0 right-0"
            variants={fadeIn}
          >
            <Image src="/hero-bg.webp" alt="Hero Image" fill priority />
          </motion.div>
          <div className="flex items-center flex-col gap-10 text-center relative">
            <div className="max-w-[740px] mx-auto space-y-4">
              <motion.h1
                className="text-[#122368] text-3xl sm:text-5xl lg:text-[72px]/[100%] font-cal-sans  tracking-[-2%]"
                variants={fadeUp}
              >
                Create. Train. Share AI on the blockchain with x402.
              </motion.h1>

              <motion.p
                className="text-center font-figtree text-[14px] sm:text-[15px] lg:text-[16px] font-medium leading-[150%] tracking-[-0.32px] max-w-[646px] mx-auto text-[#525866]"
                variants={fadeUp}
              >
                Brainloom lets anyone build and train AI models using their
                data, tokenize them, and earn instantly through x402 powered
                payments.
              </motion.p>
            </div>

            <motion.a
              className="w-full max-w-[300px] h-10 bg-[linear-gradient(0deg,_#335CFF,_#335CFF),linear-gradient(180deg,_rgba(255,_255,_255,_0.16)_0%,_rgba(255,_255,_255,_0)_100%)] border border-white/12 shadow-[0px_0px_0px_1px_#335CFF,0px_1px_2px_0px_#0E121B3D] rounded-[10px] hover:scale-101 font-figtree text-sm text-white font-medium inline-flex items-center justify-center"
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              href="https://brainloom.vercel.app/"
              target="_blank"
            >
              Get started
            </motion.a>
          </div>

          <div className="flex justify-center items-center relative z-20">
            <motion.div
              className="rounded-[32px] bg-[#F5F7FA]   p-4"
              variants={fadeUp}
            >
              <Image
                src="/hero.svg"
                alt="Hero Image"
                width={1199}
                height={676}
                className="rounded-2xl "
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}