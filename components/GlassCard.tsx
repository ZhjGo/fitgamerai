"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hoverScale?: boolean;
}

export default function GlassCard({
    children,
    className = "",
    hoverScale = true,
}: GlassCardProps) {
    return (
        <motion.div
            whileHover={hoverScale ? { scale: 1.02 } : {}}
            whileTap={hoverScale ? { scale: 0.98 } : {}}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className={`glass-effect rounded-[2rem] p-6 overflow-hidden relative group ${className}`}
        >
            {/* Subtle shine effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            {children}
        </motion.div>
    );
}
