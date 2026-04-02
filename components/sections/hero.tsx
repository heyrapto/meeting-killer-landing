"use client";

import { motion, type Variants } from "framer-motion";
import Nav from "../layout/navbar";

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
          {/* subtle abstract background pattern instead of an image for a cleaner futuristic feel */}
          <motion.div
            className="max-h-[1106px] h-full w-full absolute top-0 left-0 right-0 opacity-[0.03] pointer-events-none"
            variants={fadeIn}
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, #000 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}
          />

          <div className="flex items-center flex-col gap-10 text-center relative z-10 pt-10">
            <div className="max-w-[800px] mx-auto space-y-6">
              <motion.div variants={fadeUp} className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#C0D5FF] bg-[#F5F7FA] text-[#4F46E5] text-sm font-medium font-figtree shadow-sm">
                Async standups for modern teams
              </motion.div>

              <motion.h1
                className="text-[#122368] text-4xl sm:text-5xl lg:text-[72px]/[1.1] font-cal-sans tracking-[-2%] font-semibold"
                variants={fadeUp}
              >
                Kill the daily standup. <br className="hidden sm:block" /> Keep the daily clarity.
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

            <motion.p className="text-sm font-figtree text-[#99A0AE] max-w-[400px] text-center" variants={fadeUp}>
              Built for teams that want fewer meetings, clearer updates, and faster blocker visibility.
            </motion.p>
          </div>

          <div className="flex justify-center items-center relative z-20 mt-10">
            <motion.div
              className="rounded-[32px] bg-[#F5F7FA] border border-[#E2E8F0] p-3 sm:p-5 mx-4 max-w-[1100px] w-full"
              variants={fadeUp}
            >
              {/* Placeholder for dashboard mockup */}
              <div className="w-full aspect-[16/9] bg-white rounded-2xl border border-[#F2F4F7] overflow-hidden flex flex-col">
                <div className="h-12 border-b border-[#F2F4F7] bg-gray-50 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#f87171]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#fbbf24]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#34d399]"></div>
                </div>
                <div className="flex-1 p-8 flex flex-col gap-6 items-center justify-center bg-white/50 backdrop-blur-sm relative overflow-hidden">
                  {/* Decorative abstract elements inside the dashboard UI */}
                  <div className="w-64 h-64 bg-[#4F46E5]/5 rounded-full absolute -top-10 -right-10 blur-3xl"></div>
                  <div className="w-64 h-64 bg-[#4F46E5]/5 rounded-full absolute -bottom-10 -left-10 blur-3xl"></div>

                  <div className="w-full max-w-2xl bg-white border border-[#F2F4F7] rounded-xl p-6 relative z-10 flex flex-col gap-4">
                    <div className="flex items-center justify-between border-b border-[#F2F4F7] pb-4">
                      <div className="font-cal-sans text-[#122368] text-xl">Daily Summary</div>
                      <div className="text-sm text-[#99A0AE] font-figtree">Generated by AI</div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 w-3/4 bg-[#F5F7FA] rounded"></div>
                      <div className="h-4 w-5/6 bg-[#F5F7FA] rounded"></div>
                      <div className="h-4 w-2/3 bg-[#F5F7FA] rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Social Proof Strip */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 pt-12 border-t border-[#F2F4F7]"
          >
            {["Less meeting time.", "Better updates.", "Clearer team visibility."].map((text, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4F46E5]"></div>
                <span className="text-[#525866] font-medium font-figtree text-sm sm:text-base tracking-tight">
                  {text}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
