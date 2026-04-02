import React from "react";
import Hero from "@/components/sections/hero";
import ProblemSection from "@/components/sections/problem";
import FeaturesSection from "@/components/sections/feature";
import BenefitSection from "@/components/sections/benefit";
import TypesSection from "@/components/sections/types";
import FAQsSection from "@/components/sections/faq";
import CTA from "@/components/sections/cta";
import { Footer } from "@/components/layout/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meeting Killer",
  description: "Async standups for modern teams",
};

export default function Home() {
  return (
    <React.Fragment>
      <main className="bg-[#F5F7FA] space-y-4 sm:space-y-6 overflow-hidden min-h-screen pt-4 sm:pt-6">
        <Hero />
        <ProblemSection />
        <FeaturesSection />
        <BenefitSection />
        <TypesSection />
        <FAQsSection />
        <CTA />
        <Footer />
      </main>
    </React.Fragment>
  );
}
