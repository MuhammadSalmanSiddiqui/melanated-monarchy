import React from "react";
import classes from './checkbox.module.css'

const CustomCheckbox = ({text}) => {
  return (
    <div className={classes.div}>
    <input type='checkbox' className={classes.checkbox}/>
    <p className={classes.text}>{text}</p>
    </div>
  );
};
export {CustomCheckbox};
