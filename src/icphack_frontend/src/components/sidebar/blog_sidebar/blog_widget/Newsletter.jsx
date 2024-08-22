const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='rounded-[10px] border border-[#EAEDF0] p-8'>
      <div className='relative mb-[30px] inline-block pb-[10px] text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black'>
        Subscribe
      </div>
      <p className='mb-3'>
        Subscribe to our newsletter and get the latest news updates lifetime
      </p>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <input
          type='email'
          name='sidebar-newsletter'
          id='sidebar-newsletter'
          placeholder='Enter your email address'
          className='h-[60px] w-full rounded-[50px] border border-colorCodGray bg-transparent px-10 py-[15px] text-lg outline-none transition-all placeholder:text-black focus:border-colorOrangyRed'
          required=''
        />
        <button
          type='submit'
          className='button mt-5 block rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white'
        >
          Subscribe Now
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
