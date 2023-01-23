import React, { useState } from "react";

import { ReactComponent as SlideLeft } from "../../../assets/svg/slide-left.svg";
import { ReactComponent as SlideRight } from "../../../assets/svg/slide-right.svg";

interface SecondaryImagesProps {
  photo: string;
}

const SecondaryImages: React.FC<SecondaryImagesProps> = ({ photo }) => {
  return (
    <div className="w-[220px] h-[220px] bg-[#F8F8F8] flex justify-center mr-[17px]">
      <img
        src={`${process.env.REACT_APP_PHOTO_URL}${photo}`}
        alt="product"
        className="object-center"
      />
    </div>
  );
};

interface ImageCarouselProps {
  photoUrl: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ photoUrl }) => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const handleSlideLeft = () => {
    if (currentImage === 0) {
      setCurrentImage(photoUrl.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  };

  const handleSlideRight = () => {
    if (currentImage === photoUrl.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };

  const secondaryImageRender = (photoList: string[]) => {
    return photoList.map((item, index) => {
      return <SecondaryImages photo={item} key={index} />;
    });
  };

  return (
    <div className="flex flex-col relative">
      <div className="w-[692px] h-[954px] bg-[#F8F8F8] flex justify-center mr-5 duration-100 ease-in">
        <img
          src={`${process.env.REACT_APP_PHOTO_URL}${photoUrl[currentImage]}`}
          alt="product"
          className="object-center"
        />
      </div>
      <div className="absolute top-[30%] -translate-x-0 translate-y-[50%] ">
        <button
          className=" bg-[#F0F0F0] px-[29px] py-[20px]"
          onClick={handleSlideLeft}
        >
          <SlideLeft />
        </button>
      </div>
      <div className="absolute top-[30%] -translate-x-0 translate-y-[50%] right-5">
        <button
          className="bg-[#F0F0F0] px-[29px] py-[20px]"
          onClick={handleSlideRight}
        >
          <SlideRight />
        </button>
      </div>
      <div className="flex flex-row mt-10">
        {secondaryImageRender(photoUrl)}
      </div>
    </div>
  );
};

export default ImageCarousel;
