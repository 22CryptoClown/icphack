import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Portfolio_Item = ({ title, img, link }) => {
  return (
    <li
      className='jos group mb-10 flex flex-col gap-y-6 last:mb-0'
      data-jos_delay='0.2'
    >
      <Link
        to={link}
        className='block w-full overflow-hidden rounded-[10px] group-odd:h-80 group-even:h-96 lg:group-odd:h-[550px] lg:group-even:h-[750px]'
      >
        <img
          src={img}
          alt='portfolio-img-2'
          width={636}
          height={550}
          className='h-full w-full scale-100 object-cover transition-all duration-300 group-hover:scale-105'
        />
      </Link>
      <Link
        to={link}
        className='flex items-center justify-between gap-x-6 text-xl font-bold leading-[1.4] hover:text-colorOrangyRed lg:gap-x-14 lg:text-2xl xl:gap-x-20 xl:text-3xl'
      >
        <span className='flex-1'>{title}</span>
        <div className='h-8 w-8 lg:h-[45px] lg:w-[45px]'>
          <img
            src='assets/img/th-1/icon-black-long-arrow-right.svg'
            alt='icon-black-long-arrow-right.svg'
            width={45}
            height={45}
          />
        </div>
      </Link>
    </li>
  );
};

export default Portfolio_Item;
