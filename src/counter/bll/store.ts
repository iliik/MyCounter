import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {ActionsType, counterReducer} from "./reducer/counter-reducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import {loadState, saveState} from "./utils/localStorage";


const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = legacy_createStore(rootReducer, loadState(), applyMiddleware(thunk))

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })

})


// export const AppStoreType = typeof store
export type RootState = ReturnType<typeof store.getState>
export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<RootState, unknown, RootActionType>
export type RootActionType = ActionsType