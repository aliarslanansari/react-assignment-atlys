import PrivateRoute from "@/components/PrivateRoute";
import Loader from "@/components/ui/Loader";
import { ComponentType, ReactElement, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const ForgotPasswordPage = lazy(() => import("@/pages/ForgotPasswordPage"));
const LoginPage = lazy(() => import("@/pages/LoginPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));
const PostFeedPage = lazy(() => import("@/pages/PostFeedPage"));

interface RouteType<Props = object> {
  path: string;
  Element: ComponentType<Props>;
  children?: RouteType[];
  props?: object;
  isProtected?: boolean;
}

const routes: RouteType[] = [
  {
    path: "/",
    Element: LoginPage,
    isProtected: false,
  },
  {
    path: "/forgot-password",
    Element: ForgotPasswordPage,
    isProtected: false,
  },
  {
    path: "/feed",
    Element: PostFeedPage,
    isProtected: false,
  },
  {
    path: "*",
    Element: NotFoundPage,
    isProtected: false,
  },
];

function renderRoutes(routes: RouteType[]): ReactElement[] {
  return routes.map((route) => {
    if (!route.children?.length) {
      const Element = (
        <Suspense fallback={<Loader />}>
          <route.Element {...route.props} />
        </Suspense>
      );
      return (
        <Route
          key={route.path}
          path={route.path}
          element={route.isProtected ? <PrivateRoute element={Element} /> : Element}
        />
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
