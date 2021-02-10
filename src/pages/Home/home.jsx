import React from "react";
import { homeSliderItems } from "../../data";
import Amazonad from "../../assets/images/home/amazonad.png";
import {
  Bidding,
  Slider,
  PrimaryTemplate,
  CardDetails,
} from "../../components";
import shoe from "../../assets/images/home/shoe1.png";
import bluetooth from "../../assets/images/home/bluetooth.png";
import Grid from "@material-ui/core/Grid";
import { Activities } from "../../data/cardDetails";
import classes from "./home.module.css";

const Home = () => {
  return (
    <PrimaryTemplate>
      <Slider items={homeSliderItems} />
      <div>
        <img className={classes.ad} alt="ads" src={Amazonad} />
      </div>
      <div>
        <h3>Bidding</h3>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Bidding Img={shoe} bar="active" bar_value={80} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Bidding Img={bluetooth} bar="active" bar_value={30} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Bidding Img={bluetooth} bar="sold" />
          </Grid>
        </Grid>
      </div>
      <h3 className={classes.seemore}>See more</h3>

      <Grid className={classes.card} container spacing={2}>
        {Activities.map((activities, i) => (
          <Grid key={i} item xs={12} sm={6} md={4}>
            <CardDetails
              activities={activities.activities}
              pic={activities.pic}
              heading={activities.heading}
            />
          </Grid>
        ))}
      </Grid>
    </PrimaryTemplate>
  );
};

export { Home };
