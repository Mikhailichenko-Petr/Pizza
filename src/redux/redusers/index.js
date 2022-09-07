import { combineReducers } from "redux"
import filters from "./filters"
import pizzas from "./pizzas"

const rootReduser = combineReducers({
    pizzas,
    filters,
})

export default rootReduser