"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const faqsData = [
    {
        id: 1,
        question: "Do we need to join a call?",
        answer: "No. Team members submit async updates inside Meeting Killer instead of joining a live daily standup.",
    },
    {
        id: 2,
        question: "What kind of updates can people send?",
        answer: "Teams can submit updates in text, image, audio, or video, depending on workspace settings.",
    },
    {
        id: 3,
        question: "What does the AI do?",
        answer: "Meeting Killer turns raw updates into structured summaries with completed work, ongoing work, and blockers.",
    },
    {
        id: 4,
        question: "Can managers review everything in one place?",
        answer: "Yes. Managers and admins can review team updates, track participation, and monitor blockers from the workspace feed.",
    },
];

interface FAQItemProps {
    faq: (typeof faqsData)[0];
    isOpen: boolean;
    onToggle: () => void;
}

function FAQItem({ faq, isOpen, onToggle }: FAQItemProps) {
    return (
        <div className="border border-[#E2E8F0] rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] overflow-hidden bg-white shadow-sm">
            <button
                onClick={onToggle}
                className="w-full px-6 sm:px-8 lg:px-[32px] py-6 sm:py-7 lg:py-[32px] flex items-center justify-between text-left cursor-pointer"
            >
                <h3 className="text-[#122368] font-cal-sans text-[16px] sm:text-[18px] lg:text-[20px] font-semibold leading-[130%] sm:leading-[125%] lg:leading-[120%] tracking-[-0.4px] pr-4">
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
                            stroke="#4F46E5"
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

export default function FAQsSection() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const toggleFAQ = (id: number) => {
        setOpenFAQ(openFAQ === id ? null : id);
    };

    return (
        <section
            id="faqs"
            className="py-16 sm:py-20 lg:py-[92px] px-4 sm:px-6 lg:px-[80px] relative w-full max-w-[1440px] mx-auto overflow-hidden rounded-[40px] mb-6"
        >
            <div className="relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16 lg:mb-[64px]">
                    <h2 className="font-cal-sans text-[#122368] text-[32px] sm:text-[40px] lg:text-[56px] font-semibold leading-[110%] sm:leading-[105%] lg:leading-[64px] mb-4 sm:mb-6 lg:mb-[24px] tracking-[-1.44px] max-w-[800px] mx-auto">
                        Frequently Asked Questions
                    </h2>
                    {/* <p className="text-[#525866] font-figtree text-[14px] sm:text-[15px] lg:text-[16px] leading-[150%] tracking-[-0.32px] max-w-[600px] mx-auto">
                        Everything you need to know about replacing your daily meetings with async updates using Meeting Killer.
                    </p> */}
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
