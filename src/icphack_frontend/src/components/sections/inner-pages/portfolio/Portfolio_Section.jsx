import Portfolio_Item from './component/Portfolio_Item';
import data from './data.json';

// eslint-disable-next-line react/prop-types
const Portfolio_Section = () => {
  return (
    <section id='portfolio-section'>
      <div className='pb-40 xl:pb-[220px]'>
        <div className='global-container'>
          <div className='jos mb-10 text-center lg:mb-16 xl:mb-20'>
            <div className='mx-auto md:max-w-xs lg:max-w-xl xl:max-w-[746px]'>
              <h2>Valuable AI projects for new generation</h2>
            </div>
          </div>
          <ul className='col-1 gap-6 md:columns-2'>
            {data.map((item, index) => (
              <Portfolio_Item key={index} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Portfolio_Section;
