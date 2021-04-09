import React from "react";
import { Sidebar } from "./Sidebar";
import { ProductScreen } from "../product/ProductScreen";
import { NothingSelected } from "./NothingSelected";
import { useSelector } from "react-redux";

export const ProductsScreen = () => {
  const { active } = useSelector((state) => state.products);

  return (
    <div className="app__main-content animate__animated animate__fadeIn animate__faster">
      <Sidebar />

      <main>{active ? <ProductScreen /> : <NothingSelected />}</main>
    </div>
  );
};
