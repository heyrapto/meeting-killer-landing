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
      <div className="bg-white rounded-[40px] overflow-hidden relative border border-[#F2F4F7] shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
        {/* Subtle glow effects matching Hero style but adjusted for light theme */}
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4F46E5]/5 rounded-full blur-[120px] pointer-events-none"
          variants={fadeIn}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#818CF8]/5 rounded-full blur-[120px] pointer-events-none"
          variants={fadeIn}
        />

        {/* Dotted pattern matching Hero */}
        <motion.div
          className="h-full w-full absolute top-0 left-0 right-0 opacity-[0.03] pointer-events-none"
          variants={fadeIn}
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #000 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />

        <div className="relative max-w-[840px] mx-auto space-y-10 text-center py-20 sm:py-24 lg:py-32 px-5 z-10">
          <div className="space-y-6">
            <motion.h2
              className="font-semibold font-cal-sans text-[#122368] text-3xl sm:text-4xl md:text-[55px] leading-[1.1] -tracking-[0.01em]  mx-auto"
              variants={fadeUp}
            >
              If standups feel like work, it’s time to replace it.
            </motion.h2>
            <motion.p
              className="font-normal font-figtree text-[16px] sm:text-[18px] sm:leading-[28px] text-[#525866]  mx-auto"
              variants={fadeUp}
            >
              Use Meeting Killer to keep the habit, remove the meeting, and give your team a faster way to stay aligned.
            </motion.p>
          </div>

          <motion.div className="flex items-center justify-center gap-4 flex-col sm:flex-row" variants={fadeUp}>
            <Link href={"#"} className="w-full sm:w-auto">
              <motion.button
                className="w-full sm:w-[220px] h-12 bg-[linear-gradient(0deg,_#4F46E5,_#4F46E5),linear-gradient(180deg,_rgba(255,_255,_255,_0.16)_0%,_rgba(255,_255,_255,_0)_100%)] border border-white/12 shadow-[0px_0px_0px_1px_#4F46E5,0px_1px_2px_0px_#0E121B3D] rounded-xl hover:scale-101 font-figtree text-sm text-white font-medium flex items-center justify-center transition-transform"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                Start Free
              </motion.button>
            </Link>

            <Link href={"#"} className="w-full sm:w-auto">
              <motion.button
                className="w-full sm:w-[220px] h-12 bg-white text-[#122368] border border-[#C0D5FF] rounded-xl font-figtree text-sm font-medium flex items-center justify-center shadow-sm hover:bg-[#F5F7FA] transition-colors"
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