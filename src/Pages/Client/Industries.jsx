import mall from '../../assets/IndustriesAssets/Asset-30.png';
import commericial from '../../assets/IndustriesAssets/Commercial.png';
import hospital from '../../assets/IndustriesAssets/Hospital.png';
import industrial from '../../assets/IndustriesAssets/Asset-32.png';

const Industries = () => {
  const data = [
    {
      title: "Commercial Buildings",
      img: commericial,
      desc: `We execute HVAC, fire-fighting, and ceiling works
             for offices and commercial spaces, with a focus on
             thermal comfort, safety compliance, clean finishes,
             and smooth system performance in active work
             environments.
            `,
    },
    {
      title: "Healthcare & Institutions",
      img:hospital,
      desc: `Hospitals and institutional buildings demand
             precise execution and uninterrupted performance.
             We deliver HVAC, fire safety, and ceiling works with
             careful attention to hygiene, airflow control, and
             regulatory standards.
            `,
    },
    {
      title: "Retail & Public Spaces",
      img: mall,
      desc: `In malls and high-footfall public spaces, we
            execute integrated services that balance comfort,
            safety, and aesthetics, ensuring efficient air
            distribution, compliance, and clean architectural
            integration.
          `,
    },
    {
      title: "Industrial Facilities",
      img: industrial,
      desc: `For factories and industrial units, we deliver
            systems designed for higher loads, durability, and
            safety compliance, coordinating closely with plant
            layouts, machinery
          `,
    },
  ];

  return (
    <section className="bg-gray-200 border-t">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row">

        {/* LEFT LABEL */}
        <div className="md:max-w-md flex  py-5 md:py-8 lg:py-15 md:justify-start">
          <p className="text-[#004FA6] text-lg font-bold uppercase">
            INDUSTRIES WE SERVE
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:ml-auto max-w-4xl pb-25 ">

          {/* Heading */}
          <div className="max-w-xl md:py-4 mx-auto">
            <h2 className="text-2xl md:text-5xl py-2 md:py-6 font-bold leading-tight text-gray-900 md:mt-2">
              Experience across 
              multiple industry sectors
            </h2>

            <p className="text-gray-900 pt-4 md:pt-0 leading-tight text-md md:text-2xl pb-10 max-w-2xl mx-auto">
              Hira Airtek works across environments where HVAC,
              fire safety, and ceiling systems are critical to daily
              operations. Our role remains focused on disciplined
              execution, coordination, and delivering systems that
              perform reliably on site.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-20 place-items-center md:place-items-start">
            {data.map((item, index) => (
              <div key={index} className="max-w-sm">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-auto object-cover"
                />

                <h3 className="text-2xl font-semibold text-[#004FA6] mt-4">
                  {item.title}
                </h3>

                <p className="text-gray-800 text-md leading-tight mt-3">
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