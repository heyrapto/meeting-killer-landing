"use client";
import React from 'react';
import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';

const teams = [
    {
        name: "Product Teams",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Engineering Teams",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Agency Teams",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Remote Teams",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Cross-Functional",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
    },
];

export default function TypesSection() {
    const container: Variants = {
        hidden: {},
        show: {
            transition: { staggerChildren: 0.1, delayChildren: 0.1 },
        },
    };

    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 80, damping: 18 },
        },
    };

    return (
        <section className="py-16 lg:py-24 px-4 sm:px-6 relative z-10">
            <div className="max-w-[1200px] mx-auto text-center space-y-16">

                {/* Header */}
                <div className="space-y-4">
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#C0D5FF] bg-white text-[#4F46E5] text-sm font-medium font-figtree shadow-sm">
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

                {/* Team Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {teams.map((team) => (
                        <motion.div
                            key={team.name}
                            variants={fadeUp}
                            className="relative h-[300px] sm:h-[400px] rounded-[40px] overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-500"
                        >
                            {/* Image with Grayscale Logic */}
                            <motion.div
                                className="absolute inset-0"
                                initial={{ filter: "grayscale(100%)", scale: 1 }}
                                whileHover={{ filter: "grayscale(0%)", scale: 1.05 }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <Image
                                    src={team.image}
                                    alt={team.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </motion.div>
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700" />

                            {/* Animated Text Container with Flexbox */}
                            <motion.div
                                layout
                                className="absolute inset-0 flex p-8 transition-all duration-500 ease-[0.22, 1, 0.36, 1] items-end justify-start"
                            >
                                <motion.span
                                    layout
                                    className="text-white font-semibold font-cal-sans text-2xl lg:text-3xl whitespace-nowrap drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] transition-all duration-500"
                                >
                                    {team.name}
                                </motion.span>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}