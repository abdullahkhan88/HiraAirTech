import img1 from '../../assets/PartnershipAssets/Asset-45.png';
import img2 from '../../assets/PartnershipAssets/Asset-52.png';

const PartnerShipSection = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* TOP CONTENT */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-16">

          {/* LEFT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-1">
              Partnerships <br />
              and Alliances with
            </h2>

            {/* Dummy Logo */}
            <div className="inline-flex items-center font-medium">
              <img src={img1} alt="" srcset="" className='w-40'/>
            </div>

            <p className="text-xs text-gray-500">
              Total Interiors
            </p>
          </div>

          {/* RIGHT */}
          <div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Royal Kraft is one of leading ceiling brands with presence
              in global markets. Known for delivering superior quality,
              innovative designs and reliable performance.
              <br /><br />
              The collaboration of Hira Airtech with Royal Kraft
              enables turnkey ceiling solutions including
              Metal Ceiling Panels, Open Cell Ceilings,
              Baffle Ceilings and Linear Panels.
            </p>
          </div>

        </div>

        {/* BOTTOM IMAGE */}
        <div className="w-full">
          <img
            src={img2}
            alt="Interior Partnership"
            className="w-full h-[530px] object-cover rounded-md"
          />
        </div>

      </div>
    </section>
  );
};

export default PartnerShipSection;