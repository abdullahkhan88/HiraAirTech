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
            <section className="w-full bg-blue-600 py-24">
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

                                    {/* USER FIRST LETTER CIRCLE */}
                                    {/* USER AVATAR + NAME (ROW) */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold text-lg">
                                            {item.name.charAt(0)}
                                        </div>

                                        <h4 className="font-semibold text-white">
                                            {item.name}
                                        </h4>
                                    </div>

                                    {/* COMMENT */}
                                    <p className="text-white text-sm leading-relaxed mb-6 px-6">
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
            {/* secon sections */}
            <section className="w-full h-[90vh] relative">

                {/* BACKGROUND IMAGE */}
                <img
                    src={reachImg}
                    alt="Reach Out Today"
                    className="w-full h-full object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/50 flex items-center">
                    <div className="max-w-4xl px-6 md:px-16">

                        {/* HEADING */}
                        <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
                            Reach Out Today
                        </h2>

                        {/* PARAGRAPH */}
                        <p className="text-white text-lg md:text-xl leading-relaxed mb-8">
                            Let’s connect and discuss how we can help bring your ideas to life
                            with innovative and reliable solutions.
                        </p>

                        {/* BUTTON */}
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition">
                            Contact Us
                        </button>

                    </div>
                </div>

            </section>
        </>
    );
};

export default ClientTestimonials;

