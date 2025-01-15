import {
  addElectronics,
  addEmail,
  addItemInCard,
  addItems,
  addJeweleries,
  addLatestItems,
  addManClothes,
  addPassword,
  addUserName,
  addWomanClothes,
  buy,
  confirmPassword,
  optionMapping,
  showDetails,
} from "./types";

export const initilState = {
  userName: "",
  email: "",
  password: "",
  card: [],
  details: {},
  items: [],
  latestItems: [],
  confirmedPassword: "",
  menClothes: [],
  womenClothes: [],
  electronics: [],
  jeweleries: [],
  option: [],
  title: "All Products",
  amount: 0,
  buyItem: {},
};

export default (state, action) => {
  const { type, payload, title } = action;

  switch (type) {
    case addEmail:
      return { ...state, email: payload };

    case addItemInCard:
      return { ...state, card: payload };

    case addItems:
      return {
        ...state,
        items: payload,
        option: payload,
        amount: payload.length,
      };

    case addPassword:
      return { ...state, password: payload };

    case addUserName:
      return { ...state, userName: payload };

    case showDetails:
      return { ...state, details: payload };

    case addLatestItems:
      return { ...state, latestItems: payload };

    case confirmPassword:
      return { ...state, confirmedPassword: payload };

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
