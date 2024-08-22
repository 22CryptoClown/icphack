import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import useJOSAnimation from './hooks/useJOSAnimation';

function App() {
  useJOSAnimation();

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
