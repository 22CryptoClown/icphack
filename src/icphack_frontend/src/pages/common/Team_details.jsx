import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';

const Team_details = () => {
  return (
    <>
      <main className='main-wrapper relative overflow-hidden'>
        {/*...::: Breadcrumb Section Start :::... */}
        <Breadcrumb title='Team Details' />
        {/*...::: Breadcrumb Section End :::... */}
        {/*...::: Team Details Section Start :::... */}
        <section id='team-details-section'>
          {/* Section Spacer */}
          <div className='pb-40 xl:pb-[220px]'>
            {/* Section Container */}
            <div className='global-container'>
              {/* Team Details Top Block*/}
              <div className='grid items-center gap-x-16 gap-y-16 md:grid-cols-2 lg:grid-cols-[minmax(0,_1.2fr)_auto] xl:gap-x-20 xxl:gap-x-32'>
                {/* Team Content Left Block */}
                <div
                  className='jos order-2 md:order-1'
                  data-jos_animation='fade-left'
                >
                  {/* Section Content Block */}
                  <div className='mb-6'>
                    <h2>Mr. Abraham Maslo</h2>
                  </div>
                  {/* Section Content Block */}
                  <div className='text-lg leading-[1.4] lg:text-[21px]'>
                    <p className='mb-7 last:mb-0'>
                      As the Chief AI Officer at Mthemeus, Mr. Abraham is at the
                      forefront of harnessing the power of artificial
                      intelligence (AI) to drive innovation and transform our
                      business landscape.
                    </p>
                    <p className='mb-7 last:mb-0'>
                      With a background in AI tech expert, he is leads our AI
                      strategy, overseeing the development and implementation of
                      cutting-edge AI and also machine learning initiatives.
                      With a passion for technology and a track record of
                      successful AI projects in our company's journey.
                    </p>
                    <p className='mb-7 font-semibold last:mb-0'>
                      Here's an overview of the role and responsibilities of a
                      Chief AI Officer:
                    </p>
                  </div>
                </div>
                {/* Team Content Left Block */}
                {/* team Content Right Block */}
                <div
                  className='jos order-1 md:order-2'
                  data-jos_animation='fade-right'
                >
                  {/* Team Member Item */}
                  <div className='rounded-[20px] bg-colorLinenRuffle p-[20px]'>
                    <div className='xl:h[300px] w-full overflow-hidden rounded-[20px] xxl:h-[400px]'>
                      <img
                        src='assets/img/th-1/team-member-img-1.jpg'
                        alt='team-member-img-1'
                        width={376}
                        height={400}
                        className='h-full w-full object-cover'
                      />
                    </div>
                    <div className='mt-5'>
                      <div className='mt-3 flex flex-col justify-between gap-3 xxl:flex-row xxl:flex-wrap xxl:items-center'>
                        <h4 className='text-[21px] leading-[1.33]'>
                          Chief AI Officer
                        </h4>
                        <ul className='mt-auto flex gap-x-[15px]'>
                          <li>
                            <Link
                              rel='noopener noreferrer'
                              target='_blank'
                              to='http://www.facebook.com'
                              className='group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed'
                            >
                              <img
                                src='assets/img/th-1/facebook-icon-white.svg'
                                alt='facebook'
                                width={14}
                                height={14}
                                className='opacity-100 group-hover:opacity-0'
                              />
                              <img
                                src='assets/img/th-1/facebook-icon-black.svg'
                                alt='facebook'
                                width={14}
                                height={14}
                                className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100'
                              />
                            </Link>
                          </li>
                          <li>
                            <Link
                              rel='noopener noreferrer'
                              target='_blank'
                              to='http://www.twitter.com'
                              className='group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed'
                            >
                              <img
                                src='assets/img/th-1/twitter-icon-white.svg'
                                alt='twitter'
                                width={14}
                                height={14}
                                className='opacity-100 group-hover:opacity-0'
                              />
                              <img
                                src='assets/img/th-1/twitter-icon-black.svg'
                                alt='twitter'
                                width={14}
                                height={14}
                                className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100'
                              />
                            </Link>
                          </li>
                          <li>
                            <Link
                              rel='noopener noreferrer'
                              target='_blank'
                              to='http://www.linkedin.com'
                              className='group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed'
                            >
                              <img
                                src='assets/img/th-1/linkedin-icon-white.svg'
                                alt='linkedin'
                                width={14}
                                height={14}
                                className='opacity-100 group-hover:opacity-0'
                              />
                              <img
                                src='assets/img/th-1/linkedin-icon-black.svg'
                                alt='linkedin'
                                width={14}
                                height={14}
                                className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100'
                              />
                            </Link>
                          </li>
                          <li>
                            <Link
                              rel='noopener noreferrer'
                              target='_blank'
                              to='http://www.instagram.com'
                              className='group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed'
                            >
                              <img
                                src='assets/img/th-1/instagram-icon-white.svg'
                                alt='instagram'
                                width={14}
                                height={14}
                                className='opacity-100 group-hover:opacity-0'
                              />
                              <img
                                src='assets/img/th-1/instagram-icon-black.svg'
                                alt='instagram'
                                width={14}
                                height={14}
                                className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100'
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Team Member Item */}
                </div>
                {/* team Content Right Block */}
              </div>
              {/* Team Details Top Block*/}
              {/* Horizontal Separator */}
              <div className='my-20 h-[1px] w-full bg-[#EAEDF0]' />
              {/* Horizontal Separator */}
              {/* Team Details Bottom Block*/}
              <div>
                {/* Team Member Skill List */}
                <ul className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3'>
                  {/* Team Member Skill Item */}
                  <li
                    className='jos flex flex-col gap-y-4 lg:text-[21px]'
                    data-jos_delay='0.1'
                  >
                    <div className='text-2xl lg:text-3xl font-bold leading-[1.4] -tracking-[1px]'>
                      1. AI Strategy:
                    </div>
                    <p>
                      The CAIO plays a pivotal role in shaping the
                      organization's AI strategy. They work closely with senior
                      leadership.
                    </p>
                  </li>
                  {/* Team Member Skill Item */}
                  {/* Team Member Skill Item */}
                  <li
                    className='jos flex flex-col gap-y-4 lg:text-[21px]'
                    data-jos_delay='0.2'
                  >
                    <div className='text-2xl lg:text-3xl font-bold leading-[1.4] -tracking-[1px]'>
                      2. Technology Evaluation:
                    </div>
                    <p>
                      He assess emerging AI technologies, tools, and platforms
                      to determine which ones are suitable for the organization.
                    </p>
                  </li>
                  {/* Team Member Skill Item */}
                  {/* Team Member Skill Item */}
                  <li
                    className='jos flex flex-col gap-y-4 lg:text-[21px]'
                    data-jos_delay='0.3'
                  >
                    <div className='text-2xl lg:text-3xl font-bold leading-[1.4] -tracking-[1px]'>
                      3. AI Project Oversight:
                    </div>
                    <p>
                      The CAIO oversees the planning and execution of AI &amp;
                      ML projects throughout the organization.
                    </p>
                  </li>
                  {/* Team Member Skill Item */}
                  {/* Team Member Skill Item */}
                  <li
                    className='jos flex flex-col gap-y-4 lg:text-[21px]'
                    data-jos_delay='0.4'
                  >
                    <div className='text-2xl lg:text-3xl font-bold leading-[1.4] -tracking-[1px]'>
                      4. Data Management:
                    </div>
                    <p>
                      Data is a critical component of AI, and the CAIO often
                      manages the organization's data strategy.
                    </p>
                  </li>
                  {/* Team Member Skill Item */}
                  {/* Team Member Skill Item */}
                  <li
                    className='jos flex flex-col gap-y-4 lg:text-[21px]'
                    data-jos_delay='0.5'
                  >
                    <div className='text-2xl lg:text-3xl font-bold leading-[1.4] -tracking-[1px]'>
                      5. Risk Management:
                    </div>
                    <p>
                      He is also responsible for identifying and mitigating
                      AI-related risks, including also ethical considerations
                    </p>
                  </li>
                  {/* Team Member Skill Item */}
                  {/* Team Member Skill Item */}
                  <li
                    className='jos flex flex-col gap-y-4 lg:text-[21px]'
                    data-jos_delay='0.6'
                  >
                    <div className='text-2xl lg:text-3xl font-bold leading-[1.4] -tracking-[1px]'>
                      6. Innovation:
                    </div>
                    <p>
                      The CAIO fosters a culture of innovation by encouraging
                      experimentation with AI technologies, promoting research.
                    </p>
                  </li>
                  {/* Team Member Skill Item */}
                </ul>
                {/* Team Member Skill List */}
              </div>
              {/* Team Details Bottom Block*/}
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Team Details Section End :::... */}
      </main>
    </>
  );
};

export default Team_details;
