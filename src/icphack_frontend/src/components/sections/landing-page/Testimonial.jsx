import { Link } from 'react-router-dom';

const Testimonial = () => {
  return (
    <section id='testimonial-section'>
      {/* Section Spacer */}
      <div className='pb-20 xl:pb-[150px]'>
        {/* Section Container */}
        <div className='global-container'>
          <div className='mb-10 flex flex-wrap items-center justify-between gap-8 md:mb-16 lg:mb-20'>
            {/* Section Content Block */}
            <div className='jos max-w-[480px] lg:max-w-2xl xl:max-w-[840px]'>
              <h2 className='font-spaceGrotesk text-4xl font-medium leading-[1.06] -tracking-[2px] text-white sm:text-[44px] lg:text-[56px] xl:text-[70px]'>
                What people are saying about AI cybersecurity
              </h2>
            </div>
            {/* Section Content Block */}
            <Link
              rel='noopener noreferrer'
              to='#'
              className='button inline-block h-full rounded border-none bg-colorGreen py-3 text-base text-black after:border-none after:bg-white'
            >
              Read All Trustpilot Reviews
            </Link>
          </div>
        </div>
        {/* Section Container */}
        {/* Testimonial List */}
        <div className='horizontal-slide-from-right-to-left grid w-[200%] grid-flow-col gap-6'>
          {/* Testimonial Item */}
          <div className='flex w-[415px] flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white'>
            <div className='block'>
              <img
                src='assets/img/th-4/icon-green-rating.svg'
                alt='rating'
                width={146}
                height={25}
              />
            </div>
            <p>
              “This AI SaaS tool has revolutionized the way we process and
              analyze data. This is a game-changer for our business.”
            </p>
            <div className='flex items-center gap-x-4'>
              <div className='h-[60px] w-[60px] overflow-hidden rounded-full'>
                <img
                  src='assets/img/th-1/testimonial-img-1.jpg'
                  alt='testimonial-img'
                  width={60}
                  height={60}
                  className='h-full w-full object-cover object-center'
                />
              </div>
              <div className='flex flex-col gap-y-1'>
                <span className='block text-lg font-semibold leading-[1.6]'>
                  Max Weber
                </span>
                <span className='block text-sm font-light leading-[1.4]'>
                  HR Manager
                </span>
              </div>
            </div>
          </div>
          {/* Testimonial Item */}
          {/* Testimonial Item */}
          <div className='flex w-[415px] flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white'>
            <div className='block'>
              <img
                src='assets/img/th-4/icon-green-rating.svg'
                alt='rating'
                width={146}
                height={25}
              />
            </div>
            <p>
              "It answers immediately, and we've seen a significant reduction in
              response time. Our customers love it and so do we!"
            </p>
            <div className='flex items-center gap-x-4'>
              <div className='h-[60px] w-[60px] overflow-hidden rounded-full'>
                <img
                  src='assets/img/th-1/testimonial-img-2.jpg'
                  alt='testimonial-img'
                  width={60}
                  height={60}
                  className='h-full w-full object-cover object-center'
                />
              </div>
              <div className='flex flex-col gap-y-1'>
                <span className='block text-lg font-semibold leading-[1.6]'>
                  Douglas Smith
                </span>
                <span className='block text-sm font-light leading-[1.4]'>
                  Businessman
                </span>
              </div>
            </div>
          </div>
          {/* Testimonial Item */}
          {/* Testimonial Item */}
          <div className='flex w-[415px] flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white'>
            <div className='block'>
              <img
                src='assets/img/th-4/icon-green-rating.svg'
                alt='rating'
                width={146}
                height={25}
              />
            </div>
            <p>
              "It is accurate, fast and supports multiple languages support. It
              is a must for any international business success."
            </p>
            <div className='flex items-center gap-x-4'>
              <div className='h-[60px] w-[60px] overflow-hidden rounded-full'>
                <img
                  src='assets/img/th-1/testimonial-img-3.jpg'
                  alt='testimonial-img'
                  width={60}
                  height={60}
                  className='h-full w-full object-cover object-center'
                />
              </div>
              <div className='flex flex-col gap-y-1'>
                <span className='block text-lg font-semibold leading-[1.6]'>
                  Abraham Maslo
                </span>
                <span className='block text-sm font-light leading-[1.4]'>
                  Founder @ Marketing Company
                </span>
              </div>
            </div>
          </div>
          {/* Testimonial Item */}
          {/* Testimonial Item */}
          <div className='flex w-[415px] flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white'>
            <div className='block'>
              <img
                src='assets/img/th-4/icon-green-rating.svg'
                alt='rating'
                width={146}
                height={25}
              />
            </div>
            <p>
              "Security is a top concern for us, and AI SaaS takes it seriously.
              It's a reassuring layer of protection for our organization."
            </p>
            <div className='flex items-center gap-x-4'>
              <div className='h-[60px] w-[60px] overflow-hidden rounded-full'>
                <img
                  src='assets/img/th-1/testimonial-img-4.jpg'
                  alt='testimonial-img'
                  width={60}
                  height={60}
                  className='h-full w-full object-cover object-center'
                />
              </div>
              <div className='flex flex-col gap-y-1'>
                <span className='block text-lg font-semibold leading-[1.6]'>
                  Jack Fayol
                </span>
                <span className='block text-sm font-light leading-[1.4]'>
                  HR Manager
                </span>
              </div>
            </div>
          </div>
          {/* Testimonial Item */}
          {/* Testimonial Item */}
          <div className='flex w-[415px] flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white'>
            <div className='block'>
              <img
                src='assets/img/th-4/icon-green-rating.svg'
                alt='rating'
                width={146}
                height={25}
              />
            </div>
            <p>
              "We were concerned about integrating their APIs were well
              documented, and their support team was super cool."
            </p>
            <div className='flex items-center gap-x-4'>
              <div className='h-[60px] w-[60px] overflow-hidden rounded-full'>
                <img
                  src='assets/img/th-1/testimonial-img-5.jpg'
                  alt='testimonial-img'
                  width={60}
                  height={60}
                  className='h-full w-full object-cover object-center'
                />
              </div>
              <div className='flex flex-col gap-y-1'>
                <span className='block text-lg font-semibold leading-[1.6]'>
                  Karen Lynn
                </span>
                <span className='block text-sm font-light leading-[1.4]'>
                  Software Engineer
                </span>
              </div>
            </div>
          </div>
          {/* Testimonial Item */}
          {/* Testimonial Item */}
          <div className='flex w-[415px] flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white'>
            <div className='block'>
              <img
                src='assets/img/th-4/icon-green-rating.svg'
                alt='rating'
                width={146}
                height={25}
              />
            </div>
            <p>
              "The return on investment has exceeded our expectations. it's an
              investment in the future of our business."
            </p>
            <div className='flex items-center gap-x-4'>
              <div className='h-[60px] w-[60px] overflow-hidden rounded-full'>
                <img
                  src='assets/img/th-1/testimonial-img-6.jpg'
                  alt='testimonial-img'
                  width={60}
                  height={60}
                  className='h-full w-full object-cover object-center'
                />
              </div>
              <div className='flex flex-col gap-y-1'>
                <span className='block text-lg font-semibold leading-[1.6]'>
                  Henry Ochi
                </span>
                <span className='block text-sm font-light leading-[1.4]'>
                  Bank Manager
                </span>
              </div>
            </div>
          </div>
          {/* Testimonial Item */}
          {/* Testimonial Item */}
          <div className='flex w-[415px] flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white'>
            <div className='block'>
              <img
                src='assets/img/th-4/icon-green-rating.svg'
                alt='rating'
                width={146}
                height={25}
              />
            </div>
            <p>
              “This AI SaaS tool has revolutionized the way we process and
              analyze data. This is a game-changer for our business.”
            </p>
            <div className='flex items-center gap-x-4'>
              <div className='h-[60px] w-[60px] overflow-hidden rounded-full'>
                <img
                  src='assets/img/th-1/testimonial-img-1.jpg'
                  alt='testimonial-img'
                  width={60}
                  height={60}
                  className='h-full w-full object-cover object-center'
                />
              </div>
              <div className='flex flex-col gap-y-1'>
                <span className='block text-lg font-semibold leading-[1.6]'>
                  Max Weber
                </span>
                <span className='block text-sm font-light leading-[1.4]'>
                  HR Manager
                </span>
              </div>
            </div>
          </div>
          {/* Testimonial Item */}
          {/* Testimonial Item */}
          <div className='flex w-[415px] flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white'>
            <div className='block'>
              <img
                src='assets/img/th-4/icon-green-rating.svg'
                alt='rating'
                width={146}
                height={25}
              />
            </div>
            <p>
              "It answers immediately, and we've seen a significant reduction in
              response time. Our customers love it and so do we!"
            </p>
            <div className='flex items-center gap-x-4'>
              <div className='h-[60px] w-[60px] overflow-hidden rounded-full'>
                <img
                  src='assets/img/th-1/testimonial-img-2.jpg'
                  alt='testimonial-img'
                  width={60}
                  height={60}
                  className='h-full w-full object-cover object-center'
                />
              </div>
              <div className='flex flex-col gap-y-1'>
                <span className='block text-lg font-semibold leading-[1.6]'>
                  Douglas Smith
                </span>
                <span className='block text-sm font-light leading-[1.4]'>
                  Businessman
                </span>
              </div>
            </div>
          </div>
          {/* Testimonial Item */}
          {/* Testimonial Item */}
          <div className='flex w-[415px] flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white'>
            <div className='block'>
              <img
                src='assets/img/th-4/icon-green-rating.svg'
                alt='rating'
                width={146}
                height={25}
              />
            </div>
            <p>
              "It is accurate, fast and supports multiple languages support. It
              is a must for any international business success."
            </p>
            <div className='flex items-center gap-x-4'>
              <div className='h-[60px] w-[60px] overflow-hidden rounded-full'>
                <img
                  src='assets/img/th-1/testimonial-img-3.jpg'
                  alt='testimonial-img'
                  width={60}
                  height={60}
                  className='h-full w-full object-cover object-center'
                />
              </div>
              <div className='flex flex-col gap-y-1'>
                <span className='block text-lg font-semibold leading-[1.6]'>
                  Abraham Maslo
                </span>
                <span className='block text-sm font-light leading-[1.4]'>
                  Founder @ Marketing Company
                </span>
              </div>
            </div>
          </div>
          {/* Testimonial Item */}
        </div>
        {/* Testimonial List */}
      </div>
    </section>
  );
};

export default Testimonial;
