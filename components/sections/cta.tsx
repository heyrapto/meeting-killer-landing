"use client";
import { motion, type Variants } from "framer-motion";
import React from "react";
import Link from "next/link";

export default function CTA() {
  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.08 },
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

  return (
    <motion.section
      className="px-4 sm:px-6 py-6 pb-20"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* ✅ Removed fixed lg:h-[600px] — let content determine height naturally */}
      <div className="bg-[#122368] rounded-[40px] overflow-hidden relative">
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#335CFF]/30 rounded-full blur-[120px] pointer-events-none"
          variants={fadeIn}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#818CF8]/20 rounded-full blur-[120px] pointer-events-none"
          variants={fadeIn}
        />

        {/* ✅ Reduced py to sm:py-24 lg:py-32 so it doesn't overflow */}
        <div className="relative max-w-[840px] mx-auto space-y-10 text-center py-20 sm:py-24 lg:py-32 px-5 z-10">
          <div className="space-y-6">
            <motion.h2
              className="font-semibold font-cal-sans text-white text-3xl sm:text-4xl md:text-[55px] leading-[1.1] -tracking-[0.01em] max-w-[900px] mx-auto"
              variants={fadeUp}
            >
              If the standup meeting feels heavier than the work, it is time to replace it.
            </motion.h2>
            <motion.p
              className="font-normal font-figtree text-[16px] sm:text-[18px] sm:leading-[28px] text-[#A5B4FC] max-w-[500px] mx-auto"
              variants={fadeUp}
            >
              Use Meeting Killer to keep the habit, remove the meeting, and give your team a faster way to stay aligned.
            </motion.p>
          </div>

          <motion.div className="flex items-center justify-center gap-4 flex-col sm:flex-row" variants={fadeUp}>
            <Link href={"#"} className="w-full sm:w-auto">
              <motion.button
                className="w-full sm:w-[220px] h-12 bg-white text-[#122368] rounded-xl font-figtree text-[15px] font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                Start Free
              </motion.button>
            </Link>

            <Link href={"#"} className="w-full sm:w-auto">
              <motion.button
                className="w-full sm:w-[220px] h-12 bg-transparent text-white border border-white/20 rounded-xl hover:bg-white/5 font-figtree text-[15px] font-medium transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                Talk to Sales
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}