import { useDispatch } from "react-redux"
import { compose, createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import rootReduser from "./redusers"


const composeEnhancers = compose

const store = createStore(rootReduser,composeEnhancers(applyMiddleware(thunk)))

type AppDispatch = typeof store.dispatch
export const DispatchUp =()=> useDispatch<AppDispatch>()

export default store