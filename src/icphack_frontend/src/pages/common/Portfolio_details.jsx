import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import Contact from '../../components/contact/Contact';
import Portfolio_Details from '../../components/sections/inner-pages/portfolio_details/Portfolio_Details';

const Portfolio_details = () => {
  return (
    <>
      <main className='main-wrapper relative overflow-hidden'>
        {/*...::: Breadcrumb Section Start :::... */}
        <Breadcrumb title='Portfolio Single' />
        {/*...::: Breadcrumb Section End :::... */}
        {/*...::: Portfolio Details Section Start :::... */}
        <Portfolio_Details />
        {/*...::: Portfolio Details Section End :::... */}
        {/*...::: About Contact Section Start :::... */}
        <Contact />
        {/*...::: About Contact Section End :::... */}
      </main>
    </>
  );
};

export default Portfolio_details;
