import React from "react";
import { Link } from "react-router-dom";
import InstagramLogo from "../../../assets/logo/instagram.png";
import InstagramIcon from "../../../assets/logo/icon.png";
import HomeLogo from "../../../assets/navlogo/home.png";
import SearchLogo from "../../../assets/navlogo/search.png";
import ExploreLogo from "../../../assets/navlogo/explore.png";
import ReelsLogo from "../../../assets/navlogo/reel.png";
import MessagesLogo from "../../../assets/navlogo/message.png";
import NotificationsLogo from "../../../assets/navlogo/like.png";
import CreateLogo from "../../../assets/navlogo/create.png";
import ThreadsLogo from "../../../assets/navlogo/threads.png";
import MoreLogo from "../../../assets/navlogo/more.png";

const LargeNav = () => {
  const sidebarItems = [
    {
      name: "Ara",
      link: "/search",
      icon: SearchLogo,
    },
    {
      name: "Keşfet",
      link: "/explore",
      icon: ExploreLogo,
    },
    {
      name: "Reels",
      link: "/reels",
      icon: ReelsLogo,
    },
    {
      name: "Mesajlar",
      link: "/messages",
      icon: MessagesLogo,
    },
    {
      name: "Bildirimler",
      link: "/notifications",
      icon: NotificationsLogo,
    },
    {
      name: "Oluştur",
      link: "/create",
      icon: CreateLogo,
    },
  ];

  return (
    <>
      <div className="w-full h-full relative">
        <Link to="/" className="mb-10 px-2 lg:block md:hidden sm:hidden hidden">
          <img
            src={InstagramLogo}
            alt="Instagram Logo"
            className="w-30 h-auto"
          />
        </Link>
        <Link to="/" className="mb-10 px-2 lg:hidden md:block sm:block block">
          <img
            src={InstagramIcon}
            alt="Instagram Logo"
            className="w-30 h-auto"
          />
        </Link>
        <div className="w-full h-auto flex items-start flex-col gap-y-2">
          <Link
            to="/"
            className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group"
          >
            <img
              src={HomeLogo}
              alt="Home Logo"
              className="w-10 h-10 object-contain group-hover:scale-105 ease-out duration-300"
            />
            <p className="text-base font-semibold text-white lg:block md:hidden sm:hidden hidden">
              Ana Sayfa
            </p>
          </Link>
          {sidebarItems.map((item) => (
            <Link
              to={item.link}
              key={item.id}
              className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group"
            >
              <img
                src={item.icon}
                alt="Home Logo"
                className="w-10 h-10 object-contain group-hover:scale-105 ease-out duration-300"
              />
              <p className="text-base font-medium text-white lg:block md:hidden sm:hidden hidden">
                {item.name}
              </p>
            </Link>
          ))}

          <Link
            to="/profile"
            className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group"
          >
            <img
              src="https://source.unsplash.com/random/?profile"
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover group-hover:scale-105 ease-out duration-300"
            />
            <p className="text-base font-medium text-white lg:block md:hidden sm:hidden hidden">
              Profil
            </p>
          </Link>
        </div>
        <div className="w-full h-auto absolute bottom-0 left-0 px-0">
          <Link
            to="/"
            className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group mb-2"
          >
            <img
              src={ThreadsLogo}
              alt="Home Logo"
              className="w-10 h-10 object-contain group-hover:scale-105 ease-out duration-300"
            />
            <p className="text-base font-medium text-white lg:block md:hidden sm:hidden hidden">
              Threads
            </p>
          </Link>

          <Link
            to="/"
            className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group mb-10"
          >
            <img
              src={MoreLogo}
              alt="Home Logo"
              className="w-10 h-10 object-contain group-hover:scale-105 ease-out duration-300"
            />
            <p className="text-base font-medium text-white lg:block md:hidden sm:hidden hidden">
              Daha Fazla
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LargeNav;
