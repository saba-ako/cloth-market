import { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import reducer, { initilState } from "./reducer";

const context = createContext();

export default ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initilState);

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
