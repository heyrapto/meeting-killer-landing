"use client";
import { motion, type Variants } from "framer-motion";
import React from "react";
import Image from "next/image";

export function AboutSection() {
  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
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
      id="about"
      className="px-4 sm:px-6"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="bg-[#C0D5FF] rounded-[40px] space-y-16 py-10 md:py-24 max-sm:px-2">
        <motion.div
          className="max-w-[670px] w-full mx-auto h-[64vw] max-h-[725px] rounded-[40px] relative overflow-hidden"
          variants={fadeIn}
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 250, damping: 24 }}
        >
          <Image
            src={"/about.gif"}
            alt=""
            fill
            sizes="(max-width: 670px) 100vw, 670px"
            className="object-cover"
            priority
          />
        </motion.div>

        <div className="space-y-5 max-w-[671px] mx-auto text-center">
          <motion.h2
            className="font-normal font-cal-sans text-[#122368] text-[32px] sm:text-[40px] lg:text-[56px]/[64px] text-center"
            variants={fadeUp}
          >
            Build Powerful AI Models Without The Complexity
          </motion.h2>
          <motion.p
            className="text-[#182F8B] font-normal font-figtree text-base -tracking-[2%]"
            variants={fadeUp}
          >
            Train models using your own dataset with ease, no gatekeepers, no
            coding required, just a simple and intuitive process that lets you
            bring your AI ideas to life in minutes.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}

"use client";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Action() {
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
      className="px-6"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="bg-white rounded-[40px] overflow-hidden lg:h-[695px] relative">
        <motion.div
          className="max-h-[1106px] h-full w-full absolute top-0 left-0 right-0"
          variants={fadeIn}
        >
          <Image
            src="/hero-bg.webp"
            alt="Hero Image"
            fill
            className="object-cover object-bottom"
            priority
          />
        </motion.div>

        <div className="relative max-w-[740px] mx-auto space-y-10 text-center py-28 sm:py-40 md:py-[216px] px-5">
          <div className="space-y-4">
            <motion.h5
              className="font-normal font-cal-sans text-[#122368] text-4xl sm:text-5xl md:text-[72px]/[100%] -tracking-[2%]"
              variants={fadeUp}
            >
              Join the AI Web3 Movement
            </motion.h5>
            <motion.p
              className="font-normal font-figtree text-base/[24px] -tracking-[2%] text-[#525866]"
              variants={fadeUp}
            >
              Explore with us. The future of AI is open.
            </motion.p>
          </div>
          <Link href={"https://brainloom.vercel.app/"} target="_blank">
            <motion.button
              className="w-full max-w-[300px] h-10 bg-[linear-gradient(0deg,_#4F46E5,_#4F46E5),linear-gradient(180deg,_rgba(255,_255,_255,_0.16)_0%,_rgba(255,_255,_255,_0)_100%)] border border-white/12 shadow-[0px_0px_0px_1px_#4F46E5,0px_1px_2px_0px_#0E121B3D] rounded-[10px] hover:scale-101 font-figtree text-sm text-white font-medium"
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              Get started
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

"use client";
import { motion, type Variants } from "framer-motion";
import React from "react";
import Image from "next/image";

export function DashboardSection() {
  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.08 },
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
      className="py-24 px-6"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="space-y-16 max-w-[1291px] mx-auto">
        <motion.h4
          className="font-normal font-cal-sans text-[#122368] text-[32px] sm:text-[40px] lg:text-[56px]/[64px] text-center"
          variants={fadeUp}
        >
          Your Dashboard
        </motion.h4>

        <div className="flex gap-6 max-lg:flex-col">
          <motion.div
            className="  relative rounded-[33px] bg-[#C0D5FF] p-3 sm:p-5"
            variants={fadeIn}
            whileHover={{ scale: 1.005 }}
          >
            <Image
              src={"/dashboard.svg"}
              alt=""
              width={1247}
              height={735}
              className=" rounded-2xl overflow-hidden"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

"use client";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import React from "react";

export function FeaturesSection() {
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
      className="py-10 md:py-24 px-4 sm:px-6"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="space-y-16 max-w-[1312px] mx-auto">
        <motion.h3
          className="font-normal font-cal-sans text-[#122368] text-[32px] sm:text-[40px] lg:text-[56px]/[64px] text-center"
          variants={fadeUp}
        >
          Key Features
        </motion.h3>

        <div className="flex flex-col gap-6">
          <div className="flex gap-6 max-md:flex-col">
            <motion.div
              className="w-full lg:max-w-[700px] bg-[#D5E2FF] rounded-3xl flex flex-col justify-between gap-10 p-5 sm:p-10 overflow-hidden"
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
                  src={"/features/discover.webp"}
                  alt="Discover & Use"
                  fill
                />
              </motion.div>
              <div className="space-y-4">
                <header className="font-normal font-cal-sans text-2xl md:text-5xl/[56px] text-[#122368] -tracking-[1%]">
                  Discover & Use
                </header>
                <p className="text-[#525866] font-light font-figtree text-base md:text-[26px]/[138%] -tracking-[2%] opacity-70">
                  Explore models made by the community. <br /> Use them
                  instantly directly in your browser.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="w-full lg:max-w-[588px] bg-[#D5E2FF] rounded-3xl flex flex-col justify-between gap-10 p-5 sm:p-10 overflow-hidden"
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
                  src={"/features/marketplace.webp"}
                  alt="Discover & Use"
                  fill
                />
              </motion.div>
              <div className="space-y-4">
                <header className="font-normal font-cal-sans text-2xl md:text-5xl/[56px] text-[#122368] -tracking-[1%]">
                  Public AI Model Marketplace
                </header>
                <p className="text-[#525866] font-light font-figtree text-base md:text-[26px]/[138%] -tracking-[2%] opacity-70">
                  Discover and explore a growing library of community-built AI
                  models ready to use, open to all.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="flex gap-6 max-md:flex-col">
            <motion.div
              className="w-full lg:max-w-[588px] bg-[#D5E2FF] rounded-3xl flex flex-col justify-between gap-10 p-5 sm:p-10 overflow-hidden"
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
                  src={"/features/decentralized.webp"}
                  alt="Decentralized & transparent"
                  fill
                />
              </motion.div>
              <div className="space-y-4">
                <header className="font-normal font-cal-sans text-2xl md:text-5xl/[56px] text-[#122368] -tracking-[1%]">
                  x402-Powered Payments
                </header>
                <p className="text-[#525866] font-light font-figtree text-base md:text-[26px]/[138%] -tracking-[2%] opacity-70">
                  Enable instant, programmable transfers across AI agents, apps,
                  and users with built-in privacy and global interoperability.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="w-full lg:max-w-[700px] bg-[#D5E2FF] rounded-3xl flex flex-col justify-between gap-10 p-5 sm:p-10 overflow-hidden"
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
                  src={"/features/chart.png"}
                  alt="Earn as You Build"
                  fill
                />
              </motion.div>
              <div className="space-y-4">
                <header className="font-normal font-cal-sans text-5xl/[56px] text-[#122368] -tracking-[1%]">
                  Earn As You Build
                </header>
                <p className="text-[#525866] font-light font-figtree text-base md:text-[26px]/[138%] -tracking-[2%] opacity-70">
                  Get rewarded when people use your model. <br /> Coming soon:
                  creator incentives.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
"use client";
import { motion, type Variants } from "framer-motion";
const reasons = [
  {
    id: 1,
    title: "No-Code AI Training",
    description:
      "Create and train powerful AI models with your own data no complex setup or code required.",
  },

  {
    id: 2,
    title: "Public Model Marketplace",
    description:
      "Share your AI models with the world. Discover and use models created by others.",
  },

  {
    id: 3,
    title: "Decentralized & Open",
    description:
      "No gatekeepers. Your models live on-chain, accessible to anyone, anywhere.",
  },
];

export function WhyChooseUs() {
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
      id="why-us"
      className="py-10 md:py-24 px-6"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="space-y-16 max-w-[1450px] mx-auto">
        <motion.h4
          className="font-normal font-cal-sans text-[#122368] text-[32px] sm:text-[40px] lg:text-[56px]/[64px] text-center"
          variants={fadeUp}
        >
          Why choose us
        </motion.h4>

        <div className="flex gap-6 max-md:flex-col md:px-5 overflow-x-scroll pb-2 hide-scrollbar">
          {reasons.map((reason) => (
            <motion.div
              key={reason.id}
              className="w-full md:w-[467px] h-[300px] md:h-[459px] shrink-0 bg-[#D5E2FF] rounded-[20px] flex flex-col justify-between p-7 pt-10"
              variants={fadeUp}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.995 }}
              transition={{ type: "spring", stiffness: 250, damping: 22 }}
            >
              <motion.div
                className="size-14 sm:size-20 rounded-full border border-white/30 bg-[#3559E9] inline-flex items-center justify-center"
                variants={popIn}
              >
                <span className="text-white font-normal font-cal-sans text-3xl sm:text-[40px]/[100%]">
                  {reason.id}
                </span>
              </motion.div>

              <div className="space-y-5">
                <header className="text-[#122368] font-normal font-cal-sans text-2xl sm:text-[32px]/[120%] -tracking-[2%]">
                  {reason.title}
                </header>
                <p className="opacity-70 text-[#525866] font-light font-figtree text-base sm:text-[26px]/[138%] -tracking-[2%]">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const faqsData = [
  {
    id: 1,
    question: "What is Brainloom and how does it work?",
    answer:
      "Brainloom is a decentralized platform that allows anyone to build, train, and deploy AI models using their own data. You can create AI models without coding, tokenize them on the blockchain, and earn crypto rewards when others use your models. Everything runs on-chain for transparency and decentralization.",
  },
  {
    id: 2,
    question: "Do I need coding experience to use Brainloom?",
    answer:
      "No coding experience required! Brainloom features a no-code interface that makes AI model creation accessible to everyone. Simply upload your data, configure your model settings through our intuitive interface, and let our platform handle the technical complexity.",
  },
  {
    id: 3,
    question: "How do I earn rewards with my AI models?",
    answer:
      "When you create and deploy an AI model on Brainloom, you become the owner of that model. Every time someone uses your model, you earn crypto rewards. The more useful and popular your model becomes, the more you earn. We're also building additional monetization tools for creators.",
  },
  {
    id: 4,
    question: "What types of data can I use to train models?",
    answer:
      "You can train models with various data types including text, images, structured data, and more. Our platform supports common formats like CSV, JSON, images (JPG, PNG), and text files. The key is having quality data that's relevant to the AI task you want to accomplish.",
  },
  {
    id: 5,
    question: "Is my data and model secure on the blockchain?",
    answer:
      "Yes, security and transparency are core to our blockchain approach. Your models and their usage are recorded on-chain, making everything verifiable and transparent. You maintain ownership rights to your models, and all transactions are cryptographically secured.",
  },
  {
    id: 6,
    question: "How do I get started with Brainloom?",
    answer:
      "Getting started is simple! Sign up for our platform, connect your crypto wallet, and you can begin creating your first AI model immediately. We provide tutorials and documentation to guide you through the process, from data preparation to model deployment.",
  },
];

interface FAQItemProps {
  faq: (typeof faqsData)[0];
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ faq, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border border-white/20 rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] overflow-hidden bg-white/60 backdrop-blur-sm shadow-sm">
      <button
        onClick={onToggle}
        className="w-full px-6 sm:px-8 lg:px-[32px] py-6 sm:py-7 lg:py-[32px] flex items-center justify-between text-left hover:bg-white/40 transition-all duration-300"
      >
        <h3 className="text-[#122368] font-cal-sans text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[130%] sm:leading-[125%] lg:leading-[120%] tracking-[-0.4px] pr-4">
          {faq.question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-shrink-0"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 sm:w-6 sm:h-6"
          >
            <path
              d="M19 9L12 16L5 9"
              stroke="#525866"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 sm:px-8 lg:px-[32px] pb-6 sm:pb-7 lg:pb-[32px]">
              <p className="text-[#525866] font-figtree text-[14px] sm:text-[15px] lg:text-[16px] leading-[150%] tracking-[-0.32px]">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQsSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section
      id="faqs"
      className="py-16 sm:py-20 lg:py-[92px] px-4 sm:px-6 lg:px-[80px] relative w-full max-w-[1440px] mx-auto overflow-hidden"
    >
      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-[64px]">
          <h2 className="font-cal-sans text-[#122368] text-[32px] sm:text-[40px] lg:text-[56px] font-medium leading-[110%] sm:leading-[105%] lg:leading-[64px] mb-4 sm:mb-6 lg:mb-[24px] tracking-[-1.44px] max-w-[800px] mx-auto">
            Frequently Asked Questions
          </h2>
          <p className="text-[#525866] font-figtree text-[14px] sm:text-[15px] lg:text-[16px] leading-[150%] tracking-[-0.32px] max-w-[600px] mx-auto">
            Everything you need to know about building, training, and earning
            with AI models on Brainloom.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 sm:space-y-6 lg:space-y-[24px] max-w-[900px] mx-auto">
          {faqsData.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openFAQ === faq.id}
              onToggle={() => toggleFAQ(faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from 'react';

const StruggleSection = () => {
    const [activeView, setActiveView] = useState('table');

    const struggles = [
        { issue: "Outdated & tedious payments", yes: 34, no: 48 },
        { issue: "Missing alpha in noisy groups?", yes: 60, no: 52 },
        { issue: "Limited account logins", yes: 46, no: 44 },
        { issue: "Buying tokens is tedious", yes: 41, no: 41 },
        { issue: "Too many irrelevant messages", yes: 35, no: 47 },
        { issue: "No seamless video calls", yes: 38, no: 36 },
        { issue: "Scammers everywhere", yes: 30, no: 25 },
        { issue: "All notifications treated the same", yes: 33, no: 26 },
        { issue: "Unsafe file sharing", yes: 32, no: 29 },
        { issue: "No reminders or scheduling", yes: 12, no: 28 }
    ];

    return (
        <section className="relative py-20 lg:py-[4vw] bg-[#e8f4f8] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/images/findings/bg.png"
                    alt=""
                    className="w-full h-full object-cover opacity-50"
                />
            </div>

            <div className="relative mx-auto lg:px-[10vw] px-4">
                {/* Title */}
                <h2 className="text-3xl lg:text-[3vw] font-medium text-center text-gray-900 mb-12 lg:mb-[3vw] lg:leading-[1.2] leading-tight font-fairplay-display">
                    Did you struggle with any of<br />
                    the following in the last 12 months?
                </h2>

                {/* Content Card */}
                <div className="bg-[#0f1941] rounded-3xl lg:rounded-[1.5vw] p-8 lg:p-[2.5vw] relative overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src="/images/promise/bg.png"
                            alt=""
                            className="w-full h-full object-cover z-0"
                        />
                    </div>
                    {/* Toggle Buttons */}
                    <div className="relative">
                        {/* <div className="flex justify-center mb-8">
                            <div className="bg-[#1a2847] rounded-full p-1 inline-flex">
                                <button
                                    onClick={() => setActiveView('chart')}
                                    className={`px-8 py-2 rounded-full transition-colors ${activeView === 'chart'
                                        ? 'bg-white text-gray-900'
                                        : 'bg-transparent text-gray-400 hover:text-white'
                                        }`}
                                >
                                    Chart
                                </button>
                                <button
                                    onClick={() => setActiveView('table')}
                                    className={`px-8 py-2 rounded-full transition-colors ${activeView === 'table'
                                        ? 'bg-white text-gray-900'
                                        : 'bg-transparent text-gray-400 hover:text-white'
                                        }`}
                                >
                                    Table
                                </button>
                            </div>
                        </div> */}

                        {/* Table View */}
                        {activeView === 'table' && (
                            <div className="bg-[#1a2847]/80 rounded-2xl overflow-hidden">
                                {/* Table Header */}
                                <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 lg:gap-[1vw] p-6 lg:p-[1.5vw] border-b border-[#2d3f5f] bg-white/10">
                                    <div></div>
                                    <div className="text-white font-semibold text-center lg:text-[1.1vw]">Yes</div>
                                    <div className="text-white font-semibold text-center lg:text-[1.1vw]">No</div>
                                </div>

                                {/* Table Rows */}
                                {struggles.map((item, index) => {
                                    const isEven = index % 2 === 0;
                                    return (
                                        <div
                                            key={index}
                                            className={`grid grid-cols-[2fr_1fr_1fr] gap-4 lg:gap-[1vw] p-6 lg:p-[1.5vw] ${isEven ? 'bg-transparent' : 'bg-white/10'} hover:bg-[#1a2847]/30 transition-colors`}
                                        >
                                            <div className="text-white text-sm lg:text-[1vw]">
                                                {item.issue}
                                            </div>
                                            <div className="text-white font-semibold text-center lg:text-[1vw]">
                                                {item.yes}%
                                            </div>
                                            <div className="text-white font-semibold text-center lg:text-[1vw]">
                                                {item.no}%
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {/* Chart View - Placeholder */}
                        {activeView === 'chart' && (
                            <div className="bg-[#1a2847]/80 rounded-2xl p-12 flex items-center justify-center min-h-[500px]">
                                <p className="text-gray-400 text-lg">Chart view would display visual data representation</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section >
    );
};

export default StruggleSection;

2: 
import Image from 'next/image';

const BuiltForSection = () => {
    const features = [
        {
            feature: "Scam Protection",
            blockgram: "AI spam detection + file scanner",
            telegram: "Scam bots, phishing links, no AI filters"
        },
        {
            feature: "Crypto Transactions",
            blockgram: "Username = wallet, in-chat transfers",
            telegram: "No native wallet, relies on risky bots"
        },
        {
            feature: "Notifications",
            blockgram: "Smart credit system, priority alerts",
            telegram: "All pings are equal, chaotic alerts"
        },
        {
            feature: "Identity Verification",
            blockgram: "Verified badges + impersonator check",
            telegram: "Easy impersonation of KOLs & devs"
        },
        {
            feature: "Group Management",
            blockgram: "Auto folders, whale groups, token badges",
            telegram: "Overloaded chats, manual sorting"
        },
        {
            feature: "Productivity Tools",
            blockgram: "Built-in reminders + \"Meet\" scheduling",
            telegram: "No reminders or scheduling"
        },
        {
            feature: "Calling",
            blockgram: "Video calls + calendar-style scheduling",
            telegram: "Basic, unreliable calls"
        },
        {
            feature: "Account Limits",
            blockgram: "Unlimited accounts, seamless switching",
            telegram: "Restricted multiple account handling"
        }
    ];

    return (
        <section className="relative bg-[#4F46E5] py-12 lg:py-[5vw] overflow-hidden">
            {/* Background Blend Image */}
            <div className="absolute inset-0">
                <img
                    src="/images/bg-blend.png"
                    alt=""
                    className="w-full h-full object-cover mix-blend-multiply"
                />
            </div>

            <div className="relative mx-auto lg:px-[10vw] px-4">
                {/* Section Title */}
                <h2 className="text-3xl lg:text-[3.5vw] font-medium text-center text-white mb-8 lg:mb-[3vw] font-fairplay-display pt-4 lg:pt-0">
                    Why Blockgram is Built for the Future?
                </h2>

                {/* Table Container - Scrollable on Mobile */}
                <div className="overflow-x-auto lg:overflow-visible">
                    <div className="bg-[#FFF]/5 backdrop-blur-sm rounded-3xl lg:rounded-[1.5vw] border border-[#FFF] overflow-hidden min-w-[800px] lg:min-w-0 lg:h-[50vw]">
                        {/* Table Header */}
                        <div className="grid grid-cols-[2fr_3fr_3fr] gap-4 lg:gap-[1vw] p-6 lg:p-[1.5vw] border-b border-[#FFFFFF05] bg-[#FFFFFF14] h-[82px] lg:h-[5vw]">
                            <div className="text-gray-300 font-semibold lg:text-[1.1vw] text-sm">
                                Feature / Need
                            </div>
                            <div className="text-white font-semibold lg:text-[1.1vw] text-sm text-center">
                                Blockgram
                            </div>
                            <div className="text-gray-300 font-semibold lg:text-[1.1vw] text-sm text-center">
                                Telegram
                            </div>
                        </div>

                        {/* Table Rows */}
                        {features.map((item, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <div
                                    key={index}
                                    className={`lg:h-[5.6vw] h-[60px] grid grid-cols-[2fr_3fr_3fr] gap-4 lg:gap-[1vw] lg:p-[1.5vw] p-3 ${isEven ? 'bg-[#FFFFFF05]' : 'bg-transparent'} hover:bg-[#FFFFFF08] transition-colors`}
                                >
                                    {/* Feature Name */}
                                    <div className="text-gray-200 font-medium lg:text-[1vw] text-sm flex items-center">
                                        {item.feature}
                                    </div>

                                    {/* Blockgram */}
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src="/icons/check.png"
                                            alt="Checkmark"
                                            width={24}
                                            height={24}
                                            className="shrink-0"
                                        />
                                        <span className="text-gray-300 lg:text-[1vw] text-sm">{item.blockgram}</span>
                                    </div>

                                    {/* Telegram */}
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src="/icons/x.png"
                                            alt="Close"
                                            width={24}
                                            height={24}
                                            className="shrink-0"
                                        />
                                        <span className="text-gray-400 lg:text-[1vw] text-sm">{item.telegram}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BuiltForSection;