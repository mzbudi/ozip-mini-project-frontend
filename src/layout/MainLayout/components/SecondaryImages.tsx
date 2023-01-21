import React from "react";

interface SecondaryImagesProps {
  product: string;
}

const SecondaryImages: React.FC<SecondaryImagesProps> = ({ product }) => {
  return (
    <div className="w-[220px] h-[220px] bg-[#F8F8F8] flex justify-center mr-[17px]">
      <img src={product} alt="product" className="object-center" />
    </div>
  );
};

export default SecondaryImages;
