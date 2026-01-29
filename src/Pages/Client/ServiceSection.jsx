import { useNavigate } from 'react-router-dom';

import img1 from '../../assets/ServiceSection/Asset-44.png';
import img2 from '../../assets/ServiceSection/Asset-42.png';
import img3 from '../../assets/ServiceSection/assets.png';
import img4 from '../../assets/ServiceSection/Asset-40.png';
import img5 from '../../assets/ServiceSection/Asset-39.png';
import img6 from '../../assets/ServiceSection/Asset-41.png';

const OurServices = () => {
  const navigate = useNavigate();

  const handlePartner = () => {
    navigate('/partner')
  }

  return (
    <section className="w-full bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto bg-white shadow-lg">

        {/* TOP BANNER */}
        <div className="bg-[#004FA6]  text-white p-12 grid md:grid-cols-2 gap-6">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Built With Precision.<br />Designed To Scale.
          </h2>

          <div>
            <p className="text-sm leading-relaxed mb-4 opacity-90">
              We deliver integrated building service solutions with precision,
              efficiency and modern engineering standards.
            </p>
            <button className="bg-white text-blue-900 px-5 py-2 font-medium">
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
              <h3 className="text-xl font-semibold text-blue-900">
                HVAC Systems
              </h3>
            </div>

            <p className="text-sm text-gray-600 mb-3">
              We execute complete HVAC works covering
              planning, installation, commissioning, and
              maintenance for commercial and industrial
              projects. Our experience includes VRF / VRV
              systems, ventilation systems, and centralized
              cooling solutions delivered with strong on-site
              coordination.
            </p>

            <ul className="text-sm text-gray-700 space-y-1">
              <li>• HVAC Installation</li>
              <li>• VRF / VRV Systems</li>
              <li>• Ventilation Systems</li>
              <li>• Central Cooling</li>
            </ul>
          </div>

          <img
            src={img3}
            alt="HVAC"
            className="w-full"
          />
        </div>

        {/* SERVICE 2 */}
        <div className="grid md:grid-cols-2 gap-10 p-10 bg-gray-200 items-center">
          <img
            src={img2}
            alt="Fire Fighting"
            className="w-full"
          />

          <div>
            <div className='flex items-center gap-3 mb-4'>
              <img src={img4} alt="" srcset="" className="w-12 h-12 object-contain" />
              <h3 className="text-2xl font-semibold text-blue-900 mb-2">
                Fire-Fighting Services
              </h3>
            </div>
            <p className="text-md text-gray-600 mb-3">
              We execute fire-fighting systems including
              sprinklers and fire alarm systems in line with
              approved drawings and applicable safety
              norms. Our focus remains on compliance,
              coordination, and smooth approvals without
              last-minute site issues.
            </p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Sprinkler Systems</li>
              <li>• Fire Alarm Installation</li>
              <li>• Compliance Certified</li>
              <li>• Testing & Approvals</li>
            </ul>
          </div>
        </div>

        {/* SERVICE 3 */}
        <div className="grid md:grid-cols-2 gap-10 p-10 items-center">
          <div className='max-w-md p-6'>
            <div className='flex gap-4'>
              <img src={img5} alt="" srcset="" className='w-12 h-12' />
              <h3 className="text-3xl font-bold text-blue-900 mb-2">
                False Ceiling and Interior Works
              </h3>
            </div>
            <p className="text-md text-gray-600  mb-4">
              We execute false ceiling works for offices,
              hospitals, malls, and institutional buildings.
              The focus here is not decoration, but
              precision — clean lines, proper alignment, and
              coordination with lighting and other services
              to ensure the ceiling works as intended.
            </p>
             <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li>• Gypsum Ceilings</li>
              <li>• Metal Ceilings</li>
              <li>• Grid Systems</li>
            </ul>
            <button onClick={handlePartner} className="bg-blue-900 text-white px-5 py-2 cursor-pointer">
              Explore the Service
            </button>
          </div>

          <img
            src={img1}
            alt="Interior"
            className="w-full"
          />
        </div>

      </div>
    </section>
  );
};

export default OurServices;