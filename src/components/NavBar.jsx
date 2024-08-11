import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useState, useEffect } from "react";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import PropTypes from "prop-types";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../rtk/slices/user-loggedIn-slice";
import Swal from "sweetalert2";

const Navbar = ({ isInSignUpOrLogIn = false }) => {
  const dispatch = useDispatch();

  const whishList = useSelector((state) => state.whishList);
  const cart = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.loggedIn);

  const burgerIconRef = useRef();
  const searchBarRef = useRef();
  const userIconParentRef = useRef();
  const userIconRef = useRef();
  const settingRef = useRef();

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleUserIconClick = () => {
    userIconParentRef.current.classList.toggle("bg-main-color");
    userIconRef.current.classList.toggle("filter-white");
    settingRef.current.classList.toggle("opacity-0");
    settingRef.current.classList.toggle("z-[-100]");
  };

  const handleBurgerIcon = () => {
    burgerIconRef.current.classList.toggle("clicked");
  };

  const handleSearchBar = () => {
    if (width <= 450) {
      searchBarRef.current.classList.toggle("opacity-0");
      searchBarRef.current.classList.toggle("z-[-100]");
    }
  };

  return (
    <header>
      <div className="add bg-black text-[#fafafa] py-5">
        <div className="container flex justify-between items-center gap-3">
          <div></div>
          <div>
            <span className="text-[14px] text-balance font-extralight">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </span>{" "}
            <ins className="cursor-pointer font-bold ml-1 text-white">
              ShopNow
            </ins>
          </div>
          <div>
            English <KeyboardArrowDownOutlinedIcon />
          </div>
        </div>
      </div>

      <nav className="p-4 pt-10 bg-white text-black">
        <div
          className={`container mx-auto flex items-center gap-[3vw] justify-between md:justify-stretch
           ${
             // If There Is No Icons Beside The Search Bar
             isInSignUpOrLogIn == true && "lg:gap-[70px]"
           }`}
        >
          {/* Logo */}
          <div className=" text-xl font-bold">
            <Link className="text-[20px] xs:text-[25px]" to={"/"}>
              Exclusive
            </Link>
          </div>

          {/* Center Links */}
          <ul
            className={`hidden md:flex ml-[2vw] font-medium grow justify-between lg:justify-center lg:gap-[7vw]`}
          >
            <li>
              <Link
                to="/"
                className={`border-b-[1px]  hover:border-gray-400 ${
                  window.location.pathname == "/"
                    ? "border-gray-400"
                    : "border-transparent"
                } duration-300`}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className={`border-b-[1px]  hover:border-gray-400 ${
                  window.location.pathname == "/contact"
                    ? "border-gray-400"
                    : "border-transparent"
                } duration-300`}
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className={`border-b-[1px]  hover:border-gray-400 ${
                  window.location.pathname == "/about"
                    ? "border-gray-400"
                    : "border-transparent"
                } duration-300`}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/signUp"
                className={`border-b-[1px]  hover:border-gray-400 ${
                  window.location.pathname == "/signUp"
                    ? "border-gray-400"
                    : "border-transparent"
                } duration-300`}
              >
                SignUp
              </Link>
            </li>
          </ul>

          {/* Search Bar and Icons */}
          <div className="flex flex-col gap-2 items-center relative">
            <div className="flex items-center justify-between w-[100%] gap-2 md:grow-0">
              {/* Search Bar */}

              <div
                onClick={() => {
                  // If There Is Icons Beside The Search Bar
                  if (isInSignUpOrLogIn == false) {
                    handleSearchBar();
                  }
                }}
                className={`relative text-center ${
                  isInSignUpOrLogIn ? "w-full" : "md:min-w-[70%]"
                }`}
              >
                <input
                  type="text"
                  className={`bg-[#f5f5f5] px-5 p-2 focus:outline-none rounded w-[100%] pr-8 text-[13px] ${
                    // If There Is No Icons Beside The Search Bar

                    isInSignUpOrLogIn == false ? "hidden" : "block"
                  } xs:block
                  `}
                  placeholder="What are you looking for?"
                />

                {/* Search Icon */}
                <span
                  className={`xs:absolute xs:top-[15%] xs:right-[5px] cursor-pointer
                   ${
                     // If There Is No Icons Beside The Search Bar

                     isInSignUpOrLogIn == true &&
                     "absolute top-[24%] right-[5px]"
                   } `}
                >
                  <SearchOutlinedIcon />
                </span>
              </div>

              {!isInSignUpOrLogIn && (
                // Return Icons If User Is Not In SignUp Or LogIn Page
                <>
                  {/* Heart Icon */}
                  <Link to="/whishList" className="relative">
                    {whishList.length > 0 && (
                      <span className="absolute top-[-3px] right-[-5px] bg-main-color text-white rounded-full h-4 w-4 flex justify-center items-center text-[10px]">
                        {whishList.length}
                      </span>
                    )}

                    <FavoriteBorderOutlinedIcon />
                  </Link>

                  {/* Cart Icon */}
                  <Link to="/cart" className="relative">
                    {cart.length > 0 && (
                      <span className="absolute top-[-3px] right-[-5px] bg-main-color text-white rounded-full h-4 w-4 flex justify-center items-center text-[10px]">
                        {cart.length}
                      </span>
                    )}
                    <ShoppingCartOutlinedIcon />
                  </Link>
                </>
              )}

              {/* User Icon */}
              {isLoggedIn && !isInSignUpOrLogIn && (
                // Return User Icon If User Is Not In SignUp Or LogIn Page And Logged In
                <div
                  className="relative w-7 h-7 rounded-full duration-300 flex items-center justify-center"
                  ref={userIconParentRef}
                >
                  <span
                    onClick={() => {
                      handleUserIconClick();
                    }}
                    className="p-1 duration-300 rounded-full w-8 h-8 cursor-pointer"
                  >
                    <PersonOutlineOutlinedIcon
                      ref={userIconRef}
                      className="duration-300"
                    />
                  </span>
                  <div
                    ref={settingRef}
                    className="flex flex-col top-[40px] left-[-508%] gap-3 bg-[#f5f5f5] text-black absolute z-[-100] opacity-0 duration-300"
                  >
                    <Link
                      className="flex gap-2 text-nowrap items-center hover:bg-[rgb(169_169_169)] duration-300 bg-[#f5f5f5] pt-3 px-3"
                      to={"/account"}
                    >
                      <div>
                        <PersonOutlineOutlinedIcon />
                      </div>
                      <div>Manage My Account</div>
                    </Link>
                    <div className="flex gap-2 text-nowrap items-center hover:bg-[rgb(169_169_169)] duration-300 bg-[#f5f5f5] px-3">
                      <div>
                        <LocalMallOutlinedIcon />
                      </div>
                      <div>My Order</div>
                    </div>
                    <div className="flex gap-2 text-nowrap items-center hover:bg-[rgb(169_169_169)] duration-300 bg-[#f5f5f5] px-3">
                      <div>
                        <HighlightOffOutlinedIcon />
                      </div>
                      <div>My Cancellations</div>
                    </div>
                    <div className="flex gap-2 text-nowrap items-center hover:bg-[rgb(169_169_169)] duration-300 bg-[#f5f5f5] px-3">
                      <div>
                        <StarBorderOutlinedIcon />
                      </div>
                      <div>My Reviews</div>
                    </div>
                    <div
                      className="flex gap-2 text-nowrap items-center cursor-pointer hover:bg-[rgb(169_169_169)] duration-300 bg-[#f5f5f5] px-3 pb-3"
                      onClick={() => {
                        dispatch(logOut());
                        Swal.fire({
                          title: "Good Job",
                          text: `You Have Successfully Logged Out`,
                          icon: "success",
                        });
                      }}
                    >
                      <div>
                        <LogoutOutlinedIcon />
                      </div>
                      <div>Logout</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <input
              ref={searchBarRef}
              type="text"
              className="search-input bg-[#f5f5f5] p-2 pr-0 outline-none rounded w-[100%] top-[40px] absolute opacity-0 duration-300 text-[13px] xs:hidden z-[-100]"
              placeholder="What are you looking for?"
            />
          </div>

          {/* Burger Icon */}
          <div
            onClick={handleBurgerIcon}
            ref={burgerIconRef}
            className="burger-icon md:hidden w-5 h-[14px] shrink-0 relative cursor-pointer flex flex-col gap-4 items-center"
          >
            <span className="bg-black w-full h-[2px] absolute left-0 duration-300 top-0"></span>
            <span className="bg-black w-full h-[2px] absolute left-0 duration-300 top-[6px]"></span>
            <span className="bg-black w-full h-[2px] absolute left-0 duration-300 top-[12px]"></span>
            <ul className="links absolute top-[30px] flex flex-col font-medium gap-4 duration-300 shadow-lg p-2 bg-[#f5f5f5] border-[2px] border-border-color">
              <li>
                <Link
                  to="/"
                  className={`border-b-[1px]  hover:border-gray-400 ${
                    window.location.pathname == "/"
                      ? "border-gray-400"
                      : "border-transparent"
                  } duration-300`}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className={`border-b-[1px]  hover:border-gray-400 ${
                    window.location.pathname == "/contact"
                      ? "border-gray-400"
                      : "border-transparent"
                  } duration-300`}
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className={`border-b-[1px]  hover:border-gray-400 ${
                    window.location.pathname == "/about"
                      ? "border-gray-400"
                      : "border-transparent"
                  } duration-300`}
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/signUp"
                  className={`border-b-[1px]  hover:border-gray-400 ${
                    window.location.pathname == "/signUp"
                      ? "border-gray-400"
                      : "border-transparent"
                  } duration-300`}
                >
                  SignUp
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr className="border-border-color" />
    </header>
  );
};

Navbar.propTypes = {
  isInSignUpOrLogIn: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
};

export default Navbar;
