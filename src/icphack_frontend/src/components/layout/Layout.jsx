import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = () => {
  return (
    <div className='page-wrapper relative z-[1] bg-white'>
      {/*...::: Header Start :::... */}
      <Header
        loginCSS='hidden border-b-2 border-transparent font-bold text-white transition-all duration-300 hover:border-colorGreen hover:text-colorGreen lg:inline-block'
        signupCSS='button hidden h-full rounded border-none bg-colorGreen py-3 text-base text-black after:border-none after:bg-white lg:inline-block'
        navColor='is-text-white'
        light
      />
      {/*...::: Header End :::... */}

      {/*...::: Main Start :::... */}
      <Outlet />
      {/*...::: Main End :::... */}

      <Footer />
    </div>
  );
};

export default Layout;
