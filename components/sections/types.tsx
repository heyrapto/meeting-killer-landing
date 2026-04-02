"use client";
import React from 'react';
import { motion } from 'framer-motion';

const teams = [
    "Product Teams",
    "Engineering Teams",
    "Agency Teams",
    "Remote Teams",
    "Cross-Functional Teams"
];

export default function TypesSection() {
    return (
        <section className="py-16 lg:py-24 px-4 sm:px-6 relative z-10">
            <div className="max-w-[1200px] mx-auto">
                <div className="bg-[#122368] rounded-[40px] overflow-hidden p-8 sm:p-12 lg:p-20 relative">
                    {/* Background abstract overlay */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#335CFF]/30 to-transparent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
                        <div className="space-y-6 flex-1 text-center lg:text-left">
                            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white/90 text-sm font-medium font-figtree shadow-sm">
                                Best fit
                            </div>
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl sm:text-4xl lg:text-[48px] font-normal font-cal-sans text-white leading-[1.1]"
                            >
                                Made for teams that move fast and hate wasted meetings.
                            </motion.h2>
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-white/70 font-normal font-figtree text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed"
                            >
                                Meeting Killer works especially well for product teams, engineering teams, agency teams, remote teams, and cross-functional teams that need daily visibility without daily calls.
                            </motion.p>
                        </div>
                        
                        <div className="flex-1 w-full relative">
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                {teams.map((team, idx) => (
                                    <motion.div
                                        key={team}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 * idx, type: "spring", stiffness: 200 }}
                                        className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 rounded-2xl flex items-center gap-3 text-white font-cal-sans text-xl shadow-lg hover:bg-white/20 transition-colors"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-[#335CFF]"></div>
                                        {team}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
