import axios from "axios"
import React from "react"
import { FiltersReduserType } from "../redusers/filters/type"
import { ActionTypesEnum } from "../type"

export type SetLoadedType={
    type: ActionTypesEnum.SET_LOADED
    payload: boolean
}

export type SetPizzaType={
    type: ActionTypesEnum.SET_PIZZAS
    payload: DataType
}

export interface DataType{
    category:number,
    id:number
    imageUrl:string
    name:string
    price:number
    rating:number
    sizes:number[]
    types:number[]
}

export const setLoaded=(items:boolean):SetLoadedType=>({
    type: ActionTypesEnum.SET_LOADED,
    payload: items,
})
//@ts-ignore
export const fetchPizzas:React.FC<FiltersReduserType>=({category,sortBy})=>(dispatch)=>{
    dispatch(setLoaded(false))
    axios.get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
    .then(({data})=>{dispatch(setPizzas(data))})
    
}

export const setPizzas=(items:DataType):SetPizzaType=>({
    type: ActionTypesEnum.SET_PIZZAS,
    payload: items
})