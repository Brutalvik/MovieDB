import React from "react";
import classes from "./Signup.module.css";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signupActions } from "../../store/signupReducer";

const Signup = () => {
  const dispatch = useDispatch();
  const [user, setUser] = React.useState({});
  const [isValidEmail, setisValidEmail] = React.useState(false);
  const [isValidPassword, setisValidPassword] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [disabled, setDisabled] = React.useState(true);
  const reguser = useSelector((state) => console.log(state.signupReducer.user));

  const handleChange = (event) => {
    event.preventDefault();
    setUser({ ...user, [event.target.name]: event.target.value });
    if (user.name.includes("@") && user.password.length > 5) {
      setisValidEmail(true);
      setisValidPassword(true);
      setDisabled(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.name === "" || user.name === undefined) {
      setErrorMessage("Name must be at least 3 characters long");
    }

    if (user.password === "") {
      setErrorMessage("Password must be at least 5 characters long");
    }
    dispatch(
      signupActions.registerUser({
        name: user.name,
        email: user.email,
        password: user.password,
      })
    );
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1>Signup</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={classes.input}>
          <Input
            placeholder="Name"
            name="name"
            value={user.name || ""}
            type="text"
            onChange={handleChange}
          />
        </div>
        <div className={classes.input}>
          <Input
            placeholder="Email"
            name="email"
            value={user.email || ""}
            type="email"
            onChange={handleChange}
          />
        </div>
        <div className={classes.input}>
          <Input
            placeholder="Password"
            name="password"
            value={user.password || ""}
            type="password"
            onChange={handleChange}
          />
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
      <p>{errorMessage}</p>
    </div>
  );
};

export default Signup;
