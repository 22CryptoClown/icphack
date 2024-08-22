import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Layout from './components/layout/Layout';
import useJOSAnimation from './hooks/useJOSAnimation';
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
          <Route path='dashboard' element={<Dashboard user={user} />}>
            <Route path="create-projects" element={<Dashboard user={user} showCreateProject={true} />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;