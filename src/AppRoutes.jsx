import { Route, Routes } from "react-router-dom";
import { routeComponents } from "./config/routeComponents";

export default () => {
  return (
    <Routes>
      {routeComponents.map((route) => {
        if (route.Guard) {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <route.Guard>
                  <route.Component />
                </route.Guard>
              }
            />
          );
        }
        return (
          <Route
            key={route.path}
            path={route.path}
            element={<route.Component />}
          />
        );
      })}
    </Routes>
  );
};
