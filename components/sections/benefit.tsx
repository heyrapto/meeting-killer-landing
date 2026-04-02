"use client";
import { motion, type Variants } from "framer-motion";
import { Timer, BellOff, LayoutDashboard, BookOpen } from "lucide-react";

const benefits = [
  {
    id: 1,
    title: "Save time",
    description: "Stop spending team time on repeated verbal status updates.",
    icon: Timer,
  },
  {
    id: 2,
    title: "Reduce interruptions",
    description: "People update on schedule without breaking deep work.",
    icon: BellOff,
  },
  {
    id: 3,
    title: "Improve visibility",
    description: "Managers get one clear view of team progress and blockers.",
    icon: LayoutDashboard,
  },
  {
    id: 4,
    title: "Keep a reliable record",
    description: "Every update is documented, organized, and easy to revisit.",
    icon: BookOpen,
  },
];

export default function BenefitSection() {
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

  const popIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
  };

  return (
    <motion.section
      id="benefits"
      className="py-10 md:py-24 px-6"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="space-y-16 max-w-[1450px] mx-auto">
        <motion.div variants={fadeUp} className="text-center space-y-4">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#C0D5FF] bg-white text-[#335CFF] text-sm font-medium font-figtree shadow-sm">
            Why it works
          </div>
          <h4 className="font-semibold font-cal-sans text-[#122368] text-[32px] sm:text-[40px] lg:text-[56px] lg:leading-[64px]">
            Everything a standup should do.<br />None of the drag.
          </h4>
        </motion.div>

        <div className="flex gap-6 max-md:flex-col md:px-5 overflow-x-auto pb-6 hide-scrollbar custom-scrollbar snap-x snap-mandatory">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.id}
                className="w-full md:w-[467px] h-[300px] md:h-[400px] shrink-0 bg-white border border-[#E2E8F0] shadow-sm rounded-[32px] flex flex-col justify-between p-7 pt-10 snap-center relative overflow-hidden"
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: "0 10px 40px -10px rgba(0,0,0,0.08)" }}
                whileTap={{ scale: 0.995 }}
                transition={{ type: "spring", stiffness: 250, damping: 22 }}
              >
                {/* Top-right decorative icon — replaces the empty arc */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#335CFF]/5 rounded-bl-[100px] pointer-events-none flex items-center justify-center">
                  <Icon
                    className="text-[#335CFF]/30 translate-x-3 -translate-y-3"
                    size={44}
                    strokeWidth={1.25}
                  />
                </div>

                <motion.div
                  className="size-14 sm:size-16 rounded-2xl border border-[#C0D5FF] bg-[#F5F7FA] inline-flex items-center justify-center text-[#335CFF] font-medium text-2xl font-cal-sans shadow-sm"
                  variants={popIn}
                >
                  0{benefit.id}
                </motion.div>

                <div className="space-y-4 z-10">
                  <header className="text-[#122368] font-semibold font-cal-sans text-2xl sm:text-[32px] sm:leading-[120%] -tracking-[0.01em]">
                    {benefit.title}
                  </header>
                  <p className="text-[#525866] font-normal font-figtree text-base sm:text-[20px] sm:leading-[150%] -tracking-[0.01em]">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}