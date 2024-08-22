import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AuthClient } from '@dfinity/auth-client';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Layout from './components/layout/Layout';
import useJOSAnimation from './hooks/useJOSAnimation';
import { icphack_backend } from 'declarations/icphack_backend';

function App() {
  useJOSAnimation();
  const [showModal, setShowModal] = useState(false);
  const [actionClick, setActionClick] = useState("");
  const [inputUser, setInputUser] = useState({
    name: "",
    email: "",
    isWorker: false
  });
  const [user, setUser] = useState({
    data: [],
    error: []
  });

  useEffect(() => {
    const getId = async () => {
     const authClient = await AuthClient.create();
     const identity = authClient.getIdentity();
     const principal = identity.getPrincipal();
 
     const selfRes = await icphack_backend.self(principal);
     
     if (selfRes?.error.length !== 0) {
       setUser(selfRes);
     }
    }
 
    getId();
   }, []);

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
          <Route path='dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
