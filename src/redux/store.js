import { createStore } from "redux"
import rootReduser from "./redusers"


const store = createStore(rootReduser)
window.store=store
export default store