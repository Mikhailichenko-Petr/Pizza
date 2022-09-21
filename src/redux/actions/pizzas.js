import axios from "axios"

export const setLoaded=(items)=>({
    type: 'SET_LOADED',
    payload: items
})

export const fetchPizzas=({category,sortBy})=>(dispatch)=>{
    dispatch(setLoaded(false))
    axios.get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
    .then(({data})=>{dispatch(setPizzas(data))})
}

export const setPizzas=(items)=>({
    type: 'SET_PIZZAS',
    payload: items
})