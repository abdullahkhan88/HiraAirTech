import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Industries from "../Client/Industries.jsx";
import projectBottom from '../../assets/ProjectAssets/Asset-37.png';
import project1 from '../../assets/ProjectAssets/Asset-20.png';
import project2 from '../../assets/ProjectAssets/Asset-21.png';
import project3 from '../../assets/ProjectAssets/Asset-22.png';
import project4 from '../../assets/ProjectAssets/Asset-23.png';
import project5 from '../../assets/ProjectAssets/Asset-24.png';
import project6 from '../../assets/ProjectAssets/Asset-25.png';
import project7 from '../../assets/ProjectAssets/Asset-26.png';
import project8 from '../../assets/ProjectAssets/Asset-27.png';
import project9 from '../../assets/ProjectAssets/Asset-28.png';

const projects = [
    {
        img: project1,
        name1: "PULSE HOSPITAL",
        name2: "Rai Bareilly Road"
    },
    {
        img: project2,
        name1: "KGMU",
        name2: "Lucknow"
    },
    {
        img: project3,
        name1: "GARDEN BAY",

        name2: "IIM Road, Lucknow"
    },
    {
        img: project4,
        name1: "JNPC",
        name2: "Gomtinagar Lucknow"
    },
    {
        img: project5,
        name1: "RM LOHIYA",
        name2: "Lucknow Gomtinagar"
    },
    {
        img: project6,
        name1: "DEORIA MEDICAL COLLEGE",
        name2: "Deoria"
    },
    {
        img: project7,
        name1: "MULTILEVEL PARKING",
        name2: "Kaiserbagh, Lucknow"
    },
    {
        img: project8,
        name1: "CCS AIRPORT WORK",
        name2: "Lucknow"
    },
    {
        img: project9,
        name1: "AQUATIC STADIUM",
        name2: "Saifai Etawah"
    },
];

const Project = () => {


    const [visibleSlides, setVisibleSlides] = useState(3);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setVisibleSlides(1);
            } else if (window.innerWidth < 1024) {
                setVisibleSlides(2);
            } else {
                setVisibleSlides(3);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const prevSlide = () => {
        setIndex((prev) =>
            prev === 0 ? projects.length - visibleSlides : prev - 1
        );
    };

    const nextSlide = () => {
        setIndex((prev) =>
            prev === projects.length - visibleSlides ? 0 : prev + 1
        );
    };


    return (
        <>
            <section className="w-full bg-gray-200 py-10 md:py-20 px-0 md:px-4">
                <div className="max-w-[1400px] mx-auto">
                    {/* TOP BAR */}
                    <div className="flex items-center justify-between px-3 md:px-8 gap-6 mb-6 md:mb-10">

                        {/* LEFT TEXT */}
                        <div className="w-full md:max-w-7xl mx-auto p-4 md:p-5">
                            
                            <div className="flex justify-between items-center">
                                <div>
                                    <h2 className="text-lg md:text-5xl tracking-tight font-semibold text-[#004fa6]">
                                        Our Delivered Projects:
                                    </h2>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={prevSlide}
                                        className="w-10 h-10 text-[#004FA6] cursor-pointer border-1 border-[#004FA6] hover:text-white shadow flex items-center justify-center hover:bg-[#004FA6] transition"
                                    >
                                        <FaArrowLeft className="" />
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        className="w-10 h-10 text-[#004FA6] hover:text-white border-1 border-[#004FA6]  shadow flex items-center justify-center
                                    hover:bg-[#004FA6] hover:text:white transition"
                                    >
                                        <FaArrowRight className="" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT ARROWS (just next to text) */}

                    </div>

                    {/* IMAGES ROW */}
                    <div className="overflow-hidden md:max-w-7xl mx-auto">
                        <div
                            className="flex transition-transform duration-500"
                            style={{
                                transform: `translateX(-${index * (100 / visibleSlides)}%)`,
                            }}
                        >
                            {projects.map((project, i) => (
                                <div
                                    key={i}
                                    className="flex-shrink-0 px-4"
                                    style={{ width: `${100 / visibleSlides}%` }}
                                >
                                    {/* Project Image */}
                                    <img
                                        src={project.img}
                                        alt={project.name1}
                                        className="w-full h-[420px] object-cover"
                                    />

                                    {/* Bottom Image */}
                                    <div className="relative group overflow-hidden">
                                        <img
                                            src={projectBottom}
                                            alt=""
                                            className="w-full h-full block object-cover"
                                        />

                                        <div
                                            className="absolute inset-0
                                         flex flex-col items-center justify-center
                                         text-[#004fa6] leading-tight text-lg
                                          bg-transparent
                                          transition-all duration-300
                                          group-hover:bg-[#004fa6]
                                          group-hover:text-white"
                                        >
                                            <h3 className="text-2xl font-bold">{project?.name1}</h3>
                                            <p>{project?.name2}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* we attched industries in project components */}
                            
        </>
    );
};

export default Project;
