import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import classes from "./slider.module.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Slider = ({ items }) => {
  return (
    <div className={classes.Slider}>
    <Carousel responsive={responsive} infinite={true}>
      {items.map((items,i) => (
        <div key={i} className={classes.box}>
          <img alt={items.heading} src={items.path} />
          <h4>{items.heading}</h4>
        </div>
      ))}
    </Carousel>
    </div>
  );
};

export { Slider };
