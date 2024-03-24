import { useState  } from "react";
import { Navigate, useLocation  } from "react-router-dom";
import { useAuth } from "./auth";

export default function AuthGuard({ children }) {
  const { isLoggedIn } = useAuth();
  const { pathname } = useLocation();
  const [requestedLocation, setRequestedLocation] = useState(null);

  if (!isLoggedIn) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <Navigate to={"/login"} />;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <React.Fragment>{children}</React.Fragment>;
}
