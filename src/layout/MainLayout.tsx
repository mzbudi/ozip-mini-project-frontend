import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductDetail from "../pages/ProductDetail/ProductDetail";

function MainLayout() {
  return (
    <div className="h-screen w-full">
      <Header />
      <ProductDetail />
      <Footer />
    </div>
  );
}

export default MainLayout;
