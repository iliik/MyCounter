import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {ActionsType, counterReducer} from "./reducer/counter-reducer";
import thunk, {ThunkDispatch} from "redux-thunk";
export type RootActionType = ActionsType

const rootReducer = combineReducers({
    counter: counterReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

// export const AppStoreType = typeof store
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = ThunkDispatch<RootState, unknown, RootActionType>