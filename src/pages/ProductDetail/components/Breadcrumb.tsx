import React from "react";

const Breadcrumb : React.FC = () => {
  return (
    <nav className="rounded-md">
      <ol className="list-none flex">
        <li>
          <a
            href="/"
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
            href="/"
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
  );
};

export default Breadcrumb;
