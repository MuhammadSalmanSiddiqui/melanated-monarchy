import React from "react";
import {
  PrimaryTemplate,
  ProductDetailsLeft,
  ProductDetailsRight,
  IntroBox
} from "../../components";
import Grid from "@material-ui/core/Grid";
import classes from "./productDetail.module.css";

const ProductDetail = () => {
  return (
    <PrimaryTemplate>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={7}>
          <ProductDetailsLeft />
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <ProductDetailsRight />
          <IntroBox/>
        </Grid>
      </Grid>
    </PrimaryTemplate>
  );
};

export { ProductDetail };


