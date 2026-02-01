import symbolimage from "../../assets/AboutAssets/Asset-47.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CountUp from "react-countup";

const About = () => {
    return (
        <section
            className="w-full bg-[#004FA6] 
            min-h-[600px] md:min-h-[70vh]
            py-16 md:py-20 px-4 flex items-center"
        >
            <div
                className="max-w-[1400px] w-full 
                md:p-6 mx-auto 
                grid grid-cols-1 md:grid-cols-2 
                gap-12 md:gap-16 items-stretch"
            >

                {/* LEFT SIDE */}
                <div className="flex justify-center md:justify-start px-4 md:px-12">
                    <div className="flex flex-col justify-between px-8 py-12 md:py-12 w-full">

                        {/* Heading */}
                        <h1 className="text-md md:text-xl font-semibold text-white text-center md:text-left">
                            ABOUT US
                        </h1>

                        {/* Arrows */}
                       
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="w-full p-6 md:p-12 min-h-[auto] md:min-h-[550px]">

                    <p className="text-white text-sm md:text-base leading-relaxed mb-4 text-center md:text-left">
                        Hira Airtek began its journey in 2011 as Rasool Engineers, with a clear
                        focus on HVAC execution. Based in Lucknow, we have grown steadily
                        through disciplined execution and responsible project delivery.
                    </p>
                    <p className="text-white text-sm md:text-base leading-relaxed mb-4">
                        Today, operating as Hira Airtek, we provide HVAC systems, fire fighting
                        services, and false ceiling works, offering clients a single, coordinated
                        partner for essential building services. Our approach focuses on
                        correct execution, close site coordination, and delivering systems that
                        are safe, efficient, and durable.
                    </p>
                    <p className="text-white text-sm md:text-base leading-relaxed mb-4">
                        Backed by a team of skilled professionals and years of hands-on
                        industry experience, we remain committed to reliability, quality
                        workmanship, and long-term client satisfaction.
                    </p>

                    {/* STATS */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">

                        {[
                            { value: "15", label: "Years Experience" },
                            { value: "50", label: "Successful Projects" },
                            { value: "28", label: "Client Served" }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="relative flex items-center justify-center h-35 md:h-40"
                            >
                                <img
                                    src={symbolimage}
                                    alt="symbol"
                                    className="w-full h-full object-contain"
                                />

                                <div className="absolute text-center animate__animated animate__fadeInUp">
                                    <h4 className="text-3xl md:text-6xl mt-3 font-bold text-[#004FA6]">

                                        <CountUp
                                            end={item.value}
                                            duration={2}
                                            enableScrollSpy
                                            scrollSpyOnce
                                        />
                                    </h4>
                                    <p className="text-[#7d7f85] text-xs md:text-sm">
                                        {item.label}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
