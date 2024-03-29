import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { addCart, selectCart } from "../../slices/cartSlices";
import { getProductById, selectProduct } from "../../slices/productSlices";

import Breadcrumb from "./components/Breadcrumb";
import ImageCarousel from "./components/ImageCarousel";
import SocialMediaList from "./components/SocialMediaList";
import BreadcrumbOutlet from "./components/BreadcrumbOutlet";
import Modal from "../../components/Modal";

import { ReactComponent as Rating } from "../../assets/svg/rating.svg";
import { ReactComponent as EmptyRating } from "../../assets/svg/empty-rating.svg";

const ProductDetail: React.FC = () => {
  const [qty, setQty] = useState<number>(0);
  const [size, setSize] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCart);
  const product = useAppSelector(selectProduct);

  console.log(cart);

  useEffect(() => {
    dispatch(getProductById("63ca483eaf36cf599e86a2a3"));
  }, [dispatch]);

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

  const formatIdr = (price: number) => {
    return price.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
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

  const addToCart = (id: string, price: number, product_name: string) => {
    const newCartValue = {
      id: id,
      size: size,
      color: color,
      qty: qty,
      price: price,
      product_name: product_name,
    };

    if (size === "" || color === "" || qty === 0) {
      setIsOpen(true);
    } else {
      dispatch(addCart(newCartValue));
    }
  };

  return (
    <div className="flex flex-col mx-[50px] my-10">
      <Breadcrumb />
      <div className="grid gap-16 grid-flow-col mt-[21.8px]">
        <ImageCarousel photoUrl={product.photo} />
        <div className="flex flex-col">
          {/* Title */}
          <p className="font-radio_canada font-semibold text-[40px] leading-10">
            {product.product_name}
          </p>
          {/* Price and Ratings */}
          <div className="flex flex-row justify-between mt-5">
            <div>
              <p className="font-roboto font-bold text-3xl leading-[42.19px] text-price_inactive line-through">
                {formatIdr(product.price)}
              </p>
              <p className="font-roboto font-bold text-[44px] leading-[51.64px] text-price">
                {formatIdr(product.price)}
              </p>
            </div>
            <div className="flex items-center">
              {ratingGenerator(product.total_stars)}
              <p className="font-roboto font-medium text-base ml-2">
                ({product.total_rated})
              </p>
            </div>
          </div>
          {/* Description */}
          <div className="mt-[26px] border-solid border-y-2 border-[#C9C9C9]">
            <p className="font-radio_canada font-normal text-xl leading-6 py-[22px] ">
              {product.description}
            </p>
          </div>
          {/* Size */}
          <div className="mt-[40px]">
            <p className="font-roboto font-normal text-[28px] leading-[32.81px]">
              Ukuran
            </p>
            <div className="flex flex-row mt-[10px]">
              {sizeGenerator(product.variant)}
            </div>
          </div>
          {/* Color */}
          <div className="mt-[40px]">
            <p className="font-roboto font-normal text-[28px] leading-[32.81px]">
              Warna
            </p>
            <div className="flex flex-row mt-[10px]">
              {colorGenerator(product.colors)}
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
              Stok Barang : {product.stock}
            </p>
          </div>
          {/* Cart */}
          <button
            onClick={() => {
              addToCart(product._id, product.price, product.product_name);
            }}
            className="bg-primary font-roboto font-semibold text-[28px] text-center text-white mt-10 pt-[34px] pb-[33px]"
          >
            MASUKAN KERANJANG
          </button>
          {/* Social Media */}
          <SocialMediaList />
        </div>
      </div>
      <BreadcrumbOutlet description={product.description} />
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        errorType={"Cart Error"}
        message={"Mohon Lengkapi Ukuran, Warna, dan Jumlah"}
      />
    </div>
  );
};

export default ProductDetail;
