import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Cart from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className='min-h-screen overflow-x-hidden bg-gray-200'>

      <Routes>
        {/* Home */}
        <Route exact path='' element={
          <div>
            <Header />
            <Home />
          </div>
        } />

        {/* Cart */}
        <Route path='/checkout' element={
          <div>
            <Header />
            <Cart />
          </div>
        } />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>

    </div>
  );
}

export default App;
