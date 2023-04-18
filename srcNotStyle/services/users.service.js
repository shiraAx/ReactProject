import axios from "axios";

const API_URL = "https://dummyjson.com/users";

//const logOut = () => {};

// export const login = async (username, password) => {
//   const allUsers = await (await axios.get(".json")).data;
//   console.log("allUsers", allUsers);
//   const user = allUsers.find(
//     (u) => u.username === username && u.password === password
//   );
//   return user;
// };
// export const register = (username, password, phone, email) => {
//   const user = {
//     username,
//     password,
//     email,
//     phone,
//   };
//   return user;
// };

export const getAllUsers = () => {
  return axios.get(API_URL);
};
export const getUserById = (id) => {
  return axios.get(API_URL + `${id}`);
};
export const addUser = (user) => {
  return axios.post(API_URL+"/add",user)
}
