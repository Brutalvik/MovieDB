import bannerImage from "../assets/banner.jpg";
import classes from "./Banner.module.css";
import Searchresults from "../components/Searchresults";
const Banner = () => {
  return (
    <div className={classes.banner}>
      <img src={bannerImage} alt="banner" />
      <div className={classes.display}>
        <Searchresults />
      </div>
    </div>
  );
};

export default Banner;
