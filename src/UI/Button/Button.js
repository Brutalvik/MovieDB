import classes from "./Button.module.css";
import { useSelector } from "react-redux";
const Button = (props) => {
  const clicked = useSelector((state) => state.headerReducer.clicked);
  return (
    <button
      className={!clicked ? classes.btn_light : classes.btn_dark}
      {...props}
    >
      {props.text}
    </button>
  );
};

export default Button;
