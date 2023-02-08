import { ActionTypesEnum } from "../../type";

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


export interface PizzasTypes{
    items:DataType[],
    isLoaded:Boolean
}