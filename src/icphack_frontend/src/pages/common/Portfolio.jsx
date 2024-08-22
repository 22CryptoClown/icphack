import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import Portfolio_Section from '../../components/sections/inner-pages/portfolio/Portfolio_Section';

const Portfolio = () => {
  return (
    <>
      <main className='main-wrapper relative overflow-hidden'>
        {/*...::: Breadcrumb Section Start :::... */}
        <Breadcrumb title='Our Portfolio' link='Portfolio' />
        {/*...::: Breadcrumb Section End :::... */}
        {/*...::: Portfolio Section Start :::... */}
        <Portfolio_Section />
        {/*...::: Portfolio Section End :::... */}
      </main>
    </>
  );
};

export default Portfolio;
