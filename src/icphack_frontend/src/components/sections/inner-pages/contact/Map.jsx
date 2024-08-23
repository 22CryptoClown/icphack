const Map = () => {
  return (
    <section className='map-section'>
      {/* Section Spacer */}
      <div className='bg-black pb-40 pt-20 xl:pb-[200px] xl:pt-[130px]'>
        {/* Section Container */}
        <div className='global-container'>
          {/* Section Content Block */}
          <div className='mb-10 text-center lg:mb-16 xl:mb-20'>
            <div className='mx-auto md:max-w-xs lg:max-w-xl xl:max-w-[950px]'>
              <h2 className='text-white'>
                We always welcome our clients to our office
              </h2>
            </div>
          </div>
          {/* Section Content Block */}
          {/* Map Block */}
          <div className='relative'>
            <img
              src='assets/img/th-1/mapbase.svg'
              alt='mapbase'
              className='h-auto w-full'
            />
            {/* Location 1 */}
            <div className='group absolute hidden sm:flex gap-2 sm:top-[10%] sm:left-[13%]'>
              <div className='relative w-[50px] h-[50px]'>
                <button className='group flex justify-center items-center w-[50px] h-[50px] relative transition-all duration-300'>
                  <img
                    src='assets/img/th-1/icon-gray-location-marker.svg'
                    alt='icon-gray-location-marker'
                    width={35}
                    height={35}
                    className='opacity-100 group-hover:opacity-0 transition-all duration-300'
                  />
                  <img
                    src='assets/img/th-1/icon-orange-location-marker.svg'
                    alt='icon-gray-location-marker'
                    width={50}
                    height={50}
                    className='absolute opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300'
                  />
                </button>
                <div className='absolute bg-white rounded-[8px] p-4 text-sm w-[170px] bottom-0 right-0 xl:right-[50px] xxl:right-auto xxl:left-[50px] opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 xl:translate-y-12 group-hover:translate-y-0'>
                  <div className='flex gap-1 font-bold pb-3'>
                    <img
                      src='assets/img/th-1/icon-black-location-marker.svg'
                      alt='icon-black-location-marker'
                      width={17}
                      height={17}
                    />
                    Toronto, Canada
                  </div>
                  <address className='not-italic font-semibold'>
                    Line 1: House/Flat 208, Venue Street
                  </address>
                </div>
              </div>
            </div>
            {/* Location 1 */}
            {/* Location 2 */}
            <div className='group absolute hidden sm:flex gap-2 sm:top-[65%] sm:left-[18%]'>
              <div className='relative w-[50px] h-[50px]'>
                <button className='group flex justify-center items-center w-[50px] h-[50px] relative transition-all duration-300'>
                  <img
                    src='assets/img/th-1/icon-gray-location-marker.svg'
                    alt='icon-gray-location-marker'
                    width={35}
                    height={35}
                    className='opacity-100 group-hover:opacity-0 transition-all duration-300'
                  />
                  <img
                    src='assets/img/th-1/icon-orange-location-marker.svg'
                    alt='icon-gray-location-marker'
                    width={50}
                    height={50}
                    className='absolute opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300'
                  />
                </button>
                <div className='absolute bg-white rounded-[8px] p-4 text-sm w-[170px] bottom-0 right-0 xl:right-[50px] xxl:right-auto xxl:left-[50px] opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 xl:translate-y-12 group-hover:translate-y-0'>
                  <div className='flex gap-1 font-bold pb-3'>
                    <img
                      src='assets/img/th-1/icon-black-location-marker.svg'
                      alt='icon-black-location-marker'
                      width={17}
                      height={17}
                    />
                    Sao Paulo, Brazil
                  </div>
                  <address className='not-italic font-semibold'>
                    Line 1: House/Flat 208, Venue Street
                  </address>
                </div>
              </div>
            </div>
            {/* Location 2 */}
            {/* Location 3 */}
            <div className='group absolute hidden sm:flex gap-2 sm:top-[38%] sm:left-[38%]'>
              <div className='relative w-[50px] h-[50px]'>
                <button className='group flex justify-center items-center w-[50px] h-[50px] relative transition-all duration-300'>
                  <img
                    src='assets/img/th-1/icon-gray-location-marker.svg'
                    alt='icon-gray-location-marker'
                    width={35}
                    height={35}
                    className='opacity-100 group-hover:opacity-0 transition-all duration-300'
                  />
                  <img
                    src='assets/img/th-1/icon-orange-location-marker.svg'
                    alt='icon-gray-location-marker'
                    width={50}
                    height={50}
                    className='absolute opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300'
                  />
                </button>
                <div className='absolute bg-white rounded-[8px] p-4 text-sm w-[170px] bottom-0 right-0 xl:right-[50px] xxl:right-auto xxl:left-[50px] opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 xl:translate-y-12 group-hover:translate-y-0'>
                  <div className='flex gap-1 font-bold pb-3'>
                    <img
                      src='assets/img/th-1/icon-black-location-marker.svg'
                      alt='icon-black-location-marker'
                      width={17}
                      height={17}
                    />
                    Bamako, Mali
                  </div>
                  <address className='not-italic font-semibold'>
                    Line 1: House/Flat 208, Venue Street
                  </address>
                </div>
              </div>
            </div>
            {/* Location 3 */}
            {/* Location 4 */}
            <div className='group absolute hidden sm:flex gap-2 sm:top-[5%]  sm:left-[61%]'>
              <div className='relative w-[50px] h-[50px]'>
                <button className='group flex justify-center items-center w-[50px] h-[50px] relative transition-all duration-300'>
                  <img
                    src='assets/img/th-1/icon-gray-location-marker.svg'
                    alt='icon-gray-location-marker'
                    width={35}
                    height={35}
                    className='opacity-100 group-hover:opacity-0 transition-all duration-300'
                  />
                  <img
                    src='assets/img/th-1/icon-orange-location-marker.svg'
                    alt='icon-gray-location-marker'
                    width={50}
                    height={50}
                    className='absolute opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300'
                  />
                </button>
                <div className='absolute bg-white rounded-[8px] p-4 text-sm w-[170px] bottom-0 right-0 xl:right-[50px] xxl:right-auto xxl:left-[50px] opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 xl:translate-y-12 group-hover:translate-y-0'>
                  <div className='flex gap-1 font-bold pb-3'>
                    <img
                      src='assets/img/th-1/icon-black-location-marker.svg'
                      alt='icon-black-location-marker'
                      width={17}
                      height={17}
                    />
                    Noril'sk, Russia
                  </div>
                  <address className='not-italic font-semibold'>
                    Line 1: House/Flat 208, Venue Street
                  </address>
                </div>
              </div>
            </div>
            {/* Location 4 */}
            {/* Location 5 */}
            <div className='group absolute hidden sm:flex gap-2 sm:top-[72%] sm:left-[88%]'>
              <div className='relative w-[50px] h-[50px]'>
                <button className='group flex justify-center items-center w-[50px] h-[50px] relative transition-all duration-300'>
                  <img
                    src='assets/img/th-1/icon-gray-location-marker.svg'
                    alt='icon-gray-location-marker'
                    width={35}
                    height={35}
                    className='opacity-100 group-hover:opacity-0 transition-all duration-300'
                  />
                  <img
                    src='assets/img/th-1/icon-orange-location-marker.svg'
                    alt='icon-gray-location-marker'
                    width={50}
                    height={50}
                    className='absolute opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300'
                  />
                </button>
                <div className='absolute bg-white rounded-[8px] p-4 text-sm w-[170px] bottom-0 right-0 xl:right-[50px] xxl:right-auto xxl:left-[50px] opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 xl:translate-y-12 group-hover:translate-y-0'>
                  <div className='flex gap-1 font-bold pb-3'>
                    <img
                      src='assets/img/th-1/icon-black-location-marker.svg'
                      alt='icon-black-location-marker'
                      width={17}
                      height={17}
                    />
                    Lake Eyre, Australia
                  </div>
                  <address className='not-italic font-semibold'>
                    Line 1: House/Flat 208, Venue Street
                  </address>
                </div>
              </div>
            </div>
            {/* Location 5 */}
          </div>
          {/* Map Block */}
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default Map;
