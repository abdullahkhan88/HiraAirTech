import img1 from '../../assets/IndustriesAssets/Asset-30.png';
import img2 from '../../assets/IndustriesAssets/Asset-32.png';
import img3 from '../../assets/IndustriesAssets/Asset-30.png';
import img4 from '../../assets/IndustriesAssets/Asset-32.png';

const Industries = () => {
  const data = [
    {
      title: "Building Owners",
      img: img1,
      desc: "We deliver efficient HVAC systems for commercial and residential buildings with long-term performance and reliability.",
    },
    {
      title: "Manufacturers",
      img: img2,
      desc: "Our solutions support manufacturing facilities with energy-efficient and scalable HVAC infrastructure.",
    },
    {
      title: "Contractors",
      img: img3,
      desc: "We work closely with contractors to deliver smooth project execution and technical excellence.",
    },
    {
      title: "Architects",
      img: img4,
      desc: "Architect-friendly HVAC designs that align with aesthetics, sustainability, and performance goals.",
    },
  ];

  return (
     <section className="bg-gray-200 py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row">

        {/* LEFT LABEL */}
        <div className="md:max-w-md flex justify-center md:justify-start mb-6 md:mb-0">
          <p className="text-blue-900 text-md font-semibold uppercase">
            Industries We Serve
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:ml-auto max-w-4xl text-center md:text-left">

          {/* Heading */}
          <div className="mb-14">
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mt-2">
              High performance services <br className="hidden md:block" />
              for multiple industries!
            </h2>

            <p className="text-gray-800 mt-4 max-w-2xl mx-auto md:mx-0">
              Hira Airtek began its operations in 2011 delivering high-quality HVAC
              solutions and has expanded across multiple industries.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 place-items-center md:place-items-start">
            {data.map((item, index) => (
              <div key={index} className="max-w-sm">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-auto object-cover"
                />

                <h3 className="text-xl font-semibold text-blue-700 mt-4">
                  {item.title}
                </h3>

                <p className="text-gray-700 text-sm mt-3">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Industries;