import React from "react";
import { Footer } from "../../components/Template/Primary-template/footer";
import Grid from "@material-ui/core/Grid";
import logo from "../../assets/images/login/melanated.png";
import classes from "./signup.module.css";
import { InputWithIcon } from "../../components";
import mail from "../../assets/images/login/mail.svg";
import eye from "../../assets/images/login/eye.svg";
import password from "../../assets/images/login/password.svg";
import fblogin from "../../assets/images/login/fb_login.svg";
import googlelogin from "../../assets/images/login/google_login.svg";
import user from "../../assets/images/login/user.png";
import phone from "../../assets/images/login/phone.png";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <Grid container>
        <Grid className={classes.logo} item xs={12} sm={4} md={5} lg={6}>
          <img alt={logo} src={logo} />
          <p className={classes.melanated}>
            MELANATED
            <br />
            MONARCHY
          </p>
        </Grid>
        <Grid item xs={12} sm={8} md={7} lg={6}>
          <div className={classes.rightdiv}>
            <p className={classes.logintext}>SIGNUP</p>
            <p>Full Name</p>
            <div className={classes.textbox}>
              <InputWithIcon
                color="black"
                //   value={Email}
                type="text"
                //   onChange={setEmail}
                placeholder="Ex Brandon Baker"
                ImgLeft={user}
              />
            </div>
            <p>Email</p>
            <div className={classes.textbox}>
              <InputWithIcon
                color="black"
                //   value={Email}
                type="text"
                //   onChange={setEmail}
                placeholder="Ex BrandonBaker@gmail.com"
                ImgLeft={mail}
              />
            </div>
            <p>Number</p>
            <div className={classes.textbox}>
              <InputWithIcon
                color="black"
                //   value={Email}
                type="text"
                //   onChange={setEmail}
                placeholder="Ex 900-786543"
                ImgLeft={phone}
              />
            </div>
            <p>Password</p>
            <div className={classes.textbox}>
              <InputWithIcon
                type="password"
                placeholder="Ex Abcd123eg"
                //   value={Password}
                //   onChange={setPassword}
                ImgLeft={password}
                ImgRight={eye}
              />
            </div>
            <p>Password</p>
            <div className={classes.textbox}>
              <InputWithIcon
                type="password"
                placeholder="Ex Abcd123eg"
                //   value={Password}
                //   onChange={setPassword}
                ImgLeft={password}
                ImgRight={eye}
              />
            </div>
           <NavLink to='/'><button className={classes.signup}>SignUp</button></NavLink>
            <Grid className={classes.bottomgrid} container>
              <Grid item className={classes.middleborder} xs={6}>
                <p>SignUp with</p>
                <Grid container>
                  <Grid item xs={12} sm={5}>
                    <img
                      alt="fb"
                      className={classes.loginicons}
                      src={fblogin}
                    />
                  </Grid>
                  <Grid item xs={12} sm>
                    <img
                      alt="google"
                      className={classes.loginicons}
                      src={googlelogin}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item className={classes.account} xs={6}>
                <p>Have already account?</p>
                <h4 className={classes.login}>Login</h4>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export { SignUp };
