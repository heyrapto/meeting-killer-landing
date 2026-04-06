"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    id: "01",
    title: "Post your update",
    description:
      "Team members submit a quick daily update before the workspace deadline using text, image, audio, or video.",
    image: "/how-it-works/1.png",
  },
  {
    id: "02",
    title: "AI structures the signal",
    description:
      "Meeting Killer transcribes and organizes each update into a clean summary with clear blocker visibility.",
    image: "/how-it-works/2.png",
  },
  {
    id: "03",
    title: "Everyone stays aligned",
    description:
      "Updates appear in the team feed and can be pushed to Slack, so progress stays visible without another meeting.",
    image: "/how-it-works/3.png",
  },
];

const LayeredCard = ({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) => (
  <motion.div
    className="group relative w-full lg:w-[500px] h-fit shrink-0"
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{
      once: true,
      margin: "-40% 0px -40% 0px", // 👈 better trigger timing
    }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
  >
    {/* Back Layer */}
    <div className="absolute inset-0 bg-[#dfdef5] rounded-[40px] translate-x-4 translate-y-4 transition-transform duration-700 ease-out" />

    {/* Front Layer */}
    <div className="relative h-full bg-white border border-gray-200 rounded-[40px] p-10 lg:p-14 flex flex-col justify-between shadow-soft-lg transition-colors duration-500 overflow-hidden">
      <div className="flex flex-col gap-12 h-full relative z-10">
        <span className="bg-[#4F46E5] text-white w-14 h-14 inline-flex items-center justify-center rounded-full font-bold text-lg shadow-md">
          {index + 1}/{steps.length}
        </span>

        {children}
      </div>

      {/* Glow */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-5 rounded-full blur-3xl opacity-50 transition-colors duration-700" />
    </div>
  </motion.div>
);

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="max-w-[1440px] mx-auto px-6 lg:px-20 py-24 lg:py-40"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 relative">

        {/* LEFT (Sticky) */}
        <div className="flex flex-col">
          <div className="sticky top-32 space-y-10">
            <div className="space-y-6 max-w-md">

              {/* FIXED TITLE */}
              <h2 className="text-5xl lg:text-[80px] font-semibold text-gray-800 tracking-tight leading-[0.95] --font-rubik">
                How it
                <span className="text-[#4F46E5] italic">{" "}works</span>
              </h2>

              <p className="text-gray-500 text-xl leading-relaxed">
                Three simple steps: submit, structure, stay aligned.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT (Cards) */}
        <div className="flex flex-col gap-20 lg:gap-32 lg:pt-0">
          {steps.map((step, i) => (
            <LayeredCard key={i} index={i}>
              <div className="flex flex-col gap-10 h-full justify-center">
                {/* IMAGE */}
                <div className="relative w-full aspect-video">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* TEXT */}
                <div className="space-y-6">
                  <h3 className="text-3xl lg:text-4xl font-light text-gray-800 leading-tight">
                    {step.title}
                  </h3>

                  <p className="text-gray-500 text-lg lg:text-xl leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </LayeredCard>
          ))}
        </div>
      </div>
    </section>
  );
}