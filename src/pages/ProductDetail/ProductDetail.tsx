import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { addCart, selectCart } from "../../slices/cartSlices";

import Breadcrumb from "./components/Breadcrumb";
import ImageCarousel from "./components/ImageCarousel";
import SocialMediaList from "./components/SocialMediaList";
import BreadcrumbOutlet from "./components/BreadcrumbOutlet";

import { ReactComponent as Rating } from "../../assets/svg/rating.svg";
import { ReactComponent as EmptyRating } from "../../assets/svg/empty-rating.svg";

const sizeList: string[] = ["S", "M", "L", "XL", "XXL"];
const colorList: string[] = ["#3C3A49", "#843535"];

interface CartValue {
  id: string;
  size: string;
  color: string;
  qty: number;
  price: number;
  name: string;
}

const ProductDetail: React.FC = () => {
  const [qty, setQty] = useState<number>(0);
  const [size, setSize] = useState<string>("");
  const [color, setColor] = useState<string>("");

  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCart);

  const ratingGenerator = (rating: number) => {
    const ratingArray = [];
    for (let i = 0; i < rating; i++) {
      ratingArray.push(<Rating key={i} />);
    }
    for (let i = 0; i < 5 - rating; i++) {
      ratingArray.push(<EmptyRating key={i + rating} />);
    }
    return ratingArray;
  };

  const sizeGenerator = (sizeList: string[]) => {
    return sizeList.map((item, index) => {
      let compare: string = item;
      return (
        <div
          key={index}
          className={` ${
            size === compare ? "border-4" : "border-2"
          } flex flex-col items-center mr-6 box-border border-solid border-black`}
        >
          <button
            onClick={() => {
              setSize(item);
            }}
            className="w-[89px] h-[89px] bg-white flex justify-center items-center"
          >
            <p className="font-roboto font-medium text-[28px]">{item}</p>
          </button>
        </div>
      );
    });
  };

  const colorGenerator = (colorList: string[]) => {
    return colorList.map((item) => {
      const bgColor = "bg-[" + item + "]";

      return (
        <div
          key={item}
          className={`${
            item === color ? "border-4" : "border-[1px]"
          } flex flex-col items-center mr-6 box-border border-solid border-black `}
          style={{ backgroundColor: item }}
        >
          <button
            className={`${bgColor} w-[89px] h-[89px]`}
            onClick={() => {
              setColor(item);
            }}
          >
            {""}
          </button>
        </div>
      );
    });
  };

  const handleQtyBtn = (type: string) => {
    if (type === "plus") {
      setQty(qty + 1);
    } else {
      if (qty > 0) {
        setQty(qty - 1);
      }
    }
  };

  const handleQtyInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== "" && !isNaN(Number(e.target.value))) {
      setQty(Number(e.target.value));
    }
  };

  const addToCart = () => {
    const newCartValue= {
      id: Math.random().toString(36),
      size: size,
      color: color,
      qty: qty,
      price: 70000,
      name: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    };
    dispatch(addCart(newCartValue));
  };

  return (
    <div className="flex flex-col mx-[50px] my-10">
      <Breadcrumb />
      <div className="grid gap-16 grid-flow-col mt-[21.8px]">
        <ImageCarousel />
        <div className="flex flex-col">
          {/* Title */}
          <p className="font-radio_canada font-semibold text-[40px] leading-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          {/* Price and Ratings */}
          <div className="flex flex-row justify-between mt-5">
            <div>
              <p className="font-roboto font-bold text-3xl leading-[42.19px] text-price_inactive line-through">
                Rp.70.000
              </p>
              <p className="font-roboto font-bold text-[44px] leading-[51.64px] text-price">
                Rp.70.000
              </p>
            </div>
            <div className="flex items-center">
              {ratingGenerator(3)}
              <p className="font-roboto font-medium text-base ml-2">(65)</p>
            </div>
          </div>
          {/* Description */}
          <div className="mt-[26px] border-solid border-y-2 border-[#C9C9C9]">
            <p className="font-radio_canada font-normal text-xl leading-6 py-[22px] ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Corrupti, beatae iusto, eos asperiores expedita placeat rem odio,
              quos omnis aliquam accusantium quibusdam minima officiis a
              consequatur hic excepturi ratione quod!
            </p>
          </div>
          {/* Size */}
          <div className="mt-[40px]">
            <p className="font-roboto font-normal text-[28px] leading-[32.81px]">
              Ukuran
            </p>
            <div className="flex flex-row mt-[10px]">
              {sizeGenerator(sizeList)}
            </div>
          </div>
          {/* Color */}
          <div className="mt-[40px]">
            <p className="font-roboto font-normal text-[28px] leading-[32.81px]">
              Warna
            </p>
            <div className="flex flex-row mt-[10px]">
              {colorGenerator(colorList)}
            </div>
          </div>
          {/* Quantity */}
          <div className="mt-[40px]">
            <p className="font-roboto font-normal text-[28px] leading-[32.81px]">
              Jumlah
            </p>
            <div className="flex flex-row mt-[10px]">
              <div className="flex flex-col items-center mr-6 box-border border-solid border-[1px] border-black ">
                <button
                  className="w-[89px] h-[89px] bg-white flex justify-center items-center"
                  onClick={() => {
                    handleQtyBtn("minus");
                  }}
                >
                  <p className="font-roboto font-medium text-4xl max-w-[202px]">
                    -
                  </p>
                </button>
              </div>
              <div className="flex flex-col items-center mr-6 box-border border-solid border-[1px] border-black ">
                <input
                  type="text"
                  placeholder="1"
                  value={qty}
                  className="h-[89px] bg-white flex justify-center items-center text-center font-roboto font-medium text-4xl max-w-[202px]"
                  onChange={(e) => {
                    handleQtyInput(e);
                  }}
                />
              </div>
              <div className="flex flex-col items-center mr-6 box-border border-solid border-[1px] border-black ">
                <button
                  className="w-[89px] h-[89px] bg-white flex justify-center items-center"
                  onClick={() => {
                    handleQtyBtn("plus");
                  }}
                >
                  <p className="font-roboto font-medium text-4xl max-w-[202px]">
                    +
                  </p>
                </button>
              </div>
            </div>
            <p className="font-roboto font-normal text-2xl leading-[28.13px] mt-[10px]">
              Stok Barang : 500
            </p>
          </div>
          {/* Cart */}
          <button
            onClick={() => {
              addToCart();
            }}
            className="bg-primary font-roboto font-semibold text-[28px] text-center text-white mt-10 pt-[34px] pb-[33px]"
          >
            MASUKAN KERANJANG
          </button>
          {/* Social Media */}
          <SocialMediaList />
        </div>
      </div>
      <BreadcrumbOutlet />
    </div>
  );
};

export default ProductDetail;