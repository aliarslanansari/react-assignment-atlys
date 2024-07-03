import PrivateRoute from "@/components/PrivateRoute";
import PublicRoute from "@/components/PublicRoute";
import Loader from "@/components/ui/Loader";
import { ComponentType, ReactElement, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const ForgotPasswordPage = lazy(() => import("@/pages/ForgotPasswordPage"));
const LoginPage = lazy(() => import("@/pages/LoginPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));
const PostFeedPage = lazy(() => import("@/pages/PostFeedPage"));
const RegisterPage = lazy(() => import("@/pages/RegisterPage"));

interface RouteType<Props = object> {
  path: string;
  Element: ComponentType<Props>;
  children?: RouteType[];
  props?: object;
  isProtected?: boolean; // protected pages can be visited by only logged-in users
  isPublic?: boolean; // public pages can be visited by only non-logged-in users
}

const routes: RouteType[] = [
  {
    path: "/",
    Element: LoginPage,
    isProtected: false,
    isPublic: true,
  },
  {
    path: "/register",
    Element: RegisterPage,
    isProtected: false,
    isPublic: true,
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
      if (route.isProtected) {
        return (
          <Route key={route.path} path={route.path} element={<PrivateRoute element={Element} />} />
        );
      } else if (route.isPublic) {
        return (
          <Route key={route.path} path={route.path} element={<PublicRoute element={Element} />} />
        );
      } else {
        return <Route key={route.path} path={route.path} element={Element} />;
      }
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
