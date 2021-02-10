import React from "react";
import { PrimaryTemplate, ListingBox } from "../../components";
import { NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { CustomCheckbox,RadioButton } from "../../components";
import QuestionMark from '../../assets/images/create_listing_2/qustionmark.png';
import classes from "./createListing2.module.css";

const RadioOptions = [
 {label:'CL Mail Relay (Recommended)',value:'CL Mail Relay'},
 {label:'Show My Real Email Address',value:'Show My Real Email Address'},
 {label:'No Replies To This Email',value:'No Replies To This Email'}
];

const CreateListing2 = () => {
  return (
    <PrimaryTemplate>
      <ListingBox num="3 / 4" />
      <Grid className={classes.grid} container spacing={4}>
        <Grid item xs={12} md={6}>
          <div className={classes.box}>
            <div className={classes.heading}>
              <p>Email</p>
            </div>
            <div className={classes.content}>
              <p>Enter Email</p>
              <input
                placeholder="Abcd@gmail.com"
                className={classes.Input}
                type="text"
              />
              <p className={classes.privacy}>Email Privacy Options <img alt='questionmark' src={QuestionMark}/></p>
              <div className={classes.radio}>
              <RadioButton options={RadioOptions}/>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classes.box}>
            <div className={classes.heading}>
              <p>Number</p>
            </div>
            <div className={classes.content}>
              <CustomCheckbox text="Show My Phone Number" />
              <CustomCheckbox text="Phone Calls OK" />
              <CustomCheckbox text="Text/Sms OK" />
              <p className={classes.privacy}>Enter Phone Number</p>
              <input
                placeholder="Ex. 021-1234567"
                className={classes.Input}
                type="text"
              />
              <Grid className={classes.bottomrightgrid} container spacing={3}>
                <Grid item xs={12} sm={5}>
                  <p className={classes.privacy}>Enter Extension</p>
                  <input className={classes.Input} type="text" />
                </Grid>
                <Grid className={classes.rightbottomtext} item xs={12} sm={7}>
                  <p className={classes.privacy}>Enter Contact Number</p>
                  <input
                    placeholder="Ex. 0900-78601"
                    className={classes.Input}
                    type="text"
                  />
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
        <Grid justify="center" container>
          <Grid item xs={11} sm={8}>
            <CustomCheckbox text="OK To Highlight This Job Opening For Persons With Disabilities" />
          </Grid>
          <Grid item xs={11} sm={4}>
            <NavLink to='/create_listing_4'>
            <button className={classes.continuebutton}>Continue</button>
            </NavLink>
          </Grid>
        </Grid>
      </Grid>
    </PrimaryTemplate>
  );
};

export { CreateListing2 };
