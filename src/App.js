import axios from 'axios';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Headers } from "./Components";
import { Cart,Home } from "./pages";
import { setPizzas } from './redux/actions/pizzas';

function App({items,setPizzas}) {

  console.log(items,setPizzas,'props');

  useEffect(()=>{
    axios.get('http://localhost:3000/db.json')
    .then(({data})=>{setPizzas(data.pizzas)})

  },[])
  
  return (
    <div className="wrapper">
      <Headers />
      <div className="content">
      <Routes>
        <Route path="/" element={<Home data={items} />} exact />
        <Route path="/cart" element={<Cart/>} exact />
      </Routes>
      </div>
    </div>
  );
}

const mapStateToProps=(state)=>{
  console.log(state);
  return{
    items: state.pizzas.items,
    filters: state.filters
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    setPizzas: (items) => dispatch(setPizzas(items))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
