
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import { AuthClient } from '@dfinity/auth-client';
import { icphack_backend } from 'declarations/icphack_backend';
import Logo from '../logo/Logo';
import DetailUser from '../modal/User/DetailUser';

const Header = ({
  loginCSS,
  light,
  setShowModal,
  setActionClick,
  inputUser,
  user,
  setUser
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isUserModalVisible, setIsUserModalVisible] = useState(false);
  const [identityProviderUrl, setIdentityProviderUrl] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  const isDashboard = location.pathname.includes("dashboard");

  useEffect(() => {
    const getIdentityProviderUrl = () => {
      const iiCanisterId = process.env.CANISTER_ID_INTERNET_IDENTITY;
      const dfxNetwork = process.env.DFX_NETWORK;
      
      if (!iiCanisterId) {
        console.error('II_CANISTER_ID environment variable is not set');
        return '';
      }

      switch (dfxNetwork) {
        case 'local':
          return `http://${iiCanisterId}.localhost:4943/`
        case 'ic':
          return `https://identity.internetcomputer.org/`;
        default:
          return `https://${iiCanisterId}.dfinity.network`;
      }
    };

    setIdentityProviderUrl(getIdentityProviderUrl());
  }, []);

  const actionLogin = function(authClient) {
    return new Promise((resolve, reject) => {
      if (!identityProviderUrl) {
        reject(new Error('Identity provider URL is not set'));
        return;
      }
      authClient.login({
        identityProvider: identityProviderUrl,
        onSuccess: resolve,
        onError: reject
      });
    });

  }
  
  async function login() {
    const authClient = await AuthClient.create();

    try {
      actionLogin(authClient)
        .then(async loginRes => {
          console.log("LoginRes:", loginRes);
      
          const identity = authClient.getIdentity();

          let principal = identity.getPrincipal() || localStorage.getItem('principal', JSON.stringify(principal));

  
          const selfRes = await icphack_backend.self(principal);

          if (selfRes?.data.length === 1 && selfRes?.error.length === 0) {
            await icphack_backend.login({
              principal,
              name: inputUser.name,
              isWorker: inputUser.isWorker,
              email: inputUser.email,
            });
            setUser(selfRes);
            navigate('/dashboard');
            setIsLoggedIn(true);
            localStorage.setItem('principal', JSON.stringify(principal));

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

    await authClient.logout();
    setIsLoggedIn(false);
    setUser({ data: [], error: [] });
    navigate('/');
    localStorage.removeItem('principal', JSON.stringify(principal));
  }

  const handleUserProfileClick = () => {
    setIsUserModalVisible(true);
  };

  const handleUserModalClose = () => {
    setIsUserModalVisible(false);
  };

  const handleUserUpdate = async (updatedUser) => {
    try {
      const authClient = await AuthClient.create();
      const identity = authClient.getIdentity();
      const principal = identity.getPrincipal();

      const updateUser = await icphack_backend.updateUser({
        principal: principal,
        isWorker: user.data[0]?.isWorker,
        ...updatedUser
      })
    } catch (error) {
      console.error('Failed to update user:', error);
    }
  };

  const userMenu = (
    <Menu>
      <Menu.Item key="profile" onClick={handleUserProfileClick}>User Profile</Menu.Item>
      <Menu.Item key="dashboard" onClick={() => navigate('/dashboard')}>Dashboard</Menu.Item>
      <Menu.Item key="logout" onClick={logout}>Logout</Menu.Item>
    </Menu>
  )

  useEffect(() => {
   const getId = async () => {
    const authClient = await AuthClient.create();
    const isLoggedIn = await authClient.isAuthenticated();
    setIsLoggedIn(isLoggedIn);
    

    if (isLoggedIn) {
      const identity = authClient.getIdentity();
      let principal = identity.getPrincipal() || localStorage.getItem('principal', JSON.stringify(principal));

      const selfRes = await icphack_backend.self(principal);
      
      if (selfRes?.error.length !== 0) {
        setUser(selfRes);
        localStorage.setItem('principal', JSON.stringify(principal));
      }

    }
   }

   getId();
  }, [isLoggedIn]);

  return (
    <header

      className={`site-header site-header--absolute is--white py-3 ${(isLoggedIn && isDashboard) && 'bg-[#000000]'}`}

      id='sticky-menu'
    >
      <div className='global-container'>
        <div className='flex items-center justify-between gap-x-8'>
          <Logo light={light} />
          <div></div>
          <div className='flex items-center gap-6'>

            {(isLoggedIn && (user.error?.length === 0 && user.data?.length !== 0)) ? (
              <Dropdown overlay={userMenu} trigger={['click']}>
                <UserOutlined
                  style={{
                    fontSize: "24px",
                    padding: "8px",
                    backgroundColor: "#39FF14",
                    borderRadius: "8px",
                    color: "#212121",
                    cursor: "pointer"
                  }}
                />
              </Dropdown>

            ) : (
              <button className={loginCSS} onClick={login}>
                Login
              </button>
            )}

          </div>
        </div>
      </div>
      <DetailUser
        visible={isUserModalVisible}
        onClose={handleUserModalClose}
        user={user}
        onUpdate={handleUserUpdate}
      />

    </header>
  );
};


export default Header;

