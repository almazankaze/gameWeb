import axios from "axios";

const myUrl = "http://localhost:5000";

const config = {
  "Content-Type": "application/json",
  Authorization: "JWT Bearer",
};

const API = axios.create({ baseURL: myUrl });

export const fetchProduct = (id) =>
  API.get(`/products/${id}`, { withCredentials: true });
export const fetchHomeProduct = () =>
  API.get(`/products/onSale`, { withCredentials: true });
export const postReview = (id, review, token) =>
  API.post(`/products/${id}/reviews`, review, {
    withCredentials: true,
    headers: {
      authorization: token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

export const fetchSearchProducts = (
  searchTerm,
  onSale,
  freeShip,
  inStock,
  productType,
  categories,
  minPrice,
  maxPrice,
  page
) =>
  API.get(
    `search?term=${searchTerm || ""}&onSale=${onSale || false}&freeShip=${
      freeShip || false
    }&inStock=${inStock || false}&productType=${
      productType || "All"
    }&categories=${categories || ""}&minPrice=${minPrice || 0}&maxPrice=${
      maxPrice || 10000
    }&page=${page || 1}`
  );

//user
export const signIn = (formData) =>
  API.post("/users/login", formData, { withCredentials: true });
export const signUp = (formData) =>
  API.post("/users/register", formData, { withCredentials: true });
export const logout = () => API.get("users/logout", { withCredentials: true });
