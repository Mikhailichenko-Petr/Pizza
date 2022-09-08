import axios from "axios"


export const fetchPizzas=()=> dispatch=>{
    axios.get('http://localhost:3001/pizzas')
    .then(({data})=>{dispatch(setPizzas(data))})
}/// React-Thunk

export const setPizzas=(items)=>({
    type: 'SET_PIZZAS',
    payload: items
})