import { Link } from 'react-router-dom';

const Single_Post = () => {
  return (
    <div className='jos flex flex-col justify-between md:flex-row md:gap-x-10 xl:gap-x-24 xxl:gap-x-[196px]'>
      <Link to='/blog-details' className='group text-left'>
        <span className='inline-flex items-center gap-x-3 text-[21px] font-bold transition-all duration-300 group-hover:text-colorOrangyRed'>
          <img
            src='assets/img/th-1/icon-black-cheveron-left.svg'
            alt='icon-black-cheveron-left.svg'
            width={24}
            height={24}
          />
          Previous post
        </span>
        <p>
          Amazon testing AI tools to improve product descriptions: a
          game-changer
        </p>
      </Link>
      <Link to='/blog-details' className='group text-right'>
        <span className='inline-flex flex-row-reverse items-center gap-x-3 text-[21px] font-bold transition-all duration-300 group-hover:text-colorOrangyRed'>
          <img
            src='assets/img/th-1/icon-black-cheveron-right.svg'
            alt='icon-black-cheveron-right.svg'
            width={24}
            height={24}
          />
          Next post
        </span>
        <p>
          3 best AI businesses to make money with in 2024 everyone is buzzing
        </p>
      </Link>
    </div>
  );
};

export default Single_Post;
