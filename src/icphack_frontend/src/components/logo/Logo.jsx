import { Link } from 'react-router-dom';
import logoDark from '../../assets/img/logo-dark.png';
import logoLight from '../../assets/img/logo-light.png';

// eslint-disable-next-line react/prop-types
const LogoDark = ({ light }) => {
  return (
    <Link to='/'>
      <img
        src={light ? logoLight : logoDark}
        alt='AIMass'
        width='96'
        height='24'
      />
    </Link>
  );
};

export default LogoDark;
