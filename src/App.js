import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Headers } from "./Components";
import { Cart,Home } from "./pages";
import { setPizzas } from "./redux/actions/pizzas"
import pizzas from './redux/redusers/pizzas';


function App() {

  const dispatch = useDispatch()
  const state = useSelector(({filters,pizzas})=>{
    return{
      sortBy: filters.sortBy,
      items: pizzas.items
    }
  })
  console.log(state);
  useEffect(()=>{
    axios.get('http://localhost:3000/db.json')
    .then(({data})=>{dispatch(setPizzas(data.pizzas))})
  },[])


  
  return (
    <div className="wrapper">
      <Headers />
      <div className="content">
      <Routes>
        <Route path="/" element={<Home data={state.items} />} exact />
        <Route path="/cart" element={<Cart/>} exact />
      </Routes>
      </div>
    </div>
  );
}

export default App
