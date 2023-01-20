import React from 'react';
import classes from './Loader.module.css';

const Loader = () => {
    return (
        <div style={{ justifyContent: "center", display: "flex", marginTop: "50px"}}>
            <div className={classes.loader}>

            </div>
        </div>
        

    )
}

export default Loader 