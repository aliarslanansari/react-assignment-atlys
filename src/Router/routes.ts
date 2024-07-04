import { lazy } from "react";
import { RouteType } from "./Router";

const ForgotPasswordPage = lazy(() => import("@/pages/ForgotPasswordPage"));
const LoginPage = lazy(() => import("@/pages/LoginPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));
const PostFeedPage = lazy(() => import("@/pages/PostFeedPage"));
const RegisterPage = lazy(() => import("@/pages/RegisterPage"));

export const routes: RouteType[] = [
  {
    path: "/",
    Element: LoginPage,
    isProtected: false,
    isPublic: true,
  },
  {
    path: "/login",
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
