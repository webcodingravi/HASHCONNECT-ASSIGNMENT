import React from 'react'

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const footerLinks=[
    ["Home", "#"],
    ["Work", "#work"],
    ["About", "#"],
    ["Contact", "#contact"],
    ["Privacy Policy", "#"],
];

const socialLinks=[
    ["LinkedIn", "https://linkedin.com"],
    ["Instagram", "https://instagram.com"],
];

const FooterSection=() => {
    return (
        <>
            <footer className="bg-[#1b1c1f] text-white overflow-hidden">
                <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-24 pb-10">

                    {/* TOP CTA */}
                    <div className="border-b border-white/10 pb-16">
                        <motion.a
                            href="#contact"
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="group inline-flex items-start gap-6"
                        >
                            <div>
                                <h2 className="text-[52px] md:text-[90px] leading-[0.95] tracking-[-4px] font-light text-[#d1d1d1]">
                                    Let’s work
                                </h2>

                                <h2 className="text-[52px] md:text-[90px] leading-[0.95] tracking-[-4px] font-light text-[#d1d1d1]">
                                    together
                                </h2>
                            </div>

                            <div className="mt-3 overflow-hidden">
                                <motion.div
                                    whileHover={{ x: 6, y: -6 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <ArrowUpRight
                                        size={60}
                                        strokeWidth={1.5}
                                        className="text-[#d1d1d1]"
                                    />
                                </motion.div>
                            </div>
                        </motion.a>
                    </div>

                    {/* FOOTER LINKS */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-16">

                        {/* MENU */}
                        <div className="space-y-5">
                            {footerLinks.map(([title, link], index) => (
                                <motion.a
                                    key={index}
                                    href={link}
                                    whileHover={{ x: 10 }}
                                    className="block text-[20px] text-[#f2f2f2] font-extralight transition-all duration-300"
                                >
                                    {title}
                                </motion.a>
                            ))}
                        </div>

                        {/* SOCIAL */}
                        <div className="space-y-5">
                            {socialLinks.map(([title, link], index) => (
                                <motion.a
                                    key={index}
                                    href={link}
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ x: 10 }}
                                    className="block text-[20px] text-[#f2f2f2] font-extralight transition-all duration-300"
                                >
                                    {title}
                                </motion.a>
                            ))}
                        </div>

                        {/* CONTACT */}
                        <div className="space-y-3">
                            <p className="text-sm uppercase tracking-[3px] text-white/40">
                                Contact
                            </p>

                            <p className="text-[20px] font-light text-white/90">
                                hello@yourbrand.com
                            </p>

                            <p className="text-[20px] font-light text-white/90">
                                Gurgaon, India
                            </p>
                        </div>

                        {/* ABOUT */}
                        <div>
                            <p className="text-sm uppercase tracking-[3px] text-white/40 mb-4">
                                About
                            </p>

                            <p className="text-white/60 leading-8 text-lg font-light">
                                We craft immersive digital experiences blending strategy,
                                creativity, and technology.
                            </p>
                        </div>
                    </div>

                    {/* HUGE BRAND TEXT */}
                    <div className="relative pt-10">
                        <motion.h1
                            initial={{ opacity: 0, y: 120 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2 }}
                            viewport={{ once: true }}
                            className="
              text-[70px]
              md:text-[180px]
              lg:text-[260px]
              font-medium
              tracking-[-10px]
              leading-none
              text-[#595959]
              lowercase
              whitespace-nowrap
            "
                        >
                            hashconnect
                        </motion.h1>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default FooterSection