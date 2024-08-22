import { Link } from 'react-router-dom';
import Blog_Sidebar from '../../../../components/sidebar/blog_sidebar/Blog_Sidebar';
import data from './data.json';
import Blog_View from '../../../../components/widget/Blog_View';

const Blog_Section = () => {
  return (
    <section className='blog-section'>
      {/* Section Spacer */}
      <div className='pb-40 xl:pb-[220px]'>
        {/* Section Container */}
        <div className='global-container'>
          <div className='grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-[1fr,minmax(416px,_0.45fr)]'>
            <div className='flex flex-col gap-y-10 lg:gap-y-14 xl:gap-y-20'>
              {/* Blog Post List */}
              <ul className='grid grid-cols-2 gap-6'>
                {/* Blog Post Single Item */}
                {data.map((item, index) => (
                  <Blog_View key={index} {...item} />
                ))}
              </ul>
              {/* Blog Post List */}
              {/* Pagination */}
              <nav
                className='jos flex justify-center'
                data-jos_animation='fade'
              >
                <ul className='flex gap-x-[15px]'>
                  <li>
                    <Link
                      href='#'
                      className='group flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white text-lg font-bold transition-all duration-300 hover:bg-black hover:text-white active:bg-black'
                    >
                      <img
                        src='assets/img/th-1/icon-black-cheveron-left.svg'
                        alt='icon-black-cheveron-left'
                        width={24}
                        height={24}
                        className='group-active: h-6 w-6 opacity-100 group-hover:opacity-0'
                      />
                      <img
                        src='assets/img/th-1/icon-white-cheveron-left.svg'
                        alt='icon-white-cheveron-left'
                        width={24}
                        height={24}
                        className='absolute h-6 w-6 opacity-0 group-hover:opacity-100'
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='group flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white text-lg font-bold transition-all duration-300 hover:bg-black hover:text-white active:bg-black active:text-white'
                    >
                      1
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='group flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white text-lg font-bold transition-all duration-300 hover:bg-black hover:text-white'
                    >
                      2
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='group flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white text-lg font-bold transition-all duration-300 hover:bg-black hover:text-white'
                    >
                      3
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='group flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white text-lg font-bold transition-all duration-300 hover:bg-black hover:text-white'
                    >
                      <img
                        src='assets/img/th-1/icon-black-cheveron-right.svg'
                        alt='icon-black-cheveron-right'
                        width={24}
                        height={24}
                        className='h-6 w-6 opacity-100 group-hover:opacity-0'
                      />
                      <img
                        src='assets/img/th-1/icon-white-cheveron-right.svg'
                        alt='icon-white-cheveron-right'
                        width={24}
                        height={24}
                        className='absolute h-6 w-6 opacity-0 group-hover:opacity-100'
                      />
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* Pagination */}
            </div>
            {/* Blog Aside */}
            <Blog_Sidebar />
            {/* Blog Aside */}
          </div>
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default Blog_Section;
