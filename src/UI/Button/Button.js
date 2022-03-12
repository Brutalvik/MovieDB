import classes from "./Button.module.css";
const Button = (props) => {
  return (
    <button className={`${classes.btn} ${props.className}`} {...props}>
      {props.text}
    </button>
  );
};

export default Button;
