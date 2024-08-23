import { Link } from 'react-router-dom';


import defaultLogo from '../../assets/img/treelancer.png';


// eslint-disable-next-line react/prop-types
const LogoDark = ({ light }) => {
  return (
    <Link to='/'>
      <img

        src={defaultLogo}
        alt='AIMass'
        width='120'
        height='48'

      />
    </Link>
  );
};

export default LogoDark;
