import { ActionsTypes, ActionTypesEnum } from "../../type"
import { PizzasTypes } from "./type"



const initialState:PizzasTypes={
    items: [],
    isLoaded: false
}

const pizzas=(state = initialState, action:ActionsTypes)=> {
    console.log(action)
    switch (action.type) {  
        case ActionTypesEnum.SET_PIZZAS:
            return{
                ...state,
                items: action.payload,
                isLoaded: true
            }
        default:
            return state
    }
}

export default pizzas