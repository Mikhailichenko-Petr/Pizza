import { Route, Routes } from 'react-router-dom';

import Headers from "./Components/Headers";
import { Cart,Home } from "./pages";



function App() {
  return (
    <div className="wrapper">
      <Headers />
      <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      </div>
    </div>
  );
}

export default App