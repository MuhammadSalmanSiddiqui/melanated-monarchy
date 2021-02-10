import React from "react";
import { NavLink } from "react-router-dom";
import { PrimaryTemplate, ListingBox } from "../../components";
import { Select } from "../../components/select";
import Grid from "@material-ui/core/Grid";
import classes from "./createListing.module.css";

const CreateListing = () => {
  return (
    <PrimaryTemplate>
      <div className={classes.createListing}>
        <div className={classes.topdiv}>
          <ListingBox num='1 / 4'/>
          <p>
            Please limit each posting to a single area & category, Once per 48
            hours
          </p>
          <p>
            <strong>What type of posting is this :</strong> [See prohibited list
            before posting]
          </p>
          <div className={classes.select} >
          <Select />
          </div>
        </div>
        <div className={classes.middiv}>
          <p>
            <strong>What type of category is this :</strong> [See prohibited list
            before posting]
          </p>
          <div className={classes.select}>
          <Select />
          </div>
        </div>
        <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
                <div className={classes.textdiv}>
                <p>Posting title</p>
                <input className={classes.Input} type='text'/>
                </div>
            </Grid>
            <Grid className={classes.grid} item xs={12} sm={4}>
                <p>City or Neighbourhood</p>
                <input className={classes.Input} type='text'/>
            </Grid>
            <Grid className={classes.grid} item xs={12} sm={4}>
                <p>Postal Code</p>
                <input className={classes.Input} type='text'/>
            </Grid>
        </Grid>
        <div>
        <p>Description</p>
        <textarea className={classes.textarea}/>
        <p>Only one job description per posting please.</p>
        <p className={classes.endText}>Please see our FAQ for job posters.</p>
        <NavLink to='create_listing_2'>
        <button className={classes.continuebutton}>Continue</button>
        </NavLink>
        </div>
      </div>
    </PrimaryTemplate>
  );
};

export {CreateListing};
