import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id='hero-section'>
      <div className='relative z-[1] overflow-hidden text-center text-white'>
        {/* Section Spacer */}
        <div className="bg-[url('/assets/img/th-4/hero-bg.jpg')] bg-cover bg-no-repeat pb-20 pt-28 md:pb-[265px] md:pt-40 lg:pt-44 xl:pt-[224px]">
          {/* Section Container */}
          <div className='global-container'>

            <h1 className='jos mb-4 font-spaceGrotesk leading-none -tracking-[3px] text-white'>
              Revolutionize Your Freelance Contracts with Blockchain
            </h1>
            <div className='mx-auto max-w-[1090px]'>
              <p className='leading-[1.33] lg:text-xl xl:text-2xl pt-4'>
              Join the first-ever platform to bring freelancing contracts on-chain, ensuring transparency, security, and no hidden fees.

              </p>
            </div>
            <div className='jos mt-4 flex items-center justify-center gap-x-[10px] text-center text-base'>
              <img

                src='icp-logo.svg'

                alt='icon-green-badge-check.svg'
                width={20}
                height={20}
                className='inline-block'
              />
              <p>

                Powered by Internet Computer


              </p>
            </div>
          </div>
          {/* Section Container */}
        </div>
        {/* Background Gradient */}
        <div className='absolute left-1/2 top-[80%] -z-[1] h-[1280px] w-[1280px] -translate-x-1/2 rounded-full bg-gradient-to-t from-[#39FF14] to-[#37ff1467] blur-[250px]'></div>
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default Hero;
