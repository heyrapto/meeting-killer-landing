"use client";
import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Blocks, Code2, Users, Globe, Shuffle } from 'lucide-react';

const teams = [
    { name: "Product Teams", icon: Blocks },
    { name: "Engineering Teams", icon: Code2 },
    { name: "Agency Teams", icon: Users },
    { name: "Remote Teams", icon: Globe },
    { name: "Cross-Functional", icon: Shuffle },
];

export default function TypesSection() {
    const container: Variants = {
        hidden: {},
        show: {
            transition: { staggerChildren: 0.08, delayChildren: 0.1 },
        },
    };

    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 16 },
        show: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 80, damping: 18 },
        },
    };

    return (
        <section className="py-16 lg:py-24 px-4 sm:px-6">
            <div className="max-w-[860px] mx-auto text-center space-y-12">

                {/* Header */}
                <div className="space-y-4">
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
                        className="text-[#525866] font-figtree text-lg max-w-xl mx-auto leading-relaxed"
                    >
                        Works especially well for teams that need high daily visibility without constant interruptions.
                    </motion.p>
                </div>

                {/* Pills */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-wrap justify-center gap-3"
                >
                    {teams.map((team) => {
                        const Icon = team.icon;
                        return (
                            <motion.div
                                key={team.name}
                                variants={fadeUp}
                                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-white border border-[#E2E8F0] shadow-sm text-[#122368] font-figtree font-medium text-[15px]"
                            >
                                <Icon size={17} className="text-[#335CFF]" strokeWidth={1.75} />
                                {team.name}
                            </motion.div>
                        );
                    })}
                </motion.div>

            </div>
        </section>
    );
}