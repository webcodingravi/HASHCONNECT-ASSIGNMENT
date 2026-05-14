import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


const projects=[
    {
        title: "Her Store Marketplace",
        category: "E-commerce & Community",
        image:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    {
        title: "Store Discovery Enhancement",
        category: "Digital for Retail",
        image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
        title: "Upskilling Retailers",
        category: "EdTech",
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    },
    {
        title: "Achivr Social Commerce",
        category: "Social Commerce",
        image:
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    },
];

function ProjectCard({ project }) {
    const ref=useRef(null);

    const { scrollYProgress }=useScroll({
        target: ref,
        offset: ["start end", "center center"],
    });

    // HashConnect Style Animation
    const scale=useTransform(scrollYProgress, [0, 1], [0.7, 1]);
    const y=useTransform(scrollYProgress, [0, 1], [120, 0]);
    const opacity=useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale,
                y,
                opacity,
            }}
            className="
        relative
        h-screen
        flex
        items-center
        justify-center
      "
        >

            {/* Card */}
            <div
                className="
          group
          relative
          w-full
          h-[85vh]
          rounded-[40px]
          overflow-hidden
        "
            >

                {/* Background Image */}
                <motion.img
                    whileHover={{
                        scale: 1.06,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                    src={project.image}
                    alt={project.title}
                    className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
          "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition duration-700"></div>

                {/* Floating Content */}
                <div
                    className="
            absolute
            inset-0
            flex
            flex-col
            items-center
            justify-center
            text-center
            px-6
          "
                >

                    <motion.h2
                        initial={{
                            opacity: 0,
                            y: 50,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.2,
                        }}
                        viewport={{ once: true }}
                        className="
              text-5xl
              md:text-7xl
              font-bold
              text-white
              tracking-tight
              leading-[1]
              max-w-5xl
            "
                    >
                        {project.title}
                    </motion.h2>

                    <motion.p
                        initial={{
                            opacity: 0,
                            y: 40,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.4,
                        }}
                        viewport={{ once: true }}
                        className="
              mt-6
              text-lg
              uppercase
              tracking-[5px]
              text-white/80
            "
                    >
                        {project.category}
                    </motion.p>

                </div>

            </div>

        </motion.div>
    );
}



const WorkSection=() => {
    return (
        <>
            <section
                id="works"
                className="
        relative
        bg-black
        py-32
        overflow-hidden
      "
            >

                {/* Huge Background Text */}
                <div
                    className="
          sticky
          top-10
          z-0
          flex
          justify-center
          pointer-events-none
        "
                >
                    <h1
                        className="
            text-[120px]
            md:text-[240px]
            font-bold
            text-white/5
            leading-none
            tracking-tight
          "
                    >
                        WORK
                    </h1>
                </div>

                {/* Projects */}
                <div className="relative z-10 -mt-32">

                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                        />
                    ))}

                </div>

            </section>

        </>
    )
}

export default WorkSection