import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const workItems=[
    {
        id: 1,
        title: "Britannia Marie Gold HerSpark",
        slug: "britannia-marie-gold-her-spark",
        category: "Brand Campaign",
        image:
            "https://framerusercontent.com/images/EGHhb9N4decwR73FsKpDHcC9q4Y.jpg",
    },
    {
        id: 2,
        title: "Britannia Milk Bikis Smart Moves",
        slug: "britannia-milk-bikis-smart-moves",
        category: "Digital Platform",
        image:
            "https://framerusercontent.com/images/k8QHaKXgDp8dGiDMH73NFBIU4.jpg",
    },
    {
        id: 3,
        title: "Her Store Marketplace",
        slug: "her-store-marketplace",
        category: "E-Commerce Platform",
        image:
            "https://framerusercontent.com/images/HkdjSA3orbIo3TIYZyeKgw8fw.webp",
    },
    {
        id: 4,
        title: "Store Discovery Enhancement",
        slug: "store-discovery-enhancement",
        category: "UX/UI Design",
        image:
            "https://framerusercontent.com/images/esXyAbVlgbSB7Ow18EgPpWp4OS4.webp",
    },
    {
        id: 5,
        title: "Upskilling Retailers",
        slug: "upskilling-retailers",
        category: "Learning Platform",
        image:
            "https://framerusercontent.com/images/PK27Fe7zjLgz4dTefgVTDUXlnBo.webp",
    },
    {
        id: 6,
        title: "Achivr Social Commerce",
        slug: "achivr-social-commerce",
        category: "Social Platform",
        image:
            "https://framerusercontent.com/images/zGxQ5sGK0Heyoa4lEOh5EFZb70.webp",
    },
];

const container={
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const item={
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
};

const Work=() => {
    return (
        <div className="bg-[#f2f2f2] min-h-screen px-6 py-24">
            {/* Heading */}
            <div className="max-w-7xl mx-auto mb-16">
                <h1 className="text-5xl md:text-6xl font-bold text-black">
                    Work
                </h1>
                <p className="text-gray-600 mt-4 max-w-xl">
                    Selected projects showcasing digital experiences.
                </p>
            </div>

            {/* Grid */}
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto"
            >
                {workItems.map((item) => (
                    <motion.div
                        key={item.id}
                        variants={item}
                        className="relative group overflow-hidden rounded-xl cursor-pointer"
                    >
                        {/* Image */}
                        <div className="h-[420px] w-full overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>

                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500" />

                        {/* Text */}
                        <div className="absolute bottom-0 p-6 text-white">
                            <p className="text-xs uppercase tracking-widest opacity-70">
                                {item.category}
                            </p>
                            <h2 className="text-xl md:text-2xl font-semibold mt-2 leading-snug">
                                {item.title}
                            </h2>
                        </div>

                        {/* Hover CTA */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">

                            <p >
                                <Link
                                    key={item.slug}
                                    to={`/work/${item.slug}`}
                                    className="text-white text-sm border border-white px-4 py-2 rounded-full"
                                >

                                    View Project
                                </Link>
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Work;