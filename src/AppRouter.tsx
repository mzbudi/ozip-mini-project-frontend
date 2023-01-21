import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Authentication from "./pages/Authentication";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductDetail />} />
        <Route path="/auth" element={<Authentication />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
