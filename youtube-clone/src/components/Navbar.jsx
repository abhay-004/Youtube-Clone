import React from "react";
import menu_icon from "../assets/menu.png";
import logo from "../assets/logo.png";
import search_icon from "../assets/search.png";
import upload_icon from "../assets/upload.png";
import more_icon from "../assets/more.png";
import notification_icon from "../assets/notification.png";
import profile_icon from "../assets/jack.png";
import { Link } from "react-router-dom";
const Navbar = ({setSidebar}) => {
  return (
    <nav className="flex-div py-2.5 px-[2%] justify-between shadow-xl sticky top-0 z-10 ">
      {/* Left side of Navbar */}

      <div className="nav-left flex-div">
        <img onClick={()=>{setSidebar(prev=>prev===false?true:false)}} className="w-5 mr-6 md:hidden" src={menu_icon} />
        <Link to="/"><img className=" logo w-32" src={logo} /></Link>
      </div>

      {/* Middle side of Navbar */}

      <div className="nav-middle flex-div">
        <div className=" search-box flex-div border-2 border-solid border-[#ccc] mr-3.5 py-2 px-3 rounded-3xl">
          <input
            className="w-[400px] border-none outline-none bg-transparent"
            type="text"
            placeholder="Search"
          />
          <img className="w-4" src={search_icon} />
        </div>
      </div>

      {/* Right Side of Navbar */}

      <div className="nav-right flex-div">
        <img src={upload_icon} />
        <img src={more_icon} />
        <img src={notification_icon} />
        <img className=" user-icon w-9 rounded-full  " src={profile_icon} />
      </div>
    </nav>
  );
};

export default Navbar;
