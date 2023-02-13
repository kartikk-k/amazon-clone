import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Cart from './components/Checkout/Checkout';

function App() {
  return (
    <div className='min-h-screen overflow-x-hidden bg-gray-200'>
      {/* Header */}
      <Header />

      <Routes>

        {/* Home */}
        <Route exact path='' element={<Home />} />

        {/* Cart */}
        <Route exact path='/checkout' element={<Cart />} />

      </Routes>
    </div>
  );
}

export default App;
