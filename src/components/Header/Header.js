import classes from "./Header.module.css";
import Toggle from "../../UI/Toggle/Toggle";
import Searchbar from "../Searchbar/Searchbar";

const Header = () => {
  return (
    <div className={classes.header_container}>
      <div className={classes.logo}>
        <h1>MovieDB</h1>
      </div>
      <div className={classes.search}>
        <Searchbar />
      </div>
      <div className={classes.toggle}>
        <Toggle />
      </div>
    </div>
  );
};

export default Header;
