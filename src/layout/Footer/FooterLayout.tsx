import React from "react";
// import svg from "../assets/svg";
import { ReactComponent as Facebook } from "../../assets/svg/facebook.svg";
import { ReactComponent as Tiktok } from "../../assets/svg/tiktok.svg";
import { ReactComponent as Instagram } from "../../assets/svg/instagram.svg";
import { ReactComponent as FooterLogo } from "../../assets/svg/footer-logo.svg";
import { ReactComponent as Phone } from "../../assets/svg/phone.svg";
import { ReactComponent as Location } from "../../assets/svg/location.svg";
import { ReactComponent as OzipLogo } from "../../assets/svg/ozip-logo.svg";

const FooterLayout: React.FC = () => {
  return (
    <footer className="w-full">
      <div className="bg-primary p-0 flex flex-col h-[505px] pt-20 pl-[53px] pr-[54px] pb-10">
        <div className="grid gap-5 grid-flow-col">
          <div className="flex flex-col">
            <FooterLogo />
          </div>
          <div className="flex flex-col">
            <p className="font-roboto font-semibold text-[26px] leading-[30.47px] text-white">
              BUSINESS
            </p>
            <p className="font-roboto font-normal text-[22px] leading-[25.78px] text-white mt-[22.82px]">
              About Us
            </p>
            <p className="font-roboto font-normal text-[22px] leading-[25.78px] text-white mt-3">
              News
            </p>
            <div className="flex space-x-6 mt-3 items-center">
              <Facebook />
              <Instagram />
              <Tiktok />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-roboto font-semibold text-[26px] leading-[30.47px] text-white">
              HELP
            </p>
            <p className="font-roboto font-normal text-[22px] leading-[25.78px] text-white mt-[22.82px]">
              Kebijakan Pengembalian
            </p>
            <p className="font-roboto font-normal text-[22px] leading-[25.78px] text-white mt-3">
              Kebijakan Privasi
            </p>
            <p className="font-roboto font-normal text-[22px] leading-[25.78px] text-white mt-3">
              Hubungi Kami
            </p>
            <p className="font-roboto font-normal text-[22px] leading-[25.78px] text-white mt-3">
              FAQ
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-roboto font-semibold text-[26px] leading-[30.47px] text-white">
              CONTACT US
            </p>
            <div className="flex mt-3 space-x-3 items-center">
              <Phone />
              <div>
                <p className="font-roboto font-normal text-[22px] leading-[25.78px] text-white mt-3">
                  +62 8900-8999-000
                </p>
                <p className="font-roboto font-normal text-[22px] leading-[25.78px] text-white mt-3">
                  +62 8900-8999-000
                </p>
              </div>
            </div>
            <div className="flex space-x-3 mt-3 items-center">
              <Location />
              <div>
                <p className="font-roboto font-normal text-[22px] leading-[25.78px] text-white mt-3">
                  Villa Rizki Ilhami 2,
                </p>
                <p className="font-roboto font-normal text-[22px] leading-[25.78px] text-white mt-3">
                  Sawangan - Depok
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-roboto font-semibold text-[26px] leading-[30.47px] text-white">
              NEWSLETTER
            </p>
            <p className="font-roboto font-normal text-[22px] leading-[25.78px] text-white mt-[22.82px] w-[349px]">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </p>
            <input
              type="text"
              className="h-10 bg-white mt-3 px-[10px] py-2 w-[351px]"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="h-full flex justify-center items-center space-x-2">
          <p className="font-radio_canada font-semibold text-2xl leading-7 text-white">
            Powered by
          </p>
          <OzipLogo />
        </div>
      </div>
    </footer>
  );
};

export default FooterLayout;
