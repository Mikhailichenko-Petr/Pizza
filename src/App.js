import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Headers } from "./Components";
import { Cart,Home } from "./pages";
import { setPizzas } from "./redux/actions/pizzas"



function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    axios.get('http://localhost:3000/db.json')
    .then(({data})=>{dispatch(setPizzas(data.pizzas))})
  },[])

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

export default App
