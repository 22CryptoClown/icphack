import { Link } from 'react-router-dom';

const Category = () => {
  return (
    <div className='rounded-[10px] border border-[#EAEDF0] p-8'>
      <div className='relative mb-[30px] inline-block pb-[10px] text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black'>
        Blog Categories
      </div>
      {/* Blog Categories List */}
      <ul>
        <li className='mb-6 last:mb-0'>
          <Link
            to='/blog-details'
            className='text-black hover:text-colorOrangyRed'
          >
            Business &amp; Marketing (18)
          </Link>
        </li>
        <li className='mb-6 last:mb-0'>
          <Link
            to='/blog-details'
            className='text-black hover:text-colorOrangyRed'
          >
            Technology (05)
          </Link>
        </li>
        <li className='mb-6 last:mb-0'>
          <Link
            to='/blog-details'
            className='text-black hover:text-colorOrangyRed'
          >
            Art &amp; Beauty (23)
          </Link>
        </li>
        <li className='mb-6 last:mb-0'>
          <Link
            to='/blog-details'
            className='text-black hover:text-colorOrangyRed'
          >
            Digital Agency (10)
          </Link>
        </li>
      </ul>
      {/* Blog Categories List */}
    </div>
  );
};

export default Category;
