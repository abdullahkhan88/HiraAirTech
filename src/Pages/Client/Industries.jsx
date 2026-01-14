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
    <section className="bg-white py-20">
      <div>
        <p className="text-blue-600 ml-25 text-sm font-semibold uppercase">
        Industries We Serve
      </p>
      </div>
      <div className="max-w-4xl mx-auto px-4">

        {/* Top Heading */}
        <div className="mb-14 px-8">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            High performance services <br /> for multiple industries!
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl">
            Hira Airtek began its operations in 2011 delivering high-quality HVAC
            solutions and has expanded across multiple industries.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2">
          {data.map((item, index) => (
            <div key={index} className=''>
              <img
                src={item.img}
                alt={item.title}
                className="w-90 h-110 object-cover rounded-sm"
              />
              <h3 className="text-xl font-semibold text-blue-700 mt-4">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Industries;