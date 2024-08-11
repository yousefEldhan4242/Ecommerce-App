import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import PropTypes from "prop-types";
// import { useSelector } from "react-redux";

const Navigator = ({ photo = true }) => {
  // const userSate = useSelector((state) => state.user);

  let flex;
  let width;
  if (photo == true) {
    flex = "flex gap-12";
    width = "22%";
  } else {
    width = "calc(22%_-_48px)";
    flex = "block";
  }
  return (
    <section
      className={`container ${flex} text-nowrap md:flex-nowrap flex-wrap`}
    >
      <div
        className={`navigator pt-10 md:border-r-[1px] md:border-border-color flex grow gap-3 md:justify-between w-[${width}]`}
      >
        <ul className="flex flex-col justify-between">
          <li className="hover:text-navigator-hover-color duration-300">
            <span className="cursor-pointer">Woman’s Fashion</span>
          </li>
          <li className="hover:text-navigator-hover-color duration-300">
            <span className="cursor-pointer">Men’s Fashion</span>
          </li>
          <li className="hover:text-navigator-hover-color duration-300">
            <span className="cursor-pointer">Electronics</span>
          </li>
          <li className="hover:text-navigator-hover-color duration-300">
            <span className="cursor-pointer">Home & Lifestyle</span>
          </li>
          <li className="hover:text-navigator-hover-color duration-300">
            <span className="cursor-pointer">Medicine</span>
          </li>
          <li className="hover:text-navigator-hover-color duration-300">
            <span className="cursor-pointer">Sports & Outdoor</span>
          </li>
          <li className="hover:text-navigator-hover-color duration-300">
            <span className="cursor-pointer">Baby’s & Toys</span>
          </li>
          <li className="hover:text-navigator-hover-color duration-300">
            <span className="cursor-pointer">Groceries & Pets</span>
          </li>
          <li className="hover:text-navigator-hover-color duration-300">
            <span className="cursor-pointer">Health & Beauty</span>
          </li>
        </ul>
        <ul className="arrows mr-5">
          <li>
            <KeyboardArrowRightOutlinedIcon className="cursor-pointer" />
          </li>
          <li>
            <KeyboardArrowRightOutlinedIcon className="cursor-pointer" />
          </li>
          {/* <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li> */}
        </ul>
      </div>
      <div className="image pt-10 w-[78%] flex items-center w-full md:w-fit">
        <img className="w-full" src="./../../imgs/homepng.png" alt="" />
      </div>
    </section>
  );
};
Navigator.propTypes = {
  photo: PropTypes.bool,
};

export default Navigator;
