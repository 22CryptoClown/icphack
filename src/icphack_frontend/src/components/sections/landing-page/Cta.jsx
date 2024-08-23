import { Link } from 'react-router-dom';

import { AuthClient } from '@dfinity/auth-client';
import { useEffect, useState } from 'react';

const Cta = () => {
  const [identityProviderUrl, setIdentityProviderUrl] = useState('');

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


  return (
    <section id='cta-section'>
      <div className='global-container'>
        <div className='rounded-[10px] bg-colorGreen px-5 py-[60px] md:py-20 xl:py-[100px]'>
          {/* Section Content Block */}
          <div className='jos mx-auto max-w-[500px] text-center lg:max-w-2xl xl:max-w-[840px]'>
            <h2 className='font-spaceGrotesk text-4xl font-medium leading-[1.06] -tracking-[2px] text-black sm:text-[44px] lg:text-[56px] xl:text-[70px]'>

              Ready to Experience Freelancing on Chain

            </h2>
          </div>
          {/* Section Content Block */}
          <div
            className='jos mt-8 flex flex-wrap justify-center gap-6 md:mt-[50px]'
            data-jos_animation='fade'
          >
            <Link
              rel='noopener noreferrer'

              onClick={login}

              className='button inline-block h-full rounded border-2 border-transparent bg-black py-3 text-base text-colorGreen after:border-colorGreen after:bg-colorGreen hover:text-black'
            >
              Get Started Now
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
