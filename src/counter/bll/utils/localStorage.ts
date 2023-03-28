import {AppStateType} from "../store";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('value')
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined
    }
};
export const saveState = (state: AppStateType) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('value', serializedState)
    } catch {

    }

}