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
    path: "/feed",
    Element: PostFeedPage,
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
        <Route
          key={route.path}
          path={route.path}
          element={
            <Suspense fallback={<Loader />}>
              <route.Element {...route.props} />
            </Suspense>
          }
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
