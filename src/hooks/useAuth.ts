import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { authSelector, loginUser, logoutUser, User } from "@/redux/slices/authSlice";

const useAuth = () => {
  const dispatch = useAppDispatch();

  const { isAuthenticated, user } = useAppSelector(authSelector);

  const login = (user: User) => {
    dispatch(loginUser(user));
  };

  const logout = () => dispatch(logoutUser());

  return { login, logout, isAuthenticated, user };
};

export default useAuth;
