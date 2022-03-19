import classes from "./Spinner.module.css";
import { useSelector } from "react-redux";

const Spinner = () => {
  const clicked = useSelector((state) => state.logicReducer.clicked);
  return (
    <div
      className={`${classes.spinner} ${clicked ? classes.dark : classes.light}`}
    ></div>
  );
};

export default Spinner;
