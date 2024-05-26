import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

export const Navbar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <div className="container mx-auto flex justify-between">
        <div className="logo-brand">
          <NavLink to="/">BM</NavLink>
        </div>
        <nav>
          <ul className="flex gap-8 columns-3">
            <li>
              <NavLink to="/"> Home </NavLink>
            </li>
            <li>
              <NavLink to="/about"> About </NavLink>
            </li>
            <li>
              <NavLink to="/service"> Services </NavLink>
            </li>
            <li>
              <NavLink to="/contact"> Contact </NavLink>
            </li>
            {isLoggedIn ? (
              <li>
                <NavLink to="/logout">Logout</NavLink>
              </li>
            ) : (
              <>
                <li>
                  <NavLink to="/register"> Register </NavLink>
                </li>
                <li>
                  <NavLink to="/login"> Login </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
};
