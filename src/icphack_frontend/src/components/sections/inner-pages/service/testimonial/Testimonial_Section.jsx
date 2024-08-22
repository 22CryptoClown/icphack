import Testimonial from '../../../../../components/widget/Testimonial';
import data from './data.json';

const Testimonial_Section = () => {
  return (
    <section className='testimonial-section'>
      {/* Section Spacer */}
      <div className='bg-black pb-40 pt-20 xl:pb-[200px] xl:pt-[130px]'>
        {/* Section Container */}
        <div className='global-container'>
          {/* Section Content Block */}
          <div className='jos mb-10 text-center lg:mb-16 xl:mb-20'>
            <div className='mx-auto max-w-[300px] lg:max-w-[600px] xl:max-w-[680px]'>
              <h2 className='text-white'>Positive feedback from our users</h2>
            </div>
          </div>
          {/* Section Content Block */}
          {/* Testimonial List */}
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {/* Testimonial Item */}
            {data.map((item, index) => (
              <Testimonial key={index} {...item} />
            ))}
            {/* Testimonial Item */}
          </div>
          {/* Testimonial List */}
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default Testimonial_Section;
