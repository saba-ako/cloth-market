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

function authAction(token) {
  return { type: auth, payload: token };
}

function loginAction(data) {
  return { type: login, payload: data };
}

function addItemsAction(payload) {
  return { type: addItems, payload };
}

function showDetailsAction(payload) {
  return { type: showDetails, payload };
}

function addLatestItemsAction(payload) {
  return { type: addLatestItems, payload };
}

function addManClothesAction(payload) {
  return { type: addManClothes, payload };
}

function addWomanClothesAction(payload) {
  return { type: addWomanClothes, payload };
}

function addJeweleriesAction(payload) {
  return { type: addJeweleries, payload };
}

function addElectronicsAction(payload) {
  return { type: addElectronics, payload };
}

function optionMappingAction(payload, title) {
  return { type: optionMapping, payload, title };
}

function purchaseAction(payload) {
  const existingPurchases =
    JSON.parse(localStorage.getItem("purchasedItems")) || [];
  const updatedPurchases = [...existingPurchases, payload];
  localStorage.setItem("purchasedItems", JSON.stringify(updatedPurchases));
  return { type: purchase, payload };
}

function addItemInCardAction(payload) {
  const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
  const updatedCart = [...existingCart, payload];
  localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  return { type: addItemInCard, payload };
}

function removeFromCardAction(payload) {
  const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
  const updatedCart = existingCart.filter((item) => item.id !== payload.id);
  localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  return { type: removeFromCard, payload };
}

export {
  removeFromCardAction,
  loginAction,
  addItemsAction,
  addLatestItemsAction,
  showDetailsAction,
  purchaseAction,
  optionMappingAction,
  addElectronicsAction,
  addJeweleriesAction,
  addWomanClothesAction,
  addManClothesAction,
  addItemInCardAction,
  authAction,
};
