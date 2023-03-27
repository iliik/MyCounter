import {combineReducers, createStore} from "redux";
import {counterReducer} from "./reducer/counter-reducer";

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer)