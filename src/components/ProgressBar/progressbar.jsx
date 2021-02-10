import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: "	#30251a",
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#9D7A54",
  },
}))(LinearProgress);

const GreyLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: "	#707070",
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#9D7A54",
  },
}))(LinearProgress);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const ProgressBar = ({ bar_value, bar }) => {
  const classes = useStyles();

  return (
    <>
      {bar === "active" ? (
        <div className={classes.root}>
          <BorderLinearProgress variant="determinate" value={bar_value} />
        </div>
      ) : (
        ""
      )}
      {bar === "sold" ? (
        <div className={classes.root}>
          <GreyLinearProgress variant="determinate" value={-1} />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export { ProgressBar };
