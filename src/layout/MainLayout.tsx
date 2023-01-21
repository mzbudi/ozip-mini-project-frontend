import React from "react";
import product from "../assets/img/product.png";
import { ReactComponent as Rating } from "../assets/svg/rating.svg";
import { ReactComponent as EmptyRating } from "../assets/svg/empty-rating.svg";
import { ReactComponent as LoveCart } from "../assets/svg/love-cart.svg";
import { ReactComponent as FacebookCart } from "../assets/svg/facebook-cart.svg";
import { ReactComponent as TwitterCart } from "../assets/svg/twitter-cart.svg";
import { ReactComponent as InstagramCart } from "../assets/svg/instagram-cart.svg";

const size: string[] = ["S", "M", "L", "XL", "XXL"];
const color: string[] = ["#3C3A49", "#843535"];

const MainLayout = () => {
  const ratingGenerator = (rating: number) => {
    const ratingArray = [];
    for (let i = 0; i < rating; i++) {
      ratingArray.push(<Rating key={i} />);
    }
    for (let i = 0; i < 5 - rating; i++) {
      ratingArray.push(<EmptyRating key={5 - rating + i} />);
    }
    return ratingArray;
  };

  const sizeGenerator = (size: string[]) => {
    return size.map((item, index) => {
      return (
        <div
          key={index}
          className="flex flex-col items-center mr-6 box-border border-solid border-[1px] border-black "
        >
          <button className="w-[89px] h-[89px] bg-white flex justify-center items-center">
            <p className="font-roboto font-medium text-[28px]">{item}</p>
          </button>
        </div>
      );
    });
  };

  const colorGenerator = (color: string[]) => {
    return color.map((item) => {
      const bgColor = "bg-[" + item + "]";

      return (
        <div
          key={item}
          className="flex flex-col items-center mr-6 box-border border-solid border-[1px] border-black "
        >
          <button className={`${bgColor} w-[89px] h-[89px]`}>{""}</button>
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col mx-[50px] my-10">
      <nav className="rounded-md">
        <ol className="list-none flex">
          <li>
            <a
              href="#"
              className="font-roboto font-normal text-[26px] text-primary"
            >
              GAYALO
            </a>
          </li>
          <li>
            <span className="font-roboto font-normal text-[26px] text-primary mx-2">
              /
            </span>
          </li>
          <li>
            <a
              href="#"
              className="font-roboto font-normal text-[26px] text-primary"
            >
              Katalog
            </a>
          </li>
          <li>
            <span className="font-roboto font-normal text-[26px] text-primary mx-2">
              /
            </span>
          </li>
          <li className="font-roboto font-medium text-[26px] text-primary">
            Nama Product
          </li>
        </ol>
      </nav>
      <div className="grid gap-16 grid-flow-col mt-[21.8px]">
        <div className="flex flex-col">
          <div className="w-[692px] h-[954px] bg-[#F8F8F8] flex justify-center mr-5">
            <img src={product} alt="product" className="object-center" />
          </div>
          <div className="flex flex-row mt-10">
            <div className="w-[220px] h-[220px] bg-[#F8F8F8] flex justify-center mr-[17px]">
              <img src={product} alt="product" className="object-center" />
            </div>
            <div className="w-[220px] h-[220px] bg-[#F8F8F8] flex justify-center mr-[17px]">
              <img src={product} alt="product" className="object-center" />
            </div>
            <div className="w-[220px] h-[220px] bg-[#F8F8F8] flex justify-center mr-[17px]">
              <img src={product} alt="product" className="object-center" />
            </div>
          </div>
        </div>
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
            <div className="flex flex-row mt-[10px]">{sizeGenerator(size)}</div>
          </div>
          {/* Color */}
          <div className="mt-[40px]">
            <p className="font-roboto font-normal text-[28px] leading-[32.81px]">
              Warna
            </p>
            <div className="flex flex-row mt-[10px]">
              {colorGenerator(color)}
            </div>
          </div>
          {/* Quantity */}
          <div className="mt-[40px]">
            <p className="font-roboto font-normal text-[28px] leading-[32.81px]">
              Jumlah
            </p>
            <div className="flex flex-row mt-[10px]">
              <div className="flex flex-col items-center mr-6 box-border border-solid border-[1px] border-black ">
                <button className="w-[89px] h-[89px] bg-white flex justify-center items-center">
                  <p className="font-roboto font-medium text-4xl max-w-[202px]">
                    -
                  </p>
                </button>
              </div>
              <div className="flex flex-col items-center mr-6 box-border border-solid border-[1px] border-black ">
                <input
                  type="text"
                  placeholder="1"
                  defaultValue={1}
                  className="h-[89px] bg-white flex justify-center items-center text-center font-roboto font-medium text-4xl max-w-[202px]"
                />
              </div>
              <div className="flex flex-col items-center mr-6 box-border border-solid border-[1px] border-black ">
                <button className="w-[89px] h-[89px] bg-white flex justify-center items-center">
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
          <button className="bg-primary font-roboto font-semibold text-[28px] text-center text-white mt-10 pt-[34px] pb-[33px]">
            MASUKAN KERANJANG
          </button>
          {/* Social Media */}
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
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
