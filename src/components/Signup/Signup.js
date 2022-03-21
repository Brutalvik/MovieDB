import React from "react";
import classes from "./Signup.module.css";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import { Link } from "react-router-dom";

const handleSignup = (e) => {
  e.preventDefault();
  console.log("signup");
};

const Signup = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1>Signup</h1>
      </div>
      <form onSubmit={handleSignup}>
        <div className={classes.input}>
          <Input placeholder="Name" type="text" />
        </div>
        <div className={classes.input}>
          <Input placeholder="Email" type="email" />
        </div>
        <div className={classes.input}>
          <Input placeholder="Password" type="password" />
        </div>
        <div className={classes.footer}>
          <div className={classes.left}>
            <p>
              Registered ?{" "}
              <Link to={"/login"} className={classes.link}>
                Login Here
              </Link>
            </p>
          </div>
          <div>
            <Button text="Signup" type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
