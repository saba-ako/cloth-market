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
  optionMapping,
  showDetails,
  signUp,
} from "./types";

export function authAction(token) {
  return { type: auth, payload: token };
}

export function signUpAction(data) {
  return { type: signUp, payload: data };
}

export function addItemsAction(payload) {
  return { type: addItems, payload };
}

export function showDetailsAction(payload) {
  return { type: showDetails, payload };
}

export function addLatestItemsAction(payload) {
  return { type: addLatestItems, payload };
}

export function addItemInCardAction(payload) {
  return { type: addItemInCard, payload };
}

export function addManClothesAction(payload) {
  return { type: addManClothes, payload };
}

export function addWomanClothesAction(payload) {
  return { type: addWomanClothes, payload };
}

export function addJeweleriesAction(payload) {
  return { type: addJeweleries, payload };
}

export function addElectronicsAction(payload) {
  return { type: addElectronics, payload };
}

export function optionMappingAction(payload, title) {
  return { type: optionMapping, payload, title };
}

export function buyAction(payload) {
  return { type: buy, payload };
}
