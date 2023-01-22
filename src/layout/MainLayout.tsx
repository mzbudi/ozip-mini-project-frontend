import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { selectAuth } from "../slices/authSlices";

const MainLayout: React.FC = () => {
  const auth = useAppSelector(selectAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isLogged === false) {
      navigate("/auth");
    }
  }, [auth.isLogged, navigate]);

  return (
    <div className="h-screen w-full">
      <Header />
      <ProductDetail />
      <Footer />
    </div>
  );
};

export default MainLayout;
