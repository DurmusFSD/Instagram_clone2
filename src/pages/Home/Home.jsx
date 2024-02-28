import React from "react";
import LargeNav from "../../components/Header/LargeNav/LargeNav";
import MobileNav from "../../components/Header/MobileNav/MobileNav";
import Feed from "./Feed/Feed";
import { Route, Routes } from "react-router-dom";
import Main from "../Profile/Main";

const Home = () => {
  return (
    <>
      <div className="w-full h-auto flex items-start justify-between lg:gap-x-32 md:gap-x-16 sm:gap-x-8 gap-x-4 relative">
        <div className="lg:w-[16%] md:w-[17%] sm:w-none w-none h-[100vh] pt-10 px-3 border-r border-r-gray-500 sticky top-0 left-0 lg:block sm:hidden hidden">
          <LargeNav />
        </div>

        <div className="w-full h-auto py-1 px-3 border-t border-t-[#1d1d1d] fixed bottom-0 left-0 lg:hidden md:hidden sm:block block bg-black z-50">
          <MobileNav />
        </div>
        <Routes>
            <Route exact path="/" element={<Feed/>}/>
            <Route exact path="/profile" element={<Main/>}/>
        </Routes>
      </div>
    </>
  );
};

export default Home;
