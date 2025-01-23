import {
  addElectronics,
  addItemInCard,
  addItems,
  addJeweleries,
  addLatestItems,
  addManClothes,
  addWomanClothes,
  auth,
  buy,
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

function addItemInCardAction(payload) {
  return { type: addItemInCard, payload };
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

function buyAction(payload) {
  return { type: buy, payload };
}

function removeFromCardAction(payload) {
  return { type: removeFromCard, payload };
}

export {
  removeFromCardAction,
  loginAction,
  addItemsAction,
  addLatestItemsAction,
  showDetailsAction,
  buyAction,
  optionMappingAction,
  addElectronicsAction,
  addJeweleriesAction,
  addWomanClothesAction,
  addManClothesAction,
  addItemInCardAction,
  authAction,
};
