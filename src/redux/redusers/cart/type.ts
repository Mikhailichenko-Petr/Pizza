import { ActionTypesEnum } from "../../type"

export interface AddCartType{
  id:number
  imageUrl:string
  name:string
  price:number
  sizes:number
  type:string
}

export interface CartType{
  items:ItemsCart[],
  totalPrice:number,
  totalCount:number
}

export type AddPizzaCartType={
  type: ActionTypesEnum.ADD_PIZZA_CART
  payload: AddCartType
}

export type ItemsCart={
    items:AddCartType[],
    totalPrice:number
  }
  
  export interface CartType{
    items:ItemsCart[],
    totalPrice:number,
    totalCount:number
  }