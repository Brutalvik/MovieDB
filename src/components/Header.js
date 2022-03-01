import classes from "./Header.module.css";
import Search from "./Search";
const Header = () => {
  return (
    <div className={classes.header_container}>
      <div>
        <h1>MovieDB</h1>
      </div>
      <div>
        <Search />
      </div>
    </div>
  );
};

export default Header;
