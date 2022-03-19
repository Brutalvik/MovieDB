import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <input className={`${classes.text_input} ${props.className}`} {...props} />
  );
};

export default Input;
