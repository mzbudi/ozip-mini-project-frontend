import React from "react";
import FooterLayout from "./layout/Footer/FooterLayout";
import HeaderLayout from "./layout/Header/HeaderLayout";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <div className="h-screen w-full">
      <HeaderLayout />
      <MainLayout />
      <FooterLayout />
    </div>
  );
}

export default App;
