import React from "react";

const BreadcrumbOutlet = () => {
  return (
    <>
      <div className="mt-[100px] flex justify-center">
        <ol className="list-none flex space-x-12">
          <li>
            <a
              href="/"
              className="font-roboto font-black text-3xl leading-[35.16px] text-primary"
            >
              Deskripsi
            </a>
          </li>
          <li>
            <span className="font-roboto font-medium text-[26px] text-primary">
              /
            </span>
          </li>
          <li>
            <a
              href="/"
              className="font-roboto font-medium text-3xl text-primary"
            >
              Customer Reviews
            </a>
          </li>
          <li>
            <span className="font-roboto font-medium text-3xl text-primary">
              /
            </span>
          </li>
          <li className="font-roboto font-medium text-3xl text-primary">
            Shipping & Returns
          </li>
        </ol>
      </div>
      <div className="mt-10">
        <p className="font-roboto font-normal text-[28px] text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
          necessitatibus excepturi commodi amet aut quia dolor doloribus sunt
          suscipit harum. Laudantium cumque iusto natus dolores sapiente labore
          iste, molestias eaque.
        </p>
      </div>
    </>
  );
};

export default BreadcrumbOutlet;
