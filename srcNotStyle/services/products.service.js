import axios from "axios";

const API_URL = "http://dummyjson.com/products"

export const getAllProducts = () => {

  return axios.get(API_URL);
};
export const getProductById = (id) => {
  return axios.get(API_URL + `${id}`);
};
