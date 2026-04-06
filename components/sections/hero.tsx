"use client";

import { motion, type Variants } from "framer-motion";
import Nav from "../layout/navbar";
import Image from "next/image";

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
      <div className="relative z-10 w-full h-full flex flex-col sm:justify-between bg-white rounded-[40px] overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-[#F2F4F7]">
        <Nav />

        <div className="space-y-12 sm:space-y-16 relative pt-[134px] pb-10 md:pb-24 px-5">
          <motion.div
            className="max-h-[1106px] h-full w-full absolute top-0 left-0 right-0"
            variants={fadeIn}
          >
            <Image src="/hero-bg.jpg" alt="Hero Image" fill priority className="opacity-20" />
          </motion.div>
          <div className="flex items-center flex-col gap-10 text-center relative z-10 pt-10">
            <div className="max-w-[800px] mx-auto space-y-6">

              <motion.h1
                className="text-[#122368] text-4xl sm:text-5xl lg:text-[80px]/[1.1] font-cal-sans tracking-[-2%] font-bold"
                variants={fadeUp}
              >
                Replace the daily standup. Keep the team in sync.
              </motion.h1>

              <motion.p
                className="text-center font-figtree text-[15px] sm:text-[18px] font-normal leading-[160%] tracking-[-0.32px] max-w-[680px] mx-auto text-[#525866]"
                variants={fadeUp}
              >
                Meeting Killer replaces live standup meetings with quick async updates. Your team submits progress by text, image, audio, or video, and AI turns it into a structured summary the whole team can scan fast.
              </motion.p>
            </div>

            <motion.div className="flex items-center gap-4 flex-col sm:flex-row w-full sm:w-auto" variants={fadeUp}>
              <motion.a
                className="w-full sm:w-[200px] h-12 bg-[linear-gradient(0deg,_#4F46E5,_#4F46E5),linear-gradient(180deg,_rgba(255,_255,_255,_0.16)_0%,_rgba(255,_255,_255,_0)_100%)] border border-white/12 shadow-[0px_0px_0px_1px_#4F46E5,0px_1px_2px_0px_#0E121B3D] rounded-xl hover:scale-101 font-figtree text-sm text-white font-medium flex items-center justify-center transition-transform"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                href="#"
              >
                Start Free
              </motion.a>

              <motion.a
                className="w-full sm:w-[200px] h-12 bg-white text-[#122368] border border-[#C0D5FF] rounded-xl font-figtree text-sm font-medium flex items-center justify-center shadow-sm hover:bg-[#F5F7FA] transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                href="#"
              >
                See How It Works
              </motion.a>
            </motion.div>
          </div>

          <div className="flex justify-center items-center relative z-20">
            <motion.div
              className="rounded-[32px] bg-[#F5F7FA] p-4"
              variants={fadeUp}
            >
              <Image
                src="/dashboard.png"
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
