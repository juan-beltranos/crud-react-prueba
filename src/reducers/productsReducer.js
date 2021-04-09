import { types } from "../types/types";

const initialState = {
  products: [],
  active: null,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.productsActive:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };

    case types.productAddNew:
      return {
        ...state,
        products: [action.payload, ...state.products],
      };

    case types.productsLoad:
      return {
        ...state,
        products: [...action.payload],
      };

    case types.productUpdated:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload.product : product
        ),
      };

    case types.productsDelete:
      return {
        ...state,
        active: null,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };

    case types.productsLogoutCleaning:
      return {
        ...state,
        active: null,
        products: [],
      };

    default:
      return state;
  }
};
