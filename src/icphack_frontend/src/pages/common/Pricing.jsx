import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import Faq_Section from '../../components/sections/inner-pages/pricing/Faq_Section';
import Pricing_Section from '../../components/sections/inner-pages/pricing/Pricing_Section';

const Pricing = () => {
  return (
    <>
      <main className='main-wrapper relative overflow-hidden'>
        {/*...::: Breadcrumb Section Start :::... */}
        <Breadcrumb title='Pricing Plans' link='Pricing' />
        {/*...::: Breadcrumb Section End :::... */}
        {/*...::: Pricing Section Start :::... */}
        <Pricing_Section />
        {/*...::: Pricing Section End :::... */}
        {/*...::: FAQ Section Start :::... */}
        <Faq_Section />
        {/*...::: FAQ Section End :::... */}
      </main>
    </>
  );
};

export default Pricing;
