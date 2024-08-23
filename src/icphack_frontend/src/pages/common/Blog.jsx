import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import Blog_Section from '../../components/sections/inner-pages/blog/Blog_Section';

const Blog = () => {
  return (
    <>
      <main className='main-wrapper relative overflow-hidden'>
        {/*...::: Breadcrumb Section Start :::... */}
        <Breadcrumb title='Our Blog' />
        {/*...::: Breadcrumb Section End :::... */}
        {/*...::: Blog Section Start :::... */}
        <Blog_Section />
        {/*...::: Blog Section End :::... */}
      </main>
    </>
  );
};

export default Blog;
