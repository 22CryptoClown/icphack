import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Promo from '../../components/sections/landing-page/Promo';
import Content_01 from '../../components/sections/landing-page/Content_01';
import Content_02 from '../../components/sections/landing-page/Content_02';
import Service from '../../components/sections/landing-page/Service';
import Slider from '../../components/sections/landing-page/Slider';
import Hero from '../../components/sections/landing-page/Hero';
import Content_04 from '../../components/sections/landing-page/Content_04';
import Faq from '../../components/sections/landing-page/Faq';
import Testimonial from '../../components/sections/landing-page/Testimonial';
import Cta from '../../components/sections/landing-page/Cta';
import { CreateUser } from '../../components/modal/User/CreateUser';
import { useState } from 'react';
import Pricing_Section from '../../components/sections/landing-page/Pricing_Section';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [actionClick, setActionClick] = useState("");

  return (
    <>
      {showModal && actionClick === "create-user" && (
        <CreateUser showModal />
      )}
      <div className='page-wrapper relative z-[1] bg-black text-white'>
        <Header
          loginCSS='button hidden h-full rounded border-none bg-colorGreen py-3 text-base text-black after:border-none after:bg-white lg:inline-block'
          navColor='is-text-white'
          light
          setShowModal={setShowModal}
          setActionClick={setActionClick}
        />
        <main className='main-wrapper relative overflow-hidden'>
          <Hero />
          <Promo />
          <Content_01 />
          <Content_02 />
          <div className='global-container overflow-hidden'>
            <div className='h-[1px] w-full bg-[#363636]' />
          </div>
          {/* <Service /> */}
          <Slider />
          <Content_04 />
          <Pricing_Section />
          <div className='global-container overflow-hidden'>
            <div className='h-[1px] w-full bg-[#363636]' />
          </div>
          <Cta />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
