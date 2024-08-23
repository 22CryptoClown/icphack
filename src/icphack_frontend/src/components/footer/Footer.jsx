import { Link } from 'react-router-dom';
import logoNew from '../../assets/img/logo-threelancer-1.png';

const Footer = () => {
  return (
    <footer id='footer-4'>
      <div className='relative z-[1] overflow-hidden bg-black text-white'>
        {/* Section Container */}
        <div className='pb-10'>
          {/* Footer Center */}
<<<<<<< HEAD
          <div className='mt-[100px]'>
            {/* Section Container */}
            <div className='global-container'>
              {/* Footer Widgets Block */}
              <div className='grid gap-x-10 gap-y-[60px] sm:grid-cols-2 md:grid-cols-4 lg:flex lg:justify-between lg:gap-x-20'>
                {/* Footer Widget */}
                <div className='flex flex-col gap-y-6'>
                  {/* Footer Title */}
                  <h4 className='text-[21px] font-semibold capitalize text-white'>
                    Primary Pages
                  </h4>
                  {/* Footer Title */}
                  {/* Footer Navbar */}
                  <ul className='flex flex-col gap-y-[10px] capitalize'>
                    <li>
                      <Link
                        onClick={()=>{
                          const section = document.querySelector( '#home' );
                          section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
                        }}
                        className='transition-all duration-300 ease-linear hover:text-colorGreen'
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={()=>{
                          const section = document.querySelector( '#service' );
                          section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
                        }}
                        className='transition-all duration-300 ease-linear hover:text-colorGreen'
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={()=>{
                          const section = document.querySelector( '#pricing' );
                          section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
                        }}
                        className='transition-all duration-300 ease-linear hover:text-colorGreen'
                      >
                        Pricing
                      </Link>
                    </li>
                    
                  </ul>
                </div>
                {/* Footer Widget Item */}
                {/* Footer Widget Item */}
                <div className='flex flex-col gap-y-6'>
                  {/* Footer Title */}
                  <h4 className='text-[21px] font-semibold capitalize text-white'>
                    Socials
                  </h4>
                  {/* Footer Title */}
                  {/* Footer Navbar */}
                  <ul className='flex flex-col gap-y-[15px] capitalize'>
                    <li>
                      <Link
                        rel='noopener noreferrer'
                        target='_blank'
                        to='http://www.facebook.com'
                        className='group flex items-center gap-x-3'
                      >
                        <div className='flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-white bg-opacity-10 transition-all duration-300 group-hover:bg-green-600'>
                          <img
                            src='assets/img/th-1/facebook-icon-white.svg'
                            alt='facebook-icon-white'
                            width={14}
                            height={14}
                          />
                        </div>
                        <span className='inline-block flex-1'>Facebook</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        rel='noopener noreferrer'
                        target='_blank'
                        to='http://www.twitter.com'
                        className='group flex items-center gap-x-3'
                      >
                        <div className='flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-white bg-opacity-10 transition-all duration-300 group-hover:bg-green-600'>
                          <img
                            src='assets/img/th-1/twitter-icon-white.svg'
                            alt='twitter-icon-white'
                            width={14}
                            height={14}
                          />
                        </div>
                        <span className='inline-block flex-1'>Twitter</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        rel='noopener noreferrer'
                        target='_blank'
                        to='http://www.instagram.com'
                        className='group flex items-center gap-x-3'
                      >
                        <div className='flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-white bg-opacity-10 transition-all duration-300 group-hover:bg-green-600'>
                          <img
                            src='assets/img/th-1/instagram-icon-white.svg'
                            alt='instagram-icon-white'
                            width={14}
                            height={14}
                          />
                        </div>
                        <span className='inline-block flex-1'>Instagram</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        rel='noopener noreferrer'
                        target='_blank'
                        to='http://www.linkedin.com'
                        className='group flex items-center gap-x-3'
                      >
                        <div className='flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-white bg-opacity-10 transition-all duration-300 group-hover:bg-green-600'>
                          <img
                            src='assets/img/th-1/linkedin-icon-white.svg'
                            alt='linkedin-icon-white'
                            width={14}
                            height={14}
                          />
                        </div>
                        <span className='inline-block flex-1'>Linkedin</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* Footer Widget Item */}
              </div>
              {/* Footer Widgets Block */}
            </div>
            {/* Section Container */}
          </div>
=======

>>>>>>> 29a35276f87bef3ee3e7f10fc8f26fa20410f519
          {/* Footer Center */}
          {/* Footer Separator */}
          <div className='global-container'>
            <div className='mb-10 mt-[60px] h-[1px] w-full bg-white opacity-10' />
          </div>
          {/* Footer Separator */}
          {/* Footer Bottom */}
          <div>
            <div className='global-container'>
              <div className='flex flex-wrap items-center justify-center gap-5 text-center md:justify-between md:text-left'>
                <Link to='/'>
                  <img
                    src={logoNew}
                    alt='logo-light'
                    width={111}
                    height={23}
                  />
                </Link>
                <p>
                  © Copyright {new Date().getFullYear()}, All Rights Reserved by
                  Threelancer
                </p>
              </div>
            </div>
          </div>
          {/* Footer Bottom */}
        </div>
        {/* Section Container */}
        {/* Background Gradient */}
        <div className='absolute left-1/2 top-[80%] -z-[1] h-[1280px] w-[1280px] -translate-x-1/2 rounded-full bg-gradient-to-t from-[#39FF14] to-[#37ff1460] blur-[150px]'></div>
      </div>
    </footer>
  );
};

export default Footer;
