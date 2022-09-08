import { compose, createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import rootReduser from "./redusers"


const composeEnhancers = compose

const store = createStore(rootReduser,composeEnhancers(applyMiddleware(thunk)))
window.store=store
export default store