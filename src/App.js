import { Route, Routes } from 'react-router-dom';
import {Headers} from "./Components";
import {Cart, Home} from "./pages";

function App() {
  return (
    <div className="wrapper">
      <Headers />
      <div className="content">
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/cart" element={<Cart/>} exact />
      </Routes>
      </div>
    </div>
  );
}

export default App;
