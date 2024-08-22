import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import Blog_Event from '../../components/sections/inner-pages/blog_details/Blog_Event';
import Blog_Text from '../../components/sections/inner-pages/blog_details/Blog_Text';
import Blog_Sidebar from '../../components/sidebar/blog_sidebar/Blog_Sidebar';
import Single_Post from '../../components/sections/inner-pages/blog_details/Single_Post';
import Blog_Comment from '../../components/sections/inner-pages/blog_details/Blog_Comment';
import Comment_Form from '../../components/sections/inner-pages/blog_details/Comment_Form';

const Blog_details = () => {
  return (
    <>
      <main className='main-wrapper relative overflow-hidden'>
        {/*...::: Breadcrumb Section Start :::... */}
        <Breadcrumb title='Blog Details' />
        {/*...::: Breadcrumb Section End :::... */}
        {/*...::: Blog Section Start :::... */}
        <div className='blog-section'>
          {/* Section Spacer */}
          <div className='pb-40 xl:pb-[220px]'>
            {/* Section Container */}
            <div className='global-container'>
              <div className='grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-[1fr,minmax(416px,_0.5fr)]'>
                <div className='flex flex-col gap-y-10 lg:gap-y-14 xl:gap-y-20'>
                  {/* Blog Post Details */}
                  <div className='flex flex-col gap-6'>
                    {/* Blog Post Text Area */}
                    <Blog_Text />
                    {/* Blog Post Text Area */}
                    {/* Blog Events */}
                    <Blog_Event />
                    {/* Blog Events */}
                    {/* Horizontal Separator */}
                    <div className='jos my-[30px] h-[1px] w-full bg-[#EAEDF0]' />
                    {/* Horizontal Separator */}
                    {/* Single Post Navigation */}
                    <Single_Post />
                    {/* Single Post Navigation */}
                    {/* Blog Comment */}
                    <Blog_Comment />
                  </div>
                  {/* Blog Post Details */}
                  {/* Blog Comment Form */}
                  <Comment_Form />
                  {/* Blog Comment Form */}
                </div>
                {/* Blog Aside */}
                <Blog_Sidebar />
                {/* Blog Aside */}
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </div>
        {/*...::: Blog Section End :::... */}
      </main>
    </>
  );
};

export default Blog_details;
