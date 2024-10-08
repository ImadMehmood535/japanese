import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL_SERVER;

const API = axios.create({
  baseURL: BASE_URL,
});

API.interceptors.request.use(
  function (config) {
    let token;
    if (Cookies.get("token")) {
      token = Cookies.get("token");
    }
    config.headers.authorization = `${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// user

API.registerUser = (data) => {
  return API.post(`user`, data);
};

API.logInUser = (data) => {
  return API.post(`user/login`, data);
};

API.forgetPassword = (data) => {
  return API.post("user/forget-password", data);
};

API.resetPassword = (data) => {
  return API.post("user/reset-password", data);
};

// cart

API.addToCart = (data) => {
  return API.post("/cart", data);
};

API.getCartData = () => {
  return API.get("/cart");
};

API.removeItem = (id) => {
  return API.delete(`/cart/${id}`);
};

API.updateCartItem = (id, quanitity) => {
  return API.patch(`cart/${id}`, quanitity);
};

// order
API.placeOrder = (data) => {
  return API.post("order", data);
};
API.getMyOrders = () => {
  return API.get("order/self");
};

API.statusOrder = (data) => {
  return API.post("/order/check-status", data);
};

// custom order
API.placeCustomOrder = (data) => {
  return API.post("custom-order", data);
};
API.getMyCustomOrders = () => {
  return API.get("custom-order/self");
};

// product
API.getProducts = () => {
  return API.get(`product/all`);
};

// product review

API.giveReview = (id, data) => {
  return API.post(`productReview/${id}`, data);
};

// newsletter

API.newsLetter = (data) => {
  return API.post("/newsletter", data);
};

// contact-form
API.contact = (data) => {
  return API.post("/contact", data);
};

API.promoPrice = (data) => {
  return API.post("/promo/calculate", data);
};

export { API };
