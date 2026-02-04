import symbolimage from "../../assets/AboutAssets/Asset-47.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CountUp from "react-countup";

const About = () => {
    return (
        <section
            className="w-full bg-[#004FA6] 
            min-h-[600px] md:min-h-[80vh]
            py-10 md:py-12 lg:py-25 px-4 flex items-center"
        >
            <div
                className="max-w-[1400px] w-full mx-auto
                           px-4 sm:px-6 md:px-8 lg:px-12
                           grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2
                           gap-8 md:gap-10 lg:gap-16"
            >

                {/* LEFT SIDE */}
                <div className="flex justify-center lg:justify-start">
                    <div className="flex flex-col w-full lg:max-w-md md:py-0 lg:py-10">

                        <h1 className="text-md sm:text-base md:text-lg px-0 md:px-10 font-semibold text-white
                                 lg:text-left">
                            ABOUT US
                        </h1>

                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="w-full py-0  md:py-6 lg:py-12">

                    <p className="text-white text-md md:text-lg leading-tight md:leading-relaxed mb-4 md:text-left">
                        Hira Airtek began its journey in 2011 as Rasool Engineers, with a clear
                        focus on HVAC execution. Based in Lucknow, we have grown steadily
                        through disciplined execution and responsible project delivery.
                    </p>

                    <p className="text-white text-md md:text-lg leading-tight md:leading-relaxed mb-4  md:text-left">
                        Today, operating as Hira Airtek, we provide HVAC systems, fire fighting
                        services, and false ceiling works, offering clients a single, coordinated
                        partner for essential building services.
                    </p>

                    <p className="text-white text-md md:text-lg leading-tight md:leading-relaxed mb-8 md:text-left">
                        Backed by a team of skilled professionals and years of hands-on
                        industry experience, we remain committed to reliability, quality
                        workmanship, and long-term client satisfaction.
                    </p>

                    {/* STATS */}
                    <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-8">
                        {[
                            { value: "15", label: "Years Experience" },
                            { value: "50", label: "Successful Projects" },
                            { value: "28", label: "Client Served" }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="relative flex items-center justify-center
                                    sm:h-36 md:h-40 lg:h-44"
                            >
                                <img
                                    src={symbolimage}
                                    alt="symbol"
                                    className="w-full h-full object-contain"
                                />

                                <div className="absolute text-center animate__animated animate__fadeInUp">
                                    <h4 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-[#004FA6] ${index == 1 ? "pt-4": ""}`}>
                                        <CountUp
                                            end={item.value}
                                            duration={2}
                                            enableScrollSpy
                                            scrollSpyOnce
                                        />
                                    </h4>
                                    <p className="text-[#7d7f85] text-xs leading-tight px-1 md:px-0 md:text-sm">
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
