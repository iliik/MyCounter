import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './Counter.01.module.css'
import {NewButton} from "./NewButton";
import {UniversalInput} from "./UniversalInput";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {setAddMaxNumAC, setAddNumAC, setAddStartNumAC} from "./bll/reducer/counter-reducer";


export const Counter01 = () => {

    const value = useSelector<AppStateType, number>(state => state.counter.value)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)

    const dispatch = useDispatch()


    // let [number, setNumber] = useState(0)
    // const [maxValue, setMaxValue] = useState(0)
    // const [startValue, setStartValue] = useState(0)
    // const [firstRendering, setFirstRendering] = useState(true)


    // useEffect(() => {
    //     if (!firstRendering) {
    //         localStorage.setItem('counterNumber', JSON.stringify(number))
    //         localStorage.setItem('counterMaxValue', JSON.stringify(maxValue))
    //         localStorage.setItem('counterStartValue', JSON.stringify(startValue))
    //     }
    // }, [number, maxValue, startValue])

    // useEffect(() => {
    //     let numberItem = localStorage.getItem('counterNumber')
    //     let maxValueItem = localStorage.getItem('counterMaxValue')
    //     let startValueItem = localStorage.getItem('counterStartValue')
    //
    //     if (numberItem && maxValueItem && startValueItem) {
    //         // let newNumber = JSON.parse(numberItem)
    //         // let newMaxValue = JSON.parse(maxValueItem)
    //         // let newStartValueItem = JSON.parse(startValueItem)
    //
    //         // setNumber(newNumber)
    //         // setMaxValue(newMaxValue)
    //         // setStartValue(newStartValueItem)
    //     }
    //
    //     setFirstRendering(false)
    // }, [])


    const onClickHandlerReset = () => {
        // setNumber(0)
        dispatch(setAddStartNumAC())
    }
    const onClickHandlerInc = () => {
        if (maxValue > startValue) {
            dispatch(setAddNumAC())
            // setNumber(number + 1)
        }
    }
    const onClickHandlerDelete = () => {
        // setNumber(number)
        if (value < maxValue) {
            // setNumber(--number)
            dispatch(setAddMaxNumAC())
        }
    }
    const setLocalHandler = () => {
        // setNumber(startValue)
        dispatch(setAddStartNumAC())
    }

    const inputMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        // setMaxValue(Number(e.currentTarget.value))
    }
    const inputStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        // setStartValue(Number(e.currentTarget.value))
    }
    return (
        <div className={s.counterContainer}>
            <div className={s.watchNumber}>
                <h3 className={value === maxValue ? s.error : s.ok}>{value}</h3>
            </div>
            <div className={s.buttonContainer}>
                <NewButton title={'inc'} callback={onClickHandlerInc} disable={value === maxValue}/>
                <NewButton title={'reset'} callback={onClickHandlerReset} disable={value !== maxValue}/>
                <NewButton title={'delete'} callback={onClickHandlerDelete}/>

            </div>
            <div className={s.inputContainer}>

                <UniversalInput label={"Max Value"} value={maxValue} onChange={inputMaxHandler}/>
                <UniversalInput label={"Start Value"} value={startValue} onChange={inputStartHandler}/>

                <NewButton title={"Set"} callback={setLocalHandler}/>

            </div>
        </div>
    )
}