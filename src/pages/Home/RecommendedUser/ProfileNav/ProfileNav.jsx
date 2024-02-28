import React from "react";
import { Link } from "react-router-dom";

const ProfileNav = () => {
  return (
    <>
      <div className="w-full h-auto flex items-center justify-between">
        <Link to="/profile" className="w-full h-auto items-center gap-x-2">
          <img
            src="https://source.unsplash.com/random/?music"
            alt=""
            className="w-12 h-12 rounded-full"
          />
          <div className="flex items-start gap-y-0 flex-col">
            <p className="text-[0.9rem] text-white font-medium mb-0">d.ozgul</p>
            <h6 className="text-[0.935rem] text-gray-500 font-normal">
              Durmuş Özgül
            </h6>
          </div>
        </Link>
        <Link
          to="/"
          className="text-[0.885rem] text-blue-500 hover:text-gray-200"
        >
          Geçiş Yap
        </Link>
      </div>
    </>
  );
};

export default ProfileNav;
