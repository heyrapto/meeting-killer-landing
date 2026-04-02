"use client";
import React from 'react';
import { motion } from 'framer-motion';

const comparisonFeatures = [
    {
        feature: "Standup Format",
        mk: "Async updates on your schedule",
        live: "Recurring calls that interrupt work"
    },
    {
        feature: "Update Media",
        mk: "Text, audio, video, or image",
        live: "Verbal only, relying on memory"
    },
    {
        feature: "Blocker Visibility",
        mk: "Easy to spot instantly in the feed",
        live: "Lost in chatter, delayed to next day"
    },
    {
        feature: "Progress Tracking",
        mk: "Clear, searchable record of progress",
        live: "No written record, easily forgotten"
    }
];

export default function ProblemSection() {
    return (
        <section className="relative py-16 lg:py-24 overflow-hidden z-10 px-4 sm:px-6">
            <div className="relative mx-auto max-w-[1200px]">
                {/* Section Title */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center space-y-4 mb-16"
                >
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-red-100 bg-red-50 text-red-600 text-sm font-medium font-figtree shadow-sm">
                        Why teams switch
                    </div>
                    <h2 className="text-[32px] sm:text-[40px] lg:text-[56px] font-normal font-cal-sans text-[#122368] leading-[1.1] max-w-4xl mx-auto">
                        Daily standups are expensive <br className="hidden md:block" />when they happen live.
                    </h2>
                    <p className="text-[#525866] font-normal font-figtree text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        The problem is not status updates. The problem is pulling everyone into the same room at the same time, every single day. Meeting Killer gives teams the same daily rhythm without the interruption, context switching, and repeated status talk.
                    </p>
                </motion.div>

                {/* Table Container */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="overflow-x-auto lg:overflow-visible custom-scrollbar pb-4"
                >
                    <div className="bg-white rounded-3xl shadow-sm border border-[#E2E8F0] overflow-hidden min-w-[700px] lg:min-w-0">
                        {/* Table Header */}
                        <div className="grid grid-cols-[3fr_4fr_4fr] gap-4 lg:gap-6 p-6 lg:p-8 border-b border-[#E2E8F0] bg-[#F5F7FA]">
                            <div className="text-[#525866] font-medium text-sm lg:text-base font-figtree uppercase tracking-wider">
                                Capability
                            </div>
                            <div className="text-[#335CFF] font-semibold text-sm lg:text-lg font-cal-sans text-center flex items-center justify-center gap-2">
                                Meeting Killer
                            </div>
                            <div className="text-[#525866] font-medium text-sm lg:text-lg font-cal-sans text-center flex items-center justify-center gap-2 opacity-60">
                                Live Standup
                            </div>
                        </div>

                        {/* Table Rows */}
                        {comparisonFeatures.map((item, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={index}
                                    whileHover={{ backgroundColor: "rgba(245, 247, 250, 0.5)" }}
                                    className={`grid grid-cols-[3fr_4fr_4fr] gap-4 lg:gap-6 p-6 lg:p-8 ${isEven ? 'bg-white' : 'bg-[#FAFCFF]'} border-b border-[#F2F4F7] last:border-0 transition-colors duration-200`}
                                >
                                    {/* Feature Name */}
                                    <div className="text-[#122368] font-medium text-base lg:text-lg flex items-center font-cal-sans">
                                        {item.feature}
                                    </div>

                                    {/* Meeting Killer */}
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-[#E5EDFF] text-[#335CFF] flex items-center justify-center shrink-0">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <span className="text-[#122368] font-medium text-sm lg:text-base font-figtree">{item.mk}</span>
                                    </div>

                                    {/* Live Standup */}
                                    <div className="flex items-center gap-3 opacity-60">
                                        <div className="w-8 h-8 rounded-full bg-red-50 text-red-400 flex items-center justify-center shrink-0">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <span className="text-[#525866] text-sm lg:text-base font-figtree">{item.live}</span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
