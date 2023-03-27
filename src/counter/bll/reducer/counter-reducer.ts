const initialState = {
    value: 0,
    startValue: 0,
    maxValue: 0
}

type initialStateType = typeof initialState
type ActionsType = AddNumACType | StartNumACType | AddMaxNumACType |SetValueFromLocalStorageACType

export const counterReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "ADD-NUM":
            return {
                ...state,
                value: state.value +1
            }
        case "ADD-START-NUM":
            return {
                ...state,
                startValue: state.startValue
            }
        case "ADD-MAX-NUM":
            return {
                ...state,
                maxValue: state.maxValue -1
            }
        case "SET-VALUE-FROM-LOCAL-STORAGE":
            return {
                ...state,
                value: state.value
            }
        default:
            return state
    }
}

export type AddNumACType = ReturnType<typeof setAddNumAC>
export type StartNumACType = ReturnType<typeof setAddStartNumAC>
export type AddMaxNumACType = ReturnType<typeof setAddMaxNumAC>
export type SetValueFromLocalStorageACType = ReturnType<typeof setValueFromLocalStorageAC>

export const setAddNumAC = () => ({type: "ADD-NUM"} as const)
export const setAddStartNumAC = () => ({type: "ADD-START-NUM"} as const)
export const setAddMaxNumAC = () => ({type: "ADD-MAX-NUM"} as const)
export const setValueFromLocalStorageAC= (value:number) => ({type: "SET-VALUE-FROM-LOCAL-STORAGE",value} as const)
