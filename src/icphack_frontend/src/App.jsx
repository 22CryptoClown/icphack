import { Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Layout from './components/layout/Layout';
import useJOSAnimation from './hooks/useJOSAnimation';
import useUserData from './hooks/useUserData';

const ProtectedRoute = ({ user, children }) => {
  if (user.data[0].length === 0) {
    return <Navigate to="/" replace />;
  }
  return children;
};

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
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute user={user}>
              <Dashboard user={user} />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;