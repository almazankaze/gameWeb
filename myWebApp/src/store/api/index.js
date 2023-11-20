import axios from "axios";

const myUrl = "http://localhost:5000";

const API = axios.create({ baseURL: myUrl });

export const fetchProduct = (id) => API.get(`/products/${id}`);
export const fetchHomeProduct = () => API.get(`/products/onSale`);
export const postReview = (id, review) =>
  API.post(`/products/${id}/reviews`, review);

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
