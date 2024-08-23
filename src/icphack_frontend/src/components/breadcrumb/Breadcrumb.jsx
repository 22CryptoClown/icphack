import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Breadcrumb = ({ title, link = title }) => {
  return (
    <section id='section-breadcrumb'>
      {/* Section Spacer */}
      <div className='breadcrumb-wrapper'>
        {/* Section Container */}
        <div className='global-container'>
          <div className='breadcrumb-block'>
            <h1 className='breadcrumb-title'>{title}</h1>
            <ul className='breadcrumb-nav'>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>{link}</li>
            </ul>
          </div>
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default Breadcrumb;
