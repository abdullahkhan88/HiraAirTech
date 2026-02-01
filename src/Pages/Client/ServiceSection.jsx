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
    <section className="w-full bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto bg-white shadow-lg">

        {/* SERVICE 1 */}
        <div className="grid md:grid-cols-2 gap-10 p-10 items-center">

          {/* LEFT CONTENT */}
          <div className="px-5">
            <div className="flex gap-3 mt-4 mb-2">
              <img
                src={img6}
                alt="icon"
                className="w-16 h-16 object-contain"
              />
              <h3 className="text-3xl font-bold text-[#004FA6]">
                HVAC Systems
              </h3>
            </div>

            <p className="text-lg md:ml-18 leading-tight text-gray-600">
              We execute complete HVAC works covering
              planning, installation, commissioning, and
              maintenance for commercial and industrial
              projects. Our experience includes VRF / VRV
              systems, ventilation systems, and centralized
              cooling solutions delivered with strong on-site
              coordination.
            </p>

            <div className="mt-6">
              <ul className="text-sm text-gray-700 md:ml-20 space-y-2">
                <li className="flex items-center font-bold text-[#004FA6] text-xl gap-4">
                  <span className="w-2.5 h-2.5 bg-[#004FA6]"></span>
                  HVAC Installation
                </li>
                <li className="flex items-center font-bold text-[#004FA6] text-xl gap-4">
                  <span className="w-2.5 h-2.5 bg-[#004FA6]"></span>
                  VRF / VRV Systems
                </li>
                <li className="flex items-center font-bold text-[#004FA6] text-xl gap-4">
                  <span className="w-2.5 h-2.5 bg-[#004FA6]"></span>
                  Ventilation Systems
                </li>
                <li className="flex items-center font-bold text-[#004FA6] text-xl gap-4">
                  <span className="w-2.5 h-2.5 bg-blue-900"></span>
                  Central Cooling
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full">
            <img
              src={img3}
              alt="HVAC"
              className="w-full h-[260px] sm:h-[320px] md:h-[360px] lg:h-[420px] object-cover"
            />
          </div>

        </div>


        {/* SERVICE 2 */}
        <div className="grid md:grid-cols-2 gap-10 p-10 bg-gray-200 ">

          {/* LEFT IMAGE */}
          <div className="w-full">
            <img
              src={img2}
              alt="Fire Fighting"
              className="w-full h-[260px] sm:h-[320px] md:h-[360px] lg:h-[420px] object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="px-5">
            <div className="flex items-center gap-3 mb-2">
              <img
                src={img4}
                alt=""
                className="w-15 h-15 object-contain"
              />
              <h3 className="text-3xl font-semibold text-blue-900">
                Fire-Fighting Services
              </h3>
            </div>

            <p className="text-lg md:ml-18 leading-tight text-gray-700">
              We execute fire-fighting systems including
              sprinklers and fire alarm systems in line with
              approved drawings and applicable safety
              norms. Our focus remains on compliance,
              coordination, and smooth approvals without
              last-minute site issues.
            </p>

            <div className="mt-6">
              <ul className="md:ml-20 space-y-3">
                <li className="flex items-center gap-4 text-xl font-bold text-[#004FA6]">
                  <span className="w-3 h-3 bg-[#004FA6] inline-block"></span>
                  Sprinkler Systems
                </li>
                <li className="flex items-center gap-4 text-xl font-bold text-[#004FA6]">
                  <span className="w-3 h-3 bg-[#004FA6] inline-block"></span>
                  Fire Alarm Installation
                </li>
                <li className="flex items-center gap-4 text-xl font-bold text-[#004FA6]">
                  <span className="w-3 h-3 bg-[#004FA6] inline-block"></span>
                  Compliance Certified
                </li>
                <li className="flex items-center gap-4 text-xl font-bold text-[#004FA6]">
                  <span className="w-3 h-3 bg-[#004FA6] inline-block"></span>
                  Testing & Approvals
                </li>
              </ul>
            </div>
          </div>
        </div>


        {/* SERVICE 3 */}
        <div className="grid md:grid-cols-2 gap-10 p-10">
          <div className='max-w-md px-6'>
            <div className='flex gap-6'>
              <img src={img5} alt="" srcset="" className='w-14 h-14' />
              <h3 className="text-3xl font-bold text-[#004FA6]">
                False Ceiling and Interior Works
              </h3>
            </div>
            <p className="text-lg md:ml-18 leading-tight mt-3 text-gray-700">
              We execute false ceiling works for offices,
              hospitals, malls, and institutional buildings.
              The focus here is not decoration, but
              precision — clean lines, proper alignment, and
              coordination with lighting and other services
              to ensure the ceiling works as intended.
            </p>
            <div className='mt-4'>
              <ul className="md:ml-20 space-y-3 mb-4">
                <li className="flex items-center gap-4 text-xl font-bold text-[#004FA6]">
                  <span className="w-3 h-3 bg-[#004FA6] inline-block"></span>
                  Gypsum Ceilings
                </li>
                <li className="flex items-center gap-4 text-xl font-bold text-[#004FA6]">
                  <span className="w-3 h-3 bg-[#004FA6] inline-block"></span>
                  Metal Ceilings
                </li>
                <li className="flex items-center gap-4 text-xl font-bold text-[#004FA6]">
                  <span className="w-3 h-3 bg-[#004FA6] inline-block"></span>
                  Grid Systems
                </li>
              </ul>
            </div>

            <button onClick={handlePartner} className="bg-[#004FA6] md:ml-18 text-white px-5 py-2 cursor-pointer">
              Explore the Service
            </button>
          </div>

          <div className="w-full">
            <img
              src={img1}
              alt="Fire Fighting"
              className="w-full h-[260px] sm:h-[320px] md:h-[360px] lg:h-[420px] object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurServices;