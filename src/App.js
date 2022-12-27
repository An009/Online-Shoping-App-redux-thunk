import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart';
import Home from './Components/Home';
import LoginScreen from './Components/LoginScreen';
import Navbar from './Components/Navbar';
import Registration from './Components/Registration';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginScreen />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/register' element={<Registration />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;