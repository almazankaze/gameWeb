import axios from "axios";

const myUrl = "http://localhost:5000";

const API = axios.create({ baseURL: myUrl });

export const fetchProduct = (id) =>
  API.get(`/products/${id}`, { withCredentials: true });
export const fetchHomeProduct = () =>
  API.get(`/products/onSale`, { withCredentials: true });

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

//reviews
export const postReview = (id, review) =>
  API.post(`/products/${id}/reviews`, review, {
    withCredentials: true,
  });

export const deleteReview = (id, review) =>
  API.delete(`/products/${id}/reviews/${review}`, {
    withCredentials: true,
  });

//user
export const googleLogin = () =>
  API.get("/users/google", { withCredentials: true });
export const signIn = (formData) =>
  API.post("/users/login", formData, { withCredentials: true });
export const signUp = (formData) =>
  API.post("/users/register", formData, { withCredentials: true });
export const getUser = () =>
  API.get("users/getUser", { withCredentials: true });
export const logout = () => API.get("users/logout", { withCredentials: true });
