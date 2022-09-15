import { combineReducers } from "redux"
import filters from "./filters"
import pizzas from "./pizzas"
import cart from "./cart"

const rootReduser = combineReducers({
    pizzas,
    filters,
    cart
})

export default rootReduser