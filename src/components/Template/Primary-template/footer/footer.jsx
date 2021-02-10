import React from "react";
import Grid from "@material-ui/core/Grid";
import classes from "./footer.module.css";
import { footerIcons, footerText } from "../../../../data";

const Footer = () => {
  return (
    <div className={classes.Footerdiv}>
      <Grid className={classes.footerfirst} container spacing={2}>
        {footerIcons.map((Icons,i) => (
          <Grid key={i} item xs={2} sm={1}>
            <img alt ={Icons.Img} className={classes.img} src={Icons.Img} />
          </Grid>
        ))}
      </Grid>
      <Grid className={classes.footer} container spacing={2}>
        {footerText.map((footerText,i) => (
          <Grid key={i} item xs={4} sm={3} md={1}>
           <p className={classes.footertext}> {footerText.text}</p>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export { Footer };
