import React from "react";
import instagramFeed from "../FeedData/FeedData";
import { Link } from "react-router-dom";
import Ellipse from "../../../../components/Icons/Ellipse/Ellipse";
import Like from "../../../../components/Icons/Like/Like";
import Comment from "../../../../components/Icons/Comment/Comment";
import Share from "../../../../components/Icons/Share/Share";
import Save from "../../../../components/Icons//Save/Save";
import Emoji from "../../../../components/Icons//Emoji/Emoji";

const FeedCart = () => {
  return (
    <>
      {instagramFeed.map((feed) => (
        <div key={feed.id} className="w-full h-auto mb-6">
          <div className="w-full h-auto flex items-center justify-between mb-2">
            <div className="flex items-center gap-x-2">
              <Link
                to="/"
                className="flex items-center justify-center flex-col flex-shrink-0"
              >
                <div className="w-20 h-20 rounded-full object-cover p-[2px] bg-gradient-to-r from-[#f02aa6] to-[#ff6f48]">
                  <img
                    src={feed.profileImg}
                    alt={feed.profileImg}
                    className="rounded-full w-full h-full object-cover p-[2.5px] bg-black"
                  />
                </div>
              </Link>
              <div className="flex items-center gap-x-2">
                <p className="text-white text-sm font-medium">
                  {feed.username}
                </p>
                <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                <p className="text-white text-sm font-medium">{feed.time}</p>
              </div>
            </div>
            <Ellipse />
          </div>
          <div className="w-full lg:max-h-[75vh] md:max-h-[70vh] sm:max-h-[65vh] max-h-[50vh] sm:min-h-[50vh] min-h-[45vh] border border-gray-300 rounded overflow-hidden mb-3">
            <img
              src={feed.postImg}
              alt={feed.caption}
              className="w-full h-full rounded object-center"
            />
          </div>
          <div className="w-full h-auto flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              <Like />
              <Comment />
              <Share />
            </div>
            <Save />
          </div>
          <Link
            to="/"
            className="w-full h-auto flex items-center gap-x-2 text-base text-gray-200 font-medium my-2"
          >
            <div className="flex items-center">
              <img
                src={feed.mutualFrndImg1}
                alt={feed.likeCount}
                className="w-5 h-5 rounded-full object-full p-[1.5px] bg-black"
              />
              <img
                src={feed.mutualFrndImg2}
                alt={feed.likeCount}
                className="w-5 h-5 rounded-full object-full p-[1.5px] bg-black -ml-3"
              />
            </div>
            {feed.likeCount} Begeni
          </Link>
          <div className="w-full h-auto flex items-center gap-x-1">
            <div className="w-full h-auto text-sm text-gray-200 font-thin">
              <Link to="/" className="text-white font-medium text-sm me-1">
                {feed.username}
              </Link>
              {feed.caption}
              <Link to="/" className="text-gray-400 text-sm ms-1">
                Daha Fazla
              </Link>
            </div>
          </div>
          <Link to="/" className="text-gray-400 font-normal my-2">
            {feed.commentCount} yorumun tümünü gör
          </Link>
          <div className="w-full h-auto flex items-center justify-between border-b border-b-gray-500">
            <input
              type="text"
              className="w-[90%] h-auto bg-transparent border-none outline-none focus:outline-none text-sm text-gray-400 py-3"
              placeholder="Yorum ekle"
            />
            <Emoji />
          </div>
        </div>
      ))}
    </>
  );
};

export default FeedCart;
