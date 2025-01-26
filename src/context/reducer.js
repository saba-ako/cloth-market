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
  card: [],
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
  purchasedItems: [],
  user: null,
  isAuthenticated: false,
};

export default (state, action) => {
  const { type, payload, title } = action;

  switch (type) {
    case addItemInCard:
      return {
        ...state,
        card: [...state.card, payload],
      };

    case auth:
      const user = jwtDecode(payload);
      return {
        ...state,
        isAuthenticated: true,
        user: user,
      };

    case removeFromCard:
      return {
        ...state,
        card: state.card.filter((item) => item.id !== payload.id),
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
      return {
        ...state,
        purchasedItems: [...state.purchasedItems, payload],
      };

    default:
      return state;
  }
};
