import FsLightbox from 'fslightbox-react';
import { useState } from 'react';

const Content_03 = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);
  return (
    <section id='content-section-3'>
      {/* Section Spacer */}
      <div className='py-20 xl:pb-[150px] xl:pt-[130px]'>
        {/* Section Container */}
        <div className='global-container'>
          {/* Section Content Block */}
          <div className='jos mb-10 max-w-[480px] md:mb-16 lg:mb-20 lg:max-w-2xl xl:max-w-[800px]'>
            <h2 className='font-spaceGrotesk text-4xl font-medium leading-[1.06] -tracking-[2px] text-white sm:text-[44px] lg:text-[56px] xl:text-[70px]'>
              Defenses to stay ahead of all evolving all threats
            </h2>
          </div>
          {/* Section Content Block */}
          <div
            className='jso relative overflow-hidden rounded-[10px]'
            data-jos_animation='zoom'
          >
            <img
              src='assets/img/th-4/video-bg-image.jpg'
              alt='video-bg-image'
              width={1296}
              height={600}
              className='h-80 w-full object-cover object-center lg:h-[35rem] xl:h-full'
            />
            {/* Video Play Button */}
            <button className='absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2'>
              <div
                className='relative flex h-[120px] w-[120px] items-center justify-center rounded-full border-[3px] border-colorGreen bg-black text-lg font-bold backdrop-blur-[2px] transition-all duration-300'
                onClick={() => setToggler(!toggler)}
              >
                Play
                <div className='absolute -z-[1] h-[110%] w-[110%] animate-[ping_1.5s_ease-in-out_infinite] rounded-full bg-colorGreen opacity-30'></div>
              </div>
            </button>
            {/* Video Play Button */}
          </div>
          <FsLightbox
            toggler={toggler}
            sources={['https://www.youtube.com/watch?v=3nQNiWdeH2Q']}
          />
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default Content_03;
