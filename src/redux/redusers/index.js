import { combineReducers } from "redux"
import cart from "./cart/cart"
import filters from "./filters/filters"
import Pizzas from "./pizza/pizzas"

const rootReduser = combineReducers({
    Pizzas,
    filters,
    cart
})

export default rootReduser