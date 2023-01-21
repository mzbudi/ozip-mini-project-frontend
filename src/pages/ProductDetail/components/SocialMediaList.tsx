import React from "react";
import { ReactComponent as LoveCart } from "../../../assets/svg/love-cart.svg";
import { ReactComponent as FacebookCart } from "../../../assets/svg/facebook-cart.svg";
import { ReactComponent as TwitterCart } from "../../../assets/svg/twitter-cart.svg";
import { ReactComponent as InstagramCart } from "../../../assets/svg/instagram-cart.svg";

const SocialMediaList = () => {
  return (
    <div className="flex flex-row mt-10">
      <button className="mr-[60px]">
        <LoveCart />
      </button>
      <button className="mr-[60px]">
        <FacebookCart />
      </button>
      <button className="mr-[60px]">
        <TwitterCart />
      </button>
      <button className="mr-[60px]">
        <InstagramCart />
      </button>
    </div>
  );
};

export default SocialMediaList;
