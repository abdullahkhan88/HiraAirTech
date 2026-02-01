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

const Testimonials = () => {
    return (
        <>

            {/* second sections */}
            <section className="w-full md:h-[100vh] h-[30vh] relative">

                {/* BACKGROUND IMAGE */}
                <img
                    src={reachImg}
                    alt="Reach Out Today"
                    className="w-full h-full object-cover md:object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 left-30 top-5 md:top-20">
                    <div className="max-w-4xl">

                        {/* HEADING */}
                        <h2 className="text-[#004FA6] text-2xl tracking-tight md:text-5xl font-semibold">
                            Let’s discuss your project
                        </h2>

                        {/* PARAGRAPH */}
                        <p className="text-gray-800 max-w-xl leading-tight text-xs md:text-2xl mt-4 ">
                            Share your requirement with us. Our team will review the
                            scope and provide a clear project quotation.
                        </p>

                        {/* BUTTON */}
                        <button className="bg-[#004FA6] text-xl text-white mt-8 px-3 md:px-6 py-2 md:py-3 cursor-pointer
                          hover:bg-blue-800 transition">
                           Request a Quotation
                        </button>

                    </div>
                </div>

            </section>
        </>
    );
};

export default Testimonials;

