import { useState , useEffect} from "react";
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
         name1: "JNPC",
        name2:"Lucknow Gomtinagar"
    },
    {
        img: project2,
         name1: "JNPC",
        name2:"Lucknow Gomtinagar"
    },
    {
        img: project3,
         name1: "JNPC",
        name2:"Lucknow Gomtinagar"
    },
    {
        img: project4,
        name1: "JNPC",
        name2:"Lucknow Gomtinagar"
    },
    {
        img: project5,
         name1: "JNPC",
        name2:"Lucknow Gomtinagar"
    },
    {
        img: project6,
         name1: "JNPC",
        name2:"Lucknow Gomtinagar"
    },
    {
        img: project7,
         name1: "JNPC",
        name2:"Lucknow Gomtinagar"
    },
    {
        img: project8,
        name1: "JNPC",
        name2:"Lucknow Gomtinagar"
    },
    {
        img: project9,
         name1: "JNPC",
        name2:"Lucknow Gomtinagar"
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
        <section className="w-full bg-gray-200 py-10 md:py-20 px-0 md:px-4">
            <div className="max-w-[1400px] mx-auto">
                {/* TOP BAR */}
                <div className="flex items-center justify-between px-3 md:px-8 gap-6 mb-6 md:mb-10">

                    {/* LEFT TEXT */}
                    <div>
                        <h2 className="text-lg md:text-sm font-bold text-blue-800">
                            SHOCASE EXCELLENCE:
                        </h2>
                        <h2 className="text-lg md:text-3xl font-bold text-gray-800">
                            Our Delivered Project
                        </h2>
                    </div>

                    {/* RIGHT ARROWS (just next to text) */}
                    <div className="flex gap-3">
                        <button
                            onClick={prevSlide}
                            className="w-11 h-11 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-200 transition"
                        >
                            ⬅️
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-11 h-11 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-200 transition"
                        >
                            ➡️
                        </button>
                    </div>

                </div>

                {/* IMAGES ROW */}
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500"
                        style={{
                            transform: `translateX(-${index * (100 / visibleSlides)}%)`,
                        }}
                    >
                        {projects.map((project, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 px-3"
                                style={{ width: `${100 / visibleSlides}%` }}
                            >
                                {/* Project Image */}
                                <img
                                    src={project.img}
                                    alt={project.name}
                                    className="w-full h-[320px] object-cover shadow-md"
                                />

                                {/* Bottom Image */}
                                <div className="relative">
                                    <img src={projectBottom} alt="" className="w-full" />
                                    <h3 className="absolute inset-0 flex flex-col items-center justify-center 
                                              text-blue-700 font-semibold text-lg">
                                        {project?.name1}
                                        <p>{project?.name2}</p>
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>




            </div>
        </section>
    );
};

export default Project;
