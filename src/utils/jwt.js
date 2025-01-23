import { jwtDecode } from "jwt-decode";

function tokenValidation(token) {
  const currentTime = Date.now() / 1000;
  const decode = jwtDecode(token);
  return decode.exp > currentTime;
}

function toggleLocalStorage(token) {
  if (token) {
    localStorage.setItem("userToken", token);
  } else {
    localStorage.removeItem("userToken");
  }
}

export { toggleLocalStorage, tokenValidation };
