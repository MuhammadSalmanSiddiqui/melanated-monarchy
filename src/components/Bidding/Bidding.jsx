import React from "react";
import classes from "./Bidding.module.css";
import star from "../../assets/images/bidding/star.svg";
import heart from "../../assets/images/bidding/heart.svg";
import Grid from "@material-ui/core/Grid";
import { ProgressBar } from "../ProgressBar";

const Bidding = ({ bar_value, bar,Img }) => {
  return (
    <div className={classes.Bidding}>
      <img className={classes.heart} alt='heart' src={heart}/>
      <img alt={Img} src={Img} />
      <div className={classes.Bidbox}>
        <h2 className={classes.bidamount}>Bid $50</h2>
        <h3 className={classes.freeshipping}>+ free shipping</h3>
      </div>
      <ProgressBar bar={bar} bar_value={bar_value} />
      <h4>ACCEPTING BID</h4>
      <Grid container>
        <Grid item xs={8} sm={8} className={classes.offwinner}>
          <Grid container>
            <Grid item xs={6}>
              <div className={classes.offprice}>
                <h2>70%</h2>
                <h3 className={classes.topdec}>Off</h3>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div>
                <h1>
                  <del>$180</del>
                </h1>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} sm={4}>
          <div className={classes.nobids}>
            <h1>10</h1>
            <h2 className={classes.topdec}>BIDS</h2>
          </div>
        </Grid>
      </Grid>
      <div className={classes.star}>
      <img src={star}/>
      <h2 style={{marginLeft:'0.5rem'}}>4.5</h2>
      </div>
    </div>
  );
};

export { Bidding };
