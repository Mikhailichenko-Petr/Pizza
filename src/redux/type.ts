import { AddPizzaCartType, ClearCartType, MinusCartType, PlusCartType, RemoveCartType } from "./redusers/cart/actions";
import { SetCategoryType, SetSortType } from "./redusers/filters/actions";
import { SetLoadedType, SetPizzaType } from "./redusers/pizza/actions";

export type ActionsTypes = SetLoadedType|SetSortType|SetCategoryType|SetPizzaType|AddPizzaCartType|ClearCartType|RemoveCartType|PlusCartType|MinusCartType

export enum ActionTypesEnum{
    SET_LOADED='SET_LOADED',
    SET_SORT_BY='SET_SORT_BY',
    SET_CATEGORY='SET_CATEGORY',
    SET_PIZZAS='SET_PIZZAS',
    ADD_PIZZA_CART='ADD_PIZZA_CART',
    CLEAR_CART='CLEAR_CART',
    REMOVE_CART_ITEM='REMOVE_CART_ITEM',
    PLUS_CART_ITEM='PLUS_CART_ITEM',
    MINUS_CART_ITEM='MINUS_CART_ITEM',
}