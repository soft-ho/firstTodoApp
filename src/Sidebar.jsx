import React from "react";
import { MdFavorite } from "react-icons/md";
import { BsFillCalendar2DayFill } from "react-icons/bs";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineFileAdd } from "react-icons/ai";
import { LuUserSquare } from "react-icons/lu";
const Sidebar = ({ setAddModel }) => {
  return (
    <div className="sidebar-main">
      <MdFavorite className="fav" />
      <BsFillCalendar2DayFill className="calender" />
      <AiOutlineFileAdd
        className="btn"
        onClick={() => {
          setAddModel(true);
        }}
      />
      <LuUserSquare className="user" />
      <FaFacebookF className="facebook" />
      <AiOutlineGoogle className="google" />
    </div>
  );
};

export default Sidebar;
