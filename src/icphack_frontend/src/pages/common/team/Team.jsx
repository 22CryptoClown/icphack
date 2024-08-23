import { Link } from 'react-router-dom';
import Breadcrumb from '../../../components/breadcrumb/Breadcrumb';
import data from './data.json';
import Member from '../../../components/widget/team/Member';

const Team = () => {
  return (
    <>
      <main className='main-wrapper relative overflow-hidden'>
        {/*...::: Breadcrumb Section Start :::... */}
        <Breadcrumb title='Our Team' />
        {/*...::: Breadcrumb Section End :::... */}
        {/*...::: Team Section Start :::... */}
        <section id='team-section'>
          {/* Section Spacer */}
          <div className='pb-40 xl:pb-[220px]'>
            {/* Section Container */}
            <div className='global-container'>
              {/* Section Content Block */}
              <div className='jos mb-10 text-center lg:mb-16 xl:mb-20'>
                <div className='mx-auto md:max-w-xs lg:max-w-xl xl:max-w-[746px]'>
                  <h2>Our team consists of a group of talents</h2>
                </div>
              </div>
              {/* Section Content Block */}
              {/* Team Member List */}
              <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                {/* Team Member Item */}
                {data.map((member, index) => (
                  <Member key={index} {...member} />
                ))}
                {/* Team Member Item */}

                {/* Inviting */}
                <li
                  className='jos min-h-[400px] rounded-[20px] bg-colorLinenRuffle p-[20px]'
                  data-jos_animation='flip'
                  data-jos_delay='0.9'
                >
                  <div className='flex h-full flex-col items-center justify-center text-center'>
                    <div className='text-3xl font-semibold leading-[1.2] tracking-[-1px] text-black xl:text-[40px]'>
                      You want to join our amazing team
                    </div>
                    <p className='mb-6 mt-4 text-lg leading-[1.4] xl:mb-[30px] xl:text-[21px]'>
                      Specify the job you are applying for and introduce
                      yourself
                    </p>
                    <Link
                      to='/team'
                      className='button block w-full rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white'
                    >
                      Join our team
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Team Section End :::... */}
      </main>
    </>
  );
};

export default Team;
