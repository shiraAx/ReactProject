import axios from "axios";

const API_URL = "https://dummyjson.com/users";


export const getAllUsers = () => {
  return axios.get(API_URL);
};
export const getUserById = (id) => {
  return axios.get(API_URL + `${id}`);
};
export const addUser = (user) => {
  return axios.post(API_URL+"/add",user)
}
