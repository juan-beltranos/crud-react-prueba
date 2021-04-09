import Swal from "sweetalert2";

import { db } from "../firebase/firebase-config";
import { types } from "../types/types";
import { loadProducts } from "../helpers/loadProducts";
import { fileUpload } from "../helpers/fileUpload";

export const startNewProduct = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const newProduct = {
      name: "",
      description: "",
      stock: "",
      image: "",
      price: "",
    };

    const doc = await db.collection(`${uid}/crud/products`).add(newProduct);

    dispatch(activeProduct(doc.id, newProduct));
    dispatch(addNewProduct(doc.id, newProduct));
  };
};

export const activeProduct = (id, product) => ({
  type: types.productsActive,
  payload: {
    id,
    ...product,
  },
});

export const addNewProduct = (id, product) => ({
  type: types.productAddNew,
  payload: {
    id,
    ...product,
  },
});

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const products = await loadProducts(uid);
    dispatch(setProducts(products));
  };
};

export const setProducts = (products) => ({
  type: types.productsLoad,
  payload: products,
});

export const startSaveProduct = (product) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    if (!product.url) {
      delete product.url;
    }

    const productToFirestore = { ...product };
    delete productToFirestore.id;

    await db.doc(`${uid}/crud/products/${product.id}`).update(productToFirestore);

    dispatch(refreshProduct(product.id, productToFirestore));
    Swal.fire("Saved", product.name, "success");
  };
};

export const refreshProduct = (id, product) => ({
  type: types.productUpdated,
  payload: {
    id,
    product: {
      id,
      ...product,
    },
  },
});

export const startUploading = (file) => {
  return async (dispatch, getState) => {
    const { active: activeProduct } = getState().products;

    Swal.fire({
      title: "Uploading...",
      text: "Please wait...",
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });

    const fileUrl = await fileUpload(file);
    activeProduct.url = fileUrl;

    dispatch(startSaveProduct(activeProduct));

    Swal.close();
  };
};

export const startDeleting = (id) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    await db.doc(`${uid}/crud/products/${id}`).delete();

    dispatch(deleteProduct(id));
  };
};

export const deleteProduct = (id) => ({
  type: types.productsDelete,
  payload: id,
});

export const noteLogout = () => ({
  type: types.productsLogoutCleaning,
});
