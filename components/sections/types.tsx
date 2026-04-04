"use client";
import React from "react";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";

const teams = [
    {
        name: "Product Teams",
        image:
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
        className: "lg:col-span-2 lg:row-span-2", // 👈 BIG
    },
    {
        name: "Engineering Teams",
        image:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
        className: "lg:col-span-1 lg:row-span-1",
    },
    {
        name: "Agency Teams",
        image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
        className: "lg:col-span-1 lg:row-span-1",
    },
    {
        name: "Remote Teams",
        image:
            "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80",
        className: "lg:col-span-1 lg:row-span-1",
    },
    {
        name: "Cross-Functional",
        image:
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
        className: "lg:col-span-2 lg:row-span-1", // 👈 WIDE
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
                    {/* <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#C0D5FF] bg-white text-[#4F46E5] text-sm font-medium shadow-sm">
                        Best fit
                    </div> */}

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold text-[#122368] leading-[1.1] max-w-3xl mx-auto font-cal-sans"
                    >
                        Made for teams that move fast and hate wasted meetings.
                    </motion.h2>

                    {/* <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="text-[#525866] text-lg max-w-xl mx-auto leading-relaxed"
                    >
                        Works especially well for teams that need high daily visibility
                        without constant interruptions.
                    </motion.p> */}
                </div>

                {/* BENTO GRID */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            auto-rows-[250px] 
            gap-6
          "
                >
                    {teams.map((team) => (
                        <motion.div
                            key={team.name}
                            variants={fadeUp}
                            className={`
                relative 
                ${team.className}
              `}
                        >
                            <motion.div
                                className="relative h-full rounded-[33px] bg-[#dfdef5] p-3 sm:p-4 group cursor-pointer overflow-hidden"
                                whileHover={{ scale: 1.005 }}
                            >
                                <div className="relative h-full w-full rounded-2xl overflow-hidden">
                                    {/* Image */}
                                    <motion.div
                                        className="absolute inset-0"
                                        initial={{ scale: 1 }}
                                        whileHover={{ scale: 1.06 }}
                                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <Image
                                            src={team.image}
                                            alt={team.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </motion.div>

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-all duration-700" />

                                    {/* Text */}
                                    <div className="absolute inset-0 flex items-end p-6">
                                        <span className="text-white font-semibold text-xl lg:text-2xl drop-shadow-lg">
                                            {team.name}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}