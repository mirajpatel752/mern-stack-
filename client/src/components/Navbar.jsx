import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

export const Navbar = () => {
  const { isLoggedIn } = useAuth();
  
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="logo-brand text-2xl font-bold">
          <NavLink to="/" className="text-gray-800">
            BM
          </NavLink>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <NavLink to="/" className="text-gray-700 hover:text-gray-900" activeClassName="text-gray-900 font-semibold">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="text-gray-700 hover:text-gray-900" activeClassName="text-gray-900 font-semibold">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/service" className="text-gray-700 hover:text-gray-900" activeClassName="text-gray-900 font-semibold">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="text-gray-700 hover:text-gray-900" activeClassName="text-gray-900 font-semibold">
                Contact
              </NavLink>
            </li>
            {isLoggedIn ? (
              <li>
                <NavLink to="/logout" className="text-gray-700 hover:text-gray-900" activeClassName="text-gray-900 font-semibold">
                  Logout
                </NavLink>
              </li>
            ) : (
              <>
                <li>
                  <NavLink to="/register" className="text-gray-700 hover:text-gray-900" activeClassName="text-gray-900 font-semibold">
                    Register
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/login" className="text-gray-700 hover:text-gray-900" activeClassName="text-gray-900 font-semibold">
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};
