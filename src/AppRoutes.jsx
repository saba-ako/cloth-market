import { Route, Routes } from "react-router-dom";
import { routeComponents } from "./config/routeComponents";

export default () => {
  return (
    <Routes>
      {routeComponents.map((route) => (
        <Route key={route.path} path={route.path} Component={route.Component} />
      ))}
    </Routes>
  );
};
