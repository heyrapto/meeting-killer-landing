import React from "react";
import Hero from "@/components/sections/hero";
import ProblemSection from "@/components/sections/problem";
import FeaturesSection from "@/components/sections/feature";
import BenefitSection from "@/components/sections/benefit";
import TypesSection from "@/components/sections/types";
import HowItWorks from "@/components/sections/how-it-works";
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
      <main className="bg-[#f4f4f8] space-y-4 sm:space-y-6 min-h-screen pt-4 sm:pt-6">
        <Hero />

        <FeaturesSection />
        <HowItWorks />
        <BenefitSection />
        <TypesSection />
        <ProblemSection />
        <FAQsSection />
        <CTA />
        <Footer />
      </main>
    </React.Fragment>
  );
}
