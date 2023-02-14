import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Cart from './pages/Checkout';

function App() {
  return (
    <div className='min-h-screen overflow-x-hidden bg-gray-200'>
      {/* Header */}

      <div>

        <Header />
        <Routes>

          {/* Home */}
          <Route exact path='' element={<Home />} />

          {/* Cart */}
          <Route path='/checkout' element={<Cart />} />

        </Routes>
      </div>

      <div>
        <Routes>
          {/* <Route path='/login' element={<} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
