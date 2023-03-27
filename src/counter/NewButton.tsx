import React from 'react';
import s from './newButton.module.css'
import {Button} from "@mui/material";

type NewBattonType = {
    title: string
    callback: () => void
    disable?: boolean
}

export const NewButton = (props: NewBattonType) => {

    const onClickHandler = () => {
        props.callback()
    }
    return (
        <div className={s.customBtn}>
            <Button
                variant={"contained"}
                color={"secondary"}
                // className={s.But}
                onClick={onClickHandler}
                disabled={props.disable}>{props.title}</Button>

        </div>
    );
};
