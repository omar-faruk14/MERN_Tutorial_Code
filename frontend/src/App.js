import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">

          <BrowserRouter>
          <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/hello" 
              element={<Home />} 
            />
          </Routes>
        </div>
            </BrowserRouter>
      
    </div>
  );
}

export default App;
