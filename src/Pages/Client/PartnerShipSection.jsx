import img1 from '../../assets/PartnershipAssets/Asset-45.png';
import img2 from '../../assets/PartnershipAssets/Asset-52.png';

const PartnerShipSection = () => {
  return (
    <section className="w-full bg-gray-200 py-12 border-t border-b md:py-24">
      <div className="max-w-7xl mx-auto  px-4">
 
        {/* TOP CONTENT */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start mb-16">

          {/* LEFT */}
          <div className=''>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
              Strengthening Our Ceiling
              Expertise Through Trusted
              Alliances with
            </h2>

            {/* Dummy Logo */}
            <div className="inline-flex items-center md:mt-4 font-medium">
              <img src={img1} alt="" srcset="" className='w-70' />
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <p className="text-md md:text-lg lg:text-2xl text-gray-900 leading-relaxed">
              To strengthen our false ceiling capabilities,
              Hira Airtek works in alliance with Royal Kraft,
              a specialised metal false ceiling brand based
              in Ghaziabad, Uttar Pradesh.
              </p>
              <p className='text-md md:text-lg lg:text-2xl text-gray-900 leading-relaxed mt-5'>
              This collaboration enables us to deliver
              advanced metal ceiling systems for
              commercial and institutional spaces,
              combining Royal Kraft’s product expertise
              with Hira Airtek’s execution, coordination,
              and installation standards on site.
            </p>
          </div>

        </div>

        {/* BOTTOM IMAGE */}
        <div className="w-full">
          <img
            src={img2}
            alt="Interior Partnership"
            className="w-full h-[530px] object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default PartnerShipSection;