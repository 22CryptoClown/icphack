import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AuthClient } from '@dfinity/auth-client';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Layout from './components/layout/Layout';
import useJOSAnimation from './hooks/useJOSAnimation';
import { icphack_backend } from 'declarations/icphack_backend';
import useUserData from './hooks/useUserData';

function App() {
  useJOSAnimation();
  const [showModal, setShowModal] = useState(false);
  const [actionClick, setActionClick] = useState("");
  const [inputUser, setInputUser] = useState({
    name: "",
    email: "",
    isWorker: false
  });
  const { user, setUser } = useUserData();
  console.log("🚀 ~ App ~ user:", user)

  // useEffect(() => {
  //   const getId = async () => {
  //    const authClient = await AuthClient.create();
  //    const identity = authClient.getIdentity();
  //    let principal = identity.getPrincipal() || localStorage.getItem('principal', JSON.stringify(principal));
 
  //    const selfRes = await icphack_backend.self(principal);
     
  //    if (selfRes?.error.length !== 0) {
  //      setUser(selfRes);
  //    }
  //   }
 
  //   getId();
  //  }, [user]);

  return (
    <>
      <Routes>
        <Route
          element={
            <Layout
              showModal={showModal}
              setShowModal={setShowModal}
              inputUser={inputUser}
              setInputUser={setInputUser}
              user={user}
              setUser={setUser}
              setActionClick={setActionClick}
            />
          }
        >
          <Route
            path='/'
            element={
              <Home
                showModal={showModal}
                setShowModal={setShowModal}
                inputUser={inputUser}
                setInputUser={setInputUser}
                user={user}
                setUser={setUser}
                actionClick={actionClick}
                setActionClick={setActionClick}
              />
            }
          />
          <Route path='dashboard' element={<Dashboard user={user} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
