import { Link } from 'react-router-dom';
import useTabs from '../../../../hooks/useTabs';

const Pricing_Section = () => {
  const [activeTab, handleTab] = useTabs();
  return (
    <section className='pricing-section'>
      {/* Section Spacer */}
      <div className='pb-20 xl:pb-[150px]'>
        {/* Section Container */}
        <div className='global-container'>
          {/* Section Content Block */}
          <div className='jos mb-10 text-center lg:mb-12'>
            <div className='mx-auto max-w-md lg:max-w-3xl xl:max-w-[950px]'>
              <h2>Find a flexible plan that fits your business</h2>
            </div>
          </div>
          {/* Section Content Block */}
          {/* Pricing Block */}
          <div className='container mx-auto'>
            {/* Tab buttons */}
            <div className='jos flex justify-center' data-jos_delay='0.3'>
              <div className='inline-flex space-x-4 rounded-[50px] border-2 border-black font-semibold'>
                <button
                  className={`tab-button price-button ${
                    activeTab === 0 ? 'active' : ''
                  }`}
                  onClick={() => handleTab(0)}
                  data-tab='monthly'
                >
                  Monthly
                </button>
                <button
                  className={`tab-button price-button ${
                    activeTab === 1 ? 'active' : ''
                  }`}
                  onClick={() => handleTab(1)}
                  data-tab='annually'
                >
                  Annually
                </button>
              </div>
            </div>
            {/* Pricing Block */}
            <div className='mt-12 lg:mt-16 xl:mt-20'>
              {/* Price List */}
              {activeTab === 0 && (
                <ul
                  id='monthly'
                  className='tab-content grid grid-cols-1 gap-6 md:grid-cols-2 xxl:grid-cols-4'
                >
                  {/* Price Item */}
                  <li
                    className='jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-[30px] transition-all duration-300 ease-linear hover:bg-black'
                    data-jos_animation='flip'
                    data-jos_delay={0}
                  >
                    <h3 className='flex flex-wrap font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      Free
                    </h3>
                    <span className='text-lg text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      1 member
                    </span>
                    <div className='my-5 h-[1px] w-full bg-[#DBD6CF]' />
                    <h4 className='mb-4 flex flex-col font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]'>
                      $0
                      <span className='text-lg font-semibold'>/Per month</span>
                    </h4>
                    <p className='mb-6 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      Ideal for individuals person and small businesses just
                      getting started.
                    </p>
                    {/* Price Info List */}
                    <ul className='mb-10 flex flex-col gap-y-3'>
                      <li className='flex items-center gap-x-3 font-bold group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-orange-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        AI-Ready Data Prep
                      </li>
                      <li className='flex items-center gap-x-3 font-bold group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-orange-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Feature Engineering
                      </li>
                      <li className='flex items-center gap-x-3 font-bold group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-orange-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Classification Models
                      </li>
                    </ul>
                    {/* Price Info List */}
                    <Link
                      to='/contact'
                      className='button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white'
                    >
                      Choose the plan
                    </Link>
                  </li>
                  {/* Price Item */}
                  {/* Price Item */}
                  <li
                    className='jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-[30px] transition-all duration-300 ease-linear hover:bg-black'
                    data-jos_animation='flip'
                    data-jos_delay={0}
                  >
                    <h3 className='flex flex-wrap font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      Beginner
                    </h3>
                    <span className='text-lg text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      Up to 10 members
                    </span>
                    <div className='my-5 h-[1px] w-full bg-[#DBD6CF]' />
                    <h4 className='mb-4 flex flex-col font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]'>
                      $25
                      <span className='text-lg font-semibold'>/Per month</span>
                    </h4>
                    <p className='mb-6 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      This is an excellent option for people &amp; small
                      businesses who are starting out.
                    </p>
                    {/* Price Info List */}
                    <ul className='mb-10 flex flex-col gap-y-3'>
                      <li className='flex items-center gap-x-3 font-bold group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-orange-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        AI-Ready Data Prep
                      </li>
                      <li className='flex items-center gap-x-3 font-bold group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-orange-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Feature Engineering
                      </li>
                      <li className='flex items-center gap-x-3 font-bold group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-orange-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Classification Models
                      </li>
                      <li className='flex items-center gap-x-3 font-bold group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-orange-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Regression Models
                      </li>
                    </ul>
                    {/* Price Info List */}
                    <Link
                      to='/contact'
                      className='button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white'
                    >
                      Choose the plan
                    </Link>
                  </li>
                  {/* Price Item */}
                  {/* Price Item */}
                  <li
                    className='jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-[30px] transition-all duration-300 ease-linear hover:bg-black'
                    data-jos_animation='flip'
                    data-jos_delay={0}
                  >
                    <h3 className='flex flex-wrap font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      Starter
                    </h3>
                    <span className='text-lg text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      Up to 50 members
                    </span>
                    <div className='my-5 h-[1px] w-full bg-[#DBD6CF]' />
                    <h4 className='mb-4 flex flex-col font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]'>
                      $89
                      <span className='text-lg font-semibold'>/Per month</span>
                    </h4>
                    <p className='mb-6 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      This plan is suitable for e-commerce stores as well as
                      professional blogs.
                    </p>
                    {/* Price Info List */}
                    <ul className='mb-10 flex flex-col gap-y-3'>
                      <li className='flex items-center gap-x-3 font-bold group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-orange-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        AI-Ready Data Prep
                      </li>
                      <li className='flex items-center gap-x-3 font-bold group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-orange-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Feature Engineering
                      </li>
                      <li className='flex items-center gap-x-3 font-bold group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-orange-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Classification Models
                      </li>
                      <li className='flex items-center gap-x-3 font-bold group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-orange-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Regression Models
                      </li>
                      <li className='flex items-center gap-x-3 font-bold group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-orange-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Time Series Models
                      </li>
                    </ul>
                    {/* Price Info List */}
                    <Link
                      to='/contact'
                      className='button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white'
                    >
                      Choose the plan
                    </Link>
                  </li>
                  {/* Price Item */}
                  {/* Price Item */}
                  <li
                    className='jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-[30px] transition-all duration-300 ease-linear hover:bg-black'
                    data-jos_animation='flip'
                    data-jos_delay={0}
                  >
                    <h3 className='flex flex-wrap font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      Pro
                    </h3>
                    <span className='text-lg text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      Up to 100 members
                    </span>
                    <div className='my-5 h-[1px] w-full bg-[#DBD6CF]' />
                    <h4 className='mb-4 flex flex-col font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]'>
                      $199
                      <span className='text-lg font-semibold'>/Per month</span>
                    </h4>
                    <p className='mb-6 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      Ideal for handling complicated projects enterprise-level
                      projects, and websites.
                    </p>
                    {/* Price Info List */}
                    <ul className='mb-10 flex flex-col gap-y-3'>
                      <li className='flex items-center gap-x-3 font-bold group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-orange-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        AI-Ready Data Prep
                      </li>
                      <li className='flex items-center gap-x-3 font-bold group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-orange-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Feature Engineering
                      </li>
                      <li className='flex items-center gap-x-3 font-bold group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-orange-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Classification Models
                      </li>
                      <li className='flex items-center gap-x-3 font-bold group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-orange-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Regression Models
                      </li>
                      <li className='flex items-center gap-x-3 font-bold group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-orange-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Time Series Models
                      </li>
                      <li className='flex items-center gap-x-3 font-bold group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-orange-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Clustering models
                      </li>
                    </ul>
                    {/* Price Info List */}
                    <Link
                      to='/contact'
                      className='button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white'
                    >
                      Choose the plan
                    </Link>
                  </li>
                  {/* Price Item */}
                </ul>
              )}
              {/* Price List */}

              {/* Price List */}
              {activeTab === 1 && (
                <ul
                  id='annually'
                  className='tab-content grid grid-cols-1 gap-6 md:grid-cols-2 xxl:grid-cols-4'
                >
                  {/* Price Item */}
                  <li
                    className='jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-[30px] transition-all duration-300 ease-linear hover:bg-black'
                    data-jos_animation='flip'
                    data-jos_delay={0}
                  >
                    <h3 className='flex flex-wrap font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      Free
                    </h3>
                    <span className='text-lg text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      1 member
                    </span>
                    <div className='my-5 h-[1px] w-full bg-[#DBD6CF]' />
                    <h4 className='mb-4 flex flex-col font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]'>
                      $0
                      <span className='text-lg font-semibold'>/Annual</span>
                    </h4>
                    <p className='mb-6 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      Ideal for individuals person and small businesses just
                      getting started.
                    </p>
                    {/* Price Info List */}
                    <ul className='mb-10 flex flex-col gap-y-3'>
                      <li className='flex items-center gap-x-3 font-bold group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-orange-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        AI-Ready Data Prep
                      </li>
                      <li className='flex items-center gap-x-3 font-bold group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-orange-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Feature Engineering
                      </li>
                      <li className='flex items-center gap-x-3 font-bold group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-orange-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Classification Models
                      </li>
                    </ul>
                    {/* Price Info List */}
                    <Link
                      to='/contact'
                      className='button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white'
                    >
                      Choose the plan
                    </Link>
                  </li>
                  {/* Price Item */}
                  {/* Price Item */}
                  <li
                    className='jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-[30px] transition-all duration-300 ease-linear hover:bg-black'
                    data-jos_animation='flip'
                    data-jos_delay={0}
                  >
                    <h3 className='flex flex-wrap font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      Beginner
                    </h3>
                    <span className='text-lg text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      Up to 10 members
                    </span>
                    <div className='my-5 h-[1px] w-full bg-[#DBD6CF]' />
                    <h4 className='mb-4 flex flex-col font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]'>
                      $240
                      <span className='text-lg font-semibold'>/Annual</span>
                    </h4>
                    <p className='mb-6 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      This is an excellent option for people &amp; small
                      businesses who are starting out.
                    </p>
                    {/* Price Info List */}
                    <ul className='mb-10 flex flex-col gap-y-3'>
                      <li className='flex items-center gap-x-3 font-bold group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-orange-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        AI-Ready Data Prep
                      </li>
                      <li className='flex items-center gap-x-3 font-bold group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-orange-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Feature Engineering
                      </li>
                      <li className='flex items-center gap-x-3 font-bold group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-orange-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Classification Models
                      </li>
                      <li className='flex items-center gap-x-3 font-bold group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-orange-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Regression Models
                      </li>
                    </ul>
                    {/* Price Info List */}
                    <Link
                      to='/contact'
                      className='button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white'
                    >
                      Choose the plan
                    </Link>
                  </li>
                  {/* Price Item */}
                  {/* Price Item */}
                  <li
                    className='jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-[30px] transition-all duration-300 ease-linear hover:bg-black'
                    data-jos_animation='flip'
                    data-jos_delay={0}
                  >
                    <h3 className='flex flex-wrap font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      Starter
                    </h3>
                    <span className='text-lg text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      Up to 50 members
                    </span>
                    <div className='my-5 h-[1px] w-full bg-[#DBD6CF]' />
                    <h4 className='mb-4 flex flex-col font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]'>
                      $960
                      <span className='text-lg font-semibold'>/Annual</span>
                    </h4>
                    <p className='mb-6 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      This plan is suitable for e-commerce stores as well as
                      professional blogs.
                    </p>
                    {/* Price Info List */}
                    <ul className='mb-10 flex flex-col gap-y-3'>
                      <li className='flex items-center gap-x-3 font-bold group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-orange-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        AI-Ready Data Prep
                      </li>
                      <li className='flex items-center gap-x-3 font-bold group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-orange-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Feature Engineering
                      </li>
                      <li className='flex items-center gap-x-3 font-bold group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-orange-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Classification Models
                      </li>
                      <li className='flex items-center gap-x-3 font-bold group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-orange-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Regression Models
                      </li>
                      <li className='flex items-center gap-x-3 font-bold group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-orange-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Time Series Models
                      </li>
                    </ul>
                    {/* Price Info List */}
                    <Link
                      to='/contact'
                      className='button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white'
                    >
                      Choose the plan
                    </Link>
                  </li>
                  {/* Price Item */}
                  {/* Price Item */}
                  <li
                    className='jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-[30px] transition-all duration-300 ease-linear hover:bg-black'
                    data-jos_animation='flip'
                    data-jos_delay={0}
                  >
                    <h3 className='flex flex-wrap font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      Pro
                    </h3>
                    <span className='text-lg text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      Up to 100 members
                    </span>
                    <div className='my-5 h-[1px] w-full bg-[#DBD6CF]' />
                    <h4 className='mb-4 flex flex-col font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]'>
                      $1800
                      <span className='text-lg font-semibold'>/Annual</span>
                    </h4>
                    <p className='mb-6 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white'>
                      Ideal for handling complicated projects enterprise-level
                      projects, and websites.
                    </p>
                    {/* Price Info List */}
                    <ul className='mb-10 flex flex-col gap-y-3'>
                      <li className='flex items-center gap-x-3 font-bold group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-orange-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        AI-Ready Data Prep
                      </li>
                      <li className='flex items-center gap-x-3 font-bold group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-orange-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Feature Engineering
                      </li>
                      <li className='flex items-center gap-x-3 font-bold group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-orange-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Classification Models
                      </li>
                      <li className='flex items-center gap-x-3 font-bold group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-orange-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Regression Models
                      </li>
                      <li className='flex items-center gap-x-3 font-bold group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-orange-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Time Series Models
                      </li>
                      <li className='flex items-center gap-x-3 font-bold group-hover:text-white'>
                        <div className='relative h-[24px] w-[24px]'>
                          <img
                            src='assets/img/th-1/icon-black-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='h-full w-full object-cover'
                          />
                          <img
                            src='assets/img/th-1/icon-orange-badge-check.svg'
                            alt='icon-black-badge-check'
                            width={24}
                            height={24}
                            className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                          />
                        </div>
                        Clustering models
                      </li>
                    </ul>
                    {/* Price Info List */}
                    <Link
                      to='/contact'
                      className='button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white'
                    >
                      Choose the plan
                    </Link>
                  </li>
                  {/* Price Item */}
                </ul>
              )}
              {/* Price List */}
            </div>
            {/* Pricing Block */}
          </div>
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default Pricing_Section;
