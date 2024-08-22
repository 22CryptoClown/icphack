const Blog_Event = () => {
  return (
    <div className='jos flex justify-between gap-x-8'>
      <div className='flex items-center gap-x-6'>
        <button className='inline-flex items-center gap-x-1 text-[#121212]'>
          <img
            src='assets/img/th-1/icon-black-outline-thumb-up.svg'
            alt='icon-black-outline-thumb-up'
            width={24}
            height={24}
          />
          200
        </button>
        <button className='inline-flex items-center gap-x-1 text-[#121212]'>
          <img
            src='assets/img/th-1/icon-black-outline-chat-alt.svg'
            alt='icon-black-outline-chat-alt'
            width={24}
            height={24}
          />
          15
        </button>
      </div>
      <div className='flex items-center gap-x-6'>
        <button className='inline-flex items-center gap-x-1 text-[#121212]'>
          <img
            src='assets/img/th-1/icon-black-outline-share.svg'
            alt='icon-black-outline-share'
            width={24}
            height={24}
          />
        </button>
        <button className='inline-flex items-center gap-x-1 text-[#121212]'>
          <img
            src='assets/img/th-1/icon-black-outline-inbox-in.svg'
            alt='icon-black-outline-inbox-in'
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
};

export default Blog_Event;
