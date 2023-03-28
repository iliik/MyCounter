import {Dispatch} from "redux";

const initialState = {
    value: 0,
    maxValue: 0,
    startValue: 0

}

type initialStateType = typeof initialState
export type ActionsType =
    AddNumACType
    | StartNumACType
    | AddMaxNumACType
    | SetValueFromLocalStorageACType
    | SetResetACType
|DeleteACType

export const counterReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {

    switch (action.type) {
        case "ADD-NUM":
            return {
                ...state,
                value: state.value + 1
            }
        case "ADD-START-NUM":
            return {
                ...state,
                startValue: action.startValue
            }
        case "ADD-MAX-NUM":
            return {
                ...state,
                maxValue: action.maxValue
            }
        case "SET-VALUE-FROM-LOCAL-STORAGE":
            return {
                ...state,
                value: state.startValue
            }
        case "RESET":
            return {
                ...state,
                value: state.value = 0
            }
        case "DELETE":
            return {
                ...state,
                value: action.value -1
            }
        default:
            return state
    }
}

export type AddNumACType = ReturnType<typeof setAddNumAC>
export type StartNumACType = ReturnType<typeof setAddStartNumAC>
export type AddMaxNumACType = ReturnType<typeof setAddMaxNumAC>
export type SetValueFromLocalStorageACType = ReturnType<typeof setValueFromLocalStorageAC>
export type SetResetACType = ReturnType<typeof setResetAC>
export type DeleteACType = ReturnType<typeof deleteAC>


export const setAddNumAC = () => ({type: "ADD-NUM"} as const)
export const setResetAC = (value:number) => ({type: "RESET",value} as const)
export const setAddStartNumAC = (startValue: number) => ({type: "ADD-START-NUM", startValue} as const)
export const setAddMaxNumAC = (maxValue: number) => ({type: "ADD-MAX-NUM", maxValue} as const)
export const setValueFromLocalStorageAC = () => ({type: "SET-VALUE-FROM-LOCAL-STORAGE"} as const)
export const deleteAC = (value:number) => ({type: "DELETE",value} as const)

export const incValuesTC = (value: number) => (dispatch: Dispatch) => {
    localStorage.setItem('counterValue', JSON.stringify(value))
    dispatch(setAddNumAC())
}
export const incStartNumTC = (startValue: number) => (dispatch: Dispatch) => {
    localStorage.setItem('counterValue', JSON.stringify(startValue))
    dispatch(setAddStartNumAC(startValue))
}
export const incMaxNumTC = (maxValue: number) => (dispatch: Dispatch) => {
    localStorage.setItem('counterValue', JSON.stringify(maxValue))
    dispatch(setAddMaxNumAC(maxValue))
}
export const incResetTC = (value:number ) => (dispatch: Dispatch) => {
    localStorage.setItem('counterValue', JSON.stringify(value))
    dispatch(setResetAC(value))
}

export const deleteTC = (value:number ) => (dispatch: Dispatch) => {
    localStorage.setItem('counterValue', JSON.stringify(value))
    dispatch(deleteAC(value))
}
