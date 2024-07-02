import ForgotPasswordPage from "@/pages/ForgotPasswordPage";
import LoginPage from "@/pages/LoginPage";
import NotFoundPage from "@/pages/NotFoundPage";
import { ComponentType, ReactElement } from "react";
import { Route, Routes } from "react-router-dom";

interface RouteType<Props = object> {
  path: string;
  Element: ComponentType<Props>;
  children?: RouteType[];
  props?: object;
}

const routes: RouteType[] = [
  {
    path: "/",
    Element: LoginPage,
  },
  {
    path: "/forgot-password",
    Element: ForgotPasswordPage,
  },
  {
    path: "*",
    Element: NotFoundPage,
  },
];

function renderRoutes(routes: RouteType[]): ReactElement[] {
  return routes.map((route) => {
    if (!route.children?.length) {
      return (
        <Route key={route.path} path={route.path} element={<route.Element {...route.props} />} />
      );
    } else {
      return (
        <Route key={route.path} element={<route.Element />}>
          {renderRoutes(route.children)}
        </Route>
      );
    }
  });
}

function Router() {
  return <Routes>{renderRoutes(routes)}</Routes>;
}

export default Router;
