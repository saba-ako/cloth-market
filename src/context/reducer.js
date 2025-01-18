import {
  addElectronics,
  addItemInCard,
  addItems,
  addJeweleries,
  addLatestItems,
  addManClothes,
  addWomanClothes,
  buy,
  optionMapping,
  showDetails,
} from "./types";

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
  buyItem: {},
  user: null,
  userIsLoggedIn: false,
};

export default (state, action) => {
  const { type, payload, title } = action;

  switch (type) {
    case addItemInCard:
      return { ...state, card: payload };

    case addItems:
      return {
        ...state,
        items: payload,
        option: payload,
        amount: payload.length,
      };

    case showDetails:
      return { ...state, details: payload };

    case addLatestItems:
      return { ...state, latestItems: payload };

    case addJeweleries:
      return { ...state, jeweleries: payload };

    case addElectronics:
      return { ...state, electronics: payload };

    case addManClothes:
      return { ...state, menClothes: payload };

    case addWomanClothes:
      return { ...state, womenClothes: payload };

    case optionMapping:
      return {
        ...state,
        option: payload,
        amount: payload.length,
        title: title,
      };

    case buy:
      return { ...state, buyItem: payload };

    default:
      return state;
  }
};
