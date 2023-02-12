import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div className='overflow-x-hidden'>
      {/* Header */}
      <Header />

      {/* Home */}
      <Home />
    </div>
  );
}

export default App;
