import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveProduct, startUploading } from "../../actions/products";

export const ProductsAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.products);

  const handleSave = () => {
    dispatch(startSaveProduct(active));
  };

  const handlePictureClick = () => {
    document.querySelector("#fileSelector").click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(startUploading(file));
    }
  };

  return (
    <div className="products__appbar">
      <input
        id="fileSelector"
        type="file"
        name="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      <div>
        <button className="btn" onClick={handlePictureClick}>
          Picture
        </button>

        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};
