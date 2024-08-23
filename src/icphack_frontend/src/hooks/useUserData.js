import { useState, useEffect } from 'react';
import { AuthClient } from '@dfinity/auth-client';
import { icphack_backend } from 'declarations/icphack_backend';

const useUserData = () => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : { data: [], error: [] };
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const authClient = await AuthClient.create();
        const identity = authClient.getIdentity();
        let principal = identity.getPrincipal();

        if (!principal) {
          const storedPrincipal = localStorage.getItem('principal');
          principal = storedPrincipal ? JSON.parse(storedPrincipal) : null;
        }

        if (principal) {
          const selfRes = await icphack_backend.self(principal);
          if (selfRes && (!selfRes.error || selfRes.error.length === 0)) {
            setUser(selfRes);
            localStorage.setItem('user', JSON.stringify(selfRes));
          }
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (!user.data || user.data.length === 0) {
      fetchUserData();
    }
  }, [user]);

  const updateUser = (newUserData) => {
    setUser(newUserData);
    localStorage.setItem('user', JSON.stringify(newUserData));
  };

  return { user, setUser: updateUser };
};

export default useUserData;