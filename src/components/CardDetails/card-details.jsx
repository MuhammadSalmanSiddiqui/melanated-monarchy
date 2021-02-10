import React from "react";
import classes from "./card-details.module.css";
const CardDetails = ({ heading, pic, activities }) => {
  return (
    <div className={classes.card}>
      <div className={classes.heading}>
        <h3 style={{fontWeight:'700'}}>{heading}</h3>
        <img  src={pic} />
      </div>
      {activities.map((activities,i) => (
        <p key={i} className={classes.list}>{activities}</p>
      ))}
      <p className={classes.seemorelist}>See more</p>
    </div>
  );
};

export { CardDetails };
