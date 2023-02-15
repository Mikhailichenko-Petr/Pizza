import axios from "axios"
import React from "react"
import { FiltersReduserType } from "../filters/type"
import { ActionTypesEnum } from "../../type"
import { DataType, SetLoadedType, SetPizzaType } from "./type"


export const setLoaded=(items:boolean):SetLoadedType=>({
    type: ActionTypesEnum.SET_LOADED,
    payload: items,
})


// @ts-ignore
export const fetchPizzas:React.FC<FiltersReduserType>=({category,sortBy})=>(dispatch)=>{
    dispatch(setLoaded(false))
    axios.get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
    .then(({data})=>{dispatch(setPizzas(data))})
    
}

export const setPizzas=(items:DataType):SetPizzaType=>({
    type: ActionTypesEnum.SET_PIZZAS,
    payload: items
})

// export const fetchJewelry = createAsyncThunk<JewelryType[],FethDataType>(
//     'jewelry/fetchJeweleryStatus',
//     async (params) => {
//       const { category, page, sort, searchValue } = params
//       const {type} = sort
//       const res = await axios.get<JewelryType[]>(
//         `https://632e4bcbf9b533cc58ee4523.mockapi.io/items/?page=${page}&limit=8&sortBy=${
//           type
//         }&order='asc'${searchValue ? `?&search=${searchValue}` : ''}&${
//           category > 0 ? `category=${category}` : ''
//         }`,
//       );
//       return res.data;
//     },
//   );

















