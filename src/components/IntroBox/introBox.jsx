import React from 'react'
import classes from './introBox.module.css';
import person from '../../assets/images/productdetail/person.png';
import emailverified from '../../assets/images/productdetail/email_verified.svg';
import phoneverified from '../../assets/images/productdetail/phone_verified.svg';
import locationverified from '../../assets/images/productdetail/Location.svg';

const IntroBox = () => {
    return (
        <div className={classes.box}>
            <img className={classes.image} src={person}/>
            <h2>Johnny Pearson</h2>
            <p className={classes.membersince}>Member since : Aug,2020</p>
            <button className={classes.follow}>Follow</button>
            <div>
            <img className={classes.icon}  src={emailverified}/>
            <img className={classes.icon}  src={phoneverified}/>
            <img className={classes.icon}  src={locationverified}/>
            </div>
        </div>
    )
};

export {IntroBox};
