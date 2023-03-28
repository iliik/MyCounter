import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {ActionsType, counterReducer} from "./reducer/counter-reducer";
import thunk, {ThunkDispatch} from "redux-thunk";


const rootReducer = combineReducers({
    counter: counterReducer
})
let preloadedState;
const persistedTodosString = localStorage.getItem('value')
if (persistedTodosString) {
    preloadedState = JSON.parse(persistedTodosString)
}


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
store.subscribe(() => {
    localStorage.setItem('value', JSON.stringify(store.getState().counter.value))
    localStorage.setItem('startValue', JSON.stringify(store.getState().counter.startValue))
    localStorage.setItem('maxValue', JSON.stringify(store.getState().counter.maxValue))
})


// export const AppStoreType = typeof store
export type RootState = ReturnType<typeof store.getState>
export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<RootState, unknown, RootActionType>
export type RootActionType = ActionsType