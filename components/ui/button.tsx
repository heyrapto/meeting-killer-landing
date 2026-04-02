"use client";
import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  text?: string;
  variant?: "primary" | "secondary";
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function Button({
  text,
  variant = "primary",
  className = "",
  style,
  onClick,
  children,
}: ButtonProps) {
  return (
    <motion.button
      initial={{ scale: 1 }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      whileTap={{
        scale: 0.98,
        transition: { duration: 0.1, ease: "easeIn" },
      }}
      onClick={onClick}
      className={`relative overflow-hidden rounded-[8px] px-5 py-2.5 font-medium transition-all duration-300 ease-out ${className} ${variant === "primary"
          ? "bg-[linear-gradient(0deg,_#4F46E5,_#4F46E5),linear-gradient(180deg,_rgba(255,_255,_255,_0.16)_0%,_rgba(255,_255,_255,_0)_100%)] border border-white/12 shadow-[0px_0px_0px_1px_#4F46E5,0px_1px_2px_0px_#0E121B3D] text-white"
          : "bg-white text-[#122368] hover:bg-gray-50 border border-[#C0D5FF] shadow-sm"
        }`}
      style={style}
    >
      {/* Shimmer Effect */}
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            repeat: Infinity,
            repeatDelay: 2,
            duration: 1.5,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Button Content */}
      <span className="relative z-10 tracking-wide font-medium block">
        {children || text}
      </span>
    </motion.button>
  );
}
