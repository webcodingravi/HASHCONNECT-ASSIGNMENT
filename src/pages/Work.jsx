import React from "react";
import { motion } from "framer-motion";

const workItems=[
    {
        id: 1,
        title: "Britannia Marie Gold HerSpark",
        category: "Brand Campaign",
        subtitle: "Campaign Landing Page",
        image:
            "https://framerusercontent.com/images/EGHhb9N4decwR73FsKpDHcC9q4Y.jpg",
    },
    {
        id: 2,
        title: "Britannia Milk Bikis Smart Moves",
        category: "Digital Platform",
        subtitle: "Gaming Microsite & AI",
        image:
            "https://framerusercontent.com/images/k8QHaKXgDp8dGiDMH73NFBIU4.jpg",
    },
    {
        id: 3,
        title: "Her Store Marketplace",
        category: "E-Commerce Platform",
        subtitle: "E-commerce & Community",
        image:
            "https://framerusercontent.com/images/RYeLmGHaqOE8u02TKU7JGMMeY14.webp",
    },
    {
        id: 4,
        title: "Store Discovery Enhancement",
        category: "UX/UI Design",
        subtitle: "Digital for Retail",
        image:
            "https://framerusercontent.com/images/3Ce1hv1w7IE2x8SA6T3kg8f2bY.jpg",
    },
    {
        id: 5,
        title: "Price Match Program",
        category: "Pricing Engine",
        subtitle: "Online Meets Offline",
        image:
            "https://framerusercontent.com/images/Yba5ijMwHrRVJIi5M7DENmB87h0.webp",
    },
    {
        id: 6,
        title: "Her Startup Contest",
        category: "Event Platform",
        subtitle: "Online Contest",
        image:
            "https://framerusercontent.com/images/GVQEn3TKPAdhWiDtclq1ZYnvM.webp",
    },
    {
        id: 7,
        title: "Purchase Incentive Management",
        category: "Analytics Dashboard",
        subtitle: "Redemption & Fulfillment",
        image:
            "https://framerusercontent.com/images/x03RX7MKlZweI0HLY0BbE45zw.webp",
    },
    {
        id: 8,
        title: "Upskilling Retailers",
        category: "Learning Platform",
        subtitle: "Digital Academy",
        image:
            "https://framerusercontent.com/images/PK27Fe7zjLgz4dTefgVTDUXlnBo.webp",
    },
    {
        id: 9,
        title: "Achivr Social Commerce",
        category: "Social Platform",
        subtitle: "Sports-Tech & Commerce",
        image:
            "https://framerusercontent.com/images/zGxQ5sGK0Heyoa4lEOh5EFZb70.webp",
    },
];

export default function Work() {
    return (
        <div className="min-h-screen bg-[#f2f2f2] px-6 py-20">
            <div className="max-w-7xl mx-auto">

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {workItems.map((item, index) => (
                        <motion.a
                            key={item.id}
                            href="#"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index*0.05 }}
                            className="group relative overflow-hidden rounded-md h-[420px] md:h-[520px] cursor-pointer"
                        >
                            {/* IMAGE */}
                            <motion.img
                                src={item.image}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-100 transition duration-700"
                            />

                            {/* DARK OVERLAY */}
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

                            {/* TEXT CONTENT */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                                <div>
                                    <p className="text-xs tracking-widest uppercase opacity-70">
                                        {item.category}
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
                                        {item.title}
                                    </h2>
                                    <p className="text-sm mt-2 opacity-80 uppercase">
                                        {item.subtitle}
                                    </p>
                                </div>
                            </div>

                            {/* HOVER CTA */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                                <p className="text-white font-medium tracking-wide">
                                    View Project
                                </p>
                            </div>

                        </motion.a>
                    ))}

                </div>
            </div>
        </div>
    );
}