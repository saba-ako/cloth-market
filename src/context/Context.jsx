import { createContext, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import reducer, { initilState } from "./reducer";
import { tokenValidation } from "../utils/jwt";
import { authAction } from "./actionCreator";

const context = createContext();

export default ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initilState);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token && tokenValidation(token)) {
      dispatch(authAction(token));
    }
  }, []);

  return (
    <context.Provider value={{ state, dispatch, navigate }}>
      {children}
    </context.Provider>
  );
};

export function UseCustomHook() {
  const hook = useContext(context);

  return hook;
}
