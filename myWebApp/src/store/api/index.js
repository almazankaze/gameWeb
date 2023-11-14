import axios from "axios";

const myUrl = "http://localhost:5000";

const API = axios.create({ baseURL: myUrl });

export const fetchProduct = (id) => API.get(`/products/${id}`);
export const fetchSearchProducts = (limit, offset, searchTerm) =>
  API.get(`products?term=${searchTerm}`);
