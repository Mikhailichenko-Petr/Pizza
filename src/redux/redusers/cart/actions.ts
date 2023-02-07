import { ActionTypesEnum } from "../../type"

export interface AddCartType{
    id:number
    imageUrl:string
    name:string
    price:number
    sizes:number
    type:string
}

export type AddPizzaCartType={
    type: ActionTypesEnum.ADD_PIZZA_CART
    payload: AddCartType
}
export const addPizzaToCart = (obj:AddCartType):AddPizzaCartType =>({
    type: ActionTypesEnum.ADD_PIZZA_CART,
    payload: obj
})

export type ClearCartType={
    type: ActionTypesEnum.CLEAR_CART
}
export const clearCart = ():ClearCartType =>({
    type: ActionTypesEnum.CLEAR_CART
})

export type RemoveCartType={
    type: ActionTypesEnum.REMOVE_CART_ITEM
    payload: number
}
export const removeCartItem = (id:number) =>({
    type: ActionTypesEnum.REMOVE_CART_ITEM,
    payload: id
})

export type PlusCartType={
    type: ActionTypesEnum.PLUS_CART_ITEM
    payload: number
}
export const plusCartItem = (id:number) =>({
    type: ActionTypesEnum.PLUS_CART_ITEM,
    payload: id
})

export type MinusCartType={
    type: ActionTypesEnum.MINUS_CART_ITEM
    payload: number
}
export const minusCartItem = (id:number) =>({
    type: ActionTypesEnum.MINUS_CART_ITEM,
    payload: id
})