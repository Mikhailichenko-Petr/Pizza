import { combineReducers } from "redux"
import filters from "./filters/filters"
import pizzas from "./pizza/pizzas"
import cart from "./cart/cart"

const rootReduser = combineReducers({
    pizzas,
    filters,
    cart
})

export default rootReduser