import useAuth from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";

interface PublicRouteProps {
  element: React.ReactElement;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return !isAuthenticated ? element : <Navigate to="/feed" />;
};

export default PublicRoute;
