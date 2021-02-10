import React from 'react';
import { NavLink } from "react-router-dom";
import { PrimaryTemplate, ListingBox } from "../../components";
import Grid from "@material-ui/core/Grid";
import { Select, CustomCheckbox } from "../../components";
import classes from './createList1.module.css';
const CreateListing1 = () => {
    return (
        <PrimaryTemplate>
        <ListingBox num='2 / 4'/>
        <div className={classes.midiv}>
          <h3 className={classes.heading}>Posting Details</h3>
          <div className={classes.content}>
           <Grid container>
                <Grid className={classes.innerfirstgrid} item xs={12} sm={4} md={6}>
                     <p>Employee Type</p>
                     <div className={classes.select}>
                     <Select/>
                     </div>
                </Grid>
                <Grid className={classes.checkboxgrid} item xs={12} sm={8} md={6}>
                   <CustomCheckbox text='Direct Contact By Recruiters is Ok'/>
                   <CustomCheckbox text='Internship'/>
                   <CustomCheckbox text='Non-Profit Organization'/>
                   <CustomCheckbox text='Relocation Assistance Available'/>
                   <CustomCheckbox text='Telecommuting Ok'/>
                </Grid>
           </Grid>
           </div>
        </div>
        <div>
            <p>Compensation</p>
            <textarea placeholder='Describe Compensation Here (Please Be As Deatailed As Possible)' className={classes.textarea}/>
            <NavLink to='/create_listing_3'>
            <button className={classes.continuebutton}>Continue</button>
            </NavLink>
        </div>
        </PrimaryTemplate>
    )
};

export {CreateListing1};