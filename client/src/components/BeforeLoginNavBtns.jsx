import React from "react";
import { Link } from "react-router-dom";

const BeforeLoginNavBtns = () => {
  return (
    <>
      <div className="md:hidden block">
        <ul className="bg-bg_dark_section text-bg_dark_font font-bold absolute w-full left-0 top-[-400px] opacity-0 duration-200 flex mx-auto items-center justify-around">
          <li className="mx-2 my-3 md:my-0 hover:text-primary_element text-sm ">
            <Link
              className="py-2 px-4 bg-bg_light_section rounded-md hover:bg-bg_red hover:text-bg_white_font duration-200"
              to={"/login"}
            >
              Log in
            </Link>
          </li>
          <li className="mx-2 my-6 md:my-0 hover:text-primary_element text-sm">
            <Link
              className="py-2 px-4 bg-bg_light_section rounded-md hover:bg-bg_red hover:text-bg_white_font duration-200"
              to={"/register"}
            >
              Get&nbsp;started
            </Link>
          </li>
        </ul>
      </div>
      <div className="md:block hidden ">
        <ul className="py-3 flex w-full ">
          <li className="mx-1 my-6 md:my-0 hover:scale-95 duration-200">
            <Link
              className="py-2.5 px-2.5 font-semibold text-sm bg-bg_white text-bg_dark_font border-2 border-bg_light_section rounded-md items-center hover:bg-bg_red duration-200 hover:border-bg_red hover:text-bg_white_font"
              to={"/login"}
            >
              Log In
            </Link>
          </li>
          <li className="mx-2 my-6 md:my-0 hover:scale-95 duration-200">
            <Link
              className="py-2.5 px-2.5 font-semibold text-sm bg-bg_white text-bg_dark_font border-2 border-bg_light_section rounded-md items-center hover:bg-bg_red duration-200 hover:border-bg_red hover:text-bg_white_font"
              to={"/student/register"}
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BeforeLoginNavBtns;
