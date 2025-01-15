import AppRoutes from "./AppRoutes";
import NavBar from "./components/navBar/NavBar";

export default () => {
  return (
    <div>
      <NavBar />
      <div className="main">
        <AppRoutes />
      </div>
    </div>
  );
};
