import { Link } from 'react-router-dom';
import logoNew from '../../assets/img/logo-threelancer-1.png';

// eslint-disable-next-line react/prop-types
const LogoDark = ({ light }) => {
  return (
    <Link to='/'>
      <img
        src={logoNew}
        alt='AIMass'
        width='200'
        height='50'
      />
    </Link>
  );
};

export default LogoDark;
