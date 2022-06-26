import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import MyOrder from './components/MyOrder';
import TopNavBar from './components/TopNavBar';
import ProductPage from './components/ProductPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <TopNavBar />
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/myorder' element={<MyOrder/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/product/:id' element={<ProductPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;