"use client";
import { motion, type Variants } from "framer-motion";
import React from "react";
// import Image from "next/image"; // Add back if placeholder images are ready

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
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#C0D5FF] bg-white text-[#335CFF] text-sm font-medium font-figtree shadow-sm">
             What you get
          </div>
          <h3 className="font-normal font-cal-sans text-[#122368] text-[32px] sm:text-[40px] lg:text-[56px]/[64px]">
            Simple for the team. <br/> Useful for managers.
          </h3>
        </motion.div>

        <div className="flex flex-col gap-6">
          <div className="flex gap-6 max-md:flex-col">
             {/* Feature 1 */}
            <motion.div
              className="w-full lg:max-w-[700px] bg-white border border-[#E2E8F0] shadow-sm rounded-[32px] flex flex-col gap-10 p-6 sm:p-10 overflow-hidden"
              variants={fadeUp}
              whileHover={{ y: -4, boxShadow: "0 10px 40px -10px rgba(0,0,0,0.05)" }}
              transition={{ type: "spring", stiffness: 250, damping: 22 }}
            >
              <div className="aspect-[4/3] relative w-full bg-[#F5F7FA] rounded-2xl flex items-center justify-center overflow-hidden border border-[#F2F4F7]">
                 <div className="w-16 h-16 bg-white rounded-[16px] shadow-sm border border-[#E2E8F0] flex items-center justify-center mb-4 text-[#335CFF] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                 </div>
                 {/* Fake UI elements */}
                 <div className="absolute inset-x-8 top-8 bottom-8 flex flex-col gap-3 blur-[2px] opacity-40">
                    <div className="w-full h-12 bg-white rounded-lg shadow-sm"></div>
                    <div className="w-[80%] h-12 bg-white rounded-lg shadow-sm"></div>
                    <div className="w-full h-24 bg-white rounded-lg shadow-sm mt-4"></div>
                 </div>
              </div>
              <div className="space-y-4">
                <header className="font-normal font-cal-sans text-2xl md:text-4xl/[44px] text-[#122368] -tracking-[1%]">
                  Flexible Update Formats
                </header>
                <p className="text-[#525866] font-normal font-figtree text-base md:text-[20px]/[150%] -tracking-[1%]">
                  Let people send updates the way they naturally work: typed notes, screenshots, voice notes, or video.
                </p>
              </div>
            </motion.div>
            
            {/* Feature 2 */}
            <motion.div
              className="w-full lg:max-w-[588px] bg-white border border-[#E2E8F0] shadow-sm rounded-[32px] flex flex-col gap-10 p-6 sm:p-10 overflow-hidden"
              variants={fadeUp}
              whileHover={{ y: -4, boxShadow: "0 10px 40px -10px rgba(0,0,0,0.05)" }}
              transition={{ type: "spring", stiffness: 250, damping: 22 }}
            >
              <div className="aspect-[4/3] relative w-full bg-[#F5F7FA] rounded-2xl flex items-center justify-center overflow-hidden border border-[#F2F4F7]">
                 <div className="w-16 h-16 bg-white rounded-[16px] shadow-sm border border-[#E2E8F0] flex items-center justify-center mb-4 text-[#335CFF] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 14H7.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                 </div>
              </div>
              <div className="space-y-4">
                <header className="font-normal font-cal-sans text-2xl md:text-4xl/[44px] text-[#122368] -tracking-[1%]">
                  AI Summaries
                </header>
                <p className="text-[#525866] font-normal font-figtree text-base md:text-[20px]/[150%] -tracking-[1%]">
                  Turn long, messy, or spoken updates into structured summaries your team can read quickly.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="flex gap-6 max-md:flex-col">
            {/* Feature 3 */}
            <motion.div
              className="w-full lg:max-w-[588px] bg-white border border-[#E2E8F0] shadow-sm rounded-[32px] flex flex-col gap-10 p-6 sm:p-10 overflow-hidden"
              variants={fadeUp}
              whileHover={{ y: -4, boxShadow: "0 10px 40px -10px rgba(0,0,0,0.05)" }}
              transition={{ type: "spring", stiffness: 250, damping: 22 }}
            >
              <div className="aspect-[4/3] relative w-full bg-[#F5F7FA] rounded-2xl flex items-center justify-center overflow-hidden border border-[#F2F4F7]">
                 <div className="w-16 h-16 bg-white rounded-[16px] shadow-sm border border-[#E2E8F0] flex items-center justify-center mb-4 text-[#335CFF] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                 </div>
              </div>
              <div className="space-y-4">
                <header className="font-normal font-cal-sans text-2xl md:text-4xl/[44px] text-[#122368] -tracking-[1%]">
                  Deadlines & Tracking
                </header>
                <p className="text-[#525866] font-normal font-figtree text-base md:text-[20px]/[150%] -tracking-[1%]">
                  Keep a daily standup rhythm with timezone-aware deadlines and late submission tracking.
                </p>
              </div>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              className="w-full lg:max-w-[700px] bg-white border border-[#E2E8F0] shadow-sm rounded-[32px] flex flex-col gap-10 p-6 sm:p-10 overflow-hidden"
              variants={fadeUp}
              whileHover={{ y: -4, boxShadow: "0 10px 40px -10px rgba(0,0,0,0.05)" }}
              transition={{ type: "spring", stiffness: 250, damping: 22 }}
            >
              <div className="aspect-[4/3] relative w-full bg-[#F5F7FA] rounded-2xl flex items-center justify-center overflow-hidden border border-[#F2F4F7]">
                 <div className="w-16 h-16 bg-white rounded-[16px] shadow-sm border border-[#E2E8F0] flex items-center justify-center mb-4 text-[#335CFF] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                 </div>
              </div>
              <div className="space-y-4">
                <header className="font-normal font-cal-sans text-2xl md:text-4xl/[44px] text-[#122368] -tracking-[1%]">
                  Quick Scan Feed & Admin Control
                </header>
                <p className="text-[#525866] font-normal font-figtree text-base md:text-[20px]/[150%] -tracking-[1%]">
                  See completed work, ongoing tasks, and blockers efficiently. Manage members and Slack delivery easily.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
