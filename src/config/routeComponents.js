import { extraRoutePaths, routePaths } from "../constants/routePaths";
import AuthGuard from "../guard/AuthGuard";
import About from "../pages/about/About";
import Card from "../pages/card/Card";
import Contact from "../pages/contact/Contact";
import CreateAccount from "../pages/createAccount/CreateAccount";
import Details from "../pages/details/Details";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Logout from "../pages/logout/Logout";
import notFound from "../pages/notFound/notFound";
import Shop from "../pages/shop/Shop";

export const routeComponents = [
  { path: extraRoutePaths.Logout, Component: Logout },
  { path: routePaths.Home, Component: Home },
  { path: routePaths.About, Component: About },
  { path: routePaths.Contact, Component: Contact },
  { path: routePaths.Login, Component: Login },
  { path: routePaths.Shop, Component: Shop },
  { path: extraRoutePaths.createAccount, Component: CreateAccount },
  { path: extraRoutePaths.notFound, Component: notFound },
  { path: routePaths.Card, Component: Card, Guard: AuthGuard },
  { path: extraRoutePaths.details, Component: Details },
];
