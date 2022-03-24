import React from "react";
import classes from "./Login.module.css";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const [user, setUser] = React.useState({});
  const [isValidEmail, setisValidEmail] = React.useState(false);
  const [isValidPassword, setisValidPassword] = React.useState(false);
  const [disabled, setDisabled] = React.useState(true);
  const reguser = useSelector((state) => console.log(state.signupReducer.user));

  const handleChange = (event) => {
    event.preventDefault();
    setUser({ ...user, [event.target.name]: event.target.value });
    user.email.includes("@");
  };

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
          <Input
            placeholder="Email"
            type="email"
            name="email"
            value={user.email || ""}
            onChange={handleChange}
          />
        </div>
        <div className={classes.input}>
          <Input
            placeholder="Password"
            type="password"
            name="password"
            value={user.password || ""}
            onChange={handleChange}
          />
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
