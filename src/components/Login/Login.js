import React from "react";
import classes from "./Login.module.css";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login");
  };
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1>Login</h1>
      </div>
      <form onSubmit={handleLogin}>
        <div className={classes.input}>
          <Input placeholder="Email" type="email" />
        </div>
        <div className={classes.input}>
          <Input placeholder="Password" type="password" />
        </div>
        <div className={classes.footer}>
          <div className={classes.left}>
            <p>
              New ?{" "}
              <Link to={"/signup"} className={classes.link}>
                Register Here
              </Link>
            </p>
          </div>
          <div>
            <Button text="Login" type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
