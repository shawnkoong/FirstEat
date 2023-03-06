import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.user.currenUser);

  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

