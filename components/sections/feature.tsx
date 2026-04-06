"use client";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function FeaturesSection() {
  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
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
      transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },
    },
  };

  return (
    <motion.section
      id="features"
      className="py-10 md:py-24 px-4 sm:px-6 relative z-20"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="space-y-16 max-w-[1312px] mx-auto">
        <motion.div variants={fadeUp} className="text-center space-y-4">
          {/* <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#C0D5FF] bg-white text-[#4F46E5] text-sm font-medium font-figtree shadow-sm">
            What you get
          </div> */}
          <h3 className="font-semibold font-cal-sans text-[#122368] text-[32px] sm:text-[40px] lg:text-[56px]/[64px]">
            Easy for contributors. <br /> Instantly useful for managers.
          </h3>
        </motion.div>

        <div className="flex flex-col gap-6">
          <div className="flex gap-6 max-md:flex-col">
            {/* Card 1: Flexible Update Formats */}
            <motion.div
              className="w-full lg:max-w-[700px] bg-[#dfdef5] rounded-3xl flex flex-col justify-between gap-10 p-6 sm:p-10 overflow-hidden"
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 250, damping: 22 }}
            >
              <motion.div
                className="aspect-square relative h-[372px] w-full max-w-[437px] mx-auto"
                variants={fadeIn}
                whileHover={{ scale: 1.015 }}
              >
                <Image
                  src={"/features/flexible.png"}
                  alt="Flexible Update Formats"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <div className="space-y-4">
                <header className="font-semibold font-cal-sans text-2xl md:text-5xl/[56px] text-[#122368] -tracking-[1%]">
                  Update Your Way
                </header>
                <p className="text-[#525866] font-light font-figtree text-base md:text-[26px]/[138%] -tracking-[2%] opacity-70">
                  Type it, snap it, speak it, or record it. People can share progress in the format that feels fastest.
                </p>
              </div>
            </motion.div>

            {/* Card 2: AI Structured Summaries */}
            <motion.div
              className="w-full lg:max-w-[588px] bg-[#dfdef5] rounded-3xl flex flex-col justify-between gap-10 p-6 sm:p-10 overflow-hidden"
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 250, damping: 22 }}
            >
              <motion.div
                className="aspect-square relative h-[370px] w-[150%] max-w-[625px] left-1/2 -translate-x-1/2 mx-auto"
                variants={fadeIn}
                whileHover={{ scale: 1.01 }}
              >
                <Image
                  src={"/features/ai.png"}
                  alt="AI Structured Summaries"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <div className="space-y-4">
                <header className="font-semibold font-cal-sans text-2xl md:text-5xl/[56px] text-[#122368] -tracking-[1%]">
                  AI Summaries That Get to the Point
                </header>
                <p className="text-[#525866] font-light font-figtree text-base md:text-[26px]/[138%] -tracking-[2%] opacity-70">
                  We transcribe and structure updates into completed work, ongoing work, and blockers—ready to scan.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="flex gap-6 max-md:flex-col">
            {/* Card 3: Deadlines & Tracking */}
            <motion.div
              className="w-full lg:max-w-[588px] bg-[#dfdef5] rounded-3xl flex flex-col justify-between gap-10 p-6 sm:p-10 overflow-hidden"
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 250, damping: 22 }}
            >
              <motion.div
                className="aspect-square relative h-[370px] w-[150%] max-w-[588px] -top-10 left-1/2 -translate-x-1/2 mx-auto"
                variants={fadeIn}
                whileHover={{ scale: 1.01 }}
              >
                <Image
                  src={"/features/deadline.png"}
                  alt="Deadlines & Tracking"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <div className="space-y-4">
                <header className="font-semibold font-cal-sans text-2xl md:text-5xl/[56px] text-[#122368] -tracking-[1%]">
                  Timezone-Aware Deadlines
                </header>
                <p className="text-[#525866] font-light font-figtree text-base md:text-[26px]/[138%] -tracking-[2%] opacity-70">
                  Keep a consistent daily rhythm across regions with clear deadlines, late tracking, and no confusion.
                </p>
              </div>
            </motion.div>

            {/* Card 4: Quick Scan Feed */}
            <motion.div
              className="w-full lg:max-w-[700px] bg-[#dfdef5] rounded-3xl flex flex-col justify-between gap-10 p-6 sm:p-10 overflow-hidden"
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 250, damping: 22 }}
            >
              <motion.div
                className="aspect-square relative h-[372px] lg:h-[400px] w-full mx-auto"
                variants={fadeIn}
                whileHover={{ scale: 1.01 }}
              >
                <Image
                  src={"/features/quick-scan.png"}
                  alt="Quick Scan Feed"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <div className="space-y-4">
                <header className="font-semibold font-cal-sans text-5xl/[56px] text-[#122368] -tracking-[1%]">
                  Quick-Scan Feed & Admin Oversight
                </header>
                <p className="text-[#525866] font-light font-figtree text-base md:text-[26px]/[138%] -tracking-[2%] opacity-70">
                  See who submitted, who’s blocked, and what changed today—without digging through chat noise.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
