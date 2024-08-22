import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Logo from '../logo/Logo';
import { AuthClient } from '@dfinity/auth-client';
import { icphack_backend } from 'declarations/icphack_backend';

// eslint-disable-next-line react/prop-types
const Header = ({ loginCSS, light, setShowModal, setActionClick }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const actionLogin = function(authClient) {
    return new Promise((resolve, reject) => {
      authClient.login({
        identityProvider: "http://a4tbr-q4aaa-aaaaa-qaafq-cai.localhost:4943/",
        onSuccess: resolve,
        onError: reject
      })
    })
  }
  
  async function login() {
    const authClient = await AuthClient.create();

    try {
      actionLogin(authClient)
        .then(async loginRes => {
          console.log("LoginRes:", loginRes);
      
          const identity = authClient.getIdentity();
          const principal = identity.getPrincipal();
  
          const selfRes = await icphack_backend.self(principal);

          if (!selfRes?.error) {
            await icphack_backend.login(principal);
          } else {
            setShowModal(true);
            setActionClick("create-user");
          }
        })
        .catch(err => console.log(err));
    } catch(err) {
      console.log("Failed to login:", err)
    }
  }

  const logout = async () => {
    const authClient = await AuthClient.create();
    authClient.logout();
  }

  useEffect(() => {
   const getId = async () => {
    const authClient = await AuthClient.create();
    const isLoggedIn = await authClient.isAuthenticated();
    setIsLoggedIn(isLoggedIn);
    
    const identity = authClient.getIdentity();
    const principal = identity.getPrincipal();

    const selfRes = await icphack_backend.self(principal);
    
    if (!selfRes?.error) {
      setUser(selfRes);
    } else {
      // modal
    }
   }

   getId();
  }, [isLoggedIn]);

  return (
    <header
      className='site-header site-header--absolute is--white py-3'
      id='sticky-menu'
    >
      <div className='global-container'>
        <div className='flex items-center justify-between gap-x-8'>
          <Logo light={light} />
          <div></div>
          <div className='flex items-center gap-6'>
            {isLoggedIn ? (
              <div>User</div>
            ) : (
              <button className={loginCSS} onClick={login}>
                Login
              </button>
            )}
            <button className={loginCSS} onClick={logout}>
              Logout
            </button>
            <div className='block lg:hidden'>
              <button
                onClick={() => setMobileMenu(true)}
                className={`mobile-menu-trigger is-white`}
              >
                <span />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
