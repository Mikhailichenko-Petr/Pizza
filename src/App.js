import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import {Headers} from "./Components";
import {Cart, Home} from "./pages";

function App() {
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/db.json')
    .then(res=>res.json())
    .then(data=>setData(data.pizzas))
  },[])
  console.log(data);
  return (
    <div className="wrapper">
      <Headers />
      <div className="content">
      <Routes>
        <Route path="/" element={<Home data={data} />} exact />
        <Route path="/cart" element={<Cart/>} exact />
      </Routes>
      </div>
    </div>
  );
}

export default App;
