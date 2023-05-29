import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";
import user from "../assets/user.png";
import student from "../assets/stdnt.png";
import home from "../assets/home.png";
import report from "../assets/file.png";
import fine from "../assets/rupee.png";
import logout from "../assets/logout.png";

const StudentSidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Home", src: "home" },
    { title: "My&nbsp;Profile", src: "user" },
    { title: "Student&nbsp;info", src: "stdnt" },
    { title: "Report", src: "file" },
    { title: "Fine", src: "rupee" },
  ];
  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-60" : "w-20"
        } duration-300 h-screen p-5 pt-8 bg-bg_dark_section relative`}
      >
        <div
          className={`absolute cursor-pointer rounded-full -right-3 border-2 top-9 w-7 border-bg_dark_section bg-white text-bg_dark_section ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <div className="flex gap-x-3 items-center ml-2">
          <img
            className={`h-6 border-2 border-bg_white bg-bg_white rounded-xl duration-500 ${
              open && "rotate-[360deg]"
            }`}
            src={logo}
            alt=""
          />
          <h1
            className={`text-lg font-semibold text-bg_white_font duration-300 origin-left ${
              !open && "hidden"
            }`}
          >
            APC&nbsp;Nadiad
          </h1>
        </div>
        <ul className="pt-6">
          <li className="text-white text-sm flex items-center gap-x-4 cursor-pointer mb-3 p-2 hover:bg-white hover:bg-opacity-20 rounded-md">
            <img className="h-6" src={user} />
            <span className={`${!open && "hidden"} origin-left duration-500`}>
              My&nbsp;profile
            </span>
          </li>
          <li className="text-white text-sm flex items-center gap-x-4 cursor-pointer mb-3 p-2 hover:bg-white hover:bg-opacity-20 rounded-md">
            <img className="h-6" src={home} />
            <span className={`${!open && "hidden"} origin-left duration-500`}>
              Home
            </span>
          </li>
          <li className="text-white text-sm flex items-center gap-x-4 cursor-pointer mb-3 p-2 hover:bg-white hover:bg-opacity-20 rounded-md">
            <img className="h-6" src={report} />
            <span className={`${!open && "hidden"} origin-left duration-500`}>
              Report
            </span>
          </li>
          <li className="text-white text-sm flex items-center gap-x-4 cursor-pointer mb-3 p-2 hover:bg-white hover:bg-opacity-20 rounded-md">
            <img className="h-6" src={logout} />
            <span className={`${!open && "hidden"} origin-left duration-500`}>
              Log&nbsp;out
            </span>
          </li>
        </ul>
      </div>
      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
        <h1>Student Home page</h1>
      </div>
    </div>
  );
};

export default StudentSidebar;