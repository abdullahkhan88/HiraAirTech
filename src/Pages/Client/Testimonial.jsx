import card1 from "../../assets/Testimonial/Asset-36.png";
import reachImg from "../../assets/Testimonial/Asset-33.png";


const testimonials = [
    {
        image: card1,
        name: "Rahul Sharma",
        comment:
            "Amazing service and great support. Highly recommended for any business.",
        rating: 5,
    },
    {
        image: card1,
        name: "Ayesha Khan",
        comment:
            "Professional team with excellent delivery and communication.",
        rating: 4,
    },
    {
        image: card1,
        name: "John Williams",
        comment:
            "They truly understand client needs and deliver quality work.",
        rating: 5,
    },
];

const ClientTestimonials = () => {
    return (
        <>
            <section className="w-full bg-[#004FA6] py-20">
                <div className="max-w-7xl mx-auto px-6">

                    {/* HEADING */}
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold mb-20">
                        What Our Clients Say About Us
                    </h2>

                    {/* TESTIMONIAL GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 place-items-center">
                        {testimonials.map((item, index) => (
                            <div key={index} className="relative w-full max-w-sm">

                                {/* SVG IMAGE */}
                                <img
                                    src={item.image}
                                    alt="testimonial shape"
                                    className="w-full max-w-sm"
                                />

                                {/* OVERLAY CONTENT */}
                                <div className="absolute inset-0 flex flex-col items-center text-center px-8 pt-8">
                                  
                                    {/* USER AVATAR + NAME (ROW) */}
                                    <div className="flex items-center gap-3 mt-6">
                                        <div className="w-12 h-12 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold text-lg">
                                            {item.name.charAt(0)}
                                        </div>

                                        <h4 className="font-semibold text-white">
                                            {item.name}
                                        </h4>
                                    </div>

                                    {/* COMMENT */}
                                    <p className="text-white text-sm mt-6 leading-relaxed max-w-[70%]">
                                        “{item.comment}”
                                    </p>

                                    {/* STAR RATING (BOTTOM) */}
                                    <div className="flex mt-auto pb-6">
                                        {Array(item.rating)
                                            .fill(0)
                                            .map((_, i) => (
                                                <span key={i} className="text-yellow-400 text-lg">
                                                    ★
                                                </span>
                                            ))}
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
            {/* second sections */}
            <section className="w-full md:h-[90vh] h-[30vh] relative">

                {/* BACKGROUND IMAGE */}
                <img
                    src={reachImg}
                    alt="Reach Out Today"
                    className="w-full h-full object-cover md:object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 top-5 md:top-17">
                    <div className="max-w-4xl px-6 md:px-16">

                        {/* HEADING */}
                        <h2 className="text-[#004FA6] text-2xl md:text-5xl font-semibold">
                            Reach Out Today
                        </h2>

                        {/* PARAGRAPH */}
                        <p className="text-gray-800 max-w-md text-xs md:text-xl leading-tight">
                            Let’s connect and discuss how we can help bring your ideas to life
                            with innovative and reliable solutions.
                        </p>

                        {/* BUTTON */}
                        <button className="bg-blue-900 text-white px-3 md:px-6 py-2 md:py-3 mt-2 cursor-pointer
                          hover:bg-blue-800 transition">
                            Book the Service
                        </button>

                    </div>
                </div>

            </section>
        </>
    );
};

export default ClientTestimonials;

