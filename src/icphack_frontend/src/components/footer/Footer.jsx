import { Link } from 'react-router-dom';
import logoNew from '../../assets/img/logo-threelancer-1.png';

const Footer = () => {
  return (
    <footer id='footer-4'>
      <div className='relative z-[1] overflow-hidden bg-black text-white'>
        {/* Section Container */}
        <div className='pb-10'>
          {/* Footer Center */}

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
