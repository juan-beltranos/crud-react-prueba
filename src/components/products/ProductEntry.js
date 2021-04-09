import React from "react";
import { useDispatch } from "react-redux";
import { activeNote } from "../../actions/notes";

export const JournalEntry = ({ id, name, description, stock, price, url }) => {
  const dispatch = useDispatch();
  //console.log( id, name, description, stock, price, url );
  const handleEntryClick = () => {
    dispatch(
      activeNote(id, {
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
      className="journal__entry pointer animate__animated animate__fadeIn animate__faster"
      onClick={handleEntryClick}
    >
      {url && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${url})`,
          }}
        ></div>
      )}

      <div className="journal__entry-body">
        <p className="journal__entry-content">
          <span className="journal__entry-title">Name</span> {name}
        </p>
        <p className="journal__entry-content">
          <span className="journal__entry-title">Description</span>
          {description}
        </p>
        <p className="journal__entry-content">
          <span className="journal__entry-title">Stock</span> {stock}
        </p>
        <p className="journal__entry-content">
          <span className="journal__entry-title">Price</span> {price}
        </p>
      </div>
    </div>
  );
};
