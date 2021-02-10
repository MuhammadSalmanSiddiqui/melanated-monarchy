import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { InputWithIcon } from "../Search";
import Classes from "./login.module.css";
import Grid from "@material-ui/core/Grid";
import password from "../../assets/images/login/password.svg";
import mail from "../../assets/images/login/mail.svg";
import fblogin from "../../assets/images/login/fb_login.svg";
import googlelogin from "../../assets/images/login/google_login.svg";
import eye from "../../assets/images/login/eye.svg";
import { NavLink } from "react-router-dom";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "38%",
    backgroundColor: "#E7C68E",
    color: "black",
    padding: theme.spacing(2, 4, 3),
  },
  [theme.breakpoints.down("sm")]: {
    paper: {
      width: "62%",
    },
  },
}));

const Login = ({ text }) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [Email, setEmail] = React.useState("");
  const [Password, setPassword] = React.useState("");
  console.log(Email);
  console.log(Password);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <p className={Classes.logintext}>LOGIN</p>
      <p className={Classes.heading}>Email</p>
      <div className={Classes.textbox}>
        <InputWithIcon
          color="black"
          value={Email}
          type="text"
          onChange={setEmail}
          placeholder="Email"
          ImgLeft={mail}
        />
      </div>
      <p className={Classes.heading}>Password</p>
      <div className={Classes.textbox}>
        <InputWithIcon
          type="password"
          placeholder="Password"
          value={Password}
          onChange={setPassword}
          ImgLeft={password}
          ImgRight={eye}
        />
      </div>
      <Grid className={Classes.Logindiv} container>
        <Grid item xs={6}>
          <h4 className={Classes.forgot}>Forgot Password?</h4>
        </Grid>
        <Grid item xs={6}>
          <button Classes={Classes.loginbutton}>Login</button>
        </Grid>
      </Grid>
      <Grid className={Classes.bottomgrid} container>
        <Grid item className={Classes.middleborder} xs={6}>
          <p>Sign up with</p>
          <Grid container>
            <Grid item xs={12} sm={4}>
              <img alt="fb" className={Classes.loginicons} src={fblogin} />
            </Grid>
            <Grid item xs={12} sm>
              <img
                alt="google"
                className={Classes.loginicons}
                src={googlelogin}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={Classes.account} xs={5}>
          <p>Need an account?</p>
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            to="/signup"
          >
            <h4 className={Classes.signup}>SignUp here</h4>
          </NavLink>
        </Grid>
      </Grid>
    </div>
  );

  return (
    <>
      <span className={Classes.text} type="button" onClick={handleOpen}>
        {text}
      </span>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </>
  );
};
export { Login };
