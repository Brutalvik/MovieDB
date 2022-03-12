import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <input className={`${classes.movie_input} ${props.className}`} {...props} />
  );
};

export default Input;
