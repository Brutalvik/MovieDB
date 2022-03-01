import bannerImage from "../assets/banner.jpg";
import classes from "./Banner.module.css";
const Banner = () => {
  return (
    <div className={classes.banner}>
      <img src={bannerImage} alt="banner" />
    </div>
  );
};

export default Banner;
