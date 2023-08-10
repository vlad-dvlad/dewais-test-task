import Styles from "./loader.module.scss";
import className from "classnames/bind";

const cx = className.bind(Styles);

const Loader = () => {
  return <div className={cx("loader")}>Loading....</div>;
};

export default Loader;
