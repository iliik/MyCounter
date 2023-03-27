const initialState = {
    number: 0,
    startValue: 0,
    maxValue: 0
}

type initialStateType = typeof initialState
type ActionsType = addNumACType |StartNumACType|addMaxNumACType

export const counterReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type){
        case "ADD-NUM":
            return {
                ...state,
                number: state.number + 1
            }
        case "ADD-START-NUM":
            return {
                ...state,
                startValue: state.startValue
            }
        case "ADD-MAX-NUM":
            return {
                ...state,
                maxValue: state.maxValue
            }

        default:
            return state
    }
}

export type addNumACType = ReturnType<typeof setAddNumAC>
export type StartNumACType = ReturnType<typeof setAddStartNumAC>
export type addMaxNumACType = ReturnType<typeof setAddMaxNumAC>

export const setAddNumAC = () => {return {type: "ADD-NUM"} as const}
export const setAddStartNumAC = () => {return {type: "ADD-START-NUM"} as const}
export const setAddMaxNumAC = () => {return {type: "ADD-MAX-NUM"} as const}