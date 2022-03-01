import classes from "./Header.module.css";
import Search from "./Search";
const Header = () => {
  return (
    <div className={classes.header_container}>
      <div className={classes.logo}>
        <h1>MovieDB</h1>
      </div>
      <div className={classes.search}>
        <Search />
      </div>
    </div>
  );
};

export default Header;
