import { useNavigate } from 'react-router-dom';

import img1 from '../../assets/ServiceSection/Services-13.png';
import img2 from '../../assets/ServiceSection/Services-11.png';
import img3 from '../../assets/ServiceSection/Services-12.png';
import img4 from '../../assets/ServiceSection/Asset-40.png';
import img5 from '../../assets/ServiceSection/Asset-39.png';
import img6 from '../../assets/ServiceSection/Asset-41.png';

const OurServices = () => {
  const navigate = useNavigate();

  const handlePartner = () => {
    navigate('/partner');
  };

  return (
    <section className="w-full bg-gray-100 py-5">
      <div className="max-w-6xl mx-auto bg-white shadow-lg">

        {/* ================= SERVICE 1 ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 
                        gap-8 md:gap-12 lg:gap-16
                        px-5 sm:px-8 md:px-10
                        py-12 md:py-16 lg:py-20
                        items-center">

          {/* LEFT CONTENT */}
          <div>
            <div className="flex items-start gap-6 mb-4">
              <img src={img6} alt="icon" className="w-14 h-14 object-contain" />
              <h3 className="text-2xl sm:text-4xl tracking-tight font-bold text-[#004FA6]">
                HVAC Systems
              </h3>
            </div>

            <p className="text-base sm:text-lg leading-tight text-gray-600 md:pl-20">
              We execute complete HVAC works covering planning, installation,
              commissioning, and maintenance for commercial and industrial
              projects. Our experience includes VRF / VRV systems, ventilation
              systems, and centralized cooling solutions delivered with strong
              on-site coordination.
            </p>

            <ul className="mt-8 space-y-5 md:pl-20">
              {[
                'HVAC Installation',
                'VRF / VRV Systems',
                'Ventilation Systems',
                'Central Cooling',
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 text-xl font-bold text-[#004FA6]"
                >
                  <span className="w-3 h-3 bg-[#004FA6]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <img
              src={img3}
              alt="HVAC"
              className="w-full h-[220px] sm:h-[280px] md:h-[340px] lg:h-[420px] object-cover"
            />
          </div>
        </div>

        {/* ================= SERVICE 2 ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2
                        gap-8 md:gap-12 lg:gap-16
                        px-5 sm:px-8 md:px-10
                        py-12 md:py-16 lg:py-20
                        bg-gray-200
                        items-center">

          {/* IMAGE */}
          <div className="order-2 md:order-1">
            <img
              src={img2}
              alt="Fire Fighting"
              className="w-full h-[220px] sm:h-[280px] md:h-[340px] lg:h-[420px] object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="order-1 md:order-2">
            <div className="flex items-start gap-6 mb-4">
              <img src={img4} alt="icon" className="w-14 h-14 object-contain" />
              <h3 className="text-2xl sm:text-4xl font-bold text-[#004FA6]">
                Fire-Fighting Services
              </h3>
            </div>

            <p className="text-base sm:text-lg leading-tight text-gray-700 md:pl-20">
              We execute fire-fighting systems including sprinklers and fire
              alarm systems in line with approved drawings and applicable safety
              norms. Our focus remains on compliance, coordination, and smooth
              approvals without last-minute site issues.
            </p>

            <ul className="mt-8 space-y-5 md:pl-20">
              {[
                'Sprinkler Systems',
                'Fire Alarm Installation',
                'Compliance Certified',
                'Testing & Approvals',
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 text-xl font-bold text-[#004FA6]"
                >
                  <span className="w-3 h-3 bg-[#004FA6]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ================= SERVICE 3 ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2
                        gap-8 md:gap-12 lg:gap-16
                        px-5 sm:px-8 md:px-10
                        py-12 md:py-16 lg:py-20
                        items-center">

          {/* CONTENT */}
          <div>
            <div className="flex items-start gap-6 mb-4">
              <img src={img5} alt="icon" className="w-14 h-14" />
              <h3 className="text-2xl sm:text-4xl font-bold text-[#004FA6]">
                False Ceiling and Interior Works
              </h3>
            </div>

            <p className="text-base sm:text-lg leading-tight text-gray-700 md:pl-20">
              We execute false ceiling works for offices,
              hospitals, malls, and institutional buildings.
              The focus here is not decoration, but
              precision — clean lines, proper alignment, and
              coordination with lighting and other services
              to ensure the ceiling works as intended.
            </p>

            <ul className="mt-8 space-y-5 md:pl-20">
              {['Gypsum Ceilings', 'Metal Ceilings', 'Grid Systems'].map(
                (item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 text-xl font-bold text-[#004FA6]"
                  >
                    <span className="w-3 h-3 bg-[#004FA6]" />
                    {item}
                  </li>
                )
              )}
            </ul>

            <button
              onClick={handlePartner}
              className="mt-8 bg-[#004FA6] text-white text-xl px-8 py-3 
                         block mx-auto md:mx-0 md:ml-20"
            >
              Ceiling Expertise
            </button>
          </div>

          {/* IMAGE */}
          <div>
            <img
              src={img1}
              alt="Interior Work"
              className="w-full h-[220px] sm:h-[280px] md:h-[340px] lg:h-[420px] object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurServices;
