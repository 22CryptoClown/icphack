import { Link } from 'react-router-dom';

const Post = () => {
  return (
    <div className='rounded-[10px] border border-[#EAEDF0] p-8'>
      <div className='relative mb-[30px] inline-block pb-[10px] text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black'>
        Recent Posts
      </div>
      {/* Blog Recent Post List */}
      <ul className='flex flex-col gap-y-6'>
        <li className='group flex flex-col items-center gap-x-4 gap-y-4 sm:flex-row'>
          <Link
            to='/blog-details'
            className='inline-block h-[150px] w-full overflow-hidden rounded-[5px] sm:h-[100px] sm:w-[150px]'
          >
            <img
              src='assets/img/th-1/blog-recent-img-1.jpg'
              alt='blog-recent-img-1'
              width={150}
              height={130}
              className='h-full w-full scale-100 object-cover transition-all duration-300 group-hover:scale-105'
            />
          </Link>
          <div className='flex w-full flex-col gap-y-3 sm:w-auto sm:flex-1'>
            <Link
              to='/blog-details'
              className='flex items-center gap-[10px] text-sm hover:text-colorOrangyRed'
            >
              <div className='h-6 w-6'>
                <img
                  src='assets/img/th-1/icon-black-calendar.svg'
                  alt='icon-black-calendar'
                  width={24}
                  height={24}
                  className='h-full w-full object-cover'
                />
              </div>
              June 12, 2024
            </Link>
            <Link
              to='/blog-details'
              className='text-base font-bold hover:text-colorOrangyRed'
            >
              6 profitable AI tech businesses to start
            </Link>
          </div>
        </li>
        <li className='group flex flex-col items-center gap-x-4 gap-y-4 sm:flex-row'>
          <Link
            to='/blog-details'
            className='inline-block h-[150px] w-full overflow-hidden rounded-[5px] sm:h-[100px] sm:w-[150px]'
          >
            <img
              src='assets/img/th-1/blog-recent-img-2.jpg'
              alt='blog-recent-img-2'
              width={150}
              height={130}
              className='h-full w-full scale-100 object-cover transition-all duration-300 group-hover:scale-105'
            />
          </Link>
          <div className='flex w-full flex-col gap-y-3 sm:w-auto sm:flex-1'>
            <Link
              to='/blog-details'
              className='flex items-center gap-[10px] text-sm hover:text-colorOrangyRed'
            >
              <div className='h-6 w-6'>
                <img
                  src='assets/img/th-1/icon-black-calendar.svg'
                  alt='icon-black-calendar'
                  width={24}
                  height={24}
                  className='h-full w-full object-cover'
                />
              </div>
              June 13, 2024
            </Link>
            <Link
              to='/blog-details'
              className='text-base font-bold hover:text-colorOrangyRed'
            >
              Why i decided to sell my B2B SaaS AI business
            </Link>
          </div>
        </li>
        <li className='group flex flex-col items-center gap-x-4 gap-y-4 sm:flex-row'>
          <Link
            to='/blog-details'
            className='inline-block h-[150px] w-full overflow-hidden rounded-[5px] sm:h-[100px] sm:w-[150px]'
          >
            <img
              src='assets/img/th-1/blog-recent-img-3.jpg'
              alt='blog-recent-img-3'
              width={150}
              height={130}
              className='h-full w-full scale-100 object-cover transition-all duration-300 group-hover:scale-105'
            />
          </Link>
          <div className='flex w-full flex-col gap-y-3 sm:w-auto sm:flex-1'>
            <Link
              to='/blog-details'
              className='flex items-center gap-[10px] text-sm hover:text-colorOrangyRed'
            >
              <div className='h-6 w-6'>
                <img
                  src='assets/img/th-1/icon-black-calendar.svg'
                  alt='icon-black-calendar'
                  width={24}
                  height={24}
                  className='h-full w-full object-cover'
                />
              </div>
              June 07, 2024
            </Link>
            <Link
              to='/blog-details'
              className='text-base font-bold hover:text-colorOrangyRed'
            >
              8 AI tools that will your streamline workflows
            </Link>
          </div>
        </li>
      </ul>
      {/* Blog Recent Post List */}
    </div>
  );
};

export default Post;
