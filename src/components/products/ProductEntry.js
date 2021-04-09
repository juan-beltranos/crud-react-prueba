import React from "react";
import { useDispatch } from "react-redux";
import { activeProduct } from "../../actions/products";

export const ProductEntry = ({ id, name, description, stock, price, url }) => {
  const dispatch = useDispatch();
  //console.log( id, name, description, stock, price, url );
  const handleEntryClick = () => {
    dispatch(
      activeProduct(id, {
        name,
        description,
        stock,
        price,
        url,
      })
    );
  };

  return (
    <div
      className="app__entry pointer animate__animated animate__fadeIn animate__faster"
      onClick={handleEntryClick}
    >
      {url && (
        <div
          className="app__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${url})`,
          }}
        ></div>
      )}

      <div className="app__entry-body">
        <div className="app__entry-card">
          <span className="app__entry-title mb-1">Name:</span> {name}
          <br/>
          <span className="app__entry-title mb-1">Description:</span>
          {description}
          <br/>
          <span className="app__entry-title mb-1">Stock:</span> {stock}
          <br/>
          <span className="app__entry-title mb-1">Price:</span> {price}
        </div>
      </div>
    </div>
  );
};
