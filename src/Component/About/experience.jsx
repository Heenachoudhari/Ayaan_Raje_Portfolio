"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Experience() {
    const experiences = [
        {
            title: "Director & Co-Founder",
            company: "Nexcore Alliance",
            duration: "Sep 2024",
            location: "Maharashtra, India",
            image: "/nexcore.png",
        },
        {
            title: "Marketing Head",
            company: "Student Alliance",
            duration: "June 2023",
            location: "Maharashtra, India",
            image: "/student.png",
        },
        {
            title: "Chief Marketing Head",
            company: "Edu-Momentum LLp",
            duration: "Aug 2022 - Dec 2022",
            location: "Mumbai, India",
            image: "/edu.png",
        },
        {
            title: "Director | Chief Executive Officer",
            company: "Marketing Junction",
            duration: "Sep 2024",
            location: "Maharashtra, India",
            image: "/marketing.png",
        },
        {
            title: "Chief Marketing Officer",
            company: "Code4 Bharat",
            duration: "Sep 2024",
            location: "Mumbai, India",
            image: "/code4.png",
        },
        {
            title: "Chief Marketing Officer",
            company: "Global Inovation olympiad",
            duration: "Sep 2024",
            location: "Mumbai, India",
            image: "/gio.jpg",
        },
        {
            title: "Director | Chief Marketing Officer",
            company: "ISRC.ORG IN",
            duration: "June 2024",
            location: "Maharashtra, India",
            image: "/isrc.png",
        },
    ];

    return (
        <section className="bg-[#D1F8EF] text-black py-12">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>

                {/* First Row - 3 Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
                    {experiences.slice(0, 3).map((exp, index) => (
                        <FlipCard key={index} exp={exp} />
                    ))}
                </div>

                {/* Second Row - 4 Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {experiences.slice(3).map((exp, index) => (
                        <FlipCard key={index + 3} exp={exp} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FlipCard({ exp }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div
            className="relative w-full h-64 perspective-1000 cursor-pointer"
            onMouseEnter={() => setFlipped(true)}
            onMouseLeave={() => setFlipped(false)}
        >
            <motion.div
                className="relative w-full h-full rounded-lg shadow-lg"
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Front Side */}
                <div className="absolute w-full h-full backface-hidden bg-[#D1F8EF] rounded-lg overflow-hidden">
                    <img 
                        src={exp.image} 
                        alt={exp.title} 
                        className="w-full h-full object-cover object-center rounded-lg"
                    />
                </div>

                {/* Back Side */}
                <div 
                    className="absolute w-full h-full backface-hidden bg-gradient-to-r from-blue-500 to-blue-700 text-white p-4 flex flex-col items-center justify-center rounded-lg shadow-lg"
                    style={{ transform: "rotateY(180deg)" }}
                >
                    <h3 className="text-base font-bold">{exp.title}</h3>
                    <p className="text-xs mt-1">{exp.company}</p>
                    <p className="text-xs">{exp.duration}</p>
                    <p className="text-xs">{exp.location}</p>
                </div>
            </motion.div>
        </div>
    );
}
