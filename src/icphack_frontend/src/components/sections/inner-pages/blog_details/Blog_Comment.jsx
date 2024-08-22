const Blog_Comment = () => {
  return (
    <div className='jos'>
      <div className='mb-6 text-[24px] font-bold'>2 comments on this post:</div>
      <ul className='flex flex-col gap-y-[30px]'>
        {/* Single Comment List */}
        <li className='border-b border-[#EAEDF0] last:border-b-0'>
          <div className='flex gap-x-5'>
            {/* Comment User Image */}
            <div className='h-[80px] w-[80px] overflow-hidden rounded-full'>
              <img
                src='assets/img/th-1/blog-comment-large-user-img-1.jpg'
                alt='blog-comment-large-user-img-1'
                width={80}
                height={80}
              />
            </div>
            {/* Comment User Image */}
            {/* Comment Content */}
            <div className='flex flex-1 flex-col gap-y-4'>
              {/* Comment User info */}
              <div className='flex items-center justify-between gap-x-5'>
                <div className='flex flex-col gap-y-1'>
                  <div className='font-bold'>Ricky Smith</div>
                  <div className='text-sm'>June 14, 2024</div>
                </div>
                <button className='font-bold transition-all duration-300 hover:text-colorOrangyRed'>
                  Reply
                </button>
              </div>
              {/* Comment User info */}
              {/* Comment User Text */}
              <p className='max-w-[616px]'>
                It is a long established fact that a reader will be distrac
                readable content of a page when looking at its layout. The point
                of using is that it has two.
              </p>
              {/* Comment User Text */}
            </div>
            {/* Comment Content */}
          </div>
          {/* Comment Reply */}
          <ul className='mt-[30px] flex flex-col pl-8 sm:pl-32'>
            {/* Comment Reply Item */}
            <li className='border-t border-[#EAEDF0] py-[30px]'>
              <div className='flex gap-x-5'>
                {/* Comment User Image */}
                <div className='h-[50px] w-[50px] overflow-hidden rounded-full'>
                  <img
                    src='assets/img/th-1/blog-comment-small-user-img-1.jpg'
                    alt='blog-comment-large-user-img-1'
                    width={50}
                    height={50}
                  />
                </div>
                {/* Comment User Image */}
                {/* Comment Content */}
                <div className='flex flex-1 flex-col gap-y-4'>
                  {/* Comment User info */}
                  <div className='flex items-center justify-between gap-x-5'>
                    <div className='flex flex-col gap-y-1'>
                      <div className='font-bold'>Joshua Jones</div>
                      <div className='text-sm'>June 15, 2024</div>
                    </div>
                    <button className='font-bold transition-all duration-300 hover:text-colorOrangyRed'>
                      Reply
                    </button>
                  </div>
                  {/* Comment User info */}
                  {/* Comment User Text */}
                  <p className='max-w-[536px]'>
                    It is a long established fact that a reader will be distra
                    readable content of a page when looking its layout. The
                    point of using.
                  </p>
                  {/* Comment User Text */}
                </div>
                {/* Comment Content */}
              </div>
            </li>
            {/* Comment Reply Item */}
          </ul>
          {/* Comment Reply */}
        </li>
        {/* Single Comment List */}
      </ul>
    </div>
  );
};

export default Blog_Comment;
