import React from "react";
import { ReactComponent as HeaderLogo } from "../../assets/svg/header-logo.svg";
import { ReactComponent as Search } from "../../assets/svg/search.svg";
import { ReactComponent as Love } from "../../assets/svg/love.svg";
import { ReactComponent as Profile } from "../../assets/svg/profile.svg";
import { ReactComponent as Cart } from "../../assets/svg/cart.svg";

const HeaderLayout = () => {
  return (
    <header className="relative">
      <nav className="bg-white border-gray-200 px-4 lg:px-9 py-12 dark:bg-gray-800 shadow-md">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="https://flowbite.com" className="flex items-center">
            <HeaderLogo />
          </a>
          <a href="#">
            <span className="font-roboto font-bold text-[26px] leading-[30.47px] text-primary">
              New Product
            </span>
          </a>
          <a href="#">
            <span className="font-roboto font-normal text-[26px] leading-[30.47px] text-primary ">
              Catalog
            </span>
          </a>
          <a href="#">
            <span className="font-roboto font-normal text-[26px] leading-[30.47px] text-primary">
              Sale
            </span>
          </a>
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
          <button>
            <span>
              <Cart />
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default HeaderLayout;
