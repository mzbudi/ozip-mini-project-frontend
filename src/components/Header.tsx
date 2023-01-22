import React, { useState } from "react";

// import cart state
import { useAppSelector } from "../app/hooks";
import { selectCart } from "../slices/cartSlices";

import { ReactComponent as HeaderLogo } from "../assets/svg/header-logo.svg";
import { ReactComponent as Search } from "../assets/svg/search.svg";
import { ReactComponent as Love } from "../assets/svg/love.svg";
import { ReactComponent as Profile } from "../assets/svg/profile.svg";
import { ReactComponent as Cart } from "../assets/svg/cart.svg";

const Header: React.FC = () => {
  const [totalCart, setTotalCart] = useState<number>(0);

  const cart = useAppSelector(selectCart);

  React.useEffect(() => {
    let total = Object.keys(cart).length;
    setTotalCart(total);
  }, [cart]);

  return (
    <header className="relative">
      <nav className="bg-white border-gray-200 px-4 lg:px-9 py-12 dark:bg-gray-800 shadow-md">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="https://flowbite.com" className="flex items-center">
            <HeaderLogo />
          </a>
          <a href="/">
            <span className="font-roboto font-bold text-[26px] leading-[30.47px] text-primary">
              New Product
            </span>
          </a>
          <a href="/">
            <span className="font-roboto font-normal text-[26px] leading-[30.47px] text-primary ">
              Catalog
            </span>
          </a>
          <a href="/">
            <span className="font-roboto font-normal text-[26px] leading-[30.47px] text-primary">
              Sale
            </span>
          </a>
          <div className="flex space-x-12">
            <button>
              <span>
                <Search />
              </span>
            </button>
            <button>
              <span>
                <Profile />
              </span>
            </button>
            <button>
              <span>
                <Love />
              </span>
            </button>
            <button className="relative">
              {/* hidden if cart empty */}
              <span
                className={`${
                  totalCart === 0 ? "hidden" : ""
                } absolute rounded-full h-10 w-10 bg-sky-500`}
              >
                <p className="font-roboto font-medium text-3xl text-center">
                  {totalCart}
                </p>
              </span>
              <span>
                <Cart />
              </span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
