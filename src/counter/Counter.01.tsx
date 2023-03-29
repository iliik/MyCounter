import React, {ChangeEvent, useCallback, useEffect} from 'react';
import s from './Counter.01.module.css'
import {NewButton} from "./NewButton";
import {UniversalInput} from "./UniversalInput";
import {
    deleteTC,
    incMaxNumTC,
    incResetTC,
    incStartNumTC,
    incValuesTC,
    setValueFromLocalStorageAC
} from "./bll/reducer/counter-reducer";
import {useAppDispatch, useAppSelector} from "./bll/hook/hook";


export const Counter01 = React.memo(() => {

    const value = useAppSelector(state => state.counter.value)
    const maxValue = useAppSelector(state => state.counter.maxValue)
    const startValue = useAppSelector(state => state.counter.startValue)

    const dispatch = useAppDispatch()

    const onClickHandlerReset = useCallback(() => {
        dispatch(incResetTC(value))

    }, [])
    const onClickHandlerInc = useCallback(() => {
        if (maxValue > startValue) {
            dispatch(incValuesTC(+1))
        }
    }, [])
    const onClickHandlerDelete = useCallback(() => {
        if (value < maxValue) {
            dispatch(deleteTC(value))
        }
    }, [])
    const setLocalHandler = useCallback(() => {
        dispatch(setValueFromLocalStorageAC())
    }, [])

    const inputMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(incMaxNumTC(+e.currentTarget.value))
    }
    const inputStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(incStartNumTC(+e.currentTarget.value))
    }
    return (
        <div className={s.counterContainer}>
            <div className={s.watchNumber}>
                <h3 className={value === maxValue ? s.error : s.ok}>{value}</h3>
            </div>
            <div className={s.buttonContainer}>
                <NewButton title={'inc'} callback={onClickHandlerInc} disable={value === maxValue}/>
                <NewButton title={'reset'} callback={onClickHandlerReset} disable={value !== maxValue}/>
                <NewButton title={'delete'} callback={onClickHandlerDelete} disable={value <= startValue}/>

            </div>
            <div className={s.inputContainer}>
                <UniversalInput label={"Max Value"} value={maxValue} onChange={inputMaxHandler}/>
                <UniversalInput label={"Start Value"} value={startValue} onChange={inputStartHandler}/>

                <NewButton title={"Set"} callback={setLocalHandler}/>

            </div>
        </div>
    )
})