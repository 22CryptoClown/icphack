import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Promo from '../../components/sections/landing-page/Promo';
import Content_01 from '../../components/sections/landing-page/Content_01';
import Content_02 from '../../components/sections/landing-page/Content_02';
import Service from '../../components/sections/landing-page/Service';
import Slider from '../../components/sections/landing-page/Slider';
import Hero from '../../components/sections/landing-page/Hero';
import Content_03 from '../../components/sections/landing-page/Content_03';
import Content_04 from '../../components/sections/landing-page/Content_04';
import Faq from '../../components/sections/landing-page/Faq';
import Cta from '../../components/sections/landing-page/Cta';
import { CreateUser } from '../../components/modal/User/CreateUser';
import { useState } from 'react';

const Home = ({
  showModal,
  setShowModal,
  inputUser,
  setInputUser,
  user,
  setUser,
  actionClick,
  setActionClick
}) => {
  return (
    <>
      {showModal && actionClick === "create-user" && (
        <CreateUser
          showModal
          setShowModal={setShowModal}
          inputUser={inputUser}
          setInputUser={setInputUser}
          setUser={setUser}
        />
      )}
      <div className='page-wrapper relative z-[1] bg-black text-white'>
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
        <main className='main-wrapper relative overflow-hidden'>
          <Hero />
          <Promo />
          <Content_01 />
          <Content_02 />
          <div className='global-container overflow-hidden'>
            <div className='h-[1px] w-full bg-[#363636]' />
          </div>
          <Slider />
          <Content_04 />
          <div className='global-container overflow-hidden'>
            <div className='h-[1px] w-full bg-[#363636]' />
          </div>
          <Cta />
        </main>
      </div>
    </>
  );
};

export default Home;
