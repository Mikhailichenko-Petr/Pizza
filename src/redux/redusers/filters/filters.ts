import { ActionsTypes } from "../../type"
import { FiltersReduserType } from "./type"


const initialState:FiltersReduserType={
    category: null,
    sortBy: {
        name:'популярности',
        type: 'popular',
        order: 'desc'
    }
}

const filters=(state = initialState, action:ActionsTypes)=> {
    switch (action.type) {
        case "SET_SORT_BY":
            return{
                ...state,
                sortBy: action.payload
            }
        case "SET_CATEGORY":
            return{
                ...state,
                category: action.payload
            }
        default:
            return state
    }
}

export default filters