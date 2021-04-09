import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ProductsAppBar } from "./ProductsAppBar";
import { useForm } from "../../hooks/useForm";
import { activeNote, startDeleting } from "../../actions/notes";

export const ProductScreen = () => {
  const dispatch = useDispatch();

  const { active: note } = useSelector((state) => state.notes);
  const [formValues, handleInputChange, reset] = useForm(note);
  const { name, description, stock, price, id } = formValues;

  const activeId = useRef(note.id);

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  const handleDelete = () => {
    dispatch(startDeleting(id));
  };

  return (
    <div className="notes__main-content">
      <ProductsAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder="Name"
          className="notes__title-input"
          autoComplete="off"
          name="name"
          value={name}
          onChange={handleInputChange}
        />

        <textarea
          placeholder="Description"
          className="notes__textarea"
          name="description"
          value={description}
          onChange={handleInputChange}
        ></textarea>

        <input
         type="number" 
          placeholder="Stock"
          className="notes__title-input"
          autoComplete="off"
          name="stock"
          value={stock}
          onChange={handleInputChange}
        />

        <input
         type="number" 
          placeholder="Price"
          className="notes__title-input"
          autoComplete="off"
          name="price"
          value={price}
          onChange={handleInputChange}
        />

        {note.url && (
          <div className="notes__image">
            <img src={note.url} alt="imagen" />
          </div>
        )}
      </div>

      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
