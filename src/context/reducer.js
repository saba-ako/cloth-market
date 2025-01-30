import { jwtDecode } from "jwt-decode";
import {
  addElectronics,
  addItemInCard,
  addItems,
  addJeweleries,
  addLatestItems,
  addManClothes,
  addWomanClothes,
  auth,
  purchase,
  login,
  optionMapping,
  removeFromCard,
  showDetails,
} from "./types";
import { toggleLocalStorage } from "../utils/jwt";

export const initilState = {
  card: JSON.parse(localStorage.getItem("cartItems")) || [],
  details: {},
  items: [],
  latestItems: [],
  menClothes: [],
  womenClothes: [],
  electronics: [],
  jeweleries: [],
  option: [],
  title: "All Products",
  amount: 0,
  purchasedItems: JSON.parse(localStorage.getItem("purchasedItems")) || [],
  user: null,
  isAuthenticated: false,
};

export default (state, action) => {
  const { type, payload, title } = action;

  switch (type) {
    case addItemInCard:
      const updatedCartAdd = [...state.card, payload];
      localStorage.setItem("cartItems", JSON.stringify(updatedCartAdd));
      return {
        ...state,
        card: updatedCartAdd,
      };

    case auth:
      const user = jwtDecode(payload);
      return {
        ...state,
        isAuthenticated: true,
        user: user,
      };

    case removeFromCard:
      const updatedCartRemove = state.card.filter(
        (item) => item.id !== payload.id
      );
      localStorage.setItem("cartItems", JSON.stringify(updatedCartRemove));
      return {
        ...state,
        card: updatedCartRemove,
      };

    case login: {
      const { token } = payload;
      const user = jwtDecode(token);
      toggleLocalStorage(token);
      return {
        ...state,
        isAuthenticated: true,
        user,
      };
    }

    case addItems:
      return {
        ...state,
        items: payload,
        option: payload,
        amount: payload.length,
      };

    case showDetails:
      return {
        ...state,
        details: payload,
      };

    case addLatestItems:
      return {
        ...state,
        latestItems: payload,
      };

    case addJeweleries:
      return {
        ...state,
        jeweleries: payload,
      };

    case addElectronics:
      return {
        ...state,
        electronics: payload,
      };

    case addManClothes:
      return {
        ...state,
        menClothes: payload,
      };

    case addWomanClothes:
      return {
        ...state,
        womenClothes: payload,
      };

    case optionMapping:
      return {
        ...state,
        option: payload,
        amount: payload.length,
        title: title,
      };

    case purchase:
      const updatedPurchasedItems = [...state.purchasedItems, payload];
      localStorage.setItem(
        "purchasedItems",
        JSON.stringify(updatedPurchasedItems)
      );
      return {
        ...state,
        purchasedItems: updatedPurchasedItems,
      };

    default:
      return state;
  }
};
