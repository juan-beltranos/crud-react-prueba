import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ProductEntries } from "./ProductEntries";
import { startLogout } from "../../actions/auth";
import { startNewProduct } from "../../actions/products";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth);

  const hanleLogout = () => {
    dispatch(startLogout());
  };

  const handleAddNew = () => {
    dispatch(startNewProduct());
  };

  return (
    <aside className="app__sidebar">
      <div className="app__sidebar-navbar">
        <h3 className="mt-5">
          <i className="far fa-user"></i>
          <span> {name}</span>
        </h3>

        <button className="btn" onClick={hanleLogout}>
          Logout
        </button>
      </div>

      <div className="app__new-entry" onClick={handleAddNew}>
        <i className="fas fa-shopping-cart fa-5x"></i>
        <p className="mt-5">New Product</p>
      </div>

      <ProductEntries />
    </aside>
  );
};
