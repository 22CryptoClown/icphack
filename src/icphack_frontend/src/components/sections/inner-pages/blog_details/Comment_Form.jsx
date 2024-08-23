const Comment_Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='jos'>
      <div className='mb-6 text-[24px] font-bold'>Leave a comment:</div>
      <div className='order-1 block rounded-lg bg-white px-[30px] py-[50px] shadow-[0_4px_60px_0_rgba(0,0,0,0.1)] md:order-2'>
        {/* Comment Form */}
        <form onSubmit={handleSubmit} className='flex flex-col gap-y-5'>
          {/* Form Group */}
          <div className='grid grid-cols-1 gap-6 xl:grid-cols-2'>
            {/* Form Single Input */}
            <div className='flex flex-col gap-y-[10px]'>
              <label
                htmlFor='comment-name'
                className='text-lg font-bold leading-[1.6]'
              >
                Enter your name
              </label>
              <input
                type='text'
                name='comment-name'
                id='comment-name'
                placeholder='Adam Smith'
                className='placeholder:[#7F8995] rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-semibold text-black outline-none transition-all focus:border-colorOrangyRed'
                required=''
              />
            </div>
            {/* Form Single Input */}
            {/* Form Single Input */}
            <div className='flex flex-col gap-y-[10px]'>
              <label
                htmlFor='comment-email'
                className='text-lg font-bold leading-[1.6]'
              >
                Email address
              </label>
              <input
                type='email'
                name='comment-email'
                id='comment-email'
                placeholder='example@gmail.com'
                className='placeholder:[#7F8995] rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-semibold text-black outline-none transition-all focus:border-colorOrangyRed'
                required=''
              />
            </div>
            {/* Form Single Input */}
          </div>
          {/* Form Group */}
          {/* Form Group */}
          <div className='grid grid-cols-1 gap-6'>
            {/* Form Single Input */}
            <div className='flex flex-col gap-y-[10px]'>
              <label
                htmlFor='comment-message'
                className='text-lg font-bold leading-[1.6]'
              >
                Message
              </label>
              <textarea
                name='comment-message'
                id='comment-message'
                className='placeholder:[#7F8995] min-h-[180px] rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-semibold text-black outline-none transition-all focus:border-colorOrangyRed'
                placeholder='Write your message here...'
                required=''
                defaultValue={'                            '}
              />
            </div>
            {/* Form Single Input */}
          </div>
          <div className=''>
            <button
              type='submit'
              className='button mt-5 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white'
            >
              Send your message
            </button>
          </div>
          {/* Form Group */}
        </form>
        {/* Comment Form */}
      </div>
    </div>
  );
};

export default Comment_Form;
