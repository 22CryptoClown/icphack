import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = ({
  setShowModal,
  inputUser,
  user,
  setUser,
  setActionClick
}) => {
  return (
    <div className='page-wrapper relative z-[1] bg-white'>
      <Header
        loginCSS='button hidden h-full rounded border-none bg-colorGreen py-2 text-base text-black after:border-none after:bg-white lg:inline-block'
        navColor='is-text-white'
        light
        setShowModal={setShowModal}
        setActionClick={setActionClick}
        inputUser={inputUser}
        user={user}
        setUser={setUser}
      />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
