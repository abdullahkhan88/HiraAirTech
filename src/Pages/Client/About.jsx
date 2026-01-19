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
                            About Us
                        </h1>

                        {/* Arrows */}
                        <div className="flex gap-4 justify-center md:justify-start mt-6 md:mt-0">
                            <button
                                className="w-8 h-8 md:w-10 md:h-10 
                                border border-white 
                                flex items-center justify-center 
                                text-white hover:bg-white hover:text-[#004FA6] transition"
                            >
                                <FaArrowLeft />
                            </button>

                            <button
                                className="w-8 h-8 md:w-10 md:h-10 
                                border border-white 
                                flex items-center justify-center 
                                text-white hover:bg-white hover:text-[#004FA6] transition"
                            >
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="w-full p-6 md:p-12 min-h-[auto] md:min-h-[550px]">

                    <p className="text-white text-sm md:text-base leading-relaxed mb-8 text-center md:text-left">
                        We are a modern tech-driven company focused on delivering
                        high-quality digital solutions with innovation, precision,
                        and customer satisfaction. Our team believes in building
                        scalable and reliable products for long-term success.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Iusto error dignissimos earum odio, consequuntur ex!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate, necessitatibus?
                    </p>

                    {/* STATS */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">

                        {[
                            { value: "10", label: "Years Experience" },
                            { value: "250", label: "Successful Projects" },
                            { value: "100", label: "Client Served" }
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
                                    <h4 className="text-2xl md:text-3xl mt-3 font-bold text-[#004FA6]">
                                        
                                        <CountUp
                                            end={item.value}
                                            duration={2}
                                            enableScrollSpy
                                            scrollSpyOnce
                                        />
                                    </h4>
                                    <p className="text-gray-500 text-xs md:text-sm mt-4">
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
