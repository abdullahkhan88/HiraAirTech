import img1 from '../../assets/ServiceSection/Asset-44.png';
import img2 from '../../assets/ServiceSection/Asset-42.png';
import img3 from '../../assets/ServiceSection/assets.png';
import img4 from '../../assets/ServiceSection/Asset-40.png';
import img5 from '../../assets/ServiceSection/Asset-39.png';
import img6 from '../../assets/ServiceSection/Asset-41.png';

const OurServices = () => {
  return (
    <section className="w-full bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto bg-white shadow-lg">

        {/* TOP BANNER */}
        <div className="bg-blue-700 text-white p-10 grid md:grid-cols-2 gap-6">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Built With Precision.<br />Designed To Scale.
          </h2>

          <div>
            <p className="text-sm leading-relaxed mb-4 opacity-90">
              We deliver integrated building service solutions with precision,
              efficiency and modern engineering standards.
            </p>
            <button className="bg-white text-blue-700 px-5 py-2 rounded-md font-medium">
              Get Free Quotation
            </button>
          </div>
        </div>

        {/* SERVICE 1 */}
        <div className="grid md:grid-cols-2 gap-10 p-10 items-center">
          <div>
            {/* Heading with small image */}
            <div className="flex items-center gap-3 mt-4 mb-2">
              <img
                src={img6} // yahan choti image ka path
                alt="icon"
                className="w-8 h-8 object-contain"
              />
              <h3 className="text-xl font-semibold text-blue-700">
                HVAC Systems
              </h3>
            </div>

            <p className="text-sm text-gray-600 mb-3">
              Design, supply, installation, commissioning and maintenance
              of HVAC systems for commercial and industrial buildings.
            </p>

            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Installation & Maintenance</li>
              <li>• Energy Efficient Systems</li>
              <li>• 24/7 Emergency Service</li>
            </ul>
          </div>

          <img
            src={img3}
            alt="HVAC"
            className="w-full rounded-md"
          />
        </div>

        {/* SERVICE 2 */}
        <div className="grid md:grid-cols-2 gap-10 p-10 bg-gray-200 items-center">
          <img
            src={img2}
            alt="Fire Fighting"
            className="w-full rounded-md"
          />

          <div>
            <div className='flex items-center gap-3 mb-4'>
              <img src={img4} alt="" srcset="" className="w-9 h-9 object-contain" />
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                Fire Fighting Services
              </h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Complete fire-fighting solutions ensuring safety,
              compliance and reliability.
            </p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Sprinkler Systems</li>
              <li>• Fire Alarm Installation</li>
              <li>• Compliance Certified</li>
            </ul>
          </div>
        </div>

        {/* SERVICE 3 */}
        <div className="grid md:grid-cols-2 gap-10 p-10 items-center">
          <div>
            <div className='flex items-center gap-2 p-2'>
              <img src={img5} alt="" srcset="" className='w-9 h-9'/>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
              False Ceiling & Interior Works
            </h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Complete false ceiling and interior solutions for offices
              and commercial spaces.
            </p>

            <button className="bg-blue-700 text-white px-5 py-2 rounded-md">
              Explore the Service
            </button>
          </div>

          <img
            src={img1}
            alt="Interior"
            className="w-full rounded-md"
          />
        </div>

      </div>
    </section>
  );
};

export default OurServices;