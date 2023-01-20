import React from 'react';
import classes from './MyInput.module.css'; 

export const MyInput = React.forwardRef((props: any, ref) => {
    return (
        <input ref={ref} className={classes.myInput} {...props}/>
    )
});