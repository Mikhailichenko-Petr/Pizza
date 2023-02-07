import { AddCartType } from "./actions"


export type ItemsCart={
    items:AddCartType[],
    totalPrice:number
  }
  
  export interface CartType{
    items:ItemsCart[],
    totalPrice:number,
    totalCount:number
  }