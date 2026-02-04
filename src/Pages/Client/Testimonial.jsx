import card1 from "../../assets/Testimonial/Asset-36.png";
import reachImg from "../../assets/Testimonial/Asset-33.png";
import reachImgMobile from "../../assets/Testimonial/Asset-20.png"; 



const Testimonials = () => {
    return (
        <>

            {/* second sections */}
            <section className="w-full h-[32vh] md:h-[100vh]  relative">

                {/* BACKGROUND IMAGE */}
                <img
                    src={reachImg}
                    alt="Reach Out Today"
                    className="w-full h-full object-cover md:object-cover hidden md:block"
                />
                <img
                    src={reachImgMobile}
                    alt="Reach Out Today"
                    className="w-full h-full object-cover md:object-cover block md:hidden"
                />

                {/* OVERLAY */}
                <div className=" absolute
                        left-4 top-5
                        sm:left-8 sm:top-10
                        md:left-20 md:top-20
                        lg:left-30 lg:top-28">
                    <div className="">

                        {/* HEADING */}
                        <h2 className="hidden md:block text-[#004FA6] text-2xl tracking-tight md:text-5xl font-semibold">
                            Let’s discuss your project
                        </h2>

                        {/* PARAGRAPH */}
                        <p className="hidden md:block text-gray-900 max-w-xs md:max-w-xl leading-tight text-xs md:text-2xl mt-4 ">
                            Share your requirement with us. Our team will review the
                            scope and provide a clear project quotation.
                        </p>

                        {/* BUTTON */}
                        <button className=" hidden md:block bg-[#004FA6] text-xs md:text-md lg:text-xl text-white mt-8 px-2 md:px-6 py-3 md:py-3 cursor-pointer
                        ">
                            Request a Quotation
                        </button>

                    </div>
                </div>

            </section>
        </>
    );
};

export default Testimonials;

