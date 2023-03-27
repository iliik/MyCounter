import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./reducer/counter-reducer";

const rootReducer = combineReducers({
    counter: counterReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer)

export const AppStoreType = typeof store