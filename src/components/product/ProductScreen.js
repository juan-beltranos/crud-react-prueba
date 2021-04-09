import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ProductsAppBar } from "./ProductsAppBar";
import { useForm } from "../../hooks/useForm";
import { activeProduct, startDeleting } from "../../actions/products";

export const ProductScreen = () => {
  const dispatch = useDispatch();

  const { active: product } = useSelector((state) => state.products);
  const [formValues, handleInputChange, reset] = useForm(product);
  const { name, description, stock, price, id } = formValues;

  const activeId = useRef(product.id);

  useEffect(() => {
    if (product.id !== activeId.current) {
      reset(product);
      activeId.current = product.id;
    }
  }, [product, reset]);

  useEffect(() => {
    dispatch(activeProduct(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  const handleDelete = () => {
    dispatch(startDeleting(id));
  };

  return (
    <div className="products__main-content">
      <ProductsAppBar />

      <div className="products__content">
        <input
          type="text"
          placeholder="Name"
          className="products__title-input"
          autoComplete="off"
          name="name"
          value={name}
          onChange={handleInputChange}
        />

        <textarea
          placeholder="Description"
          className="products__textarea"
          name="description"
          value={description}
          onChange={handleInputChange}
        ></textarea>

        <input
         type="number" 
          placeholder="Stock"
          className="products__title-input"
          autoComplete="off"
          name="stock"
          value={stock}
          onChange={handleInputChange}
        />

        <input
         type="number" 
          placeholder="Price"
          className="products__title-input"
          autoComplete="off"
          name="price"
          value={price}
          onChange={handleInputChange}
        />

        {product.url && (
          <div className="products__image">
            <img src={product.url} alt="imagen" />
          </div>
        )}
      </div>

      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
