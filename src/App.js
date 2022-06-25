import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';
import MyOrder from './components/MyOrder';
import TopNavBar from './components/TopNavBar';

function App() {
  return (
    <div className="App">
      <TopNavBar />
      <BrowserRouter>
        <Routes>
          <Route path='home' element={<Home/>} />
          <Route path='cart' element={<Cart/>} />
          <Route path='myorder' element={<MyOrder/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;