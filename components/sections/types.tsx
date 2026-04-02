"use client";
import React from 'react';
import { motion, type Variants } from 'framer-motion';

const teams = [
    { name: "Product Teams", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /> },
    { name: "Engineering Teams", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /> },
    { name: "Agency Teams", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /> },
    { name: "Remote Teams", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> },
    { name: "Cross-Functional", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /> }
];

export default function TypesSection() {
    const container: Variants = {
        hidden: {},
        show: {
            transition: { staggerChildren: 0.1, delayChildren: 0.1 },
        },
    };

    const rowVariant: Variants = {
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
    };

    return (
        <section className="py-16 lg:py-24 px-4 sm:px-6 relative z-10">
            <div className="max-w-[1000px] mx-auto">
                <div className="text-center space-y-4 mb-16">
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#C0D5FF] bg-white text-[#335CFF] text-sm font-medium font-figtree shadow-sm">
                        Best fit
                    </div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold font-cal-sans text-[#122368] leading-[1.1] max-w-3xl mx-auto"
                    >
                        Made for teams that move fast and hate wasted meetings.
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="text-[#525866] font-normal font-figtree text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        Meeting Killer works especially well for teams that need high daily visibility, but can't afford constant interruptions.
                    </motion.p>
                </div>

                <motion.div 
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="bg-white border border-[#E2E8F0] shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[32px] p-6 lg:p-10"
                >
                    <div className="flex flex-col gap-4">
                        {teams.map((team, idx) => (
                            <motion.div
                                key={team.name}
                                variants={rowVariant}
                                whileHover={{ 
                                    scale: 1.01, 
                                    boxShadow: "0 10px 40px -10px rgba(51,92,255,0.15)",
                                    borderColor: "#C0D5FF",
                                    backgroundColor: "#FAFCFF"
                                }}
                                className="group flex items-center justify-between p-6 rounded-2xl border border-[#F2F4F7] bg-white transition-all duration-300 cursor-default"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-full bg-[#F5F7FA] text-[#C0D5FF] group-hover:bg-[#335CFF] group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-sm border border-[#E2E8F0] group-hover:border-[#335CFF]">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            {team.icon}
                                        </svg>
                                    </div>
                                    <span className="text-[#122368] font-semibold font-cal-sans text-xl lg:text-2xl">
                                        {team.name}
                                    </span>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-[#F5F7FA] text-[#C0D5FF] group-hover:bg-[#E5EDFF] group-hover:text-[#335CFF] flex items-center justify-center transition-colors duration-300">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
