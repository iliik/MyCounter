import React, {ChangeEvent} from 'react';
import {TextField} from "@mui/material";

type UniversalInputType = {
    label: string
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const UniversalInput = (props: UniversalInputType) => {

    return (
        <div>
            <TextField
                id={"outlined-basic"}
                label={props.label}
                type={"number"}
                value={props.value}
                onChange={props.onChange}
                sx={{p: 2}}
            />
        </div>
    );
};

