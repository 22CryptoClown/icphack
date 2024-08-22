const Search = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      {/* Sidebar Search */}
      <form onSubmit={handleSubmit} className='relative h-[60px]'>
        <input
          type='search'
          name='sidebar-search'
          id='sidebar-search'
          placeholder='Type to search...'
          className='h-full w-full rounded-[50px] border border-[#E1E1E1] bg-white py-[15px] pl-16 pr-8 text-lg outline-none transition-all focus:border-colorOrangyRed'
          required=''
        />
        <button type='submit' className='absolute left-[30px] top-0 h-full'>
          <img
            src='assets/img/th-1/icon-black-search.svg'
            alt='search'
            width={20}
            height={20}
          />
        </button>
      </form>
      {/* Sidebar Search */}
    </div>
  );
};

export default Search;
