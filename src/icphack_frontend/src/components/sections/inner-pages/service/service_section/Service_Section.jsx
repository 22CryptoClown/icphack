import Service_Block from '../../../../../components/widget/Service_Block';
import data from './data.json';

const Service_Section = () => {
  return (
    <section id='section-service'>
      {/* Section Spacer */}
      <div className='pb-20 xl:pb-[150px]'>
        {/* Section Container */}
        <div className='global-container'>
          {/* Section Content Block */}
          <div className='jos mb-10 text-center lg:mb-16 xl:mb-20'>
            <div className='mx-auto max-w-md lg:max-w-xl xl:max-w-[950px]'>
              <h2>We provide smart AI solutions for all tasks</h2>
            </div>
          </div>
          {/* Section Content Block */}
          {/* Service List */}
          <ul className='jos grid grid-cols-1 gap-[2px] overflow-hidden rounded-[10px] border-2 border-black bg-black sm:grid-cols-2 lg:grid-cols-4'>
            {/* Service Item */}
            {data.map((item, index) => (
              <Service_Block key={index} {...item} />
            ))}
            {/* Service Item */}
          </ul>
          {/* Service List */}
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default Service_Section;
