import axios from "axios";
import getConfiToken from "../utils/getConfiToken";
import { getAllProductsCartThunk } from "../store/slices/cart.slice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const UseCrudCart = () => {
  const [error, setError] = useState();

  const dispatch = useDispatch();

  const addProductToCart = (data) => {
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/cart";
    axios
      .post(url, data, getConfiToken())
      .then(() => {
        dispatch(getAllProductsCartThunk());
        setError(false);
      })
      .catch(() => setError(true));
  };

  const deleteProductFromCard = (id) => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id}`;

    axios
      .delete(url, getConfiToken())
      .then(() => dispatch(getAllProductsCartThunk()))
      .catch((error) => console.log(error));
  };

  const updateProductFromCard = (id, data) => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id}`;
    axios
      .put(url, data, getConfiToken())
      .then(() => {
        setError(false);
        dispatch(getAllProductsCartThunk());
        
      })
      .catch(() => setError(true));
  };

  return {
    addProductToCart,
    deleteProductFromCard,
    updateProductFromCard,
    error,
    setError,
  };
};
export default UseCrudCart;
