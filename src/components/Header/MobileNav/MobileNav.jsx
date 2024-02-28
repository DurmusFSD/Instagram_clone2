import HomeLogo from "../../../assets/navlogo/home.png";
import SearchLogo from "../../../assets/navlogo/search.png";
import ExploreLogo from "../../../assets/navlogo/explore.png";
import ReelsLogo from "../../../assets/navlogo/reel.png";
import MessagesLogo from "../../../assets/navlogo/message.png";
import NotificationsLogo from "../../../assets/navlogo/like.png";
import CreateLogo from "../../../assets/navlogo/create.png";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Feed from "../../../pages/Home/Feed/Feed";

const MobileNav = () => {
  const sidebarItems = [
    {
      link: "/search",
      icon: SearchLogo,
    },
    {
      link: "/create",
      icon: CreateLogo,
    },
    {
      link: "/reels",
      icon: ReelsLogo,
    },
  ];

  return (
    <>
      <div className="w-full h-auto">
        <div className="w-full f-auto flex items-center gap-x-2">
          <Link
            to="/"
            className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent group"
          >
            <img
              src={HomeLogo}
              alt="Home Logo"
              className="w-10 h-10 object-contain group-hover:scale-105 ease-out duration-300"
            />
          </Link>
          {sidebarItems.map((item) => (
            <Link
              to={item.link}
              key={item.id}
              className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent group"
            >
              <img
                src={item.icon}
                alt="Home Logo"
                className="w-10 h-10 object-contain group-hover:scale-105 ease-out duration-300"
              />
            </Link>
          ))}
          <Link
            to="/profile"
            className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent group"
          >
            <img
              src="https://source.unsplash.com/random/?profile"
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover group-hover:scale-105 ease-out duration-300"
            />
          </Link>
        </div>
        
      </div>
    </>
  );
};

export default MobileNav;
