import { Navigate } from "react-router-dom";
import { useAuth } from "./auth";

export default function GuestGuard({ children }) {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Navigate to={"/"} />;
  }

  return <>{children}</>;
}
