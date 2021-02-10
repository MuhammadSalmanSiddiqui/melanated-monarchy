import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import logo from "../../../../assets/images/header/logo.png";
import Plus from "../../../../assets/images/header/Plus.svg";
import Search from "../../../../assets/images/header/search.svg";
import { Select } from "../../../select";
import { InputWithIcon } from "../../../Search";
import { Login } from "../../../Login";
import classes from "./header.module.css";



const Header = () => {
  const [searchInput, setsearchInput] = useState("");

  console.log(searchInput);

  return (
    <>
      <Grid className={classes.main} container spacing={1}>
        <Grid item xs={3} sm={5} md={7} lg={8}>
          <NavLink to='/'><img alt={logo} className={classes.image} src={logo} /></NavLink>
        </Grid>
        <Grid item xs={5} sm={4} md={3} lg={2}>
          <NavLink to="/create_listing_1">
            <div className={classes.createlisting}>
              <h4 className={classes.createtext}>Create Listing</h4>
              <img alt={Plus} className={classes.plus} src={Plus} />
            </div>
          </NavLink>
        </Grid>
        <Grid item xs={4} sm={3} md={2} lg={2}>
          <h4 className={classes.signup}>
            {" "}
            <NavLink style={{ textDecoration: 'none', color: '#E7C68E' }} to='/signup'><span className={classes.loginsignup}> SignUp </span></NavLink> |{" "}
            <Login text="Login" />{" "}
          </h4>
        </Grid>
      </Grid>
      <br />
      <Grid className={classes.maningrid} container>
        <Grid className={classes.grid} item xs={11} sm={2} md={2}>
          <Select />
        </Grid>
        <Grid className={classes.grid} item xs={11} sm={5} md={6}>
          <Grid container>
            <Grid item xs={4} sm={5} md={4}>
              <Select />
            </Grid>
            <Grid item xs={8} sm={7} md={8}>
              <InputWithIcon
                value={searchInput}
                onChange={setsearchInput}
                color="#E7C68E"
                type='text'
                placeholder='Search...'
                ImgLeft={Search}
              />
            </Grid>
          </Grid>
        </Grid>
        <Hidden only="xs">
          <Grid item xs={1}></Grid>
        </Hidden>
        <Grid className={classes.gridbutton} item xs={11} sm={3} md={2}>
          <p className={classes.goforbidding}>Go for Bidding</p>
        </Grid>
      </Grid>
    </>
  );
};

export { Header };
