import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopNavBar from './components/TopNavBar';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <TopNavBar />
      <BrowserRouter>
        <Routes>
          {/* <Route exact path='home' element={} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;