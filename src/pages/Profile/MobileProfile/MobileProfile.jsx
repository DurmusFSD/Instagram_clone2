import React, { useState } from "react";
import { Link } from "react-router-dom";
import LikIcon from "../../../components/Icons/LinkIcon/LinkIcon";
import highlightData from "../../Profile/HighlightsData";
import Tab from "../Profile/Tab/Tab";
import PostIcon from "../../../components/Icons/Post/post.png";
import ReelIcon from "../../../components/Icons/Reel/reel.png";
import TagIcon from "../../../components/Icons/Tag/tag.png";
import Post from "../Profile/Post/Post";
import Reels from "../Profile/Reels/Reels";
import Tags from "../Profile/Tags/Tags";

const MobileProfile = () => {
  const [activeTab, setActiveTab] = useState("posts");
  const [isContentVisible, setContentVisible] = useState(true);

  const handleTabClick = (tab) => {
    setContentVisible(false);

    setTimeout(() => {
      setActiveTab(tab);
      setContentVisible(true);
    }, 300);
  };
  return (
    <>
      <div className="w-full h-auto lg:hidden md:hidden sm:block block text-white">
        <div className="w-full h-auto flex items-center gap-x-8 justify-center mb-3">
          <img
            src="https://source.unsplash.com/random/?climber"
            alt="profile img"
            className="rounded-full w-20 h-20 object-cover"
          />
          <div className="flex items-start flex-col gap-y-3">
            <Link to="/profile" className="text-lg text-gray-200 font-normal">
              d.ozgul
            </Link>
            <div className="flex items-center gap-x-2">
              <button className="bg-[#1d1d1d] rounded-lg px-4 py-1.5 text-base text-white font-normal hover:bg-[#2f2f2f] ease-out duration-150">
                Profili düzenle
              </button>
              <button className="bg-[#1d1d1d] rounded-lg px-4 py-1.5 text-base text-white font-normal hover:bg-[#2f2f2f] ease-out duration-150">
                Arşivi Gör
              </button>
            </div>
          </div>
        </div>
        <p className="text-base text-gray-100 font-normal">Durmuş Özgül</p>
        <p className="text-sm text-gray-100 font-normal">
          @realmadrid <br />
          @galatasaray
          <br />
          Bazen inanmak, en büyük kumardır
          <br />
          #GordonLYON
          <br />
          Fronted Devoloper
          <br />
        </p>
        <p className="text-base text-gray-100 font-normal flex items-center gap-x-2 mb-5">
          <LikIcon />
          <Link to="/" className="text-blue-500 hover:underline font-medium">
            https://www.linkedin.com/in/durmu%C5%9F-%C3%B6zg%C3%BCl/
          </Link>
        </p>
        <p className="text-base text-gray-100 font-normal flex items-center gap-x-2 mb-5">
          <LikIcon />
          <Link to="/" className="text-blue-500 hover:underline font-medium">
            https://github.com/DurmusFSD
          </Link>
        </p>

        <div className="w-full h-auto flex items-center gap-x-9 mb-10">
          <div className="w-full h-auto flex items-center gap-x-3.5 overflow-x-scroll">
            {highlightData.map((data) => (
              <Link
                to="/"
                key={data.id}
                className="flex items-center justify-between flex-col flex-shrink-0"
              >
                <div className="w-28 h-28 rounded-full object-cover p-[28] bg-gradient-to-r from-[#1d1d1d] to-[#1d1d1d]">
                  <img
                    src={data.img}
                    alt={data.name}
                    className="rounded-full h-full w-full object-cover p-[2.5px] bg-black"
                  />
                </div>
                <p className="text-white text-sm mt-1">{data.name}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full h-auto flex items-center justify-around border-t border-t-[#1d1d1d]">
          <div className="flex items-center flex-col py-3">
            <h6 className="text-base text-white font-medium mb-0">00</h6>
            <p className="text-sm text-white/40 font-thin">Post</p>
          </div>
          <div className="flex items-center flex-col py-3">
            <h6 className="text-base text-white font-medium mb-0">00</h6>
            <p className="text-sm text-white/40 font-thin">Takipçi</p>
          </div>
          <div className="flex items-center flex-col py-3">
            <h6 className="text-base text-white font-medium mb-0">00</h6>
            <p className="text-sm text-white/40 font-thin">Takip</p>
          </div>
        </div>
        <div className="w-full h-auto">
          <div className="w-full h-auto flex items-center justify-center gap-x-6 mb-4 border-t border-[#313131]">
            <Tab
              label="POSTS"
              icon={PostIcon}
              isActive={activeTab === "posts"}
              onClick={() => handleTabClick("posts")}
            />
            <Tab
              label="REELS"
              icon={ReelIcon}
              isActive={activeTab === "reels"}
              onClick={() => handleTabClick("reels")}
            />
            <Tab
              label="TAGGED"
              icon={TagIcon}
              isActive={activeTab === "tagged"}
              onClick={() => handleTabClick("tagged")}
            />
          </div>
          <div
            className={`mt-4 transition-opacity duration-300 ease-out ${
              isContentVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {activeTab === "posts" && <Post />}
            {activeTab === "reels" && <Reels />}
            {activeTab === "tagged" && <Tags />}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileProfile;
